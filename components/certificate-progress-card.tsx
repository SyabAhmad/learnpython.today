"use client";

import React from "react";
import { CertificateProgress } from "@/types/certificate";
import { getLanguageCertificateColor } from "@/utils/certificateUtils";
import { Award, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface CertificateProgressCardProps {
  progress: CertificateProgress;
}

export const CertificateProgressCard: React.FC<
  CertificateProgressCardProps
> = ({ progress }) => {
  const colors = getLanguageCertificateColor(progress.language);
  const languageName =
    progress.language.charAt(0).toUpperCase() + progress.language.slice(1);

  return (
    <div
      className={`relative overflow-hidden rounded-xl border ${colors.secondary} p-4 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 transition-all duration-300`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.primary} opacity-5`}
      />

      {/* Content */}
      <div className="relative z-10 space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`p-2 rounded-lg bg-gradient-to-br ${colors.primary}`}
            >
              <Award className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-semibold text-foreground">{languageName}</h3>
          </div>
          {progress.earned && (
            <div className="flex items-center gap-1 text-xs font-semibold text-primary">
              <CheckCircle2 className="w-4 h-4" />
              Earned
            </div>
          )}
        </div>

        {/* Progress Info */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">
              {progress.completedCount} / {progress.totalCount} Challenges
            </span>
            <span className="font-semibold text-foreground">
              {progress.percentage}%
            </span>
          </div>

          {/* Progress Bar */}
          <Progress value={progress.percentage} className="h-2" />
        </div>

        {/* Status */}
        <div className="text-xs text-muted-foreground">
          {progress.earned ? (
            <span className="text-primary font-semibold">
              ✓ Certificate Unlocked
            </span>
          ) : (
            <span>
              {progress.totalCount - progress.completedCount} more to unlock
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
