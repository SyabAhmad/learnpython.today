import { GameBuilder } from "@/types/game";
import { Language, GameMechanic } from "@/types/codeLine";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";

export const goBasicsGames = [
  new GameBuilder()
    .setTitle("Go Package Declaration")
    .setHref("go-package-declaration")
    .setTags([])
    .setSynopsis("Fix the Go package declaration")
    .setText(
      `Every Go file must start with a package declaration. Find the error in this code.`,
    )
    .setLevel(1)
    .setLanguage(Language.GO)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("Go Basics")
    .setSubcategory("Packages")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("package main", StateEnum.NORMAL),
          new CodeLine("", StateEnum.NORMAL),
          new CodeLine('import "fmt"', StateEnum.NORMAL),
          new CodeLine("", StateEnum.NORMAL),
          new CodeLine(
            "func Main() {",
            StateEnum.ERROR,
            "Go entry point must be lowercase 'main', not 'Main'",
          ),
          new CodeLine('    fmt.Println("Hello, World!")', StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.GO,
        "Hello, World!",
        "Hello, World!",
      ),
    )
    .build(),
];
