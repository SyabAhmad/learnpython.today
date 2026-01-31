"use client";

import { useProgressStore } from "@/stores/progress-store";
import { games } from "@/config/games";
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
import {
  CheckCircle2,
  Play,
  Star,
  Code2,
  Terminal,
  List,
  Type,
  Binary,
  BookText,
  Braces,
  Box,
  FunctionSquare,
  Zap,
  AlertCircle,
  FileCode,
  Repeat,
  SearchCode,
  Clock,
  LayoutGrid,
  TrendingUp,
  RotateCcw,
  Cpu,
  ChevronDown,
} from "lucide-react";
import { Game } from "@/types/game";
import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

// Map categories to icons
const CategoryIcons: Record<string, any> = {
  Introduction: Terminal,
  Basics: Code2,
  Lists: List,
  Strings: Type,
  Syntax: Braces,
  Algorithms: TrendingUp,
  Dictionaries: BookText,
  "Object Oriented Programming": Box,
  Functions: FunctionSquare,
  Comprehensions: Zap,
  Exceptions: AlertCircle,
  "File I/O": FileCode,
  "Generators & Iterators": Repeat,
  Regex: SearchCode,
  DateTime: Clock,
  Collections: LayoutGrid,
  Recursion: RotateCcw,
  Metaclasses: Cpu,
  Uncategorized: Code2,
};

export default function GamesPage() {
  const { completedGames } = useProgressStore();
  const [mounted, setMounted] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({
    Introduction: true,
    Basics: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Group games
  const groupedGames = games.reduce(
    (acc, game) => {
      const cat = game.category || "Uncategorized";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(game);
      return acc;
    },
    {} as Record<string, Game[]>,
  );

  // Category order
  const categoryOrder = [
    "Introduction",
    "Basics",
    "Strings",
    "Lists",
    "Functions",
    "Comprehensions",
    "Exceptions",
    "File I/O",
    "Generators & Iterators",
    "Regex",
    "DateTime",
    "Collections",
    "Dictionaries",
    "Syntax",
    "Object Oriented Programming",
    "Algorithms",
    "Recursion",
    "Metaclasses",
  ];

  // Sort categories ensuring all are present (if defined in games)
  const sortedCategories = Object.keys(groupedGames).sort((a, b) => {
    const idxA = categoryOrder.indexOf(a);
    const idxB = categoryOrder.indexOf(b);
    // If both are in the known list, sort by index
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    // If only A is known, it comes first
    if (idxA !== -1) return -1;
    // If only B is known, it comes first
    if (idxB !== -1) return 1;
    // Otherwise sort alphabetically
    return a.localeCompare(b);
  });

  return (
    <div className="container py-10 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-emerald-500">
          Python Challenges
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Master Python through interactive coding challenges. Fix the bugs,
          earn XP, and unlock your certificate.
        </p>
      </div>

      <div className="space-y-8">
        {sortedCategories.map((category) => {
          const Icon = CategoryIcons[category] || Code2;
          const isOpen = expandedCategories[category];
          const categoryGames = groupedGames[category];
          const completedInCategory = mounted
            ? categoryGames.filter((g) => completedGames.includes(g.href))
                .length
            : 0;

          return (
            <Collapsible
              key={category}
              open={isOpen}
              onOpenChange={() => toggleCategory(category)}
              className="space-y-4"
            >
              <CollapsibleTrigger asChild>
                <div className="flex items-center justify-between w-full group cursor-pointer hover:bg-accent/50 p-4 rounded-xl border border-transparent hover:border-border transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-500 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-foreground">
                        {category}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {completedInCategory} / {categoryGames.length}{" "}
                        Challenges Completed
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 text-muted-foreground transition-transform duration-300",
                      isOpen ? "rotate-180" : "rotate-0",
                    )}
                  />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="space-y-4 overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  {categoryGames.map((game) => {
                    const isCompleted =
                      mounted && completedGames.includes(game.href);
                    return (
                      <Card
                        key={game.href}
                        className={`flex flex-col border-border bg-card hover:bg-accent/5 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 ${
                          isCompleted
                            ? "border-emerald-500/20 bg-emerald-500/5"
                            : ""
                        }`}
                      >
                        <CardHeader>
                          <div className="flex justify-between items-start gap-4">
                            <CardTitle className="text-lg leading-tight text-foreground">
                              {game.title}
                            </CardTitle>
                            {isCompleted && (
                              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                            )}
                          </div>
                          <CardDescription className="line-clamp-2 mt-2 text-muted-foreground">
                            {game.synopsis}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto pt-0">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {game.tags
                              .filter((tag) => tag)
                              .slice(0, 3)
                              .map((tag) => (
                                <Badge
                                  key={tag.text}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tag.text}
                                </Badge>
                              ))}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span>Level {game.level}</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            asChild
                            className={`w-full group ${
                              isCompleted
                                ? "bg-transparent border border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10"
                                : "bg-emerald-600 hover:bg-emerald-500 text-white"
                            }`}
                          >
                            <Link href={`/games/${game.href}`}>
                              {isCompleted ? "Play Again" : "Start Challenge"}
                              {!isCompleted && (
                                <Play className="w-4 h-4 ml-2 fill-current transition-transform group-hover:translate-x-1" />
                              )}
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
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
