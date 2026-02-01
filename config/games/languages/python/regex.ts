import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const regexGames: Game[] = [
  new GameBuilder()
    .setTitle("Importing Regex")
    .setHref("regex-import")
    .setTags([kt.syntax, kt.regex])
    .setSynopsis("Accessing the Regular Expression library.")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "import regex",
            StateEnum.ERROR,
            "The standard library module name is 're', not 'regex'.",
          ),
          new CodeLine(
            "import re",
            StateEnum.CORRECT,
            "Correct! 're' is the standard library module for regex.",
            10,
          ),
          new CodeLine(
            "from regular_expressions import search",
            StateEnum.WRONG,
            "No such module exists in the standard library.",
          ),
          new CodeLine(
            "from re import *",
            StateEnum.WRONG,
            "This works but is bad practice; 'import re' is preferred.",
          ),
          new CodeLine(
            "import regexp",
            StateEnum.WRONG,
            "'regexp' is not the standard name; use 're' instead.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Which module must you import to use regular expressions in Python?",
    )
    .setCategory("Regex")
    .build(),

  new GameBuilder()
    .setTitle("Match vs Search")
    .setHref("regex-match-vs-search")
    .setTags([kt.regex])
    .setSynopsis("Checking the start of a string.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("import re"),
          new CodeLine("text = 'Python is great'"),
          new CodeLine(
            "# I want to check if 'is' is at the START of the string",
          ),
          new CodeLine(
            "m = re.match('is', text)",
            StateEnum.WRONG,
            "This returns None because 'is' is not at the start.",
          ),
          new CodeLine(
            "m = re.search('is', text)",
            StateEnum.CORRECT,
            "Correct! search() finds the pattern anywhere in the string.",
            10,
          ),
          new CodeLine(
            "m = re.match('Python', text)",
            StateEnum.WRONG,
            "This works but doesn't demonstrate the difference from search().",
          ),
          new CodeLine(
            "m = re.findall('is', text)",
            StateEnum.WRONG,
            "findall() returns a list of all matches, not a match object.",
          ),
          new CodeLine(
            "m = re.find('is', text)",
            StateEnum.ERROR,
            "There's no 're.find()' method; use 'search()' or 'match()'.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Which function looks for a pattern anywhere in the string, as opposed to just the beginning?",
    )
    .setCategory("Regex")
    .build(),

  new GameBuilder()
    .setTitle("Raw Strings for Patterns")
    .setHref("regex-raw-strings")
    .setTags([kt.syntax, kt.regex])
    .setSynopsis("Handling backslashes correctly.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("# Looking for a digit \d"),
          new CodeLine(
            "pattern = '\d'",
            StateEnum.ERROR,
            "In standard strings, \d might be interpreted as an escape sequence. Use raw strings.",
          ),
          new CodeLine(
            "pattern = r'\d'",
            StateEnum.CORRECT,
            "Correct! prefixing with 'r' creates a raw string literal.",
            10,
          ),
          new CodeLine(
            "pattern = @'\d'",
            StateEnum.WRONG,
            "This is C# syntax, not Python.",
          ),
          new CodeLine(
            "pattern = `\d`",
            StateEnum.WRONG,
            "Backticks are used in JavaScript/Shell, not Python.",
          ),
          new CodeLine(
            "pattern = raw('\d')",
            StateEnum.WRONG,
            "There's no 'raw()' function; use the r prefix instead.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "What prefix should you add to a string literal to treat backslashes as literal characters (ideal for regex)?",
    )
    .setCategory("Regex")
    .build(),

  new GameBuilder()
    .setTitle("Finding All Matches")
    .setHref("regex-findall")
    .setTags([kt.regex])
    .setSynopsis("Extracting every occurrence.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("import re"),
          new CodeLine("prices = '10, 20, 30'"),
          new CodeLine(
            "all_pts = re.get_all('\d+', prices)",
            StateEnum.ERROR,
            "The method is 'findall()', not 'get_all()'.",
          ),
          new CodeLine(
            "all_pts = re.findall('\d+', prices)",
            StateEnum.CORRECT,
            "Correct! findall() returns a list of all matches.",
            10,
          ),
          new CodeLine(
            "all_pts = re.search_all('\d+', prices)",
            StateEnum.WRONG,
            "There's no 'search_all()' method in the re module.",
          ),
          new CodeLine(
            "all_pts = re.match_all('\d+', prices)",
            StateEnum.WRONG,
            "There's no 'match_all()' method; use 'findall()' instead.",
          ),
          new CodeLine(
            "all_pts = re.finditer('\d+', prices)",
            StateEnum.WRONG,
            "finditer() returns an iterator of match objects, not a list of strings.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Which function returns a list containing all matches of a pattern in a string?",
    )
    .setCategory("Regex")
    .build(),

  new GameBuilder()
    .setTitle("Capturing Groups")
    .setHref("regex-groups")
    .setTags([kt.regex])
    .setSynopsis("Extracting specific parts of a match.")
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("import re"),
          new CodeLine("m = re.search('(\w+)@(\w+)', 'user@site.com')"),
          new CodeLine(
            "user = m.capture(1)",
            StateEnum.ERROR,
            "Use the '.group()' method to retrieve specific subgroups.",
          ),
          new CodeLine(
            "user = m.group(1)",
            StateEnum.CORRECT,
            "Correct! group(1) retrieves the first captured group.",
            10,
          ),
          new CodeLine(
            "user = m[1]",
            StateEnum.WRONG,
            "Match objects don't support indexing; use .group() instead.",
          ),
          new CodeLine(
            "user = m.groups()[0]",
            StateEnum.WRONG,
            "This works but is more verbose; .group(1) is preferred.",
          ),
          new CodeLine(
            "user = m.get(1)",
            StateEnum.WRONG,
            "Match objects don't have a 'get()' method.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "After a successful match, how do you retrieve the value of the first captured group (parentheses subgroup)?",
    )
    .setCategory("Regex")
    .build(),
];
