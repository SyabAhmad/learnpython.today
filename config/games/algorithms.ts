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
            15,
          ),
          new CodeLine(
            "data.sort(x['age'])",
            StateEnum.WRONG,
            "You must provide the key as a keyword argument like 'key=...'.",
          ),
          new CodeLine(
            "data.sort(lambda x: x['age'])",
            StateEnum.WRONG,
            "Positional arguments are not accepted for the sorting key.",
          ),
          new CodeLine(
            "data.sort(using=itemgetter('age'))",
            StateEnum.WRONG,
            "While itemgetter exists, the parameter name is still 'key'.",
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
          new CodeLine(
            "    low = mid - 1",
            StateEnum.WRONG,
            "This would narrow the range in the wrong direction.",
          ),
          new CodeLine(
            "    low = mid",
            StateEnum.WRONG,
            "This can lead to infinite loops if mid doesn't change.",
          ),
          new CodeLine(
            "    low = mid * 2",
            StateEnum.WRONG,
            "Moving outside the search space entirely.",
          ),
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
          new CodeLine(
            "nums.sort(-1)",
            StateEnum.WRONG,
            "Incorrect argument type.",
          ),
          new CodeLine(
            "nums.sort(descending=True)",
            StateEnum.WRONG,
            "Common name, but Python uses 'reverse'.",
          ),
          new CodeLine(
            "nums.sort(order='desc')",
            StateEnum.WRONG,
            "SQL-like, but not Python-like.",
          ),
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
          new CodeLine(
            "Exception",
            StateEnum.WRONG,
            "The code is valid, it just doesn't return the list.",
          ),
          new CodeLine(
            "[]",
            StateEnum.WRONG,
            "It doesn't return an empty list; it returns precisely None.",
          ),
          new CodeLine(
            "[3, 2, 1]",
            StateEnum.WRONG,
            "It doesn't return the original list either.",
          ),
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
          new CodeLine("# What is the time complexity of accessing a[5]?"),
          new CodeLine("my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"),
          new CodeLine("value = my_list[5]  # Direct index access"),
          new CodeLine(""),
          new CodeLine(
            "O(n)",
            StateEnum.WRONG,
            "Incorrect. O(n) complexity would apply if you had to search for a value.",
          ),
          new CodeLine(
            "O(1)",
            StateEnum.CORRECT,
            "Correct! Accessing a list element by index is a constant time operation, regardless of list size.",
            10,
          ),
          new CodeLine(
            "O(log n)",
            StateEnum.WRONG,
            "Incorrect. O(log n) complexity applies to binary search, not direct index access.",
          ),
          new CodeLine(
            "O(n log n)",
            StateEnum.WRONG,
            "Incorrect. O(n log n) is typically used for efficient sorting algorithms.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "What is the big-O time complexity of accessing an element in a Python list by its index? This is a fundamental property of how lists are stored in memory.",
    )
    .setCategory("Algorithms")
    .build(),
];
