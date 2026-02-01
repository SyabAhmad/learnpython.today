import * as React from "react";
import { Game } from "@/types/game";
import { allGames } from "@/config/games-multi-language";
import { CH1, GameDesc } from "@/components/custom-typo";
import { GameLevel } from "@/components/game-level-component";
import { CodeComponent } from "@/components/code-component";
import { ScoreBadge } from "@/components/score-badge";
import { GameCompletionBadge } from "@/components/game-completion-badge";
import { ChevronLeft, Terminal, Info, Star, Target } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LanguageBadgeComponent } from "@/components/language-badge";
import { getLanguageDisplayName } from "@/utils/multiLanguageGamesUtils";

function GameHeader({ game }: { game: Game }) {
  return (
    <div className="flex flex-col gap-6 mb-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        <Link
          href="/games"
          className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Challenges
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">
          {getLanguageDisplayName(game.language || "python")}
        </span>
        <span>/</span>
        <span className="text-foreground font-medium">{game.category}</span>
      </nav>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-black tracking-tight text-foreground">
              {game.title}
            </h1>
            <GameCompletionBadge href={game.href} />
          </div>
          <div className="flex items-center gap-4 pt-1 flex-wrap">
            <div className="flex items-center gap-2">
              <GameLevel level={game.level} />
            </div>
            <div className="h-4 w-px bg-border invisible md:visible" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground uppercase font-bold tracking-wider">
              <LanguageBadgeComponent game={game} showText={true} />
            </div>
            <div className="h-4 w-px bg-border invisible md:visible" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground uppercase font-bold tracking-wider">
              <Terminal className="h-4 w-4 text-emerald-500" />
              {game.category}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ScoreBadge />
        </div>
      </div>
    </div>
  );
}

function GameContent({ game }: { game: Game }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Editor Side */}
      <div className="lg:col-span-8 order-2 lg:order-1">
        <CodeComponent game={game} />
      </div>

      {/* Instructions Side */}
      <div className="lg:col-span-4 space-y-6 order-1 lg:order-2">
        <Card className="border-border bg-card shadow-sm overflow-hidden">
          <CardHeader className="bg-emerald-500/5 border-b border-border/50 py-4 px-5">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-500/10 rounded-md text-emerald-500">
                <Info className="h-4 w-4" />
              </div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider">
                Mission Brief
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="prose prose-sm dark:prose-invert">
              <GameDesc
                text={game.text}
                className="text-base text-foreground"
              />
            </div>
          </CardContent>
        </Card>

        {/* Challenge Goal */}
        <Card className="border-border bg-card shadow-sm overflow-hidden">
          <CardHeader className="py-4 px-5 border-b border-border/50">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-amber-500/10 rounded-md text-amber-500">
                <Target className="h-4 w-4" />
              </div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider">
                Objective
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-5 space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Analyze the code snippet to your left. Identify the line
              containing the semantic or syntax error. Select the candidate that
              fixes it without introducing side effects.
            </p>
            <div className="flex flex-wrap gap-2">
              {game.tags.map((tag) => (
                <Badge
                  key={tag.text}
                  variant="outline"
                  className="bg-accent/30 text-xs font-medium"
                >
                  {tag.text}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function GamePrompt({ params }: { params: { slug: string } }) {
  const game = allGames.find((game) => game.href === params.slug);

  if (!game) {
    return <h1>404 - Page Not Found</h1>;
  }

  return (
    <div className="container max-w-7xl py-6 md:py-10">
      <GameHeader game={game} />
      <GameContent game={game} />

      {/* Credits */}
      <div className="mt-12 pt-8 border-t border-border flex flex-col items-center justify-center gap-3 text-center">
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
            MenteE
          </Link>
        </p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return allGames
    .filter((game: Game) => game.href && game.text) // Filter out any games with missing required fields
    .map((game: Game) => ({
      slug: game.href,
    }));
}
