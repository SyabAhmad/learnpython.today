"use client";

import { useEffect } from "react";
import { useProgressStore } from "@/stores/progress-store";
import { Language } from "@/types/codeLine";
import {
  getCertificateProgress,
  createCertificate,
} from "@/utils/certificateUtils";

/**
 * This component monitors game completions and automatically awards certificates
 * when all games for a language are completed
 */
export const CertificateAutoAward = () => {
  const { completedGames, certificates, addCertificate } = useProgressStore();

  useEffect(() => {
    // Check all languages for certificate eligibility
    const languages = [
      Language.PYTHON,
      Language.SQL,
      Language.HTML,
      Language.CSS,
      Language.JAVASCRIPT,
      Language.GO,
    ];

    languages.forEach((language) => {
      // Skip if certificate already earned
      const alreadyEarned = certificates.some(
        (cert) => cert.language === language,
      );
      if (alreadyEarned) return;

      // Check if all games for this language are completed
      const progress = getCertificateProgress(language, completedGames);

      // Award certificate if all games completed
      if (progress.earned) {
        const certificate = createCertificate(
          language,
          progress.completedCount,
        );
        addCertificate(certificate);
      }
    });
  }, [completedGames, certificates, addCertificate]);

  return null; // This component doesn't render anything
};
