import { useEffect, useMemo, useState } from "react";
import { questions } from "../data/quiz";
import type { AppState, ResultId, Screen, SubmissionStatus } from "../types";
import { computeResult } from "../utils/results";

const storageKeys = {
  version: "cjm_version",
  name: "cjm_name",
  company: "cjm_company",
  position: "cjm_position",
  phone: "cjm_phone",
  answers: "cjm_answers",
  score: "cjm_score",
  result: "cjm_result",
  submissionId: "cjm_submission_id",
  submissionStatus: "cjm_submission_status",
} as const;

const storageVersion = "1";

const initialState: AppState = {
  screen: "intro",
  name: "",
  company: "",
  position: "",
  phone: "",
  answers: {},
  score: 0,
  result: null,
  submissionId: "",
  submissionStatus: "idle",
};

function getStoredResult(value: string | null): ResultId | null {
  return value === "R1" || value === "R2" || value === "R3" ? value : null;
}

function getStoredSubmissionStatus(value: string | null): SubmissionStatus {
  return value === "pending" || value === "sent" || value === "failed" ? value : "idle";
}

function createSubmissionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function getNextScreen(answers: Record<string, string>, result: ResultId | null): Screen {
  if (result) {
    return "result";
  }

  const nextQuestion = questions.find((question) => !answers[question.id]);
  return nextQuestion?.id ?? "contact";
}

function readStoredState(): AppState {
  if (typeof window === "undefined") {
    return initialState;
  }

  try {
    if (window.localStorage.getItem(storageKeys.version) !== storageVersion) {
      Object.values(storageKeys).forEach((key) => window.localStorage.removeItem(key));
      window.localStorage.setItem(storageKeys.version, storageVersion);
      return initialState;
    }

    const name = window.localStorage.getItem(storageKeys.name) ?? "";
    const company = window.localStorage.getItem(storageKeys.company) ?? "";
    const position = window.localStorage.getItem(storageKeys.position) ?? "";
    const phone = window.localStorage.getItem(storageKeys.phone) ?? "";
    const answers = JSON.parse(window.localStorage.getItem(storageKeys.answers) ?? "{}") as Record<string, string>;
    const storedScore = Number(window.localStorage.getItem(storageKeys.score) ?? "0");
    const result = getStoredResult(window.localStorage.getItem(storageKeys.result));
    const submissionId = window.localStorage.getItem(storageKeys.submissionId) ?? "";
    const storedSubmissionStatus = getStoredSubmissionStatus(
      window.localStorage.getItem(storageKeys.submissionStatus),
    );
    const score = Number.isFinite(storedScore) ? storedScore : 0;
    const submissionStatus = result && storedSubmissionStatus === "idle" ? "pending" : storedSubmissionStatus;

    return {
      screen: getNextScreen(answers, result),
      name,
      company,
      position,
      phone,
      answers,
      score,
      result,
      submissionId: result && !submissionId ? createSubmissionId() : submissionId,
      submissionStatus,
    };
  } catch {
    return initialState;
  }
}

export function usePersistentAppState() {
  const [state, setState] = useState<AppState>(() => readStoredState());

  useEffect(() => {
    window.localStorage.setItem(storageKeys.version, storageVersion);
    window.localStorage.setItem(storageKeys.name, state.name);
    window.localStorage.setItem(storageKeys.company, state.company);
    window.localStorage.setItem(storageKeys.position, state.position);
    window.localStorage.setItem(storageKeys.phone, state.phone);
    window.localStorage.setItem(storageKeys.answers, JSON.stringify(state.answers));
    window.localStorage.setItem(storageKeys.score, String(state.score));
    window.localStorage.setItem(storageKeys.submissionId, state.submissionId);
    window.localStorage.setItem(storageKeys.submissionStatus, state.submissionStatus);

    if (state.result) {
      window.localStorage.setItem(storageKeys.result, state.result);
    } else {
      window.localStorage.removeItem(storageKeys.result);
    }
  }, [state]);

  const actions = useMemo(
    () => ({
      start() {
        setState((current) => ({ ...current, screen: "q1" }));
      },
      submitContact(contact: { name: string; company: string; position: string; phone: string }) {
        setState((current) => ({
          ...current,
          name: contact.name,
          company: contact.company,
          position: contact.position,
          phone: contact.phone,
          result: computeResult(current.score),
          screen: "result",
          submissionId: current.submissionId || createSubmissionId(),
          submissionStatus: "pending",
        }));
      },
      answer(questionId: string, optionId: string) {
        setState((current) => {
          const answers = { ...current.answers, [questionId]: optionId };
          const score = questions.reduce((sum, question) => {
            const answerId = answers[question.id];
            return sum + (question.options.find((option) => option.id === answerId)?.score ?? 0);
          }, 0);
          const questionIndex = questions.findIndex((question) => question.id === questionId);
          const nextQuestion = questions[questionIndex + 1];

          if (nextQuestion) {
            return { ...current, answers, score, screen: nextQuestion.id };
          }

          return {
            ...current,
            answers,
            score,
            screen: "contact",
          };
        });
      },
      setSubmissionStatus(submissionStatus: SubmissionStatus) {
        setState((current) => ({ ...current, submissionStatus }));
      },
      retrySubmission() {
        setState((current) => ({ ...current, submissionStatus: "pending" }));
      },
      reset() {
        setState(initialState);
      },
    }),
    [],
  );

  return { state, setState, actions };
}
