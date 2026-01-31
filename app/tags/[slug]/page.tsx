import { CH1 } from "@/components/custom-typo";
import { BlogComponent } from "@/components/blog-component";
import { knownTags as allTags } from "@/config/tag";
import { games } from "@/config/games";
import { blogs } from "@/config/blogs";
import { UnifiedContent, isGame, isArticle } from "@/types/unifiedContent";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface TagPageParams {
  params: {
    slug: string;
  };
}

export default function TagPage({ params }: TagPageParams) {
  // Find the tag by slug
  const tagEntry = Object.entries(allTags).find(
    ([_, tag]) =>
      tag.href === `/tags/${params.slug}` ||
      tag.href === `/tags/${params.slug}/`,
  );

  if (!tagEntry) {
    return (
      <div className="container max-w-4xl py-10">
        <h1 className="text-3xl font-bold">Tag Not Found</h1>
        <p className="text-muted-foreground mt-2">
          The tag you're looking for doesn't exist.
        </p>
        <Link
          href="/games"
          className="text-primary hover:underline mt-4 inline-block"
        >
          Back to Games
        </Link>
      </div>
    );
  }

  const [_, tag] = tagEntry;

  // Filter games and blogs that have this tag
  const taggedGames = games.filter((game) =>
    game.tags.some((t: any) => t.text === tag.text || t.href === tag.href),
  );

  const taggedBlogs = blogs.filter((blog) =>
    blog.tags.some((t: any) => t.text === tag.text || t.href === tag.href),
  );

  // Combine into unified content
  const unifiedContent: UnifiedContent[] = [
    ...taggedGames.map((game) => ({ type: "game" as const, content: game })),
    ...taggedBlogs.map((article) => ({
      type: "article" as const,
      content: article,
    })),
  ];

  return (
    <div className="space-y-8 py-6 md:py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link
          href="/games"
          className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">Tags</span>
        <span>/</span>
        <span className="text-foreground font-medium">{tag.text}</span>
      </nav>

      {/* Header */}
      <div className="space-y-3">
        <CH1 text={`Tag: ${tag.text}`} />
        <p className="text-lg text-muted-foreground">
          Found {unifiedContent.length}{" "}
          {unifiedContent.length === 1 ? "item" : "items"} with this tag
        </p>
      </div>

      {/* Content */}
      {unifiedContent.length > 0 ? (
        <BlogComponent contents={unifiedContent} showFilters={true} />
      ) : (
        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">
            No content found for this tag.
          </p>
        </div>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return Object.entries(allTags).map(([_, tag]) => {
    // Extract slug from href like "/tags/python/" -> "python"
    const slug = tag.href.split("/").filter(Boolean).pop() || "";
    return { slug };
  });
}
