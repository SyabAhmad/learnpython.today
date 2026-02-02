import { GameBuilder } from "@/types/game";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { knownTags as kt } from "@/config/tag";

export const htmlHeadingGames = [
  new GameBuilder()
    .setTitle("HTML Heading Tags")
    .setHref("html-heading-tags")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Fix the incorrect HTML heading tag")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "HTML document root"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body section"),
          new CodeLine(
            "    <h7>Welcome to my site</h7>",
            StateEnum.ERROR,
            "Error! HTML only supports h1 through h6 heading tags. h7 does not exist.",
          ),
          new CodeLine(
            "    <h1>Welcome to my site</h1>",
            StateEnum.CORRECT,
            "Correct! h1 is the main heading tag and is valid HTML.",
            10,
          ),
          new CodeLine(
            "    <heading>Welcome to my site</heading>",
            StateEnum.WRONG,
            "'heading' is not a valid HTML tag. Use h1-h6 instead.",
          ),
          new CodeLine(
            "    <head>Welcome to my site</head>",
            StateEnum.WRONG,
            "'head' is a document metadata tag, not for displaying headings on the page.",
          ),
          new CodeLine(
            "    <h0>Welcome to my site</h0>",
            StateEnum.WRONG,
            "h0 is not a valid heading tag. Valid tags are h1 through h6.",
          ),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close HTML"),
        ],
        "html",
      ),
    )
    .setText(
      "HTML has standardized heading tags from h1 to h6. h1 is the highest level (most important) and h6 is the lowest. Find which heading tag is invalid and select the correct one.",
    )
    .setCategory("HTML Headings")
    .build(),

  new GameBuilder()
    .setTitle("Heading Hierarchy")
    .setHref("html-heading-hierarchy")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Identify the correct heading hierarchy structure")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body content"),
          new CodeLine(
            "    <h1>Main Title</h1>",
            StateEnum.NORMAL,
            "Page title",
          ),
          new CodeLine(
            "      <h3>Subheading</h3>",
            StateEnum.ERROR,
            "Error! Skipped h2. Headings should follow a logical hierarchy without gaps.",
          ),
          new CodeLine(
            "      <h2>Subheading</h2>",
            StateEnum.CORRECT,
            "Correct! Use h2 after h1 for proper heading hierarchy.",
            10,
          ),
          new CodeLine(
            "      <h1>Subheading</h1>",
            StateEnum.WRONG,
            "Using h1 for a subheading breaks the hierarchy. Use h2-h6 for subheadings.",
          ),
          new CodeLine(
            "      <h5>Subheading</h5>",
            StateEnum.WRONG,
            "This skips multiple levels. Maintain logical progression through h2, h3, etc.",
          ),
          new CodeLine(
            "        <p>Content under subheading...</p>",
            StateEnum.NORMAL,
            "Paragraph content",
          ),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "Heading hierarchy helps organize content and assists accessibility tools. Start with h1 for the main title, then use h2 for major sections, h3 for subsections, etc. Find the heading that breaks this hierarchy.",
    )
    .setCategory("HTML Headings")
    .build(),

  new GameBuilder()
    .setTitle("Multiple H1 Tags")
    .setHref("html-multiple-h1")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Identify when multiple h1 tags are used incorrectly")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body content"),
          new CodeLine(
            "    <h1>Company Website</h1>",
            StateEnum.NORMAL,
            "Main page title",
          ),
          new CodeLine(
            "    <h1>Product Section</h1>",
            StateEnum.ERROR,
            "Error! A page should have only one h1 tag. Multiple h1s confuse search engines.",
          ),
          new CodeLine(
            "    <h2>Product Section</h2>",
            StateEnum.CORRECT,
            "Correct! Use h2 for major sections within the page.",
            10,
          ),
          new CodeLine(
            "    <heading>Product Section</heading>",
            StateEnum.WRONG,
            "'heading' is not valid. Use h2 for section headings.",
          ),
          new CodeLine(
            '    <h1 class="section">Product Section</h1>',
            StateEnum.WRONG,
            "Classes don't change semantics. Only one h1 should exist per page.",
          ),
          new CodeLine(
            "      <p>Product details...</p>",
            StateEnum.NORMAL,
            "Section content",
          ),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "Best practice: Use only one h1 tag per page for your main title. Additional sections should use h2, h3, etc. This helps search engines understand your page structure and improves SEO.",
    )
    .setCategory("HTML Headings")
    .build(),
];
