import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UnifiedContent, isGame, isArticle } from "@/types/unifiedContent";

export interface GameResult {
  href: string;
  score: number;
  penalty: number;
  timestamp: number;
}

interface ProgressState {
  completedGames: string[];
  gameResults: GameResult[];
  completedArticles: string[];
  currentContent: string | null;
  totalScore: number;
  userName: string;
  userEmail: string;
  completeGame: (href: string, score?: number, penalty?: number) => void;
  completeArticle: (href: string) => void;
  setUserInfo: (name: string, email: string) => void;
  setCurrentContent: (href: string | null) => void;
  isContentCompleted: (href: string) => boolean;
  getNextContent: (allContent: UnifiedContent[]) => UnifiedContent | null;
  getCompletedCounts: () => { games: number; articles: number };
  resetProgress: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedGames: [],
      gameResults: [],
      completedArticles: [],
      currentContent: null,
      totalScore: 0,
      userName: "Python Learner",
      userEmail: "",
      completeGame: (href, score = 0, penalty = 0) =>
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
          };

          return {
            ...state,
            completedGames: [...(state.completedGames || []), href],
            gameResults: [...(state.gameResults || []), newResult],
            totalScore: newTotal,
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
      resetProgress: () =>
        set({
          completedGames: [],
          gameResults: [],
          completedArticles: [],
          totalScore: 0,
        }),
    }),
    {
      name: "user-progress",
      getStorage: () => localStorage,
    },
  ),
);
