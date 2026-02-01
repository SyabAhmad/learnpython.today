import React from "react";
import { Language } from "@/types/codeLine";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  getLanguageDisplayName,
  getLanguageColor,
} from "@/utils/multiLanguageGamesUtils";
import { Code2 } from "lucide-react";

interface LanguageSelectorProps {
  selectedLanguage: Language | null;
  availableLanguages: Language[];
  onLanguageChange: (language: Language | null) => void;
}

export function LanguageSelector({
  selectedLanguage,
  availableLanguages,
  onLanguageChange,
}: LanguageSelectorProps) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Button
        variant={selectedLanguage === null ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange(null)}
        className="flex items-center gap-2"
      >
        <Code2 className="h-4 w-4" />
        All Languages
      </Button>
      {availableLanguages.map((lang) => (
        <Button
          key={lang}
          variant={selectedLanguage === lang ? "default" : "outline"}
          size="sm"
          onClick={() => onLanguageChange(lang)}
          className="flex items-center gap-2"
        >
          <Badge
            className={`${getLanguageColor(lang)} text-white text-xs px-2 py-0.5`}
          >
            {getLanguageDisplayName(lang)}
          </Badge>
        </Button>
      ))}
    </div>
  );
}
