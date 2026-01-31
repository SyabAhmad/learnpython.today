import { notFound } from "next/navigation";
import { Map, CheckCircle2, ChevronRight } from "lucide-react";

import { CH1, SubTitle } from "@/components/custom-typo";
import { PathStep } from "@/components/path-step";
import { Badge } from "@/components/ui/badge";
import { paths } from "@/config/paths";
import { Path } from "@/types/path";

export default function PathDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const path = paths.find((p) => p.href === params.slug);

  if (!path) {
    return notFound();
  }

  return (
    <div className="space-y-12">
      {/* Header Section with Breadcrumb */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/paths" className="hover:text-primary transition-colors">
            Learning Paths
          </a>
          <ChevronRight className="h-4 w-4" />
          <span className="text-primary font-medium">{path.title}</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <Map className="h-8 w-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="uppercase text-xs font-bold tracking-widest"
                >
                  Difficulty {path.difficulty}
                </Badge>
                {path.starred && (
                  <Badge className="bg-primary hover:bg-primary uppercase text-xs font-bold tracking-widest">
                    Recommended
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <CH1 text={path.title} />
          <SubTitle text={path.synopsis} />
        </div>
      </div>

      {/* Mission Brief Card */}
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Your Learning Journey</h3>
            <p className="text-muted-foreground">
              This path contains <strong>{path.steps.length} stages</strong>{" "}
              with a mix of articles, videos, and interactive challenges.
              Complete them at your own pace and watch your progress grow.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Timeline */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Learning Stages</h2>
        <div className="space-y-4">
          {path.steps.map((step, index) => (
            <PathStep
              key={`${path.href}-${step.name}`}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-16 rounded-lg border border-border/50 bg-muted/30 p-8 text-center space-y-3">
        <p className="text-sm text-muted-foreground font-medium">
          🎯 <strong>Remember:</strong> Focus on understanding, not just
          completion. Take your time with each stage.
        </p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return paths.map((path: Path) => ({
    slug: path.href,
  }));
}
