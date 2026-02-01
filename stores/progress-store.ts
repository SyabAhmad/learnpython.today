import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UnifiedContent, isGame, isArticle } from "@/types/unifiedContent";
import { Language } from "@/types/codeLine";
import { Certificate } from "@/types/certificate";

export interface GameResult {
  href: string;
  score: number;
  penalty: number;
  timestamp: number;
  language?: Language | string;
}

export interface LanguageProgress {
  totalGames: number;
  completedGames: number;
  totalScore: number;
  lastPlayed?: number;
}

interface ProgressState {
  completedGames: string[];
  gameResults: GameResult[];
  completedArticles: string[];
  languageProgress: Record<string, LanguageProgress>;
  certificates: Certificate[];
  currentContent: string | null;
  totalScore: number;
  userName: string;
  userEmail: string;
  completeGame: (
    href: string,
    score?: number,
    penalty?: number,
    language?: Language | string,
  ) => void;
  completeArticle: (href: string) => void;
  setUserInfo: (name: string, email: string) => void;
  setCurrentContent: (href: string | null) => void;
  isContentCompleted: (href: string) => boolean;
  getNextContent: (allContent: UnifiedContent[]) => UnifiedContent | null;
  getCompletedCounts: () => { games: number; articles: number };
  getLanguageProgress: (language: Language | string) => LanguageProgress | null;
  hasCertificate: (language: Language | string) => boolean;
  getCertificates: () => Certificate[];
  addCertificate: (certificate: Certificate) => void;
  resetProgress: () => void;
  resetLanguageProgress: (language: Language | string) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedGames: [],
      gameResults: [],
      completedArticles: [],
      languageProgress: {},
      certificates: [],
      currentContent: null,
      totalScore: 0,
      userName: "Python Learner",
      userEmail: "",
      completeGame: (href, score = 0, penalty = 0, language) =>
        set((state) => {
          const isAlreadyCompleted = (state.completedGames || []).includes(
            href,
          );
          if (isAlreadyCompleted) return state;

          const newTotal =
            (Number(state.totalScore) || 0) + (Number(score) || 0);

          const newResult: GameResult = {
            href,
            score: Number(score) || 0,
            penalty: Number(penalty) || 0,
            timestamp: Date.now(),
            language,
          };

          // Update language progress
          const langKey = language?.toString() || "python";
          const currentLangProgress = state.languageProgress[langKey] || {
            totalGames: 0,
            completedGames: 0,
            totalScore: 0,
          };

          const updatedLanguageProgress = {
            ...state.languageProgress,
            [langKey]: {
              ...currentLangProgress,
              completedGames: currentLangProgress.completedGames + 1,
              totalScore:
                (currentLangProgress.totalScore || 0) + (Number(score) || 0),
              lastPlayed: Date.now(),
            },
          };

          return {
            ...state,
            completedGames: [...(state.completedGames || []), href],
            gameResults: [...(state.gameResults || []), newResult],
            totalScore: newTotal,
            languageProgress: updatedLanguageProgress,
          };
        }),
      completeArticle: (href) =>
        set((state) => ({
          completedArticles: [...new Set([...state.completedArticles, href])],
        })),
      setUserInfo: (name, email) => set({ userName: name, userEmail: email }),
      setCurrentContent: (href) => set({ currentContent: href }),
      isContentCompleted: (content) => {
        const state = get();
        return (
          state.completedGames.includes(content) ||
          state.completedArticles.includes(content)
        );
      },
      getNextContent: (allContent) => {
        const state = get();
        const incompleteContent = allContent.filter(
          (content) => !state.isContentCompleted(content.content.href),
        );
        return incompleteContent.length > 0 ? incompleteContent[0] : null;
      },
      getCompletedCounts: () => {
        const state = get();
        return {
          games: state.completedGames.length,
          articles: state.completedArticles.length,
        };
      },
      getLanguageProgress: (language) => {
        const state = get();
        const langKey = language.toString();
        return state.languageProgress[langKey] || null;
      },
      hasCertificate: (language) => {
        const state = get();
        const langKey = language.toString();
        return state.certificates.some(
          (cert) => cert.language.toString() === langKey,
        );
      },
      getCertificates: () => {
        const state = get();
        return state.certificates;
      },
      addCertificate: (certificate) =>
        set((state) => {
          const exists = state.certificates.some(
            (cert) => cert.language === certificate.language,
          );
          if (exists) return state;
          return {
            certificates: [...state.certificates, certificate],
          };
        }),
      resetProgress: () =>
        set({
          completedGames: [],
          gameResults: [],
          completedArticles: [],
          languageProgress: {},
          certificates: [],
          totalScore: 0,
        }),
      resetLanguageProgress: (language) =>
        set((state) => {
          const langKey = language.toString();
          const updatedProgress = { ...state.languageProgress };
          delete updatedProgress[langKey];
          return { languageProgress: updatedProgress };
        }),
    }),
    {
      name: "user-progress",
      getStorage: () => localStorage,
    },
  ),
);
