"use client";

import { useProgressStore } from "@/stores/progress-store";
import { allGames } from "@/config/games-multi-language";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Play, Star, Code2, ChevronDown } from "lucide-react";
import { Language } from "@/types/codeLine";
import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
  getAvailableLanguages,
  getLanguageDisplayName,
  getLanguageColor,
  groupGamesByLanguageAndSubcategory,
} from "@/utils/multiLanguageGamesUtils";
import { LanguageSelector } from "@/components/language-selector";
import { LanguageBadgeComponent } from "@/components/language-badge";

// Map categories to icons
const CategoryIcons: Record<string, any> = {
  Introduction: Code2,
  Basics: Code2,
  Lists: Code2,
  Strings: Code2,
  Syntax: Code2,
  Algorithms: Code2,
  Dictionaries: Code2,
  "Object Oriented Programming": Code2,
  Functions: Code2,
  Comprehensions: Code2,
  Exceptions: Code2,
  "File I/O": Code2,
  "Generators & Iterators": Code2,
  Regex: Code2,
  DateTime: Code2,
  Collections: Code2,
  Recursion: Code2,
  Metaclasses: Code2,
  Uncategorized: Code2,
};

export default function GamesPage() {
  const { completedGames } = useProgressStore();
  const [mounted, setMounted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null,
  );
  const [expandedLanguages, setExpandedLanguages] = useState<
    Record<string, boolean>
  >({});
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    setMounted(true);
    // Auto-expand Python by default
    setExpandedLanguages({ [Language.PYTHON]: true });
    setExpandedCategories({
      [`${Language.PYTHON}-Introduction`]: true,
      [`${Language.PYTHON}-Basics`]: true,
    });
  }, []);

  const toggleLanguage = (language: string) => {
    setExpandedLanguages((prev) => ({
      ...prev,
      [language]: !prev[language],
    }));
  };

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }));
  };

  // Get available languages
  const availableLanguages = getAvailableLanguages(allGames);

  // Filter games by selected language
  const filteredGames = selectedLanguage
    ? allGames.filter((g) => g.language === selectedLanguage)
    : allGames;

  // Group games by language and subcategory
  const groupedByLanguageAndCategory =
    groupGamesByLanguageAndSubcategory(filteredGames);

  // Sort languages
  const sortedLanguages = Object.keys(groupedByLanguageAndCategory).sort(
    (a, b) => {
      if (a === Language.PYTHON) return -1;
      if (b === Language.PYTHON) return 1;
      return a.localeCompare(b);
    },
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-card via-background to-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 px-4 py-16 sm:py-24">
        <div className="container max-w-6xl mx-auto space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {selectedLanguage
                ? `${getLanguageDisplayName(selectedLanguage)} Challenges`
                : "Code Challenges"}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Master multiple programming languages through interactive coding
              challenges. Fix bugs, write code, and level up your skills.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {allGames.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Challenges
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Code2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {availableLanguages.length}
                </div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {mounted ? completedGames.length : 0}
                </div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Language Filter */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-foreground">
                Filter Languages
              </h2>
              <p className="text-sm text-muted-foreground">
                Choose your language to focus on specific challenges
              </p>
            </div>
          </div>
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            availableLanguages={availableLanguages}
            onLanguageChange={setSelectedLanguage}
          />
        </div>

        {/* Games by Language */}
        <div className="space-y-10">
          {sortedLanguages.map((languageKey) => {
            const language = languageKey as Language;
            const isLanguageOpen = expandedLanguages[language];
            const categoriesInLanguage = groupedByLanguageAndCategory[language];

            const totalGamesInLanguage = Object.values(
              categoriesInLanguage,
            ).reduce((sum, categoryGames) => sum + categoryGames.length, 0);

            const completedInLanguage = mounted
              ? Object.values(categoriesInLanguage)
                  .flat()
                  .filter((g) => completedGames.includes(g.href)).length
              : 0;

            const languageColor = getLanguageColor(language);

            return (
              <div key={language} className="space-y-4">
                {/* Language Header */}
                <Collapsible
                  open={isLanguageOpen}
                  onOpenChange={() => toggleLanguage(language)}
                  className="space-y-3"
                >
                  <CollapsibleTrigger asChild>
                    <button className="group w-full cursor-pointer text-left">
                      <div className="flex items-center justify-between w-full p-6 rounded-2xl border border-border/50 transition-all duration-300 bg-gradient-to-br from-card via-card to-card/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                        <div className="flex items-center gap-4 flex-1">
                          <div
                            className={`p-3 rounded-xl ${languageColor} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}
                          >
                            <Code2 className={`w-6 h-6 ${languageColor}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                                {getLanguageDisplayName(language)}
                              </h2>
                              <Badge
                                className={`${languageColor} text-white font-semibold px-3 py-1`}
                                variant="default"
                              >
                                {totalGamesInLanguage > 0
                                  ? Math.round(
                                      (completedInLanguage /
                                        totalGamesInLanguage) *
                                        100,
                                    )
                                  : 0}
                                %
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-semibold text-foreground">
                                {completedInLanguage}
                              </span>
                              <span>
                                {" "}
                                / {totalGamesInLanguage} challenges completed
                              </span>
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          className={cn(
                            "w-6 h-6 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4",
                            isLanguageOpen ? "rotate-180" : "rotate-0",
                          )}
                        />
                      </div>
                    </button>
                  </CollapsibleTrigger>

                  {/* Progress Bar */}
                  <div className="h-1.5 bg-border/30 rounded-full overflow-hidden mx-1">
                    <div
                      className={`h-full ${languageColor} transition-all duration-500 rounded-full`}
                      style={{
                        width:
                          totalGamesInLanguage > 0
                            ? `${(completedInLanguage / totalGamesInLanguage) * 100}%`
                            : "0%",
                      }}
                    />
                  </div>

                  <CollapsibleContent className="space-y-6 overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                    {/* Categories within Language */}
                    {Object.entries(categoriesInLanguage).map(
                      ([category, categoryGames]) => {
                        const categoryKey = `${language}-${category}`;
                        const isCategoryOpen = expandedCategories[categoryKey];
                        const Icon = CategoryIcons[category] || Code2;

                        const completedInCategory = mounted
                          ? categoryGames.filter((g) =>
                              completedGames.includes(g.href),
                            ).length
                          : 0;

                        return (
                          <Collapsible
                            key={categoryKey}
                            open={isCategoryOpen}
                            onOpenChange={() => toggleCategory(categoryKey)}
                            className="space-y-3"
                          >
                            <CollapsibleTrigger asChild>
                              <button className="group w-full cursor-pointer text-left">
                                <div className="flex items-center justify-between w-full p-4 rounded-xl border border-border/40 transition-all duration-300 bg-gradient-to-r from-accent/5 via-transparent to-secondary/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                                  <div className="flex items-center gap-3 flex-1">
                                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-all">
                                      <Icon className="w-5 h-5 text-primary group-hover:text-primary/90" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                                        {category}
                                      </h3>
                                      <p className="text-xs text-muted-foreground">
                                        <span className="font-medium text-foreground/70">
                                          {completedInCategory}
                                        </span>
                                        <span>
                                          {" "}
                                          / {categoryGames.length} completed
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <ChevronDown
                                    className={cn(
                                      "w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
                                      isCategoryOpen
                                        ? "rotate-180"
                                        : "rotate-0",
                                    )}
                                  />
                                </div>
                              </button>
                            </CollapsibleTrigger>

                            {/* Small progress bar for category */}
                            <div className="h-1 bg-border/20 rounded-full overflow-hidden mx-1">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-full"
                                style={{
                                  width:
                                    categoryGames.length > 0
                                      ? `${(completedInCategory / categoryGames.length) * 100}%`
                                      : "0%",
                                }}
                              />
                            </div>

                            <CollapsibleContent className="space-y-4 overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                                {categoryGames.map((game) => {
                                  const isCompleted =
                                    mounted &&
                                    completedGames.includes(game.href);
                                  return (
                                    <Link
                                      key={game.href}
                                      href={`/games/${game.href}`}
                                    >
                                      <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-card/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
                                        {/* Gradient Background Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300" />

                                        {/* Content */}
                                        <div className="relative p-6 flex flex-col h-full">
                                          {/* Header with Language Badge and Completion */}
                                          <div className="flex items-start justify-between mb-4 gap-3">
                                            <div className="flex-1 min-w-0">
                                              <h3 className="text-lg font-bold leading-tight text-foreground truncate group-hover:text-primary transition-colors">
                                                {game.title}
                                              </h3>
                                            </div>
                                            {isCompleted && (
                                              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
                                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                              </div>
                                            )}
                                          </div>

                                          {/* Language Badge */}
                                          <div className="mb-3">
                                            <LanguageBadgeComponent
                                              game={game}
                                              showText={false}
                                            />
                                          </div>

                                          {/* Description */}
                                          <p className="line-clamp-2 text-sm text-muted-foreground mb-4 flex-grow">
                                            {game.synopsis}
                                          </p>

                                          {/* Tags */}
                                          <div className="flex flex-wrap gap-1.5 mb-4">
                                            {game.tags
                                              .filter((tag) => tag)
                                              .slice(0, 2)
                                              .map((tag) => (
                                                <Badge
                                                  key={tag.text}
                                                  variant="secondary"
                                                  className="text-xs bg-secondary/50 hover:bg-secondary/70"
                                                >
                                                  {tag.text}
                                                </Badge>
                                              ))}
                                          </div>

                                          {/* Level and CTA */}
                                          <div className="flex items-center justify-between pt-4 border-t border-border/50 group-hover:border-primary/20 transition-colors">
                                            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                                              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                              <span>Level {game.level}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-primary font-semibold group-hover:gap-2.5 transition-all">
                                              <span className="text-sm">
                                                {isCompleted
                                                  ? "Again"
                                                  : "Start"}
                                              </span>
                                              <Play className="w-4 h-4 fill-primary group-hover:translate-x-1 transition-transform" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        );
                      },
                    )}
                  </CollapsibleContent>
                </Collapsible>
              </div>
            );
          })}
        </div>
      </div>

      {/* Credits */}
      <div className="mt-20 pt-10 border-t border-border flex flex-col items-center justify-center gap-3 text-center">
        <p className="text-xs text-muted-foreground tracking-wide font-medium uppercase">
          © 2024 - 2025 LearnPython.Today. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Redesigned and Collaborated for experience by{" "}
          <Link
            href="https://syab.tech/mentee"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-foreground hover:text-emerald-500 transition-colors underline-offset-4 hover:underline"
          >
            MenteE (syab.tech/mentee)
          </Link>
        </p>
      </div>
    </div>
  );
}
