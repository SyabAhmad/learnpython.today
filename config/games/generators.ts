import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const generatorGames: Game[] = [
  new GameBuilder()
    .setTitle("Creating a Generator")
    .setHref("gen-yield-keyword")
    .setTags([kt.syntax, kt.function])
    .setSynopsis("Generate values on the fly.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def count_up(n):"),
          new CodeLine("  i = 0"),
          new CodeLine("  while i < n:"),
          new CodeLine(
            "    output i",
            StateEnum.ERROR,
            "Python uses 'yield' to return a value and pause the function.",
          ),
          new CodeLine(
            "    yield i",
            StateEnum.CORRECT,
            "Correct! 'yield' turns a function into a generator.",
            10,
          ),
          new CodeLine(
            "    return i",
            StateEnum.WRONG,
            "'return' would terminate the function immediately.",
          ),
          new CodeLine(
            "    produce i",
            StateEnum.WRONG,
            "'produce' is not a keyword in Python.",
          ),
          new CodeLine(
            "    send i",
            StateEnum.WRONG,
            "'.send()' is for passing values INTO a generator.",
          ),
          new CodeLine("    i += 1"),
        ],
        "python",
      ),
    )
    .setText(
      "Which keyword is used to produce a value from a generator and pause its execution?",
    )
    .setCategory("Generators & Iterators")
    .build(),

  new GameBuilder()
    .setTitle("Getting the Next Value")
    .setHref("gen-next-method")
    .setTags([kt.syntax, kt.basics])
    .setSynopsis("Manually advancing an iterator.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("my_gen = (x for x in range(3))"),
          new CodeLine(
            "val = my_gen.get()",
            StateEnum.ERROR,
            "Use the global 'next()' function or the '.__next__()' method.",
          ),
          new CodeLine(
            "val = next(my_gen)",
            StateEnum.CORRECT,
            "Correct! 'next()' retrieves the next item from an iterator.",
            10,
          ),
          new CodeLine(
            "val = my_gen.step()",
            StateEnum.WRONG,
            "There is no '.step()' method.",
          ),
          new CodeLine(
            "val = my_gen.__next__()",
            StateEnum.WRONG,
            "While valid, 'next(my_gen)' is the standard builtin way.",
          ),
          new CodeLine(
            "val = my_gen.forward()",
            StateEnum.WRONG,
            "No '.forward()' method exists.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "How do you manually retrieve the next item from an iterator or generator?",
    )
    .setCategory("Generators & Iterators")
    .build(),

  new GameBuilder()
    .setTitle("The StopIteration Error")
    .setHref("gen-stop-iteration")
    .setTags([kt.basics, kt.exceptions])
    .setSynopsis("What happens when you exhaust an iterator?")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("it = iter([1, 2, 3])"),
          new CodeLine("next(it)  # returns 1"),
          new CodeLine("next(it)  # returns 2"),
          new CodeLine("next(it)  # returns 3"),
          new CodeLine("next(it)  # What happens here?"),
          new CodeLine(""),
          new CodeLine(
            "return None",
            StateEnum.ERROR,
            "Incorrect. Calling next() on an exhausted iterator raises an exception, not returns None.",
          ),
          new CodeLine(
            "raise StopIteration",
            StateEnum.CORRECT,
            "Correct! Python automatically raises StopIteration when the iterator is exhausted. This signals the end of iteration.",
            15,
          ),
          new CodeLine(
            "raise EndOfIterator",
            StateEnum.WRONG,
            "No such exception exists in Python's standard library.",
          ),
          new CodeLine(
            "raise GeneratorExit",
            StateEnum.WRONG,
            "GeneratorExit is only raised when explicitly closing a generator with close().",
          ),
          new CodeLine(
            "pass  # Nothing happens",
            StateEnum.WRONG,
            "Incorrect. Something DOES happen - an exception is raised.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "When an iterator runs out of items, Python doesn't silently return None. Instead, it raises a specific exception that tells the for-loop to stop. Identify which exception is raised.",
    )
    .setCategory("Generators & Iterators")
    .build(),

  new GameBuilder()
    .setTitle("Generator Expression Brackets")
    .setHref("gen-expr-syntax")
    .setTags([kt.syntax, kt.comprehensions])
    .setSynopsis("A memory-efficient alternative to lists.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("# Create a memory-efficient generator"),
          new CodeLine("nums = range(1000)"),
          new CodeLine(
            "gen = [x * 2 for x in nums]",
            StateEnum.ERROR,
            "Error found! Square brackets create a full list. We need a generator instead.",
          ),
          new CodeLine(
            "gen = (x * 2 for x in nums)",
            StateEnum.CORRECT,
            "Correct! Parentheses create a generator expression that yields values on demand.",
            15,
          ),
          new CodeLine(
            "gen = {x * 2 for x in nums}",
            StateEnum.WRONG,
            "Curly braces create a set comprehension, which still loads everything into memory.",
          ),
          new CodeLine(
            "gen = <x * 2 for x in nums>",
            StateEnum.WRONG,
            "Invalid syntax. Angle brackets don't work for generators in Python.",
          ),
          new CodeLine(
            "gen = (x for x in nums) * 2",
            StateEnum.WRONG,
            "Syntax error. This multiplies the generator object itself, not the values.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Identify the syntax used to create a generator expression (memory efficient) instead of a list comprehension.",
    )
    .setCategory("Generators & Iterators")
    .build(),

  new GameBuilder()
    .setTitle("The iter() Function")
    .setHref("gen-iter-builtin")
    .setTags([kt.basics, kt.ds])
    .setSynopsis("Turning a list into an iterator.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("nums = [1, 2, 3]"),
          new CodeLine(
            "it = nums.to_iter()",
            StateEnum.ERROR,
            "Lists don't have a '.to_iter()' method.",
          ),
          new CodeLine(
            "it = iter(nums)",
            StateEnum.CORRECT,
            "Correct! 'iter()' is the builtin function to get an iterator.",
            10,
          ),
          new CodeLine(
            "it = iterator(nums)",
            StateEnum.WRONG,
            "'iterator' is not a built-in function.",
          ),
          new CodeLine(
            "it = nums.get_iterator()",
            StateEnum.WRONG,
            "Lists don't have this method.",
          ),
          new CodeLine(
            "it = list_to_iter(nums)",
            StateEnum.WRONG,
            "Not a standard Python function.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Which built-in function returns an iterator from an iterable object like a list or string?",
    )
    .setCategory("Generators & Iterators")
    .build(),
];
