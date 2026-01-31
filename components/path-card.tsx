import { Star, Map, ArrowRight, Gauge } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Path } from "@/types/path";
import { cn } from "@/lib/utils";

export function PathCard({ path }: { path: Path }) {
  const totalSteps = path.steps.length;
  const totalItems = path.steps.reduce(
    (acc, step) => acc + step.content.length,
    0,
  );

  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden transition-all hover:ring-2 hover:ring-primary/50",
        path.starred
          ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/10"
          : "bg-card",
      )}
    >
      <a href={`/paths/${path.href}`} className="flex h-full flex-col p-6">
        <CardHeader className="p-0 space-y-4">
          <div className="flex justify-between items-start">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Map className="h-6 w-6" />
            </div>
            {path.starred && (
              <Badge
                variant="default"
                className="bg-primary hover:bg-primary uppercase text-[10px] font-bold tracking-wider"
              >
                Recommended
              </Badge>
            )}
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">
            {path.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 p-0 mt-4 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {path.synopsis}
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
              <Gauge className="h-3.5 w-3.5" />
              Lvl {path.difficulty}
            </div>
            <Badge variant="outline" className="rounded-full px-3">
              {totalSteps} Stages
            </Badge>
            <Badge variant="outline" className="rounded-full px-3">
              {totalItems} Resources
            </Badge>
          </div>
        </CardContent>

        <CardFooter className="p-0 mt-8 pt-4 border-t border-border/50 flex items-center justify-between group-hover:text-primary transition-colors">
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary">
            Initiate Sequence
          </span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </CardFooter>
      </a>

      {/* Decorative background elements */}
      <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
    </Card>
  );
}
