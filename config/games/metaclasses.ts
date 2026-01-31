import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const metaclassGames: Game[] = [
  new GameBuilder()
    .setTitle("The Type of a Class")
    .setHref("meta-type-builtin")
    .setTags([kt.syntax, kt.metaclasses])
    .setSynopsis("Everything is an object.")
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("class MyClass: pass"),
          new CodeLine(
            "print(type(MyClass)) # What is the type of a class itself?",
          ),
          new CodeLine("'class'", StateEnum.WRONG),
          new CodeLine(
            "'type'",
            StateEnum.CORRECT,
            "Correct! In Python, 'type' is the default metaclass that creates classes.",
            10,
          ),
          new CodeLine(
            "'object'",
            StateEnum.ERROR,
            "Classes are objects, but their *type* is 'type'.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "In Python, what is the default metaclass used to construct classes?",
    )
    .setCategory("Metaclasses")
    .build(),

  new GameBuilder()
    .setTitle("Defining a Metaclass")
    .setHref("meta-inheritance")
    .setTags([kt.syntax, kt.metaclasses])
    .setSynopsis("Making a class factory.")
    .setLevel(5)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "class MyMeta(type):",
            StateEnum.CORRECT,
            "Correct! Custom metaclasses must inherit from 'type'.",
            10,
          ),
          new CodeLine(
            "class MyMeta(object):",
            StateEnum.ERROR,
            "Inheriting from object creates a regular class, not a metaclass.",
          ),
          new CodeLine(
            "class MyMeta(metaclass):",
            StateEnum.WRONG,
            "There is no built-in 'metaclass' class to inherit from.",
          ),
          new CodeLine("  pass"),
        ],
        "python",
      ),
    )
    .setText(
      "To create a custom metaclass, which base class must it inherit from?",
    )
    .setCategory("Metaclasses")
    .build(),

  new GameBuilder()
    .setTitle("Assigning a Metaclass")
    .setHref("meta-syntax-kwarg")
    .setTags([kt.syntax, kt.metaclasses])
    .setSynopsis("Applying a metaclass to a class.")
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "class User(metaclass=MyMeta):",
            StateEnum.CORRECT,
            "Correct! Metaclasses are assigned via the 'metaclass' keyword argument.",
            10,
          ),
          new CodeLine(
            "class User(MyMeta):",
            StateEnum.ERROR,
            "This would make MyMeta a parent class via inheritance, not its metaclass.",
          ),
          new CodeLine("@MyMeta"),
          new CodeLine(
            "class User: pass",
            StateEnum.WRONG,
            "Decorators can modify classes, but they are not the same as setting a metaclass.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Identify the correct syntax for assigning a custom metaclass to a new class in Python 3.",
    )
    .setCategory("Metaclasses")
    .build(),

  new GameBuilder()
    .setTitle("The __new__ method")
    .setHref("meta-new-method")
    .setTags([kt.metaclasses])
    .setSynopsis("Intercepting class creation.")
    .setLevel(5)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("class MyMeta(type):"),
          new CodeLine("  def __new__(cls, name, bases, attrs):"),
          new CodeLine("    # Modify attrs here"),
          new CodeLine(
            "    return super().__new__(cls, name, bases, attrs)",
            StateEnum.CORRECT,
            "Correct! __new__ is responsible for creating and returning the new class object.",
            10,
          ),
          new CodeLine(
            "    return super().__init__(cls, name, bases, attrs)",
            StateEnum.ERROR,
            "__init__ initializes an existing object; __new__ creates it.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Inside a metaclass, which method is responsible for actually allocating and returning the new class object?",
    )
    .setCategory("Metaclasses")
    .build(),

  new GameBuilder()
    .setTitle("Metaclass Purpose")
    .setHref("meta-use-case")
    .setTags([kt.metaclasses])
    .setSynopsis("When to use them.")
    .setLevel(5)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("# Metaclasses are best for:"),
          new CodeLine("Simple math calculations", StateEnum.WRONG),
          new CodeLine(
            "API validation and class registration",
            StateEnum.CORRECT,
            "Correct! Metaclasses are powerful for enforcing standards across many classes.",
            10,
          ),
          new CodeLine("Handling user input", StateEnum.ERROR),
        ],
        "python",
      ),
    )
    .setText(
      "What is a common real-world use case for utilizing custom metaclasses?",
    )
    .setCategory("Metaclasses")
    .build(),
];
