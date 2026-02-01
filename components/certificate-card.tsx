"use client";

import React from "react";
import { Certificate } from "@/types/certificate";
import {
  getLanguageDisplayName,
  getLanguageCertificateColor,
} from "@/utils/certificateUtils";
import { Award, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface CertificateCardProps {
  certificate: Certificate;
  userName?: string;
  userEmail?: string;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  userName = "Student",
  userEmail = "",
}) => {
  const { toast } = useToast();
  const colors = getLanguageCertificateColor(certificate.language);
  const languageName = getLanguageDisplayName(certificate.language);
  const earnedDate = new Date(certificate.earnedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    },
  );

  const handleDownload = async () => {
    try {
      // Color map for languages
      const colorMap: Record<string, string> = {
        Python: "#3b82f6", // blue-500
        SQL: "#f97316", // orange-500
        HTML: "#ef4444", // red-500
        CSS: "#a855f7", // purple-500
        JavaScript: "#eab308", // yellow-500
        Go: "#06b6d4", // cyan-500
      };
      const primaryColor = colorMap[languageName] || "#3b82f6";

      // Create SVG certificate with proper styling
      const svgData = `
        <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
          <!-- Background -->
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#f9fafb;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="1000" height="800" fill="url(#grad)"/>
          
          <!-- Outer border -->
          <rect x="30" y="30" width="940" height="740" fill="none" stroke="${primaryColor}" stroke-width="8"/>
          <rect x="50" y="50" width="900" height="700" fill="none" stroke="${primaryColor}" stroke-width="2" opacity="0.5"/>
          
          <!-- Decorative corners -->
          <circle cx="60" cy="60" r="10" fill="${primaryColor}"/>
          <circle cx="940" cy="60" r="10" fill="${primaryColor}"/>
          <circle cx="60" cy="740" r="10" fill="${primaryColor}"/>
          <circle cx="940" cy="740" r="10" fill="${primaryColor}"/>
          
          <!-- Title -->
          <text x="500" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="#1f2937">
            CERTIFICATE
          </text>
          <text x="500" y="170" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#6b7280">
            OF ACHIEVEMENT
          </text>
          
          <!-- Divider line -->
          <line x1="150" y1="200" x2="850" y2="200" stroke="${primaryColor}" stroke-width="2" opacity="0.7"/>
          
          <!-- Presentation -->
          <text x="500" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#6b7280">
            This certificate is proudly presented to
          </text>
          
          <!-- User Name -->
          <text x="500" y="310" text-anchor="middle" font-family="Georgia, serif" font-size="46" font-weight="bold" fill="${primaryColor}">
            ${userName || "Accomplished Student"}
          </text>
          
          <!-- User Email -->
          <text x="500" y="350" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af">
            ${userEmail || ""}
          </text>
          
          <!-- Divider line -->
          <line x1="150" y1="370" x2="850" y2="370" stroke="${primaryColor}" stroke-width="1" opacity="0.5"/>
          
          <!-- Recognition text -->
          <text x="500" y="405" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#4b5563">
            For successfully completing all challenges and mastering
          </text>
          <text x="500" y="435" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#4b5563">
            ${languageName} fundamentals through
          </text>
          <text x="500" y="470" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="${primaryColor}">
            Python Times
          </text>
          
          <!-- Certification authority -->
          <text x="500" y="510" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#6b7280">
            Certified by
          </text>
          <text x="500" y="545" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${primaryColor}">
            MenteE™
          </text>
          
          <!-- Footer divider -->
          <line x1="150" y1="570" x2="850" y2="570" stroke="${primaryColor}" stroke-width="1" opacity="0.3"/>
          
          <!-- Footer details -->
          <text x="180" y="610" font-family="Arial, sans-serif" font-size="12" fill="#9ca3af">
            Date: ${earnedDate}
          </text>
          <text x="500" y="610" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#9ca3af">
            Games: ${certificate.totalGamesCompleted} | ID: ${certificate.id.slice(0, 10)}
          </text>
          
          <!-- Disclaimer -->
          <text x="500" y="650" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#d1d5db" font-style="italic">
            This certificate demonstrates your learning progress and potential.
          </text>
          <text x="500" y="668" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#d1d5db" font-style="italic">
            It is not an official or registered certification.
          </text>
        </svg>
      `;

      // Convert SVG to canvas and download as PNG
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        canvas.width = 1000;
        canvas.height = 800;
        if (ctx) {
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
        }

        const pngUrl = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${languageName}-Certificate-${userName.replace(/\s+/g, "_")}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        toast({
          title: "Certificate Downloaded",
          description: `Your ${languageName} certificate has been downloaded successfully!`,
        });
      };

      img.onerror = () => {
        toast({
          title: "Download Error",
          description: "Failed to generate certificate. Please try again.",
          variant: "destructive",
        });
      };

      img.src =
        "data:image/svg+xml;base64," +
        btoa(unescape(encodeURIComponent(svgData)));
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download Error",
        description: "An error occurred while downloading the certificate.",
        variant: "destructive",
      });
    }
  };

  const handleShare = () => {
    toast({
      title: "Coming Soon",
      description: "Certificate sharing will be available soon!",
    });
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${colors.secondary} p-6 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.primary} opacity-10`}
      />

      {/* Content */}
      <div className="relative z-10 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${colors.primary}`}
            >
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                {languageName}
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                Certificate of Completion
              </p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 py-4 border-y border-border/50">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Games Completed</span>
            <span className="font-semibold text-foreground">
              {certificate.totalGamesCompleted}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Earned On</span>
            <span className="font-semibold text-foreground">{earnedDate}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Certificate ID</span>
            <span className="font-mono text-xs text-foreground/70">
              {certificate.id.slice(0, 12)}...
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            onClick={handleDownload}
          >
            <Download className="w-4 h-4" />
            Download
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};
