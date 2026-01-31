"use client";
import React, { useState, useEffect } from "react";
import { useProgressStore } from "@/stores/progress-store";
import { useReward } from "react-rewards";

export function ProgressArticle({ href }: { href: string }) {
  const isContentCompleted = useProgressStore.getState().isContentCompleted;
  const completeArticle = useProgressStore.getState().completeArticle;
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const { reward } = useReward("rewardId", "confetti", {
    elementCount: 150,
    angle: 210,
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;

      if (scrollableHeight > 0) {
        const newProgress = (scrollTop / scrollableHeight) * 100;
        setProgress((prevProgress) =>
          Math.max(prevProgress, Math.min(newProgress, 100)),
        );

        if (newProgress > 97 && !isCompleted) {
          if (!isContentCompleted(href)) {
            completeArticle(href);
            setIsCompleted(true);
            reward();
          }
        }
      } else {
        setProgress(100);
        if (!isCompleted) {
          completeArticle(href);
          setIsCompleted(true);
          reward();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [href, completeArticle, isContentCompleted, reward, isCompleted]);

  return (
    <div
      id="rewardId"
      className="relative w-full h-2 bg-secondary rounded-full overflow-hidden"
    >
      <div
        className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-300 ease-out rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
