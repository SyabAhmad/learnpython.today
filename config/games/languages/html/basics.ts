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
];
