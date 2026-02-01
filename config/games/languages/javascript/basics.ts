import { GameBuilder } from "@/types/game";
import { Language, GameMechanic } from "@/types/codeLine";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";

export const jsBasicsGames = [
  new GameBuilder()
    .setTitle("JavaScript Variable Declaration")
    .setHref("js-var-declaration")
    .setTags([])
    .setSynopsis("Fix the JavaScript variable declaration")
    .setText(
      `JavaScript has three ways to declare variables: var, let, and const. Find the error in this code.`,
    )
    .setLevel(1)
    .setLanguage(Language.JAVASCRIPT)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("JavaScript Basics")
    .setSubcategory("Variables")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine('let name = "John";', StateEnum.NORMAL),
          new CodeLine("const age = 25", StateEnum.ERROR, "Missing semicolon"),
          new CodeLine(
            "const age = 25;",
            StateEnum.CORRECT,
            "Correct: Semicolon added",
            10,
          ),
          new CodeLine("const age = 25", StateEnum.WRONG, "Missing semicolon"),
          new CodeLine(
            "var age = 25;",
            StateEnum.WRONG,
            "Should use const, not var",
          ),
          new CodeLine("console.log(name, age);", StateEnum.NORMAL),
        ],
        Language.JAVASCRIPT,
        "John 25",
        "John 25",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("JavaScript Function Declaration")
    .setHref("js-function-decl")
    .setTags([])
    .setSynopsis("Declare a function correctly")
    .setText(
      "Functions in JavaScript use the function keyword. Find the error.",
    )
    .setLevel(1)
    .setLanguage(Language.JAVASCRIPT)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("JavaScript Basics")
    .setSubcategory("Functions")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "func greet() {",
            StateEnum.ERROR,
            "Should be function, not func",
          ),
          new CodeLine(
            "function greet() {",
            StateEnum.CORRECT,
            "Correct: function keyword",
            10,
          ),
          new CodeLine(
            "def greet() {",
            StateEnum.WRONG,
            "def is Python syntax, use function",
          ),
          new CodeLine(
            "func greet() {",
            StateEnum.WRONG,
            "func is Go syntax, use function",
          ),
          new CodeLine('  console.log("Hello");', StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.JAVASCRIPT,
        "Hello",
        "Hello",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("JavaScript String Quotes")
    .setHref("js-string-quotes")
    .setTags([])
    .setSynopsis("Use correct string quotation")
    .setText(
      "JavaScript strings use quotes: single, double, or backticks. Find the error.",
    )
    .setLevel(1)
    .setLanguage(Language.JAVASCRIPT)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("JavaScript Basics")
    .setSubcategory("Strings")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            'let msg = "Hello World;',
            StateEnum.ERROR,
            "Missing closing quote",
          ),
          new CodeLine(
            'let msg = "Hello World";',
            StateEnum.CORRECT,
            "Correct: Closing quote added",
            10,
          ),
          new CodeLine(
            "let msg = 'Hello World';",
            StateEnum.WRONG,
            "Mixed quote types (started with \" but ended with ')",
          ),
          new CodeLine(
            'let msg = "Hello World;',
            StateEnum.WRONG,
            "Missing closing quote",
          ),
          new CodeLine("console.log(msg);", StateEnum.NORMAL),
        ],
        Language.JAVASCRIPT,
        "Hello World",
        "Hello World",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("JavaScript Array Access")
    .setHref("js-array-access")
    .setTags([])
    .setSynopsis("Access array elements correctly")
    .setText("Arrays use square brackets for index access. Find the error.")
    .setLevel(1)
    .setLanguage(Language.JAVASCRIPT)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("JavaScript Basics")
    .setSubcategory("Arrays")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("let arr = [1, 2, 3];", StateEnum.NORMAL),
          new CodeLine(
            "let first = arr(0);",
            StateEnum.ERROR,
            "Should use brackets [], not parentheses ()",
          ),
          new CodeLine(
            "let first = arr[0];",
            StateEnum.CORRECT,
            "Correct: Square brackets for array access",
            10,
          ),
          new CodeLine(
            "let first = arr{0};",
            StateEnum.WRONG,
            "Curly braces are for objects, not arrays",
          ),
          new CodeLine(
            "let first = arr.0;",
            StateEnum.WRONG,
            "Dot notation not used for numeric indices",
          ),
        ],
        Language.JAVASCRIPT,
        "1",
        "1",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("JavaScript Object Property")
    .setHref("js-object-property")
    .setTags([])
    .setSynopsis("Access object properties correctly")
    .setText(
      "Object properties use dot notation or bracket notation. Find the error.",
    )
    .setLevel(1)
    .setLanguage(Language.JAVASCRIPT)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("JavaScript Basics")
    .setSubcategory("Objects")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "let user = { name: 'John', age: 25 };",
            StateEnum.NORMAL,
          ),
          new CodeLine(
            "let age = user[age];",
            StateEnum.ERROR,
            "String property should be quoted: user['age']",
          ),
          new CodeLine(
            "let age = user['age'];",
            StateEnum.CORRECT,
            "Correct: Property name in quotes",
            10,
          ),
          new CodeLine(
            "let age = user(age);",
            StateEnum.WRONG,
            "Parentheses used instead of brackets",
          ),
          new CodeLine(
            "let age = user.age;",
            StateEnum.WRONG,
            "Missing quotes in bracket notation",
          ),
        ],
        Language.JAVASCRIPT,
        "25",
        "25",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("JavaScript Comparison Operator")
    .setHref("js-comparison")
    .setTags([])
    .setSynopsis("Use correct comparison operator")
    .setText("JavaScript uses === for strict equality. Find the error.")
    .setLevel(1)
    .setLanguage(Language.JAVASCRIPT)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("JavaScript Basics")
    .setSubcategory("Operators")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("let x = 5;", StateEnum.NORMAL),
          new CodeLine(
            "if (x = 5) {",
            StateEnum.ERROR,
            "Assignment (=) used instead of comparison (===)",
          ),
          new CodeLine(
            "if (x === 5) {",
            StateEnum.CORRECT,
            "Correct: === for strict equality comparison",
            10,
          ),
          new CodeLine(
            "if (x == 5) {",
            StateEnum.WRONG,
            "Loose equality (==) instead of strict (===)",
          ),
          new CodeLine(
            "if (x = 5) {",
            StateEnum.WRONG,
            "Assignment operator instead of comparison",
          ),
          new CodeLine('  console.log("Equal");', StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.JAVASCRIPT,
        "Equal",
        "Equal",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("JavaScript Arrow Function")
    .setHref("js-arrow-function")
    .setTags([])
    .setSynopsis("Use arrow function syntax correctly")
    .setText("Arrow functions use =>. Find the correct syntax.")
    .setLevel(2)
    .setLanguage(Language.JAVASCRIPT)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("JavaScript Basics")
    .setSubcategory("Functions")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "const add = (a, b) -> {",
            StateEnum.ERROR,
            "Arrow uses =>, not ->",
          ),
          new CodeLine(
            "const add = (a, b) => {",
            StateEnum.CORRECT,
            "Correct: Fat arrow syntax =>",
            10,
          ),
          new CodeLine(
            "const add = (a, b) -> {",
            StateEnum.WRONG,
            "Arrow should be =>, not ->",
          ),
          new CodeLine(
            "const add = (a, b) : {",
            StateEnum.WRONG,
            "Colon is for type hints, not arrow function",
          ),
          new CodeLine("  return a + b;", StateEnum.NORMAL),
          new CodeLine("};", StateEnum.NORMAL),
        ],
        Language.JAVASCRIPT,
        "7",
        "7",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("JavaScript Template Literal")
    .setHref("js-template-literal")
    .setTags([])
    .setSynopsis("Use template literals with backticks")
    .setText("Template literals use backticks (`) not quotes. Find the error.")
    .setLevel(2)
    .setLanguage(Language.JAVASCRIPT)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("JavaScript Basics")
    .setSubcategory("Strings")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            'let name = "John"',
            StateEnum.ERROR,
            "Missing semicolon",
          ),
          new CodeLine(
            'let name = "John";',
            StateEnum.CORRECT,
            "Correct: Semicolon added",
            10,
          ),
          new CodeLine(
            "let greeting = 'Hello ' + name + '!';",
            StateEnum.WRONG,
            "String concatenation instead of template literal",
          ),
          new CodeLine(
            "let greeting = 'Hello ${name}!';",
            StateEnum.WRONG,
            "Template literals use backticks, not single quotes",
          ),
          new CodeLine(
            'let greeting = "Hello ${name}!";',
            StateEnum.WRONG,
            "Template literals use backticks, not double quotes",
          ),
        ],
        Language.JAVASCRIPT,
        "John",
        "John",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("JavaScript For Loop")
    .setHref("js-for-loop")
    .setTags([])
    .setSynopsis("Write a for loop correctly")
    .setText(
      "For loops have three parts: init; condition; increment. Find the error.",
    )
    .setLevel(2)
    .setLanguage(Language.JAVASCRIPT)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("JavaScript Basics")
    .setSubcategory("Loops")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "for (let i = 0 i < 5, i++) {",
            StateEnum.ERROR,
            "Should use semicolons (;) not commas",
          ),
          new CodeLine(
            "for (let i = 0; i < 5; i++) {",
            StateEnum.CORRECT,
            "Correct: Semicolons separate parts",
            10,
          ),
          new CodeLine(
            "for (let i = 0, i < 5, i++) {",
            StateEnum.WRONG,
            "Commas instead of semicolons",
          ),
          new CodeLine(
            "for (let i = 0; i < 5 i++) {",
            StateEnum.WRONG,
            "Missing semicolon before i++",
          ),
          new CodeLine("  console.log(i);", StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.JAVASCRIPT,
        "0 1 2 3 4",
        "0 1 2 3 4",
      ),
    )
    .build(),
];
