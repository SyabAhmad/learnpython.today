import { Game } from "@/types/game";
import { Language } from "@/types/codeLine";

/**
 * Get all games filtered by language
 */
export function getGamesByLanguage(games: Game[], language: Language): Game[] {
  return games.filter(
    (g) => g.language === language || g.language === language.toString(),
  );
}

/**
 * Get all games filtered by language and subcategory
 */
export function getGamesByLanguageAndSubcategory(
  games: Game[],
  language: Language,
  subcategory: string,
): Game[] {
  return games.filter(
    (g) =>
      (g.language === language || g.language === language.toString()) &&
      g.subcategory === subcategory,
  );
}

/**
 * Get all unique languages from games
 */
export function getAvailableLanguages(games: Game[]): Language[] {
  const languages = new Set<string>();
  games.forEach((g) => {
    if (g.language) {
      languages.add(g.language.toString());
    }
  });
  return Array.from(languages) as Language[];
}

/**
 * Get all unique subcategories for a language
 */
export function getSubcategoriesByLanguage(
  games: Game[],
  language: Language,
): string[] {
  const subcategories = new Set<string>();
  games
    .filter(
      (g) => g.language === language || g.language === language.toString(),
    )
    .forEach((g) => {
      if (g.subcategory) {
        subcategories.add(g.subcategory);
      }
    });
  return Array.from(subcategories).sort();
}

/**
 * Get language icon/display name
 */
export function getLanguageDisplayName(language: Language | string): string {
  const names: Record<string, string> = {
    [Language.PYTHON]: "Python",
    [Language.SQL]: "SQL",
    [Language.HTML]: "HTML",
    [Language.CSS]: "CSS",
    [Language.JAVASCRIPT]: "JavaScript",
    [Language.GO]: "Go",
  };
  return names[language] || String(language);
}

/**
 * Get language color for UI badges
 */
export function getLanguageColor(language: Language | string): string {
  const colors: Record<string, string> = {
    [Language.PYTHON]: "bg-blue-500",
    [Language.SQL]: "bg-orange-500",
    [Language.HTML]: "bg-red-500",
    [Language.CSS]: "bg-purple-500",
    [Language.JAVASCRIPT]: "bg-yellow-500",
    [Language.GO]: "bg-cyan-500",
  };
  return colors[language] || "bg-gray-500";
}

/**
 * Group games by language
 */
export function groupGamesByLanguage(games: Game[]): Record<string, Game[]> {
  const grouped: Record<string, Game[]> = {};
  games.forEach((game) => {
    const lang = game.language?.toString() || "unknown";
    if (!grouped[lang]) {
      grouped[lang] = [];
    }
    grouped[lang].push(game);
  });
  return grouped;
}

/**
 * Group games by language and subcategory
 */
export function groupGamesByLanguageAndSubcategory(
  games: Game[],
): Record<string, Record<string, Game[]>> {
  const grouped: Record<string, Record<string, Game[]>> = {};
  games.forEach((game) => {
    const lang = game.language?.toString() || "unknown";
    const subcat = game.subcategory || "General";
    if (!grouped[lang]) {
      grouped[lang] = {};
    }
    if (!grouped[lang][subcat]) {
      grouped[lang][subcat] = [];
    }
    grouped[lang][subcat].push(game);
  });
  return grouped;
}

/**
 * Get related games (same language or similar topics)
 */
export function getRelatedGames(
  game: Game,
  allGames: Game[],
  limit: number = 5,
): Game[] {
  if (game.relatedGames && game.relatedGames.length > 0) {
    return allGames
      .filter((g) => game.relatedGames?.includes(g.href))
      .slice(0, limit);
  }

  // Fallback: Get games from same language and subcategory
  return allGames
    .filter(
      (g) =>
        g.href !== game.href &&
        g.language === game.language &&
        g.subcategory === game.subcategory,
    )
    .slice(0, limit);
}

/**
 * Get completion percentage for a language
 */
export function getLanguageCompletionPercentage(
  language: Language,
  completedGames: Set<string>,
  allGames: Game[],
): number {
  const languageGames = getGamesByLanguage(allGames, language);
  if (languageGames.length === 0) return 0;
  const completed = languageGames.filter((g) =>
    completedGames.has(g.href),
  ).length;
  return Math.round((completed / languageGames.length) * 100);
}
