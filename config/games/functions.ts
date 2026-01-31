import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const functionGames: Game[] = [
  new GameBuilder()
    .setTitle("Defining a Function")
    .setHref("function-def-1")
    .setTags([kt.syntax, kt.function])
    .setSynopsis("Master the basic syntax for defining a function in Python.")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "func greet(name):",
            StateEnum.ERROR,
            "The keyword should be 'def', not 'func'.",
          ),
          new CodeLine(
            "def greet(name):",
            StateEnum.CORRECT,
            "Correct! 'def' is the keyword to define functions.",
            10,
          ),
          new CodeLine(
            "define greet(name):",
            StateEnum.WRONG,
            "No, 'define' is not used in Python.",
          ),
          new CodeLine("  print(f'Hello, {name}')"),
        ],
        "python",
      ),
    )
    .setText(
      "Identify the correct keyword used to define a function in Python. Spot the line that makes a mistake common in other languages.",
    )
    .setCategory("Functions")
    .build(),

  new GameBuilder()
    .setTitle("The Missing Colon")
    .setHref("function-colon-1")
    .setTags([kt.syntax, kt.function])
    .setSynopsis("Don't forget the signature's punctuation.")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "def calculate_area(radius)",
            StateEnum.ERROR,
            "Missing colon at the end of the function signature.",
          ),
          new CodeLine(
            "def calculate_area(radius):",
            StateEnum.CORRECT,
            "Perfect. Every function header must end with a colon.",
            10,
          ),
          new CodeLine(
            "def calculate_area{radius}",
            StateEnum.WRONG,
            "Python uses parentheses for arguments, not curly braces.",
          ),
          new CodeLine(
            "def calculate_area(radius);",
            StateEnum.WRONG,
            "Semicolons are statement terminators in other languages, not function definition syntax in Python.",
          ),
          new CodeLine(
            "def calculate_area[radius]",
            StateEnum.WRONG,
            "Square brackets are for lists/indexing, not function parameters.",
          ),
          new CodeLine("  return 3.14 * radius ** 2"),
        ],
        "python",
      ),
    )
    .setText(
      "Every function definition head needs a specific piece of punctuation. Can you find where it's missing?",
    )
    .setCategory("Functions")
    .build(),

  new GameBuilder()
    .setTitle("Function Indentation")
    .setHref("function-indent-1")
    .setTags([kt.syntax, kt.function])
    .setSynopsis("Keep your function code aligned correctly.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def get_first_item(items):"),
          new CodeLine(
            "return items[0]",
            StateEnum.ERROR,
            "The function body must be indented.",
          ),
          new CodeLine(
            "  return items[0]",
            StateEnum.CORRECT,
            "Correct! Indentation is how Python defines scope.",
            10,
          ),
          new CodeLine(
            "    return items[0]",
            StateEnum.WRONG,
            "While technically valid if alone, 2 spaces or 4 spaces is the standard, not over-indenting randomly.",
          ),
          new CodeLine(
            " return items[0]",
            StateEnum.WRONG,
            "Single space indentation is inconsistent and not recommended.",
          ),
          new CodeLine(
            "return items[0]",
            StateEnum.WRONG,
            "No indentation at all breaks the function structure.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Python logic relies on blocks of space. Look at the return statement—is it where it belongs?",
    )
    .setCategory("Functions")
    .build(),

  new GameBuilder()
    .setTitle("Default Argument Order")
    .setHref("function-args-order")
    .setTags([kt.syntax, kt.function])
    .setSynopsis("Learn the rules of positional and default arguments.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "def create_user(role='Guest', username):",
            StateEnum.ERROR,
            "Non-default arguments cannot follow default arguments.",
          ),
          new CodeLine(
            "def create_user(username, role='Guest'):",
            StateEnum.CORRECT,
            "Correct. Required arguments must come before optional (default) ones.",
            10,
          ),
          new CodeLine(
            "def create_user(username='Default', role='Guest'):",
            StateEnum.WRONG,
            "This is valid but doesn't fix the original error where username had no default.",
          ),
          new CodeLine(
            "def create_user(username, role):",
            StateEnum.WRONG,
            "Removing the default makes both required, but doesn't fix the ordering issue.",
          ),
          new CodeLine(
            "def create_user(role, username='Guest'):",
            StateEnum.WRONG,
            "Still incorrect - swapping positions doesn't fix default-before-required.",
          ),
          new CodeLine("  return {'user': username, 'role': role}"),
        ],
        "python",
      ),
    )
    .setText(
      "A common mistake is putting a default argument (like role='Guest') before a required one (like username). Find the legal version.",
    )
    .setCategory("Functions")
    .build(),

  new GameBuilder()
    .setTitle("The Return Typo")
    .setHref("function-return-typo")
    .setTags([kt.syntax, kt.function])
    .setSynopsis("A small typo can break your entire function output.")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def multiply(a, b):"),
          new CodeLine("  result = a * b"),
          new CodeLine(
            "  retun result",
            StateEnum.ERROR,
            "Spelling mistake! It should be 'return'.",
          ),
          new CodeLine(
            "  return result",
            StateEnum.CORRECT,
            "Great catch! Keyword spelling matters.",
            10,
          ),
          new CodeLine(
            "  yield result",
            StateEnum.WRONG,
            "Yield makes this a generator, which isn't what we want for a simple multiply function.",
          ),
          new CodeLine(
            "  ret result",
            StateEnum.WRONG,
            "'ret' is not a Python keyword at all.",
          ),
          new CodeLine(
            "  returns result",
            StateEnum.WRONG,
            "The keyword is 'return', not 'returns'.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Even experts make typos. Find the incorrect 'return' keyword and fix it.",
    )
    .setCategory("Functions")
    .build(),

  new GameBuilder()
    .setTitle("Parameter Naming")
    .setHref("function-param-name")
    .setTags([kt.syntax, kt.function])
    .setSynopsis("Can you name a parameter anything you want?")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "def add_bonus(score, 1st_place):",
            StateEnum.ERROR,
            "Variable names cannot start with a number.",
          ),
          new CodeLine(
            "def add_bonus(score, first_place):",
            StateEnum.CORRECT,
            "Correct! Names must start with a letter or underscore.",
            10,
          ),
          new CodeLine(
            "def add_bonus(score, @place):",
            StateEnum.WRONG,
            "Special characters like '@' are not allowed in parameter names.",
          ),
          new CodeLine(
            "def add_bonus(score, first-place):",
            StateEnum.WRONG,
            "Hyphens are not allowed; use underscores instead.",
          ),
          new CodeLine(
            "def add_bonus(score, 1place):",
            StateEnum.WRONG,
            "Even without 'st', starting with a digit is still invalid.",
          ),
          new CodeLine("  return score + 100 if first_place else score"),
        ],
        "python",
      ),
    )
    .setText(
      "Rules for variables also apply to parameters. Spot the invalid parameter name that breaks the rules.",
    )
    .setCategory("Functions")
    .build(),

  new GameBuilder()
    .setTitle("Function Scope")
    .setHref("function-scope-error")
    .setTags([kt.basics, kt.function])
    .setSynopsis("What happens inside the function stays inside.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def compute():"),
          new CodeLine("  internal_val = 42"),
          new CodeLine("compute()"),
          new CodeLine(
            "print(internal_val)",
            StateEnum.ERROR,
            "'internal_val' is local to compute() and cannot be accessed globally.",
          ),
          new CodeLine(
            "val = compute()",
            StateEnum.WRONG,
            "Executing the function is fine, but it doesn't solve the access error below.",
          ),
          new CodeLine(
            "print(compute.internal_val)",
            StateEnum.WRONG,
            "Functions don't have attribute access to their local variables.",
          ),
          new CodeLine(
            "print(global internal_val)",
            StateEnum.WRONG,
            "'global' is a statement, not something you can call in print().",
          ),
          new CodeLine(
            "# Access global variables only",
            StateEnum.CORRECT,
            "Correct. You'd need to return the value or define it globally.",
            10,
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Variables created inside a function are 'Local'. Trying to use them outside causes a NameError. Spot the illegal access.",
    )
    .setCategory("Functions")
    .build(),

  new GameBuilder()
    .setTitle("Keyword Arguments Call")
    .setHref("function-kwarg-call")
    .setTags([kt.syntax, kt.function])
    .setSynopsis("Proper syntax for calling functions with keywords.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def settings(volume, brightness):"),
          new CodeLine("  pass"),
          new CodeLine(
            "settings(volume: 10, brightness: 50)",
            StateEnum.ERROR,
            "Python uses '=' for keyword arguments, not colons.",
          ),
          new CodeLine(
            "settings(volume=10, brightness=50)",
            StateEnum.CORRECT,
            "Correct! Colons are for dictionaries, '=' is for arguments.",
            10,
          ),
          new CodeLine(
            "settings(10, 50)",
            StateEnum.WRONG,
            "Positional is valid but doesn't fix the keyword syntax error.",
          ),
          new CodeLine(
            "settings('volume'=10, 'brightness'=50)",
            StateEnum.WRONG,
            "Keyword names shouldn't be in quotes; they're identifiers.",
          ),
          new CodeLine(
            "settings({volume: 10, brightness: 50})",
            StateEnum.WRONG,
            "That passes a dictionary as a single argument, not keyword args.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "When using keyword arguments in a function call, Python expects a specific operator. Don't confuse it with JSON/Dictionary syntax!",
    )
    .setCategory("Functions")
    .build(),

  new GameBuilder()
    .setTitle("Lambda Functions")
    .setHref("function-lambda-syntax")
    .setTags([kt.syntax, kt.function])
    .setSynopsis("One-liners need proper structure too.")
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "add = lambda x, y -> x + y",
            StateEnum.ERROR,
            "Python lambdas use a colon ':' to separate arguments from expression.",
          ),
          new CodeLine(
            "add = lambda x, y: x + y",
            StateEnum.CORRECT,
            "Perfect! lambda [args]: [expression] is the way.",
            10,
          ),
          new CodeLine(
            "add = def(x, y): return x + y",
            StateEnum.WRONG,
            "You can't use 'def' in a variable assignment like this.",
          ),
          new CodeLine(
            "add = lambda (x, y): x + y",
            StateEnum.WRONG,
            "Lambda parameters don't need parentheses around them in Python 3.",
          ),
          new CodeLine(
            "add = lambda x, y => x + y",
            StateEnum.WRONG,
            "'=>' is JavaScript syntax; Python uses ':'.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Anonymous functions (lambdas) have a very specific syntax. Help fix this arrow-function attempt from another language.",
    )
    .setCategory("Functions")
    .build(),

  new GameBuilder()
    .setTitle("Function Re-definition")
    .setHref("function-redef-logic")
    .setTags([kt.basics, kt.function])
    .setSynopsis("What happens when you name two functions the same thing?")
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def action():"),
          new CodeLine("  return 'Running'"),
          new CodeLine("def action():"),
          new CodeLine("  return 'Walking'"),
          new CodeLine("print(action()) # Expects Walking", StateEnum.NORMAL),
          new CodeLine(
            "# Important: The second definition overwrites the first.",
            StateEnum.CORRECT,
            "Correct! Python doesn't support method overloading like Java.",
            10,
          ),
          new CodeLine(
            "error: Duplicate Function",
            StateEnum.WRONG,
            "Python won't throw an error; it just updates the name to the new function.",
          ),
          new CodeLine(
            "# Both functions remain available via action_1() and action_2()",
            StateEnum.WRONG,
            "No, Python doesn't auto-rename functions; the first is simply lost.",
          ),
          new CodeLine(
            "# The function behavior merges both implementations",
            StateEnum.WRONG,
            "Functions don't merge; the last definition completely replaces the first.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "In Python, assigning a function name twice doesn't cause a crash—it simply overwrites the first one. Understand this behavior!",
    )
    .setCategory("Functions")
    .build(),
];
