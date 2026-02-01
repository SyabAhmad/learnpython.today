import React from "react";
import { Game } from "@/types/game";
import { Language } from "@/types/codeLine";
import { Badge } from "@/components/ui/badge";
import {
  getLanguageDisplayName,
  getLanguageColor,
} from "@/utils/multiLanguageGamesUtils";

interface LanguageBadgeProps {
  game: Game;
  showText?: boolean;
  className?: string;
}

export function LanguageBadgeComponent({
  game,
  showText = true,
  className = "",
}: LanguageBadgeProps) {
  if (!game.language) return null;

  const displayName = getLanguageDisplayName(game.language);
  const colorClass = getLanguageColor(game.language);

  return (
    <Badge
      className={`${colorClass} text-white text-xs ${className}`}
      title={displayName}
    >
      {showText
        ? displayName
        : game.language.toString().toUpperCase().slice(0, 2)}
    </Badge>
  );
}
