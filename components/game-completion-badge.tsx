"use client";

import { useProgressStore } from "@/stores/progress-store";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function GameCompletionBadge({ href }: { href: string }) {
  const [mounted, setMounted] = useState(false);
  const completedGames = useProgressStore((state) => state.completedGames);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isCompleted = completedGames.includes(href);

  if (!isCompleted) return null;

  return (
    <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-600 dark:text-emerald-500 animate-in fade-in zoom-in duration-300">
      <CheckCircle2 className="h-4 w-4" />
      <span className="text-xs font-bold uppercase tracking-wider">
        Completed
      </span>
    </div>
  );
}
