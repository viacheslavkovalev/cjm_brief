import type { ResultId } from "../types";

export const resultThresholds = {
  r1Max: 11,
  r2Max: 21,
} as const;

export function computeResult(score: number): ResultId {
  if (score <= resultThresholds.r1Max) {
    return "R1";
  }

  if (score <= resultThresholds.r2Max) {
    return "R2";
  }

  return "R3";
}
