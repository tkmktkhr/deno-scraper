export const BED_SIZE = {
  SINGLE: "SINGLE",
  SEMI_DOUBLE: "SEMI_DOUBLE",
  DOUBLE: "DOUBLE",
  QUEEN: "QUEEN",
  KING: "KING",
  SOFA_BED: "SOFA_BED",
  OTHER: "OTHER",
} as const;

export type TBedSize = keyof typeof BED_SIZE;
