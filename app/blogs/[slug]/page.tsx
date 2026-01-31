import fs from "fs";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { blogs } from "@/config/blogs";
import { remark } from "remark";
import html from "remark-html";
import { Article } from "@/types/article";
import Head from "next/head";
import { nord as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { siteConfig } from "@/config/site";
import { parse } from "node-html-parser";
import { CopyToClip } from "@/components/copy-to-clip-component";
import { ProgressArticle } from "@/components/progress-article";

interface CustomTag {
  type: "code" | "normal";
  content: string;
  language?: string;
}

// Can't use @ in fs
const _IMPORT_STRING = "config/blogs/markdowns/";

export default async function BlogComponent({
  params,
}: {
  params: { slug: string };
}) {
  const article: Article = blogs.filter(
    (article) => article.href == params.slug,
  )[0];
  if (!article) return notFound();

  const content = await markdownToHtml(article.href);
  return (
    <div className="space-y-0">
      <Head>
        <title>{`${siteConfig.name} - ${article.title}`}</title>
        <meta name="description">{article.synopsis}</meta>
      </Head>

      {/* Progress Bar - Not Fixed */}
      <div className="pb-6">
        <ProgressArticle href={article.href} />
      </div>

      {/* Main Content Area */}
      <div className="space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/blogs" className="hover:text-primary transition-colors">
            Blog
          </a>
          <ChevronLeft className="h-4 w-4 rotate-180" />
          <span className="text-primary font-medium">{article.title}</span>
        </div>

        {/* Article Header */}
        <div className="space-y-4 border-b border-border/50 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {article.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {article.synopsis}
          </p>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl space-y-6">
          {stringToTags(content).map((c, index) =>
            c.type == "normal" ? (
              <div
                key={index}
                className="markdown prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: c.content }}
              />
            ) : (
              <div
                key={index}
                className="relative w-full rounded-lg overflow-hidden"
              >
                <SyntaxHighlighter
                  key={index}
                  style={theme}
                  customStyle={{
                    margin: "0",
                    padding: "16px",
                    cursor: "text",
                    borderRadius: "8px",
                  }}
                  language={c.language || "python"}
                  showLineNumbers={true}
                  codeTagProps={{
                    className: "codeLine py-1",
                  }}
                  wrapLongLines={true}
                  wrapLines={true}
                  lineProps={() => {
                    return {
                      style: {
                        cursor: "pointer",
                        display: "block",
                      },
                    };
                  }}
                >
                  {c.content}
                </SyntaxHighlighter>
                <CopyToClip content={c.content} />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

const stringToTags = (content: string): CustomTag[] => {
  const tags = parse(content);
  // Split the string and include the delimiters (captured groups)
  const segments: CustomTag[] = [];

  tags.childNodes.map((tag) => {
    if (["pre", "code"].includes(tag.rawTagName)) {
      tag = parse(tag.childNodes[0].toString());
      segments.push({
        type: "code",
        content: tag.innerText,
        language: "python",
      });
    } else {
      segments.push({
        type: "normal",
        content: tag.toString(),
      });
    }
  });

  return segments;
};

// Function to convert markdown to HTML
const markdownToHtml = async (slug: string): Promise<string> => {
  try {
    const markdown = fs
      .readFileSync(`${_IMPORT_STRING}/${slug}.md`, "utf8")
      .valueOf();
    const result = await remark().use(html).process(markdown);
    return result.value.toString();
  } catch (error) {
    // If there's an error (e.g., file doesn't exist), log it and return an empty string
    throw new Error("Cannot build blogs, Could not find the markdown for it.");
  }
};

export async function generateStaticParams() {
  return blogs
    .filter((article) => article.markdown)
    .map((article: Article) => ({
      slug: article.href.split("/blogs/")[0],
    }));
}
