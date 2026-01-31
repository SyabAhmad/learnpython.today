import * as React from "react";
import Image from "next/image";
import ClientSideContent from "@/components/game-score";
import { games } from "@/config/games";
import { blogs } from "@/config/blogs";
import { BookOpen, Zap, Target } from "lucide-react";

export function AboutHome() {
  return (
    <div className="space-y-12">
      {/* Mission Section */}
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why LearnPython.Today?</h2>
            <p className="text-muted-foreground text-lg">The most effective way to learn Python</p>
          </div>
          <p className="text-foreground leading-relaxed text-base">
            Learning Python doesn't have to be boring or overwhelming. Our platform combines bite-sized articles, interactive games, and structured learning paths to help you build real Python skills.
          </p>
          <p className="text-foreground leading-relaxed text-base">
            Start with our{" "}
            <a href="/blogs/intro" className="font-bold text-primary hover:underline">
              introductory article
            </a>
            , dive into our{" "}
            <a href="/games" className="font-bold text-primary hover:underline">
              interactive games
            </a>
            , or follow a{" "}
            <a href="/paths" className="font-bold text-primary hover:underline">
              structured learning path
            </a>
            —choose what works best for you.
          </p>
        </div>
        <div className="hidden md:block relative h-64 md:h-80">
          <Image
            className="rounded-xl object-cover"
            src={"/low-poly-bg.png"}
            fill
            alt="Learning illustration"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border/50 bg-card/50 p-6 space-y-3 hover:border-primary/30 transition-colors">
          <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg">Quick Wins</h3>
          <p className="text-sm text-muted-foreground">
            5-minute articles and 2-minute games. Learn in small, digestible chunks that fit your schedule.
          </p>
        </div>

        <div className="rounded-xl border border-border/50 bg-card/50 p-6 space-y-3 hover:border-primary/30 transition-colors">
          <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 w-fit">
            <BookOpen className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg">Hand-Crafted Content</h3>
          <p className="text-sm text-muted-foreground">
            Carefully curated articles and challenges designed to teach you Python the right way.
          </p>
        </div>

        <div className="rounded-xl border border-border/50 bg-card/50 p-6 space-y-3 hover:border-primary/30 transition-colors">
          <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500 w-fit">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg">Structured Paths</h3>
          <p className="text-sm text-muted-foreground">
            Follow guided learning paths that build progressively from basics to advanced concepts.
          </p>
        </div>
      </div>

      {/* Progress Widget */}
      <ClientSideContent
        totalGames={games.length}
        totalArticles={blogs.length}
      />
    </div>
  );
}
