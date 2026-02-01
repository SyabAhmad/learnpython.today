import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const syntaxGames: Game[] = [
  new GameBuilder()
    .setTitle("Variable Assignment with Type Annotations")
    .setHref("variable-assignment-typing-1")
    .setTags([kt.typing, kt.syntax])
    .setSynopsis(
      "Learn the correct usage of type annotations in variable assignments.",
    )
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def sum():"),
          new CodeLine(
            "  a: int = 10",
            StateEnum.NORMAL,
            "Correct type annotation for an integer.",
          ),
          new CodeLine(
            "  b: float = '12.34'",
            StateEnum.ERROR,
            "Mismatch between type hint (float) and assigned string.",
          ),
          new CodeLine(
            "  b: int = 12",
            StateEnum.CORRECT,
            "Correct! Type annotation matches the assigned integer value.",
            20,
          ),
          new CodeLine(
            "  b: int = 12.34",
            StateEnum.WRONG,
            "Incorrect type hint, assigning a float to an int.",
          ),
          new CodeLine(
            "  b: int = '12.34'",
            StateEnum.WRONG,
            "Type mismatch, casting a string to int, then incorrectly assigning to float.",
          ),
          new CodeLine(
            "  return a + b",
            StateEnum.NORMAL,
            "return can be untyped.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      `This exercise focuses on understanding type annotations in variable assignments.
        Review the given code lines for correct and incorrect uses of type hints according to Python's typing system.
        Determine the errors in type assignments and recognize properly annotated variables.`,
    )
    .build(),

  new GameBuilder()
    .setTitle("Calculate Shopping Cart Total")
    .setHref("shopping-cart-calculation-1")
    .setTags([kt.function, kt.syntax])
    .setSynopsis(
      "Identify the correct return statement in a shopping cart function.",
    )
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "from typing import List, Tuple",
            StateEnum.NORMAL,
            "Import typing annotations",
          ),
          new CodeLine(
            "def calculate_total(items: List[Tuple[str, float, int]], tax_rate: float) -> float:",
            StateEnum.NORMAL,
            "Function definition with type hints",
          ),
          new CodeLine(
            "    total: float = 0.0",
            StateEnum.NORMAL,
            "Initialize total variable",
          ),
          new CodeLine(
            "    for item_name, price, quantity in items:",
            StateEnum.NORMAL,
            "Loop through items tuple",
          ),
          new CodeLine(
            "        total += price * quantity",
            StateEnum.NORMAL,
            "Accumulate total cost",
          ),
          new CodeLine(
            "    # Now we need to return the total",
            StateEnum.NORMAL,
            "Comment indicating return statement needed",
          ),
          new CodeLine(
            "    return",
            StateEnum.ERROR,
            "Incomplete return statement. You must return a value, not just the keyword.",
          ),
          new CodeLine(
            "    return total",
            StateEnum.CORRECT,
            "Correct! This returns the calculated total to the caller.",
            10,
          ),
          new CodeLine(
            "    return(total)",
            StateEnum.WRONG,
            "While this works technically, it's unnecessary to use parentheses with return.",
          ),
          new CodeLine(
            "    Return(total)",
            StateEnum.WRONG,
            "Python keywords are case-sensitive. 'return' must be lowercase.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "A function must return its computed value. Identify the correct return statement in this shopping cart calculator.",
    )
    .setCategory("Syntax")
    .build(),
];
