import { CH1, SubTitle } from "@/components/custom-typo";
import { knownTags as allTags } from "@/config/tag";
import { allGames as games } from "@/config/games-multi-language";
import { blogs } from "@/config/blogs";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

export default function TagsPage() {
  // Count items per tag
  const tagCounts = Object.entries(allTags).reduce(
    (acc, [_, tag]) => {
      const gameCount = games.filter((game) =>
        game.tags.some((t: any) => t.text === tag.text || t.href === tag.href),
      ).length;

      const blogCount = blogs.filter((blog) =>
        blog.tags.some((t: any) => t.text === tag.text || t.href === tag.href),
      ).length;

      const total = gameCount + blogCount;
      if (total > 0) {
        acc.push({ tag, gameCount, blogCount, total });
      }
      return acc;
    },
    [] as Array<{
      tag: any;
      gameCount: number;
      blogCount: number;
      total: number;
    }>,
  );

  // Sort by popularity (most items first)
  const sortedTags = tagCounts.sort((a, b) => b.total - a.total);

  return (
    <div className="space-y-10 py-6 md:py-10">
      {/* Header */}
      <div className="space-y-3">
        <CH1 text="Tags" />
        <SubTitle text="Browse content by topic" />
      </div>

      {/* Tags Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedTags.map(({ tag, gameCount, blogCount, total }) => (
          <Link
            key={tag.text}
            href={tag.href}
            className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:border-primary/50 hover:bg-card/50 transition-all"
          >
            <div className="space-y-4">
              {/* Tag Name */}
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {tag.text}
                </h3>
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Code2 className="h-4 w-4" />
                </div>
              </div>

              {/* Count Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{total}</span>
                  <span>item{total !== 1 ? "s" : ""}</span>
                </div>

                {/* Breakdown */}
                <div className="flex gap-2 flex-wrap">
                  {gameCount > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {gameCount} game{gameCount !== 1 ? "s" : ""}
                    </Badge>
                  )}
                  {blogCount > 0 && (
                    <Badge variant="outline" className="text-xs">
                      {blogCount} article{blogCount !== 1 ? "s" : ""}
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Hover effect indicator */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </Link>
        ))}
      </div>

      {sortedTags.length === 0 && (
        <div className="rounded-lg border border-border bg-card p-12 text-center">
          <p className="text-muted-foreground">No tags found.</p>
        </div>
      )}
    </div>
  );
}
