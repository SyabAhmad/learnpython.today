import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { stringGames } from "@/config/games/strings";
import { listGames } from "@/config/games/list";
import { leetcodeGames } from "@/config/games/leetcode";
import { syntaxGames } from "@/config/games/syntax";
import { basicGames } from "@/config/games/basics";
import { dictionaryGames } from "@/config/games/dictionaries";
import { oopGames } from "@/config/games/oop";
import { functionGames } from "@/config/games/functions";
import { comprehensionGames } from "@/config/games/comprehensions";
import { exceptionGames } from "@/config/games/exceptions";
import { fileIOGames } from "@/config/games/file_io";
import { generatorGames } from "@/config/games/generators";
import { regexGames } from "@/config/games/regex";
import { datetimeGames } from "@/config/games/datetime";
import { collectionGames } from "@/config/games/collections";
import { algorithmGames } from "@/config/games/algorithms";
import { recursionGames } from "@/config/games/recursion";
import { metaclassGames } from "@/config/games/metaclasses";
import { decoratorGames } from "@/config/games/decorators";
import { asyncGames } from "@/config/games/async";
import { testingGames } from "@/config/games/testing";
import { getRef } from "@/utils/gamesUtils";

export const allGames: Game[] = [
  new GameBuilder()
    .setTitle("Introduction")
    .setHref("introduction")
    .setTags([kt.syntax])
    .setSynopsis("Get started with our games and find out how to play.")
    .setText(
      "To play the game, you need to put on your detective hat and find the lines of code to spot the bugs! Each game presents you with a snippet of code that contains an error. Your task is to identify the mistake and select the correct option from the provided choices that would fix the code.",
    )
    .setLevel(0)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def hello(x):"),
          new CodeLine("  Print(x)", StateEnum.ERROR),
          new CodeLine("  print(x)", StateEnum.CORRECT, "Good Catch!", 10),
          new CodeLine("  print x", StateEnum.WRONG),
          new CodeLine("  Print x", StateEnum.WRONG),
        ],
        "python",
      ),
    )
    .setCategory("Introduction")
    .build(),
  new GameBuilder()
    .setTitle("Spot the Punctuation")
    .setHref("intro-syntax-colon")
    .setTags([kt.syntax])
    .setSynopsis("A tiny character can make a big difference.")
    .setText(
      "In Python, certain lines like 'if' statements and function definitions must end with a specific character. Can you spot which line is missing its punctuation mark?",
    )
    .setLevel(0)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "if 5 > 3",
            StateEnum.ERROR,
            "You forgot the colon at the end!",
          ),
          new CodeLine(
            "if 5 > 3:",
            StateEnum.CORRECT,
            "Exactly! If statements always need a colon.",
            10,
          ),
          new CodeLine(
            "if 5 > 3;",
            StateEnum.WRONG,
            "Python uses colons, not semicolons for blocks.",
          ),
          new CodeLine("  print('Math works!')"),
        ],
        "python",
      ),
    )
    .setCategory("Introduction")
    .build(),
  new GameBuilder()
    .setTitle("The String Trap")
    .setHref("intro-string-quotes")
    .setTags([kt.syntax, kt.basics])
    .setSynopsis("Strings need to stay enclosed.")
    .setText(
      "Words in Python (strings) need to be wrapped in quotes. Look at the code below—one of the lines is breaking that rule!",
    )
    .setLevel(0)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "message = Hello",
            StateEnum.ERROR,
            "Text without quotes is treated as a variable name, but 'Hello' isn't defined.",
          ),
          new CodeLine(
            "message = 'Hello'",
            StateEnum.CORRECT,
            "Perfect! Quotes turn text into a String.",
            10,
          ),
          new CodeLine('message = "Hello"', StateEnum.NORMAL),
          new CodeLine("print(message)"),
        ],
        "python",
      ),
    )
    .setCategory("Introduction")
    .build(),
  new GameBuilder()
    .setTitle("Space Matters")
    .setHref("intro-indentation")
    .setTags([kt.syntax])
    .setSynopsis("Indentation is the law of Python.")
    .setText(
      "Unlike other languages that use curly braces {}, Python uses spaces to group code. One of these lines is having a 'spacing' crisis.",
    )
    .setLevel(0)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def start():"),
          new CodeLine(
            "print('Starting...')",
            StateEnum.ERROR,
            "The code inside a function must be indented (pushed to the right).",
          ),
          new CodeLine(
            "  print('Starting...')",
            StateEnum.CORRECT,
            "Yes! Indentation shows that this print belongs inside the function.",
            10,
          ),
          new CodeLine("start()"),
        ],
        "python",
      ),
    )
    .setCategory("Introduction")
    .build(),
  new GameBuilder()
    .setTitle("Case Sensitivity")
    .setHref("intro-case-sensitive")
    .setTags([kt.basics])
    .setSynopsis("Python is picky about its casing.")
    .setText(
      "In Python, 'myValue' and 'myvalue' are two completely different things! Can you find the line that tries to use a variable that doesn't exist?",
    )
    .setLevel(0)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("score = 100"),
          new CodeLine(
            "print(Score)",
            StateEnum.ERROR,
            "There is no variable named 'Score' (with a capital S).",
          ),
          new CodeLine(
            "print(score)",
            StateEnum.CORRECT,
            "Great! Variables must be typed exactly as they were defined.",
            10,
          ),
          new CodeLine(
            "Print(score)",
            StateEnum.WRONG,
            "The function 'print' must also be lowercase.",
          ),
        ],
        "python",
      ),
    )
    .setCategory("Introduction")
    .build(),
  ...basicGames.map((g) => ({ ...g, category: "Basics" })),
  ...listGames.map((g) => ({ ...g, category: "Lists" })),
  ...stringGames.map((g) => ({ ...g, category: "Strings" })),
  ...syntaxGames.map((g) => ({ ...g, category: "Syntax" })),
  ...leetcodeGames.map((g) => ({ ...g, category: "Algorithms" })),
  ...dictionaryGames.map((g) => ({ ...g, category: "Dictionaries" })),
  ...oopGames.map((g) => ({ ...g, category: "Object Oriented Programming" })),
  ...functionGames.map((g) => ({ ...g, category: "Functions" })),
  ...comprehensionGames.map((g) => ({ ...g, category: "Comprehensions" })),
  ...exceptionGames.map((g) => ({ ...g, category: "Exceptions" })),
  ...fileIOGames.map((g) => ({ ...g, category: "File I/O" })),
  ...generatorGames.map((g) => ({ ...g, category: "Generators & Iterators" })),
  ...regexGames.map((g) => ({ ...g, category: "Regex" })),
  ...datetimeGames.map((g) => ({ ...g, category: "DateTime" })),
  ...collectionGames.map((g) => ({ ...g, category: "Collections" })),
  ...algorithmGames.map((g) => ({ ...g, category: "Algorithms" })),
  ...recursionGames.map((g) => ({ ...g, category: "Recursion" })),
  ...metaclassGames.map((g) => ({ ...g, category: "Metaclasses" })),
  ...decoratorGames.map((g) => ({ ...g, category: "Decorators" })),
  ...asyncGames.map((g) => ({ ...g, category: "Async/Await" })),
  ...testingGames.map((g) => ({ ...g, category: "Testing" })),
];

export const games: Game[] = allGames
  .filter((game: Game) => !game.disabled)
  .map((game: Game) => {
    if (!game) return null;
    game.ref = game.ref < 0 ? game.ref : getRef(game);
    // Ensure all properties are serializable for static export
    return {
      href: game.href || "",
      title: game.title || "",
      tags: Array.isArray(game.tags)
        ? game.tags.map((tag: any) => ({
            text: typeof tag === "object" ? tag.text : "",
            href: typeof tag === "object" ? tag.href : "",
          }))
        : [],
      synopsis: game.synopsis || "",
      text: game.text || "",
      level: game.level || 0,
      ref: game.ref || 0,
      codeBlock: game.codeBlock || "",
      extern: game.extern || false,
      starred: game.starred || false,
      disabled: game.disabled || false,
      category: game.category,
    } as Game;
  })
  .filter((game): game is Game => game !== null);
