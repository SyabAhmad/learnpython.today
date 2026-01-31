import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const comprehensionGames: Game[] = [
  new GameBuilder()
    .setTitle("List Comprehension Basics")
    .setHref("list-comp-basic")
    .setTags([kt.syntax, kt.comprehensions, kt.lists])
    .setSynopsis(
      "Master the square-bracket syntax for creating lists elegantly.",
    )
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "evens = (x for x in range(10) if x % 2 == 0)",
            StateEnum.ERROR,
            "Parentheses create a Generator Object, not a list.",
          ),
          new CodeLine(
            "evens = [x for x in range(10) if x % 2 == 0]",
            StateEnum.CORRECT,
            "Correct! List comprehensions always use square brackets [].",
            10,
          ),
          new CodeLine(
            "evens = {x for x in range(10) if x % 2 == 0}",
            StateEnum.WRONG,
            "Curly braces without key-value pairs create a Set comprehension.",
          ),
          new CodeLine("print(type(evens))"),
        ],
        "python",
      ),
    )
    .setText(
      "In Python, list comprehensions must return a list. Different brackets change the data structure entirely! Spot the generator vs list bug.",
    )
    .setCategory("Comprehensions")
    .build(),

  new GameBuilder()
    .setTitle("Dictionary Comprehension")
    .setHref("dict-comp-syntax")
    .setTags([kt.syntax, kt.comprehensions, kt.ds])
    .setSynopsis("Create mapping in a single line.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "squares = {x, x**2 for x in range(5)}",
            StateEnum.ERROR,
            "Dictionary comprehensions require a colon ':' between key and value.",
          ),
          new CodeLine(
            "squares = {x: x**2 for x in range(5)}",
            StateEnum.CORRECT,
            "Correct! key: value is the required syntax.",
            10,
          ),
          new CodeLine(
            "squares = dict(x=x**2 for x in range(5))",
            StateEnum.WRONG,
            "This is invalid syntax inside the dict constructor call.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Dictionary comprehensions follow the dict syntax: {key: value for item in iterable}. Find the missing colon!",
    )
    .setCategory("Comprehensions")
    .build(),

  new GameBuilder()
    .setTitle("Conditional Filtering")
    .setHref("comp-if-condition")
    .setTags([kt.syntax, kt.comprehensions])
    .setSynopsis("Where does the 'if' go in a simple comprehension?")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "nums = [x if x > 5 for x in range(10)]",
            StateEnum.ERROR,
            "A simple 'if' for filtering must come AFTER the 'for' loop.",
          ),
          new CodeLine(
            "nums = [x for x in range(10) if x > 5]",
            StateEnum.CORRECT,
            "Perfect. The tailing 'if' acts as a filter on the iterable.",
            10,
          ),
          new CodeLine(
            "nums = [x for x in range(10)] if x > 5",
            StateEnum.WRONG,
            "This would try to run a global 'if' on a non-existent variable 'x'.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Python is strict about the position of 'if'. If you are filtering items, the 'if' condition belongs at the very end.",
    )
    .setCategory("Comprehensions")
    .build(),

  new GameBuilder()
    .setTitle("Set Comprehension Uniqueness")
    .setHref("set-comp-duplicates")
    .setTags([kt.comprehensions, kt.ds])
    .setSynopsis("Using comprehensions to remove duplicates automatically.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("word = 'mississippi'"),
          new CodeLine("unique = [char for char in word]", StateEnum.NORMAL),
          new CodeLine(
            "unique_set = {char for char in word}",
            StateEnum.CORRECT,
            "Exactly! Set comprehensions use curly braces and automatically handle uniqueness.",
            10,
          ),
          new CodeLine(
            "unique_set = set[char for char in word]",
            StateEnum.ERROR,
            "You cannot use square brackets directly with the 'set' type like this.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "A set comprehension is the fastest way to create a collection of unique items. Can you identify the correct set comprehension syntax?",
    )
    .setCategory("Comprehensions")
    .build(),

  new GameBuilder()
    .setTitle("The Ternary 'if-else' Position")
    .setHref("comp-if-else-logic")
    .setTags([kt.syntax, kt.comprehensions])
    .setSynopsis("Applying logic to items vs filtering them.")
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "results = [x for x in range(5) if x > 2 else 0]",
            StateEnum.ERROR,
            "When using an 'else', the ternary expression must come BEFORE the 'for'.",
          ),
          new CodeLine(
            "results = [x if x > 2 else 0 for x in range(5)]",
            StateEnum.CORRECT,
            "Correct! 'if-else' is a ternary operator on the value, so it goes first.",
            10,
          ),
          new CodeLine(
            "results = [x for x in range(5) if x > 2]",
            StateEnum.NORMAL,
            "This works for filtering, but removes the 'else 0' requirement.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "This is one of the most confusing parts of comprehensions. If you use 'if' alone, it's at the end. If you use 'if-else', it's at the beginning. Find the ternary version!",
    )
    .setCategory("Comprehensions")
    .build(),
];
