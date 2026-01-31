import { CheckCircle2, BookOpen, Zap } from "lucide-react";
import { LinkComponent } from "@/components/custom-link-component";
import { UnifiedCard } from "@/components/card-component";
import { Badge } from "@/components/ui/badge";
import { PathStep as LearningPathStep } from "@/types/path";
import { UnifiedContent, isLink } from "@/types/unifiedContent";

export function PathStep({
  step,
  index,
}: {
  step: LearningPathStep;
  index: number;
}) {
  const totalResources = step.content.length;
  const resourceBreakdown = {
    articles: step.content.filter((c) => c.type === "article").length,
    links: step.content.filter((c) => isLink(c)).length,
    games: step.content.filter((c) => c.type === "game").length,
  };

  return (
    <div className="group rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/30 hover:bg-card transition-all">
      <div className="px-6 py-5 border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="uppercase text-xs font-bold tracking-widest"
              >
                Stage {index + 1}
              </Badge>
              <h3 className="text-lg font-bold tracking-tight">{step.name}</h3>
            </div>
            <p className="text-xs text-muted-foreground font-medium">
              {totalResources} resource{totalResources !== 1 ? "s" : ""} •
              {resourceBreakdown.articles > 0 &&
                ` ${resourceBreakdown.articles} article${resourceBreakdown.articles > 1 ? "s" : ""}`}
              {resourceBreakdown.games > 0 &&
                ` • ${resourceBreakdown.games} game${resourceBreakdown.games > 1 ? "s" : ""}`}
              {resourceBreakdown.links > 0 &&
                ` • ${resourceBreakdown.links} external link${resourceBreakdown.links > 1 ? "s" : ""}`}
            </p>
          </div>
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <CheckCircle2 className="h-6 w-6" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {step.content.map((content: UnifiedContent, i: number) =>
            isLink(content) ? (
              <div
                key={`${content.content.title}-${i}`}
                className="group/link flex h-full items-center rounded-lg border border-dashed border-border/50 bg-muted/30 p-4 hover:border-primary/50 hover:bg-muted/60 transition-all"
              >
                <LinkComponent link={content.content} />
              </div>
            ) : (
              <UnifiedCard
                key={`${content.content.href}-${i}`}
                content={content}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
