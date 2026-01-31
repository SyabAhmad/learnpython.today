import { BlogComponent } from "@/components/blog-component";
import { blogs } from "@/config/blogs";
import { AboutHome } from "@/components/about-home";
import { Article } from "@/types/article";
import { sortBlogsByDate } from "@/utils/blogsUtils";
import { CH1, SubTitle } from "@/components/custom-typo";
import ControllerIcon from "@/components/ui/controller-icon";
import { Button } from "@/components/ui/button";
import { UnifiedContent } from "@/types/unifiedContent";
import { games } from "@/config/games";
import { ArrowRight, Zap, BookOpen, Code2 } from "lucide-react";
import Link from "next/link";

const INITIAL_LOAD_COUNT = 12; // Load only 12 items initially on home page

export default function Home() {
  let filteredBlogs: Article[] = sortBlogsByDate(blogs);
  filteredBlogs.slice(0, 4);

  // Only include a limited set of games and blogs for home page performance
  const unifiedContent: UnifiedContent[] = [
    ...games
      .slice(0, INITIAL_LOAD_COUNT / 2)
      .map((game) => ({ type: "game" as const, content: game })),
    ...blogs
      .slice(0, INITIAL_LOAD_COUNT / 2)
      .map((article) => ({ type: "article" as const, content: article })),
  ];

  return (
    <div className="space-y-16 py-4">
      {/* Hero Section */}
      <div className="space-y-8">
        {/* Announcement Banner */}
        <Link
          href="/games/introduction"
          className="group relative w-full inline-block overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 p-1 hover:border-primary/50 transition-all"
        >
          <div className="relative px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20 text-primary flex-shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm sm:text-base font-bold text-foreground leading-tight">
                  🎮 {games.length} Interactive Games Available!
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 hidden sm:block">
                  Level up your Python skills with hands-on challenges
                </p>
              </div>
            </div>
            <Button
              className="bg-primary hover:bg-primary/90 text-white flex-shrink-0 shadow-lg group-hover:shadow-primary/30 transition-all"
              size="sm"
            >
              Start <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </Link>

        {/* Main Hero Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Code2 className="h-8 w-8" />
              </div>
            </div>
            <CH1 text="Learn Python the Right Way" />
          </div>
          <SubTitle text="Master Python through interactive games, concise articles, and structured learning paths. Start from zero, progress at your pace." />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/games">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg"
            >
              <ControllerIcon className="mr-2" />
              Play Games
            </Button>
          </Link>
          <Link href="/blogs">
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Read Articles
            </Button>
          </Link>
          <Link href="/paths">
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Learning Paths
            </Button>
          </Link>
        </div>
      </div>

      {/* About & Progress Section */}
      <AboutHome />

      {/* Content Section with Heading */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Content
          </h2>
          <p className="text-muted-foreground text-lg">
            Handpicked games and articles to get you started
          </p>
        </div>
        <BlogComponent contents={unifiedContent} showFilters={false} />

        {/* View All Button */}
        <div className="flex justify-center pt-8">
          <Link href="/games">
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted"
            >
              View All {games.length} Games{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
