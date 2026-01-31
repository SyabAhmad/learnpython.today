import * as React from "react";
import { Zap } from "lucide-react";

import { CH1, SubTitle } from "@/components/custom-typo";
import { PathCard } from "@/components/path-card";
import { paths } from "@/config/paths";

export default function PathsPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Zap className="h-8 w-8" />
          </div>
          <CH1 text="Learning Paths" />
        </div>
        <SubTitle text="Structured learning journeys that blend video tutorials, comprehensive articles, and interactive games into coherent skill-building sequences." />
      </div>

      {/* Paths Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-max">
        {paths.map((path) => (
          <PathCard key={path.href} path={path} />
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-16 rounded-lg border border-border/50 bg-muted/30 p-8 text-center space-y-3">
        <p className="text-sm text-muted-foreground font-medium">
          💡 <strong>Pro tip:</strong> Each path is self-paced. Complete stages
          in any order and track your progress across the platform.
        </p>
      </div>
    </div>
  );
}
