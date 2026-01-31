import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const exceptionGames: Game[] = [
  new GameBuilder()
    .setTitle("Handling Zero Division")
    .setHref("exception-zero-div")
    .setTags([kt.syntax, kt.exceptions])
    .setSynopsis("Don't let your app crash on a simple math error.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("try:"),
          new CodeLine("  res = 10 / 0"),
          new CodeLine(
            "except zeroDivisionError:",
            StateEnum.ERROR,
            "Python is case-sensitive! It should be 'ZeroDivisionError'.",
          ),
          new CodeLine(
            "except ZeroDivisionError:",
            StateEnum.CORRECT,
            "Correct! Exceptions are classes and follow PascalCase.",
            10,
          ),
          new CodeLine(
            "catch ZeroDivisionError:",
            StateEnum.WRONG,
            "Python uses 'except', not 'catch'.",
          ),
        ],
        "python",
      ),
    )
    .setText("Find the correct way to catch a division by zero error.")
    .setCategory("Exceptions")
    .build(),

  new GameBuilder()
    .setTitle("The Finally Block")
    .setHref("exception-finally")
    .setTags([kt.syntax, kt.exceptions])
    .setSynopsis("Code that must run no matter what.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("try:"),
          new CodeLine("  x = 1 / 0"),
          new CodeLine("except:"),
          new CodeLine("  print('Error')"),
          new CodeLine(
            "final:",
            StateEnum.ERROR,
            "The keyword is 'finally', not 'final'.",
          ),
          new CodeLine(
            "finally:",
            StateEnum.CORRECT,
            "Yes! 'finally' always executes.",
            10,
          ),
          new CodeLine(
            "end:",
            StateEnum.WRONG,
            "Python doesn't use 'end' blocks like Ruby.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Identify the block that executes regardless of whether an exception occurred.",
    )
    .setCategory("Exceptions")
    .build(),

  new GameBuilder()
    .setTitle("Multiple Exceptions")
    .setHref("exception-multiple")
    .setTags([kt.syntax, kt.exceptions])
    .setSynopsis("Catching more than one type of error.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("try:"),
          new CodeLine("  pass"),
          new CodeLine(
            "except ValueError, TypeError:",
            StateEnum.ERROR,
            "To catch multiple exceptions in one block, they must be in a tuple.",
          ),
          new CodeLine(
            "except (ValueError, TypeError):",
            StateEnum.CORRECT,
            "Correct! A tuple is required for multiple exceptions.",
            10,
          ),
          new CodeLine(
            "except ValueError | TypeError:",
            StateEnum.WRONG,
            "This syntax is used in some languages but not Python exceptions.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "How do you listen for two different errors in the same except block?",
    )
    .setCategory("Exceptions")
    .build(),

  new GameBuilder()
    .setTitle("Raising Exceptions")
    .setHref("exception-raise")
    .setTags([kt.syntax, kt.exceptions])
    .setSynopsis("Manually triggering an error.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def check_age(age):"),
          new CodeLine("  if age < 0:"),
          new CodeLine(
            "    throw ValueError('Negative age')",
            StateEnum.ERROR,
            "Python uses 'raise', not 'throw'.",
          ),
          new CodeLine(
            "    raise ValueError('Negative age')",
            StateEnum.CORRECT,
            "Correct! 'raise' is the Pythonic way.",
            10,
          ),
          new CodeLine("    return Error", StateEnum.WRONG),
        ],
        "python",
      ),
    )
    .setText("Spot the keyword used to trigger an exception manually.")
    .setCategory("Exceptions")
    .build(),

  new GameBuilder()
    .setTitle("Custom Exception Class")
    .setHref("exception-custom")
    .setTags([kt.syntax, kt.exceptions])
    .setSynopsis("Defining your own error types.")
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "class MyError(base):",
            StateEnum.ERROR,
            "Exceptions should inherit from 'Exception' (or a subclass).",
          ),
          new CodeLine(
            "class MyError(Exception):",
            StateEnum.CORRECT,
            "Correct! Inheriting from Exception is standard.",
            10,
          ),
          new CodeLine(
            "class MyError():",
            StateEnum.WRONG,
            "Without inheriting from Exception, it won't work with try/except.",
          ),
          new CodeLine("  pass"),
        ],
        "python",
      ),
    )
    .setText("What should a custom exception class inherit from?")
    .setCategory("Exceptions")
    .build(),
];
