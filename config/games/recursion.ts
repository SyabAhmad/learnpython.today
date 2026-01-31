import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const recursionGames: Game[] = [
  new GameBuilder()
    .setTitle("Recursive Base Case")
    .setHref("recur-base-case")
    .setTags([kt.recursion, kt.function])
    .setSynopsis("Prevent infinite loops in recursion.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def factorial(n):"),
          new CodeLine("  # Missing base case!"),
          new CodeLine("  return n * factorial(n - 1)"),
          new CodeLine(
            "if n == 0: return 1",
            StateEnum.CORRECT,
            "Correct! A base case is required to stop the recursion.",
            10,
          ),
          new CodeLine(
            "if n == 1: return 1",
            StateEnum.WRONG,
            "Could work for positive integers, but 0 is more standard",
          ),
          new CodeLine(
            "while n > 0:",
            StateEnum.WRONG,
            "Recursion usually replaces 'while' loops, it doesn't wrap them like this.",
          ),
          new CodeLine(
            "exit()",
            StateEnum.WRONG,
            "This would terminate the program, not stop the recursion properly",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "In a recursive function like factorial, what is absolutely necessary to prevent a RecursionError?",
    )
    .setCategory("Recursion")
    .build(),

  new GameBuilder()
    .setTitle("Recursive Step")
    .setHref("recur-step-logic")
    .setTags([kt.recursion])
    .setSynopsis("Moving toward the solution.")
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def countdown(n):"),
          new CodeLine("  if n <= 0: return"),
          new CodeLine("  print(n)"),
          new CodeLine(
            "  countdown(n)",
            StateEnum.ERROR,
            "This will call countdown with the same 'n' value forever.",
          ),
          new CodeLine(
            "  countdown(n - 1)",
            StateEnum.CORRECT,
            "Correct! You must change the argument to move closer to the base case.",
            10,
          ),
          new CodeLine(
            "  countdown(n + 1)",
            StateEnum.WRONG,
            "This moves further away from the base condition of n <= 0.",
          ),
          new CodeLine(
            "  countdown(1)",
            StateEnum.WRONG,
            "This would cause infinite recursion with countdown(1) -> countdown(1) -> ...",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "How should you call the function again to ensure it eventually finishes?",
    )
    .setCategory("Recursion")
    .build(),

  new GameBuilder()
    .setTitle("Maximum Depth")
    .setHref("recur-max-depth")
    .setTags([kt.recursion, kt.exceptions])
    .setSynopsis("Understanding Python's limits.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("# What happens when you recurse too many times?"),
          new CodeLine(
            "RecursionLimitError",
            StateEnum.WRONG,
            "Close, but the actual exception name is different.",
          ),
          new CodeLine(
            "RecursionError",
            StateEnum.CORRECT,
            "Correct! Python raises a 'RecursionError' when the stack depth is exceeded.",
            10,
          ),
          new CodeLine(
            "MemoryError",
            StateEnum.ERROR,
            "While recursion uses memory, the specific error for deep recursion is RecursionError.",
          ),
          new CodeLine(
            "StackOverflowError",
            StateEnum.WRONG,
            "That's Java/C#. Python uses RecursionError.",
          ),
          new CodeLine(
            "MaxDepthExceeded",
            StateEnum.WRONG,
            "This is not a real Python exception.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Which specific exception does Python raise if a recursive function calls itself too many times?",
    )
    .setCategory("Recursion")
    .build(),

  new GameBuilder()
    .setTitle("Tail Recursion")
    .setHref("recur-tail-opt")
    .setTags([kt.recursion])
    .setSynopsis("Is Python optimized for deep recursion?")
    .setLevel(5)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("# Python's stance on Tail Call Optimization (TCO)"),
          new CodeLine(
            "Python supports TCO",
            StateEnum.WRONG,
            "Unfortunately, Python does not optimize tail calls.",
          ),
          new CodeLine(
            "Python does not support TCO",
            StateEnum.CORRECT,
            "Correct! Python does not optimize tail calls to save stack space.",
            10,
          ),
          new CodeLine(
            "Python only supports TCO for integers",
            StateEnum.ERROR,
            "Python doesn't have TCO at all, not even for specific types.",
          ),
          new CodeLine(
            "Python supports TCO with @tailcall decorator",
            StateEnum.WRONG,
            "There's no built-in @tailcall decorator in Python.",
          ),
          new CodeLine(
            "Python supports TCO in PyPy only",
            StateEnum.WRONG,
            "Even PyPy doesn't implement TCO by default.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Does the standard CPython interpreter support Tail Call Optimization to prevent stack overflows?",
    )
    .setCategory("Recursion")
    .build(),

  new GameBuilder()
    .setTitle("Recursive Fibonacci")
    .setHref("recur-fib-concept")
    .setTags([kt.recursion, kt.algorithms])
    .setSynopsis("Summing previous results.")
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def fib(n):"),
          new CodeLine("  if n < 2: return n"),
          new CodeLine(
            "  return fib(n-1) + fib(n-2)",
            StateEnum.CORRECT,
            "Correct! Fibonacci is defined as the sum of the two preceding numbers.",
            10,
          ),
          new CodeLine(
            "  return fib(n-1) * n",
            StateEnum.ERROR,
            "This looks more like a factorial calculation than Fibonacci.",
          ),
          new CodeLine(
            "  return fib(n) - 1",
            StateEnum.WRONG,
            "This would cause infinite recursion without ever reaching the base case.",
          ),
          new CodeLine(
            "  return fib(n-1) - fib(n-2)",
            StateEnum.WRONG,
            "Fibonacci adds the previous two values, not subtracts them.",
          ),
          new CodeLine(
            "  return fib(n-2) + 1",
            StateEnum.WRONG,
            "This only calls fib(n-2) and ignores fib(n-1).",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Identify the correct recursive call for calculating the nth Fibonacci number.",
    )
    .setCategory("Recursion")
    .build(),
];
