import { GameBuilder } from "@/types/game";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { knownTags as kt } from "@/config/tag";

export const htmlSemanticGames = [
  new GameBuilder()
    .setTitle("HTML Semantic Tags")
    .setHref("html-semantic-tags")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Choose the correct semantic tag for page structure")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body content"),
          new CodeLine(
            "    <section>",
            StateEnum.NORMAL,
            "Main content section",
          ),
          new CodeLine(
            "      <div>",
            StateEnum.ERROR,
            "Error! For article content, use <article> semantic tag instead of generic <div>.",
          ),
          new CodeLine(
            "      <article>",
            StateEnum.CORRECT,
            "Correct! <article> is a semantic tag for self-contained content like blog posts.",
            10,
          ),
          new CodeLine(
            "      <content>",
            StateEnum.WRONG,
            "'content' is not a valid HTML tag. Use <article> for self-contained content.",
          ),
          new CodeLine(
            "      <main>",
            StateEnum.WRONG,
            "'main' is for the primary document content, not individual articles. Use <article> here.",
          ),
          new CodeLine(
            "      <container>",
            StateEnum.WRONG,
            "'container' is not a semantic HTML tag. Use <article> for article content.",
          ),
          new CodeLine(
            "        <h2>Blog Post Title</h2>",
            StateEnum.NORMAL,
            "Article heading",
          ),
          new CodeLine(
            "        <p>Article content here...</p>",
            StateEnum.NORMAL,
            "Article text",
          ),
          new CodeLine("      </article>", StateEnum.NORMAL, "Close article"),
          new CodeLine("    </section>", StateEnum.NORMAL, "Close section"),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "HTML5 semantic tags like <article>, <section>, <nav>, and <footer> provide meaning to page structure. They help search engines and accessibility tools understand content. Find the tag that should be replaced with a semantic tag.",
    )
    .setCategory("HTML Structure")
    .build(),

  new GameBuilder()
    .setTitle("Header and Footer Tags")
    .setHref("html-header-footer")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Identify the correct semantic tags for page structure")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine(
            "  <div>",
            StateEnum.ERROR,
            "Error! Page headers should use <header> semantic tag, not generic <div>.",
          ),
          new CodeLine(
            "  <header>",
            StateEnum.CORRECT,
            "Correct! <header> is semantic for introductory content and navigation.",
            10,
          ),
          new CodeLine(
            "  <top>",
            StateEnum.WRONG,
            "'top' is not a valid HTML tag. Use <header> for the page header.",
          ),
          new CodeLine(
            "  <head>",
            StateEnum.WRONG,
            "<head> is for document metadata, not page headers. Use <header>.",
          ),
          new CodeLine(
            "  <banner>",
            StateEnum.WRONG,
            "'banner' is not semantic. Use <header> for page introductory sections.",
          ),
          new CodeLine("    <nav>", StateEnum.NORMAL, "Navigation section"),
          new CodeLine("      <ul>", StateEnum.NORMAL, "Menu list"),
          new CodeLine(
            '        <li><a href="/">Home</a></li>',
            StateEnum.NORMAL,
            "Menu item",
          ),
          new CodeLine(
            '        <li><a href="/about">About</a></li>',
            StateEnum.NORMAL,
            "Menu item",
          ),
          new CodeLine("      </ul>", StateEnum.NORMAL, "Close list"),
          new CodeLine("    </nav>", StateEnum.NORMAL, "Close nav"),
          new CodeLine("  </header>", StateEnum.NORMAL, "Close header"),
          new CodeLine("  <main>", StateEnum.NORMAL, "Main content"),
          new CodeLine("    <p>Content...</p>", StateEnum.NORMAL, "Content"),
          new CodeLine("  </main>", StateEnum.NORMAL, "Close main"),
          new CodeLine("  <footer>", StateEnum.NORMAL, "Footer section"),
          new CodeLine(
            "    <p>&copy; 2026 Company</p>",
            StateEnum.NORMAL,
            "Copyright",
          ),
          new CodeLine("  </footer>", StateEnum.NORMAL, "Close footer"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "Use <header> for introductory sections at the top of pages or articles. Use <footer> for closing sections with metadata, copyright, or links. Use <nav> for navigation menus.",
    )
    .setCategory("HTML Structure")
    .build(),

  new GameBuilder()
    .setTitle("Nav vs Anchor Links")
    .setHref("html-nav-semantic")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Identify when to use the <nav> semantic tag")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body content"),
          new CodeLine(
            "    <div>",
            StateEnum.ERROR,
            "Error! Major navigation sections should use <nav>, not generic <div>.",
          ),
          new CodeLine(
            "    <nav>",
            StateEnum.CORRECT,
            "Correct! <nav> is semantic for navigation links and menus.",
            10,
          ),
          new CodeLine(
            "    <menu>",
            StateEnum.WRONG,
            "'menu' is outdated. Use <nav> for navigation sections.",
          ),
          new CodeLine(
            "    <navigation>",
            StateEnum.WRONG,
            "'navigation' is not an HTML tag. Use <nav> for semantic navigation.",
          ),
          new CodeLine(
            "    <links>",
            StateEnum.WRONG,
            "'links' is not a semantic tag. Use <nav> for navigation.",
          ),
          new CodeLine("      <ul>", StateEnum.NORMAL, "Navigation list"),
          new CodeLine(
            '        <li><a href="/home">Home</a></li>',
            StateEnum.NORMAL,
            "Nav link",
          ),
          new CodeLine(
            '        <li><a href="/services">Services</a></li>',
            StateEnum.NORMAL,
            "Nav link",
          ),
          new CodeLine(
            '        <li><a href="/contact">Contact</a></li>',
            StateEnum.NORMAL,
            "Nav link",
          ),
          new CodeLine("      </ul>", StateEnum.NORMAL, "Close list"),
          new CodeLine("    </nav>", StateEnum.NORMAL, "Close nav"),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "Use <nav> for major navigation sections. Individual links scattered on the page don't need <nav>. Use <nav> for menus, breadcrumbs, and navigation lists.",
    )
    .setCategory("HTML Structure")
    .build(),
];
