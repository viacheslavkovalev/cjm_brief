import { Button } from "../components/Button";
import { PageTitle } from "../components/PageTitle";
import { ProgressBar } from "../components/ProgressBar";
import { RadioOption } from "../components/RadioOption";
import { ScreenShell } from "../components/ScreenShell";
import { totalQuestions } from "../data/quiz";
import type { Question } from "../types";
import { useEffect, useState } from "react";

type QuestionScreenProps = {
  question: Question;
  index: number;
  selectedOptionId?: string;
  onAnswer: (questionId: string, optionId: string) => void;
};

export function QuestionScreen({ question, index, selectedOptionId, onAnswer }: QuestionScreenProps) {
  const [draftOptionId, setDraftOptionId] = useState(selectedOptionId ?? "");
  const progress = ((index + 1) / totalQuestions) * 100;

  useEffect(() => {
    setDraftOptionId(selectedOptionId ?? "");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [question.id, selectedOptionId]);

  return (
    <ScreenShell>
      <section className="flex flex-1 flex-col">
        <PageTitle className="mt-8 md:mt-12" />

        <div className="mt-8 md:mt-10">
          <div
            className="rounded-xl bg-white px-5 py-6 text-ink shadow-soft md:px-10 md:py-8"
          >
            <ProgressBar value={progress} />
            <p className="mt-6 font-travels text-[18px] leading-[1.2] text-ink/65">
              Вопрос {index + 1}\{totalQuestions}
            </p>
            <p className="mt-4 font-travels text-[20px] font-bold leading-[1.2] text-accent">{question.stage}</p>
            <p className="mt-1 font-travels text-[16px] leading-[1.2] text-ink/55">{question.subtitle}</p>
            <h2 className="mt-5 font-travelsNext text-[28px] font-bold leading-none md:text-[32px]">
              {question.title}
            </h2>

            {question.items ? (
              <ul className="mt-5 grid gap-2 font-travels text-base leading-[1.25] text-ink/80">
                {question.items.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-8 grid gap-3">
              {question.options.map((option) => (
                <RadioOption
                  key={option.id}
                  option={option}
                  questionId={question.id}
                  checked={draftOptionId === option.id}
                  onChange={setDraftOptionId}
                />
              ))}
            </div>
          </div>

          <Button
            className="mt-5 w-full md:mt-6"
            type="button"
            disabled={!draftOptionId}
            onClick={() => draftOptionId && onAnswer(question.id, draftOptionId)}
          >
            Далее
          </Button>
        </div>
      </section>
    </ScreenShell>
  );
}
