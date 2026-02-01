import { GameBuilder } from "@/types/game";
import { Language, GameMechanic } from "@/types/codeLine";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";

export const cssBasicsGames = [
  new GameBuilder()
    .setTitle("CSS Selector Syntax")
    .setHref("css-selector-basic")
    .setTags([])
    .setSynopsis("Fix the CSS selector")
    .setText(
      `CSS selectors target HTML elements. Find the error in this selector rule.`,
    )
    .setLevel(1)
    .setLanguage(Language.CSS)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("CSS Basics")
    .setSubcategory("Selectors")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("body {", StateEnum.NORMAL),
          new CodeLine("  background-color: white;", StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
          new CodeLine(".container {", StateEnum.NORMAL),
          new CodeLine(
            "  width: 1200px",
            StateEnum.ERROR,
            "Missing semicolon at end of property",
          ),
          new CodeLine("  margin: 0 auto;", StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.CSS,
        "Valid CSS",
        "Valid CSS",
      ),
    )
    .build(),
];
