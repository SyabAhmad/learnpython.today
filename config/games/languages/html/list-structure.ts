import { GameBuilder } from "@/types/game";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { knownTags as kt } from "@/config/tag";

export const htmlListGames = [
  new GameBuilder()
    .setTitle("HTML List Structure")
    .setHref("html-list-structure")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Identify the correct list item container tag")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body content"),
          new CodeLine(
            "    <list>",
            StateEnum.ERROR,
            "Error! 'list' is not a valid HTML tag. Use <ul> for unordered lists.",
          ),
          new CodeLine(
            "    <ul>",
            StateEnum.CORRECT,
            "Correct! <ul> (unordered list) contains <li> (list item) elements.",
            10,
          ),
          new CodeLine(
            "    <items>",
            StateEnum.WRONG,
            "'items' is not a valid HTML container. Use <ul> for unordered or <ol> for ordered lists.",
          ),
          new CodeLine(
            "    <container>",
            StateEnum.WRONG,
            "'container' is not an HTML list tag. Use <ul> or <ol> instead.",
          ),
          new CodeLine(
            '    <div class="list">',
            StateEnum.WRONG,
            "While <div> works, it's not semantic. Use <ul> or <ol> for proper list markup.",
          ),
          new CodeLine(
            "      <li>Item One</li>",
            StateEnum.NORMAL,
            "First list item",
          ),
          new CodeLine(
            "      <li>Item Two</li>",
            StateEnum.NORMAL,
            "Second list item",
          ),
          new CodeLine(
            "      <li>Item Three</li>",
            StateEnum.NORMAL,
            "Third list item",
          ),
          new CodeLine("    </ul>", StateEnum.NORMAL, "Close unordered list"),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "HTML lists must use proper semantic tags. <ul> creates an unordered (bulleted) list, <ol> creates an ordered (numbered) list, and both contain <li> elements. Find the incorrect container tag and select the correct one.",
    )
    .setCategory("HTML Lists")
    .build(),

  new GameBuilder()
    .setTitle("Ordered vs Unordered Lists")
    .setHref("html-ol-vs-ul")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Choose the correct list type for the content")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body content"),
          new CodeLine(
            "    <h3>Recipe Steps</h3>",
            StateEnum.NORMAL,
            "Heading",
          ),
          new CodeLine(
            "    <ul>",
            StateEnum.ERROR,
            "Error! Steps should be in an ordered list since sequence matters.",
          ),
          new CodeLine(
            "    <ol>",
            StateEnum.CORRECT,
            "Correct! Use <ol> for ordered steps where the sequence is important.",
            10,
          ),
          new CodeLine(
            "    <list type='ordered'>",
            StateEnum.WRONG,
            "'list' is not valid. Use <ol> for ordered lists.",
          ),
          new CodeLine(
            "    <dl>",
            StateEnum.WRONG,
            "<dl> is for definition lists, not ordered sequences. Use <ol> for steps.",
          ),
          new CodeLine(
            "      <li>Mix ingredients</li>",
            StateEnum.NORMAL,
            "Step 1",
          ),
          new CodeLine(
            "      <li>Bake for 20 minutes</li>",
            StateEnum.NORMAL,
            "Step 2",
          ),
          new CodeLine(
            "      <li>Cool and serve</li>",
            StateEnum.NORMAL,
            "Step 3",
          ),
          new CodeLine("    </ol>", StateEnum.NORMAL, "Close ordered list"),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "Choose <ol> (ordered list) when sequence matters, like recipe steps or rankings. Choose <ul> (unordered list) for items without a specific order, like shopping lists or features.",
    )
    .setCategory("HTML Lists")
    .build(),

  new GameBuilder()
    .setTitle("Nested Lists")
    .setHref("html-nested-lists")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Fix the nested list structure")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body content"),
          new CodeLine("    <ul>", StateEnum.NORMAL, "Main unordered list"),
          new CodeLine("      <li>Fruits", StateEnum.NORMAL, "First item"),
          new CodeLine(
            "      <ul>",
            StateEnum.ERROR,
            "Error! Nested list should be inside the <li> tag, not as a sibling.",
          ),
          new CodeLine(
            "        <li>Apple</li>",
            StateEnum.NORMAL,
            "Nested item",
          ),
          new CodeLine(
            "        <li>Banana</li>",
            StateEnum.NORMAL,
            "Nested item",
          ),
          new CodeLine("      </ul>", StateEnum.NORMAL, "Close nested list"),
          new CodeLine(
            "      <li>",
            StateEnum.CORRECT,
            "Correct! Nested lists belong inside <li> tags for proper structure.",
            10,
          ),
          new CodeLine(
            "        <ul>",
            StateEnum.NORMAL,
            "Nested list inside li",
          ),
          new CodeLine(
            "          <li>Apple</li>",
            StateEnum.NORMAL,
            "Nested item",
          ),
          new CodeLine(
            "          <li>Banana</li>",
            StateEnum.NORMAL,
            "Nested item",
          ),
          new CodeLine("        </ul>", StateEnum.NORMAL, "Close nested list"),
          new CodeLine("      </li>", StateEnum.NORMAL, "Close li"),
          new CodeLine(
            "      <li>Vegetables</li>",
            StateEnum.NORMAL,
            "Second item",
          ),
          new CodeLine("    </ul>", StateEnum.NORMAL, "Close main list"),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "Nested lists should be placed inside <li> tags, not as siblings. This creates proper hierarchy and is important for accessibility. Find the incorrectly placed nested list.",
    )
    .setCategory("HTML Lists")
    .build(),
];
