import { GameBuilder } from "@/types/game";
import { Language, GameMechanic } from "@/types/codeLine";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";

export const jsBasicsGames = [
  new GameBuilder()
    .setTitle("JavaScript Variable Declaration")
    .setHref("js-var-declaration")
    .setTags([])
    .setSynopsis("Fix the JavaScript variable declaration")
    .setText(
      `JavaScript has three ways to declare variables: var, let, and const. Find the error in this code.`,
    )
    .setLevel(1)
    .setLanguage(Language.JAVASCRIPT)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("JavaScript Basics")
    .setSubcategory("Variables")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine('let name = "John";', StateEnum.NORMAL),
          new CodeLine("const age = 25", StateEnum.ERROR, "Missing semicolon"),
          new CodeLine("console.log(name, age);", StateEnum.NORMAL),
        ],
        Language.JAVASCRIPT,
        "John 25",
        "John 25",
      ),
    )
    .build(),
];
