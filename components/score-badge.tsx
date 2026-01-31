"use client";

import { useProgressStore } from "@/stores/progress-store";
import { useEffect, useState } from "react";
import { Trophy } from "lucide-react";

export function ScoreBadge() {
  const [mounted, setMounted] = useState(false);
  const totalScore = useProgressStore((state) => state.totalScore);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/10 px-4 py-1.5 rounded-full blur-sm">
        <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
        <div className="w-8 h-4 bg-gray-200 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <a href="/profile">
      <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full shadow-sm hover:bg-emerald-500/20 transition-all cursor-pointer group">
        <Trophy className="h-4 w-4 text-emerald-500 group-hover:scale-110 transition-transform" />
        <div className="flex flex-col">
          <span className="text-[10px] leading-none uppercase font-bold text-gray-500">
            Total XP
          </span>
          <span className="text-sm font-black text-emerald-600 tabular-nums">
            {totalScore.toLocaleString()}
          </span>
        </div>
      </div>
    </a>
  );
}
