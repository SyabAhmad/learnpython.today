import { GameBuilder } from "@/types/game";
import { Language, GameMechanic } from "@/types/codeLine";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";

export const sqlBasicsGames = [
  new GameBuilder()
    .setTitle("SELECT Statement Syntax")
    .setHref("sql-select-basic")
    .setTags([])
    .setSynopsis("Fix the SQL SELECT statement")
    .setText(
      `SQL uses SELECT to retrieve data from tables. Find and fix the syntax error.`,
    )
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("SELECT")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "SELCT * FROM users",
            StateEnum.ERROR,
            "Typo: Should be SELECT not SELCT",
          ),
          new CodeLine("WHERE age > 18", StateEnum.NORMAL),
        ],
        Language.SQL,
        "id, name, age\n1, Alice, 25\n2, Bob, 30",
        "id, name, age\n1, Alice, 25\n2, Bob, 30",
      ),
    )
    .build(),
];
