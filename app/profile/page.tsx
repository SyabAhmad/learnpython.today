"use client";

import { useProgressStore } from "@/stores/progress-store";
import { useState, useEffect, useRef } from "react";
import { allGames as games } from "@/config/games-multi-language";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Trophy,
  Download,
  User,
  Mail,
  Award,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function ProfilePage() {
  const {
    userName,
    userEmail,
    totalScore,
    completedGames,
    gameResults,
    setUserInfo,
    resetProgress,
  } = useProgressStore();
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  const badgeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    setMounted(true);
    setName(userName);
    setEmail(userEmail);
  }, [userName, userEmail]);

  const handleSave = () => {
    setUserInfo(name, email);
    toast({
      title: "Profile Updated",
      description: "Your changes have been saved successfully.",
    });
  };

  const handleReset = () => {
    if (
      confirm(
        "Are you sure you want to reset all your progress? This cannot be undone.",
      )
    ) {
      resetProgress();
      toast({
        title: "Progress Reset",
        description: "Your learning journey has been restarted.",
      });
    }
  };

  const downloadBadge = () => {
    if (!badgeRef.current) return;

    const svgData = new XMLSerializer().serializeToString(badgeRef.current);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = 800;
      canvas.height = 600;
      ctx?.drawImage(img, 0, 0);
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `${name.replace(/\s+/g, "_")}_python_badge.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgData)));
  };

  if (!mounted) return null;

  const isEligible = completedGames.length >= games.length;
  const completedGamesList = games.filter((g) =>
    completedGames.includes(g.href),
  );

  return (
    <div className="container max-w-4xl py-10 space-y-8">
      <div className="flex items-center gap-4">
        <div className="p-4 bg-emerald-500 rounded-2xl text-white shadow-lg shadow-emerald-500/20">
          <User className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-4xl font-black tracking-tight text-foreground">
            User Profile
          </h1>
          <p className="text-muted-foreground">
            Manage your learning journey and certificates.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-emerald-500" />
                Personal Information
              </CardTitle>
              <CardDescription>
                How you'll appear on your certificates.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-accent/5 focus-visible:ring-emerald-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-accent/5 focus-visible:ring-emerald-500"
                />
              </div>
              <Button
                onClick={handleSave}
                className="bg-emerald-600 hover:bg-emerald-500 text-white w-full sm:w-auto"
              >
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex flex-col space-y-1.5">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-emerald-500" />
                  Stats & Achievements
                </CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="text-red-500 hover:text-red-400 hover:bg-red-500/10 h-8 px-2"
                title="Reset All Progress"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-accent/20 rounded-xl border border-border text-center">
                  <div className="text-3xl font-black text-emerald-500">
                    {totalScore}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase font-bold mt-1">
                    Total XP
                  </div>
                </div>
                <div className="p-4 bg-accent/20 rounded-xl border border-border text-center">
                  <div className="text-3xl font-black text-blue-500">
                    {completedGames.length}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase font-bold mt-1">
                    Games Won
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                Completed Games
              </CardTitle>
              <CardDescription>
                The challenges you have mastered.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {completedGamesList.length > 0 ? (
                  completedGamesList.map((game) => {
                    const result = gameResults?.find(
                      (r) => r.href === game.href,
                    );
                    return (
                      <div
                        key={game.href}
                        className="flex items-center justify-between p-3 bg-accent/10 rounded-lg border border-border group hover:border-emerald-500/30 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 bg-emerald-500/20 rounded text-emerald-500">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <div>
                            <span className="font-medium block text-foreground">
                              {game.title}
                            </span>
                            {result && (
                              <div className="text-xs text-muted-foreground flex gap-2 mt-0.5">
                                <span>
                                  Score:{" "}
                                  <span className="text-emerald-500">
                                    {result.score}
                                  </span>
                                </span>
                                <span>•</span>
                                <span>
                                  Penalty:{" "}
                                  <span className="text-red-500">
                                    -{result.penalty || 0}
                                  </span>
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                        <span className="text-xs text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded">
                          COMPLETED
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-8 text-muted-foreground border border-dashed border-border rounded-lg">
                    No games completed yet. Start learning!
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-border bg-card shadow-sm sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-emerald-500" />
                Certificate
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-[4/3] w-full bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden shadow-2xl relative border-8 border-emerald-500/10">
                <svg
                  ref={badgeRef}
                  viewBox="0 0 800 600"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="800" height="600" fill="#ffffff" />
                  <rect
                    x="20"
                    y="20"
                    width="760"
                    height="560"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="10"
                  />
                  <rect
                    x="35"
                    y="35"
                    width="730"
                    height="530"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  />

                  <text
                    x="400"
                    y="150"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="40"
                    fontWeight="bold"
                    fill="#1f2937"
                  >
                    CERTIFICATE OF ACHIEVEMENT
                  </text>
                  <text
                    x="400"
                    y="200"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="20"
                    fill="#6b7280"
                  >
                    THIS IS PRESENTED TO
                  </text>
                  <text
                    x="400"
                    y="280"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="48"
                    fontWeight="black"
                    fill="#10b981"
                  >
                    {name.toUpperCase()}
                  </text>
                  <line
                    x1="150"
                    y1="300"
                    x2="650"
                    y2="300"
                    stroke="#10b981"
                    strokeWidth="2"
                  />

                  <text
                    x="400"
                    y="360"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="18"
                    fill="#4b5563"
                  >
                    For successfully completing challenges and mastering Python
                    fundamentals at
                  </text>
                  <text
                    x="400"
                    y="400"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="24"
                    fontWeight="bold"
                    fill="#10b981"
                  >
                    LEARNPYTHON.TODAY
                  </text>

                  <g transform="translate(360, 450)">
                    <circle cx="40" cy="40" r="40" fill="#10b981" />
                    <path
                      d="M25 40 L35 50 L55 30"
                      stroke="white"
                      strokeWidth="6"
                      fill="none"
                    />
                  </g>

                  <text
                    x="150"
                    y="520"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="14"
                    fill="#6b7280"
                  >
                    Score: {totalScore} XP
                  </text>
                  <text
                    x="650"
                    y="520"
                    textAnchor="middle"
                    fontFamily="Arial"
                    fontSize="14"
                    fill="#6b7280"
                  >
                    Date: {new Date().toLocaleDateString()}
                  </text>
                </svg>
                {!isEligible && (
                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                    <Award className="h-12 w-12 text-gray-500 mb-4" />
                    <h3 className="font-bold text-white mb-2">
                      Not Eligible Yet
                    </h3>
                    <p className="text-sm text-gray-400">
                      Complete all games to unlock your official Python
                      certificate.
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <Button
                  disabled={!isEligible}
                  onClick={downloadBadge}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download PNG
                </Button>
                <div className="flex items-center gap-2 text-xs text-center justify-center text-gray-500">
                  <CheckCircle2
                    className={`h-3 w-3 ${isEligible ? "text-emerald-500" : "text-gray-400"}`}
                  />
                  {isEligible
                    ? "Verification Status: Valid"
                    : `Progress: ${completedGames.length} Games Completed`}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
