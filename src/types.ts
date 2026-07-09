export type QuestionId = `q${number}`;

export type Screen = "intro" | "contact" | QuestionId | "result";

export type ResultId = "R1" | "R2" | "R3";

export type SubmissionStatus = "idle" | "pending" | "sent" | "failed";

export type Option = {
  id: string;
  text: string;
  score: number;
};

export type Question = {
  id: QuestionId;
  stage: string;
  title: string;
  items?: string[];
  options: Option[];
};

export type Result = {
  id: ResultId;
  title: string;
  range: string;
  diagnosis: string;
  losses: string;
  action: string;
  ctaBody: string[];
  ctaText: string;
};

export type AppState = {
  screen: Screen;
  name: string;
  company: string;
  position: string;
  phone: string;
  answers: Record<string, string>;
  score: number;
  result: ResultId | null;
  submissionId: string;
  submissionStatus: SubmissionStatus;
};
