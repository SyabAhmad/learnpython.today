import { Language } from "./codeLine";

export interface Certificate {
  id: string;
  language: Language;
  earnedAt: number; // timestamp
  totalGamesCompleted: number;
}

export interface CertificateProgress {
  language: Language;
  completedCount: number;
  totalCount: number;
  percentage: number;
  earned: boolean;
  earnedAt?: number;
}
