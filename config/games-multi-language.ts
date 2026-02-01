import { Game, GameBuilder } from "@/types/game";
import { Language } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { knownTags as kt } from "@/config/tag";

// Python Games - New Language-Based Structure
import { basicGames as pythonBasicsGames } from "./games/languages/python/basics";
import { pythonFlaskGames } from "./games/languages/python/flask";
import { pythonNumpyGames } from "./games/languages/python/numpy";
import { stringGames as pythonStringGames } from "./games/languages/python/strings";
import { listGames as pythonListGames } from "./games/languages/python/list";
import { functionGames as pythonFunctionGames } from "./games/languages/python/functions";
import { comprehensionGames as pythonComprehensionGames } from "./games/languages/python/comprehensions";
import { exceptionGames as pythonExceptionGames } from "./games/languages/python/exceptions";
import { fileIOGames as pythonFileIOGames } from "./games/languages/python/file_io";
import { generatorGames as pythonGeneratorGames } from "./games/languages/python/generators";
import { regexGames as pythonRegexGames } from "./games/languages/python/regex";
import { datetimeGames as pythonDatetimeGames } from "./games/languages/python/datetime";
import { collectionGames as pythonCollectionGames } from "./games/languages/python/collections";
import { dictionaryGames as pythonDictionaryGames } from "./games/languages/python/dictionaries";
import { syntaxGames as pythonSyntaxGames } from "./games/languages/python/syntax";
import { oopGames as pythonOOPGames } from "./games/languages/python/oop";
import { algorithmGames as pythonAlgorithmGames } from "./games/languages/python/algorithms";
import { recursionGames as pythonRecursionGames } from "./games/languages/python/recursion";
import { metaclassGames as pythonMetaclassGames } from "./games/languages/python/metaclasses";
import { decoratorGames as pythonDecoratorGames } from "./games/languages/python/decorators";
import { asyncGames as pythonAsyncGames } from "./games/languages/python/async";
import { testingGames as pythonTestingGames } from "./games/languages/python/testing";

// SQL Games
import { sqlBasicsGames } from "./games/languages/sql/basics";

// HTML Games
import { htmlBasicsGames } from "./games/languages/html/basics";

// CSS Games
import { cssBasicsGames } from "./games/languages/css/basics";

// JavaScript Games
import { jsBasicsGames } from "./games/languages/javascript/basics";

// Go Games
import { goBasicsGames } from "./games/languages/go/basics";

// Create Introduction game
const introductionGame: Game = new GameBuilder()
  .setTitle("Introduction")
  .setHref("introduction")
  .setTags([kt.syntax])
  .setSynopsis("Get started with our games and find out how to play.")
  .setText(
    "To play the game, you need to put on your detective hat and find the lines of code to spot the bugs! Each game presents you with a snippet of code that contains an error. Your task is to identify the mistake and select the correct option from the provided choices that would fix the code.",
  )
  .setLevel(0)
  .setLanguage(Language.PYTHON)
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
  .build();

// All games organized by language
const allLanguageGames: Game[] = [
  // Introduction
  introductionGame,

  // Python Games - All categories consolidated in new structure
  ...pythonBasicsGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Basics",
  })),
  ...pythonStringGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Strings",
  })),
  ...pythonListGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Lists",
  })),
  ...pythonFunctionGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Functions",
  })),
  ...pythonComprehensionGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Comprehensions",
  })),
  ...pythonExceptionGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Exceptions",
  })),
  ...pythonFileIOGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "File I/O",
  })),
  ...pythonGeneratorGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Generators & Iterators",
  })),
  ...pythonRegexGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Regex",
  })),
  ...pythonDatetimeGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "DateTime",
  })),
  ...pythonCollectionGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Collections",
  })),
  ...pythonDictionaryGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Dictionaries",
  })),
  ...pythonSyntaxGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Syntax",
  })),
  ...pythonOOPGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Object Oriented Programming",
  })),
  ...pythonAlgorithmGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Algorithms",
  })),
  ...pythonRecursionGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Recursion",
  })),
  ...pythonMetaclassGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Metaclasses",
  })),
  ...pythonDecoratorGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Decorators",
  })),
  ...pythonAsyncGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Async/Await",
  })),
  ...pythonTestingGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Testing",
  })),
  ...pythonFlaskGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Backend - Flask",
  })),
  ...pythonNumpyGames.map((g: Game) => ({
    ...g,
    language: Language.PYTHON,
    category: "Backend - NumPy",
  })),

  // SQL Games
  ...sqlBasicsGames.map((g: Game) => ({
    ...g,
    language: Language.SQL,
    category: "SQL Basics",
  })),

  // HTML Games
  ...htmlBasicsGames.map((g: Game) => ({
    ...g,
    language: Language.HTML,
    category: "HTML Basics",
  })),

  // CSS Games
  ...cssBasicsGames.map((g: Game) => ({
    ...g,
    language: Language.CSS,
    category: "CSS Basics",
  })),

  // JavaScript Games
  ...jsBasicsGames.map((g: Game) => ({
    ...g,
    language: Language.JAVASCRIPT,
    category: "JavaScript Basics",
  })),

  // Go Games
  ...goBasicsGames.map((g: Game) => ({
    ...g,
    language: Language.GO,
    category: "Go Basics",
  })),
];

// Filter out disabled games and assign sequential ref numbers
export const allGames: Game[] = allLanguageGames
  .filter((g) => !g.disabled)
  .map((g, index) => ({ ...g, ref: index }));

export default allGames;
