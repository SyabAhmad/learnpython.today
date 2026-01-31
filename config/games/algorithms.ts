import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const algorithmGames: Game[] = [
  new GameBuilder()
    .setTitle("Stable Sorting")
    .setHref("algo-sort-key")
    .setTags([kt.algorithms])
    .setSynopsis("Sorting by a specific property.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "data = [{'name': 'A', 'age': 25}, {'name': 'B', 'age': 20}]",
          ),
          new CodeLine(
            "data.sort(by='age')",
            StateEnum.ERROR,
            "The sorting method uses a 'key' parameter, not 'by'.",
          ),
          new CodeLine(
            "data.sort(key=lambda x: x['age'])",
            StateEnum.CORRECT,
            "Correct! The 'key' function determines the sorting criteria.",
            10,
          ),
          new CodeLine(
            "data.sort(x['age'])",
            StateEnum.WRONG,
            "You must provide the key as a keyword argument.",
          ),
        ],
        "python",
      ),
    )
    .setText("How do you sort a list of dictionaries by the 'age' key?")
    .setCategory("Algorithms")
    .build(),

  new GameBuilder()
    .setTitle("Binary Search Concept")
    .setHref("algo-binary-search")
    .setTags([kt.algorithms])
    .setSynopsis("Efficiently finding an element.")
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("# Binary search only works on sorted data."),
          new CodeLine("def binary_search(arr, target):"),
          new CodeLine("  low, high = 0, len(arr) - 1"),
          new CodeLine("  mid = (low + high) // 2", StateEnum.NORMAL),
          new CodeLine("  if arr[mid] < target:"),
          new CodeLine(
            "    low = mid",
            StateEnum.ERROR,
            "You should set 'low = mid + 1' to avoid an infinite loop and exclude the current mid.",
          ),
          new CodeLine(
            "    low = mid + 1",
            StateEnum.CORRECT,
            "Correct! Exclude the middle element to narrow the search correctly.",
            10,
          ),
          new CodeLine("    low = mid - 1", StateEnum.WRONG),
        ],
        "python",
      ),
    )
    .setText(
      "In a binary search, if the target is greater than the middle element, how should you update the 'low' index?",
    )
    .setCategory("Algorithms")
    .build(),

  new GameBuilder()
    .setTitle("Reverse Sorting")
    .setHref("algo-sort-reverse")
    .setTags([kt.syntax, kt.algorithms])
    .setSynopsis("Sorting in descending order.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("nums = [1, 5, 2]"),
          new CodeLine(
            "nums.sort(desc=True)",
            StateEnum.ERROR,
            "The parameter name is 'reverse', not 'desc'.",
          ),
          new CodeLine(
            "nums.sort(reverse=True)",
            StateEnum.CORRECT,
            "Correct! 'reverse=True' sorts in descending order.",
            10,
          ),
          new CodeLine("nums.sort(-1)", StateEnum.WRONG),
        ],
        "python",
      ),
    )
    .setText(
      "Identify the correct keyword argument to sort a list in descending order.",
    )
    .setCategory("Algorithms")
    .build(),

  new GameBuilder()
    .setTitle("Sort vs Sorted")
    .setHref("algo-sort-vs-sorted")
    .setTags([kt.basics, kt.algorithms])
    .setSynopsis("In-place mutable sort vs a new list.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("a = [3, 1, 2]"),
          new CodeLine("b = a.sort()"),
          new CodeLine("print(b) # What is printed?"),
          new CodeLine(
            "[1, 2, 3]",
            StateEnum.ERROR,
            "a.sort() modifies the list in-place and returns None.",
          ),
          new CodeLine(
            "None",
            StateEnum.CORRECT,
            "Correct! The '.sort()' method always returns None.",
            10,
          ),
          new CodeLine("Exception", StateEnum.WRONG),
        ],
        "python",
      ),
    )
    .setText("What is the return value of the list '.sort()' method?")
    .setCategory("Algorithms")
    .build(),

  new GameBuilder()
    .setTitle("Time Complexity: Access")
    .setHref("algo-complexity-list")
    .setTags([kt.algorithms])
    .setSynopsis("Understanding list performance.")
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("# Assessing time complexity of a[i]"),
          new CodeLine(
            "O(n)",
            StateEnum.WRONG,
            "This is the complexity of searching for a value, not accessing by index.",
          ),
          new CodeLine(
            "O(1)",
            StateEnum.CORRECT,
            "Correct! Accessing a list element by index is a constant time operation.",
            10,
          ),
          new CodeLine("O(log n)", StateEnum.ERROR),
        ],
        "python",
      ),
    )
    .setText(
      "What is the big-O time complexity of accessing an element in a Python list by its index?",
    )
    .setCategory("Algorithms")
    .build(),
];
