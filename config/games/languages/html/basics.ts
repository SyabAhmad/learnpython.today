import { GameBuilder } from "@/types/game";
import { Language, GameMechanic } from "@/types/codeLine";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";

export const htmlBasicsGames = [
  new GameBuilder()
    .setTitle("HTML Document Structure")
    .setHref("html-doc-structure")
    .setTags([])
    .setSynopsis("Fix the HTML document structure")
    .setText(
      `Every HTML document needs proper structure with DOCTYPE, html, head, and body tags. Find the error.`,
    )
    .setLevel(1)
    .setLanguage(Language.HTML)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("HTML Basics")
    .setSubcategory("Structure")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<!DOCTYPE html>", StateEnum.NORMAL),
          new CodeLine("<html>", StateEnum.NORMAL),
          new CodeLine("  <head>", StateEnum.NORMAL),
          new CodeLine(
            "    <title>Page Title</title",
            StateEnum.ERROR,
            "Missing closing >",
          ),
          new CodeLine(
            "    <title>Page Title</title>",
            StateEnum.CORRECT,
            "Correct: Closing > added",
            10,
          ),
          new CodeLine(
            "    <title Page Title</title>",
            StateEnum.WRONG,
            "Missing opening > after title",
          ),
          new CodeLine(
            "    <ttl>Page Title</ttl>",
            StateEnum.WRONG,
            "Wrong tag - should be title",
          ),
          new CodeLine("  </head>", StateEnum.NORMAL),
          new CodeLine("  <body>", StateEnum.NORMAL),
          new CodeLine("    <h1>Welcome</h1>", StateEnum.NORMAL),
          new CodeLine("  </body>", StateEnum.NORMAL),
          new CodeLine("</html>", StateEnum.NORMAL),
        ],
        Language.HTML,
        "Valid HTML",
        "Valid HTML",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("HTML Heading Tags")
    .setHref("html-headings")
    .setTags([])
    .setSynopsis("Use correct heading hierarchy")
    .setText("HTML heading tags h1-h6 define heading levels. Find the error.")
    .setLevel(1)
    .setLanguage(Language.HTML)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("HTML Basics")
    .setSubcategory("Headings")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "<h7>Main Title</h7>",
            StateEnum.ERROR,
            "No h7 tag exists",
          ),
          new CodeLine(
            "<h1>Main Title</h1>",
            StateEnum.CORRECT,
            "Correct: h1 is the highest heading level",
            10,
          ),
          new CodeLine(
            "<h0>Main Title</h0>",
            StateEnum.WRONG,
            "No h0 tag in HTML",
          ),
          new CodeLine(
            "<heading>Main Title</heading>",
            StateEnum.WRONG,
            "Tag should be h1, not heading",
          ),
          new CodeLine(
            "<H1>Main Title</H1>",
            StateEnum.WRONG,
            "HTML tags should be lowercase",
          ),
        ],
        Language.HTML,
        "Page heading",
        "Page heading",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Paragraph Tags")
    .setHref("html-paragraph")
    .setTags([])
    .setSynopsis("Use paragraph tags correctly")
    .setText("The <p> tag defines a paragraph in HTML. Find the correct tag.")
    .setLevel(1)
    .setLanguage(Language.HTML)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("HTML Basics")
    .setSubcategory("Text")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "<paragraph>This is text</paragraph>",
            StateEnum.ERROR,
            "Should use <p> tag, not paragraph",
          ),
          new CodeLine(
            "<p>This is text</p>",
            StateEnum.CORRECT,
            "Correct: <p> is the paragraph tag",
            10,
          ),
          new CodeLine(
            "<par>This is text</par>",
            StateEnum.WRONG,
            "Par is not a valid tag",
          ),
          new CodeLine(
            "<text>This is text</text>",
            StateEnum.WRONG,
            "Text is not a semantic HTML tag",
          ),
        ],
        Language.HTML,
        "Paragraph content",
        "Paragraph content",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Image Tags")
    .setHref("html-image")
    .setTags([])
    .setSynopsis("Use img tag attributes correctly")
    .setText(
      "Images use the <img> tag with src and alt attributes. Find the error.",
    )
    .setLevel(1)
    .setLanguage(Language.HTML)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("HTML Basics")
    .setSubcategory("Media")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            '<img src="photo.jpg"',
            StateEnum.ERROR,
            "Missing closing />",
          ),
          new CodeLine(
            '<img src="photo.jpg" />',
            StateEnum.CORRECT,
            "Correct: Self-closing tag with />",
            10,
          ),
          new CodeLine(
            '<img src="photo.jpg"></img>',
            StateEnum.WRONG,
            "Img is self-closing, no closing tag needed",
          ),
          new CodeLine(
            '<image src="photo.jpg" />',
            StateEnum.WRONG,
            "Tag should be img, not image",
          ),
          new CodeLine(
            '<img source="photo.jpg" />',
            StateEnum.WRONG,
            "Attribute should be src, not source",
          ),
        ],
        Language.HTML,
        "Image display",
        "Image display",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Link Tags")
    .setHref("html-links")
    .setTags([])
    .setSynopsis("Create hyperlinks with anchor tags")
    .setText(
      "The <a> tag with href attribute creates links. Find the correct syntax.",
    )
    .setLevel(1)
    .setLanguage(Language.HTML)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("HTML Basics")
    .setSubcategory("Links")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            '<link href="page.html">Click</link>',
            StateEnum.ERROR,
            "Should use <a> tag, not link",
          ),
          new CodeLine(
            '<a href="page.html">Click</a>',
            StateEnum.CORRECT,
            "Correct: <a> tag with href attribute",
            10,
          ),
          new CodeLine(
            '<a src="page.html">Click</a>',
            StateEnum.WRONG,
            "Links use href, not src",
          ),
          new CodeLine(
            '<anchor href="page.html">Click</anchor>',
            StateEnum.WRONG,
            "Tag should be <a>, not anchor",
          ),
        ],
        Language.HTML,
        "Linked page",
        "Linked page",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("List Tags")
    .setHref("html-lists")
    .setTags([])
    .setSynopsis("Create unordered lists with ul and li")
    .setText(
      "Unordered lists use <ul> with <li> items. Find the correct syntax.",
    )
    .setLevel(1)
    .setLanguage(Language.HTML)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("HTML Basics")
    .setSubcategory("Lists")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "<list>",
            StateEnum.ERROR,
            "Should use <ul> for unordered list",
          ),
          new CodeLine(
            "<ul>",
            StateEnum.CORRECT,
            "Correct: <ul> for unordered list",
            10,
          ),
          new CodeLine(
            "<ol>",
            StateEnum.WRONG,
            "<ol> is for ordered lists, not unordered",
          ),
          new CodeLine(
            "<items>",
            StateEnum.WRONG,
            "Should use <ul>, not items",
          ),
        ],
        Language.HTML,
        "Bulleted list",
        "Bulleted list",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Table Tags")
    .setHref("html-table")
    .setTags([])
    .setSynopsis("Create tables with tr and td")
    .setText(
      "Tables use <table>, <tr> for rows, and <td> for cells. Find the error.",
    )
    .setLevel(2)
    .setLanguage(Language.HTML)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("HTML Basics")
    .setSubcategory("Tables")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<table>", StateEnum.NORMAL),
          new CodeLine("  <tr>", StateEnum.NORMAL),
          new CodeLine(
            "    <cell>Data</cell>",
            StateEnum.ERROR,
            "Should use <td>, not cell",
          ),
          new CodeLine(
            "    <td>Data</td>",
            StateEnum.CORRECT,
            "Correct: <td> for table data",
            10,
          ),
          new CodeLine(
            "    <th>Data</th>",
            StateEnum.WRONG,
            "<th> is for headers, not data",
          ),
          new CodeLine("  </tr>", StateEnum.NORMAL),
          new CodeLine("</table>", StateEnum.NORMAL),
        ],
        Language.HTML,
        "Table with data",
        "Table with data",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Form Input")
    .setHref("html-form-input")
    .setTags([])
    .setSynopsis("Create form input fields")
    .setText(
      "Form input uses <input> tag with type attribute. Find the correct usage.",
    )
    .setLevel(2)
    .setLanguage(Language.HTML)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("HTML Basics")
    .setSubcategory("Forms")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            '<textbox type="text" />',
            StateEnum.ERROR,
            "Should use <input>, not textbox",
          ),
          new CodeLine(
            '<input type="text" />',
            StateEnum.CORRECT,
            "Correct: <input> with type attribute",
            10,
          ),
          new CodeLine(
            "<text />",
            StateEnum.WRONG,
            "Tag should be input, not text",
          ),
          new CodeLine(
            '<field type="text" />',
            StateEnum.WRONG,
            "Tag should be input, not field",
          ),
        ],
        Language.HTML,
        "Form field",
        "Form field",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Semantic HTML - Article")
    .setHref("html-semantic-article")
    .setTags([])
    .setSynopsis("Use semantic tags for content")
    .setText(
      "Use <article> tag for self-contained content. Find the correct tag.",
    )
    .setLevel(2)
    .setLanguage(Language.HTML)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("HTML Basics")
    .setSubcategory("Semantic")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "<content>Blog post here</content>",
            StateEnum.ERROR,
            "Should use <article>, not content",
          ),
          new CodeLine(
            "<article>Blog post here</article>",
            StateEnum.CORRECT,
            "Correct: <article> for independent content",
            10,
          ),
          new CodeLine(
            "<section>Blog post here</section>",
            StateEnum.WRONG,
            "<section> groups related content, use <article> for independent content",
          ),
          new CodeLine(
            "<div>Blog post here</div>",
            StateEnum.WRONG,
            "<div> is generic, should use <article> for semantic meaning",
          ),
        ],
        Language.HTML,
        "Article content",
        "Article content",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Semantic HTML - Nav")
    .setHref("html-semantic-nav")
    .setTags([])
    .setSynopsis("Use nav tag for navigation")
    .setText("Navigation content should use <nav> tag for semantic meaning.")
    .setLevel(2)
    .setLanguage(Language.HTML)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("HTML Basics")
    .setSubcategory("Semantic")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            '<menu id="navigation">',
            StateEnum.ERROR,
            "Should use <nav>, not menu",
          ),
          new CodeLine(
            "<nav>",
            StateEnum.CORRECT,
            "Correct: <nav> for navigation section",
            10,
          ),
          new CodeLine(
            '<header id="nav">',
            StateEnum.WRONG,
            "<header> is for introductory content, use <nav> for navigation",
          ),
          new CodeLine(
            "<section>",
            StateEnum.WRONG,
            "<section> groups content, use <nav> for navigation",
          ),
        ],
        Language.HTML,
        "Navigation menu",
        "Navigation menu",
      ),
    )
    .build(),
];
