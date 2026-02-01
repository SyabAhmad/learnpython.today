import { Language } from "@/types/codeLine";
import { allGames } from "@/config/games-multi-language";
import { Certificate, CertificateProgress } from "@/types/certificate";

export const getCertificateProgress = (
  language: Language,
  completedGames: string[],
): CertificateProgress => {
  const languageGames = allGames.filter((g) => g.language === language);
  const completedCount = completedGames.filter((gameHref) =>
    languageGames.some((g) => g.href === gameHref),
  ).length;

  const percentage =
    languageGames.length > 0
      ? Math.round((completedCount / languageGames.length) * 100)
      : 0;

  return {
    language,
    completedCount,
    totalCount: languageGames.length,
    percentage,
    earned: completedCount === languageGames.length && languageGames.length > 0,
  };
};

export const getAllLanguageCertificateProgress = (
  completedGames: string[],
): CertificateProgress[] => {
  const languages = [
    Language.PYTHON,
    Language.SQL,
    Language.HTML,
    Language.CSS,
    Language.JAVASCRIPT,
    Language.GO,
  ];

  return languages.map((lang) => getCertificateProgress(lang, completedGames));
};

export const generateCertificateId = (language: Language): string => {
  return `cert-${language.toLowerCase()}-${Date.now()}`;
};

export const createCertificate = (
  language: Language,
  completedCount: number,
): Certificate => {
  return {
    id: generateCertificateId(language),
    language,
    earnedAt: Date.now(),
    totalGamesCompleted: completedCount,
  };
};

export const getLanguageDisplayName = (language: Language): string => {
  const names: Record<Language, string> = {
    [Language.PYTHON]: "Python",
    [Language.SQL]: "SQL",
    [Language.HTML]: "HTML",
    [Language.CSS]: "CSS",
    [Language.JAVASCRIPT]: "JavaScript",
    [Language.GO]: "Go",
  };
  return names[language] || "Unknown";
};

export const getLanguageCertificateColor = (
  language: Language,
): { primary: string; secondary: string } => {
  const colors: Record<Language, { primary: string; secondary: string }> = {
    [Language.PYTHON]: {
      primary: "from-blue-500 to-blue-600",
      secondary: "bg-blue-500/10 border-blue-500/20",
    },
    [Language.SQL]: {
      primary: "from-orange-500 to-orange-600",
      secondary: "bg-orange-500/10 border-orange-500/20",
    },
    [Language.HTML]: {
      primary: "from-red-500 to-red-600",
      secondary: "bg-red-500/10 border-red-500/20",
    },
    [Language.CSS]: {
      primary: "from-purple-500 to-purple-600",
      secondary: "bg-purple-500/10 border-purple-500/20",
    },
    [Language.JAVASCRIPT]: {
      primary: "from-yellow-500 to-yellow-600",
      secondary: "bg-yellow-500/10 border-yellow-500/20",
    },
    [Language.GO]: {
      primary: "from-cyan-500 to-cyan-600",
      secondary: "bg-cyan-500/10 border-cyan-500/20",
    },
  };
  return colors[language] || colors[Language.PYTHON];
};
