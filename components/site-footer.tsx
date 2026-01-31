import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-border mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-auto md:flex-col">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Originally created by{" "}
          <a
            href="https://github.com/git-Pqrd"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-foreground transition-colors"
          >
            git-Pqrd
          </a>
          . Redesigned & maintained by{" "}
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-emerald-500 transition-colors"
          >
            Syed Syab Ahmad
          </a>
          . Open source on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-foreground transition-colors"
          >
            GitHub.
          </a>
        </p>
      </div>
    </footer>
  );
}
