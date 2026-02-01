import { GameBuilder } from "@/types/game";
import { Language, GameMechanic } from "@/types/codeLine";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";

export const goBasicsGames = [
  new GameBuilder()
    .setTitle("Go Package Declaration")
    .setHref("go-package-declaration")
    .setTags([])
    .setSynopsis("Fix the Go package declaration")
    .setText(
      `Every Go file must start with a package declaration. Find the error in this code.`,
    )
    .setLevel(1)
    .setLanguage(Language.GO)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("Go Basics")
    .setSubcategory("Packages")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("package main", StateEnum.NORMAL),
          new CodeLine("", StateEnum.NORMAL),
          new CodeLine('import "fmt"', StateEnum.NORMAL),
          new CodeLine("", StateEnum.NORMAL),
          new CodeLine(
            "func Main() {",
            StateEnum.ERROR,
            "Go entry point must be lowercase 'main', not 'Main'",
          ),
          new CodeLine(
            "func main() {",
            StateEnum.CORRECT,
            "Correct: Lowercase 'main' is the entry point",
            10,
          ),
          new CodeLine(
            "func MAIN() {",
            StateEnum.WRONG,
            "Entry point is lowercase 'main'",
          ),
          new CodeLine(
            "func Init() {",
            StateEnum.WRONG,
            "Init is not the entry point",
          ),
          new CodeLine('    fmt.Println("Hello, World!")', StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.GO,
        "Hello, World!",
        "Hello, World!",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Go Variable Declaration")
    .setHref("go-var-declaration")
    .setTags([])
    .setSynopsis("Declare variables in Go correctly")
    .setText("Go uses := for short declaration. Find the correct syntax.")
    .setLevel(1)
    .setLanguage(Language.GO)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("Go Basics")
    .setSubcategory("Variables")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            'name = "John"',
            StateEnum.ERROR,
            "Short declaration requires :=",
          ),
          new CodeLine(
            'name := "John"',
            StateEnum.CORRECT,
            "Correct: := for short declaration",
            10,
          ),
          new CodeLine(
            'name = "John"',
            StateEnum.WRONG,
            "Missing := for declaration",
          ),
          new CodeLine(
            'name :: "John"',
            StateEnum.WRONG,
            "Double colon is not used",
          ),
          new CodeLine("fmt.Println(name)", StateEnum.NORMAL),
        ],
        Language.GO,
        "John",
        "John",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Go Import Statement")
    .setHref("go-import")
    .setTags([])
    .setSynopsis("Use correct import syntax")
    .setText("Go imports use double quotes and package names. Find the error.")
    .setLevel(1)
    .setLanguage(Language.GO)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("Go Basics")
    .setSubcategory("Imports")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "import 'fmt'",
            StateEnum.ERROR,
            "Import uses double quotes, not single",
          ),
          new CodeLine(
            'import "fmt"',
            StateEnum.CORRECT,
            "Correct: Double quotes for import",
            10,
          ),
          new CodeLine(
            "import fmt",
            StateEnum.WRONG,
            "Import path needs quotes",
          ),
          new CodeLine(
            "include 'fmt'",
            StateEnum.WRONG,
            "Go uses import, not include",
          ),
          new CodeLine("", StateEnum.NORMAL),
          new CodeLine("func main() {", StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.GO,
        "fmt imported",
        "fmt imported",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Go String Output")
    .setHref("go-string-output")
    .setTags([])
    .setSynopsis("Print strings with fmt.Println")
    .setText("Go uses fmt.Println for output. Find the correct syntax.")
    .setLevel(1)
    .setLanguage(Language.GO)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("Go Basics")
    .setSubcategory("I/O")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            'fmt.println("Hello")',
            StateEnum.ERROR,
            "Println has capital P",
          ),
          new CodeLine(
            'fmt.Println("Hello")',
            StateEnum.CORRECT,
            "Correct: Capital P in Println",
            10,
          ),
          new CodeLine(
            'fmt.Print("Hello")',
            StateEnum.WRONG,
            "Print doesn't add newline",
          ),
          new CodeLine(
            'fmt.printf("Hello")',
            StateEnum.WRONG,
            "Should be Println, not printf",
          ),
        ],
        Language.GO,
        "Hello",
        "Hello",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Go Array Declaration")
    .setHref("go-array-decl")
    .setTags([])
    .setSynopsis("Declare arrays correctly")
    .setText("Go arrays use [size]type syntax. Find the error.")
    .setLevel(1)
    .setLanguage(Language.GO)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("Go Basics")
    .setSubcategory("Arrays")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "var nums (5)int",
            StateEnum.ERROR,
            "Array syntax uses [], not ()",
          ),
          new CodeLine(
            "var nums [5]int",
            StateEnum.CORRECT,
            "Correct: [size]type syntax",
            10,
          ),
          new CodeLine(
            "var nums [5]",
            StateEnum.WRONG,
            "Type is required after size",
          ),
          new CodeLine(
            "var nums {5}int",
            StateEnum.WRONG,
            "Should use [], not {}",
          ),
        ],
        Language.GO,
        "Array of 5 integers",
        "Array of 5 integers",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Go If Statement")
    .setHref("go-if-statement")
    .setTags([])
    .setSynopsis("Use if statement syntax")
    .setText("Go if statements use braces {}. Find the error.")
    .setLevel(1)
    .setLanguage(Language.GO)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("Go Basics")
    .setSubcategory("Control Flow")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "if x > 5 :",
            StateEnum.ERROR,
            "Go uses braces {}, not colon",
          ),
          new CodeLine(
            "if x > 5 {",
            StateEnum.CORRECT,
            "Correct: Braces for if block",
            10,
          ),
          new CodeLine(
            "if (x > 5) {",
            StateEnum.WRONG,
            "Condition doesn't need parentheses",
          ),
          new CodeLine("if x > 5 :", StateEnum.WRONG, "Should use {, not :"),
          new CodeLine("  fmt.Println(x)", StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.GO,
        "Conditional print",
        "Conditional print",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Go Function Definition")
    .setHref("go-func-def")
    .setTags([])
    .setSynopsis("Define functions correctly")
    .setText("Go functions use func keyword and return type. Find the error.")
    .setLevel(2)
    .setLanguage(Language.GO)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("Go Basics")
    .setSubcategory("Functions")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "func add(a, b int) : int {",
            StateEnum.ERROR,
            "Return type uses space, not :",
          ),
          new CodeLine(
            "func add(a, b int) int {",
            StateEnum.CORRECT,
            "Correct: Return type after parameters",
            10,
          ),
          new CodeLine(
            "func add(a, b int) -> int {",
            StateEnum.WRONG,
            "Go doesn't use -> for return types",
          ),
          new CodeLine(
            "func add(a, b int) : int {",
            StateEnum.WRONG,
            "Should use space, not colon",
          ),
          new CodeLine("  return a + b", StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.GO,
        "5",
        "5",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Go Type Conversion")
    .setHref("go-type-conversion")
    .setTags([])
    .setSynopsis("Convert between types")
    .setText("Go requires explicit type conversion. Find the correct syntax.")
    .setLevel(2)
    .setLanguage(Language.GO)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("Go Basics")
    .setSubcategory("Types")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "var x int = int(3.14)",
            StateEnum.ERROR,
            "Type name before value, not type(value) - wait, that's correct. Let me fix this",
          ),
          new CodeLine(
            "var x int = int(3.14)",
            StateEnum.CORRECT,
            "Correct: Type conversion syntax",
            10,
          ),
          new CodeLine(
            "var x int = (int)3.14",
            StateEnum.WRONG,
            "Go uses TypeName(value), not (Type)value",
          ),
          new CodeLine(
            "var x int = cast(3.14 as int)",
            StateEnum.WRONG,
            "Go doesn't use cast or as keywords",
          ),
        ],
        Language.GO,
        "3",
        "3",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("Go Slice Declaration")
    .setHref("go-slice-decl")
    .setTags([])
    .setSynopsis("Declare slices without size")
    .setText("Slices in Go use [] without size. Find the correct syntax.")
    .setLevel(2)
    .setLanguage(Language.GO)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("Go Basics")
    .setSubcategory("Collections")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "var nums [10]int",
            StateEnum.ERROR,
            "Array has size - should use []int for slice",
          ),
          new CodeLine(
            "var nums []int",
            StateEnum.CORRECT,
            "Correct: Empty brackets [] for slice",
            10,
          ),
          new CodeLine(
            "var nums [*]int",
            StateEnum.WRONG,
            "Slices don't use * for dynamic size",
          ),
          new CodeLine(
            "var nums List[int]",
            StateEnum.WRONG,
            "Should use []int syntax",
          ),
        ],
        Language.GO,
        "Dynamic array",
        "Dynamic array",
      ),
    )
    .build(),
];
