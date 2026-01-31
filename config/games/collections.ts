import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const collectionGames: Game[] = [
  new GameBuilder()
    .setTitle("Default Values in Dicts")
    .setHref("coll-defaultdict")
    .setTags([kt.syntax, kt.ds])
    .setSynopsis("Avoid KeyErrors automatically.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("from collections import defaultdict"),
          new CodeLine(
            "counts = defaultdict(0)",
            StateEnum.ERROR,
            "defaultdict requires a callable (like 'int' or 'list'), not a raw value.",
          ),
          new CodeLine(
            "counts = defaultdict(int)",
            StateEnum.CORRECT,
            "Correct! 'int' returns 0 when called, which initializes the key.",
            10,
          ),
          new CodeLine(
            "counts = defaultdict(lambda: 0)",
            StateEnum.NORMAL,
            "This also works, but 'int' is the standard way to count.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "How do you correctly initialize a defaultdict to start counting from zero?",
    )
    .setCategory("Collections")
    .build(),

  new GameBuilder()
    .setTitle("Counting Items Fast")
    .setHref("coll-counter-basic")
    .setTags([kt.basics, kt.ds])
    .setSynopsis("Frequency analysis made easy.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("from collections import Counter"),
          new CodeLine("c = Counter(['a', 'b', 'a'])"),
          new CodeLine("print(c['a']) # returns 2"),
          new CodeLine("print(c['z']) # What happens here?"),
          new CodeLine("ValueError", StateEnum.WRONG),
          new CodeLine(
            "0",
            StateEnum.CORRECT,
            "Correct! Counter returns 0 for missing keys instead of raising a KeyError.",
            10,
          ),
          new CodeLine(
            "KeyError",
            StateEnum.ERROR,
            "Regular dicts raise KeyError, but Counter does not.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "What value does a Counter object return if you try to access a key that doesn't exist?",
    )
    .setCategory("Collections")
    .build(),

  new GameBuilder()
    .setTitle("The Double-Ended Queue")
    .setHref("coll-deque-methods")
    .setTags([kt.syntax, kt.ds])
    .setSynopsis("Efficient pops and appends from both sides.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("from collections import deque"),
          new CodeLine("dq = deque([1, 2, 3])"),
          new CodeLine(
            "dq.unshift(0)",
            StateEnum.ERROR,
            "The method to add to the left in Python is 'appendleft()'.",
          ),
          new CodeLine(
            "dq.appendleft(0)",
            StateEnum.CORRECT,
            "Correct! deque provides O(1) appends to either end.",
            10,
          ),
          new CodeLine("dq.push(0)", StateEnum.WRONG),
        ],
        "python",
      ),
    )
    .setText("Which method adds an item to the beginning (index 0) of a deque?")
    .setCategory("Collections")
    .build(),

  new GameBuilder()
    .setTitle("Named Tuples")
    .setHref("coll-namedtuple")
    .setTags([kt.syntax, kt.ds])
    .setSynopsis("Access tuple items by name.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("from collections import namedtuple"),
          new CodeLine("Point = namedtuple('Point', ['x', 'y'])"),
          new CodeLine("p = Point(10, 20)"),
          new CodeLine(
            "print(p.x)",
            StateEnum.CORRECT,
            "Correct! namedtuple allows attribute access like an object.",
            10,
          ),
          new CodeLine(
            "print(p['x'])",
            StateEnum.ERROR,
            "Namedtuples are still tuples, so they don't support string indexing like dicts.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Identify the correct way to access the 'x' field of a namedtuple instance.",
    )
    .setCategory("Collections")
    .build(),

  new GameBuilder()
    .setTitle("Ordered Dictionaries")
    .setHref("coll-ordereddict")
    .setTags([kt.basics, kt.ds])
    .setSynopsis("When insertion order matters.")
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "# Note: Since Python 3.7+, regular dicts preserve order.",
          ),
          new CodeLine("# But OrderedDict still has unique features."),
          new CodeLine("from collections import OrderedDict"),
          new CodeLine("d = OrderedDict()"),
          new CodeLine(
            "d.move_to_end('key')",
            StateEnum.CORRECT,
            "Correct! OrderedDict has methods like 'move_to_end' that regular dicts lack.",
            10,
          ),
          new CodeLine(
            "d.push_last('key')",
            StateEnum.WRONG,
            "This is not a valid method for OrderedDict.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Which unique method does OrderedDict provide that standard Python dictionaries do not?",
    )
    .setCategory("Collections")
    .build(),
];
