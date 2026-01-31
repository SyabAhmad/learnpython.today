import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const decoratorGames: Game[] = [
  new GameBuilder()
    .setTitle("Basic Decorator Syntax")
    .setHref("basic-decorator-syntax-1")
    .setTags([kt.python])
    .setSynopsis("Identify the correct decorator syntax")
    .setText("Choose the correct way to define a simple decorator.")
    .setLevel(3)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def my_decorator(func):"),
          new CodeLine("  def wrapper():"),
          new CodeLine("    return func()"),
          new CodeLine("  return wrapper"),
          new CodeLine(""),
          new CodeLine("@my_decorator", StateEnum.CORRECT, "Correct!"),
          new CodeLine("def greet():", StateEnum.CORRECT),
          new CodeLine("  @my_decorator", StateEnum.WRONG, "Wrong placement"),
          new CodeLine("  def greet():", StateEnum.WRONG),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Decorator with Arguments")
    .setHref("decorator-with-arguments-1")
    .setTags([kt.python])
    .setSynopsis("Understanding decorators with parameters")
    .setText("Identify which decorator pattern accepts arguments.")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def decorator_with_args(arg):"),
          new CodeLine("  def decorator(func):"),
          new CodeLine("    def wrapper(*args, **kwargs):"),
          new CodeLine("      return func(*args, **kwargs)"),
          new CodeLine("    return wrapper"),
          new CodeLine("  return decorator", StateEnum.CORRECT, "Correct!"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Stacking Decorators")
    .setHref("stacking-decorators-1")
    .setTags([kt.python])
    .setSynopsis("Multiple decorators on one function")
    .setText("What is the order of execution for stacked decorators?")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("@decorator1"),
          new CodeLine(
            "@decorator2",
            StateEnum.CORRECT,
            "decorator2 applies first",
          ),
          new CodeLine("def func():"),
          new CodeLine("  pass"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Functools Wraps")
    .setHref("functools-wraps-1")
    .setTags([kt.python])
    .setSynopsis("Using functools.wraps in decorators")
    .setText("Why use functools.wraps?")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("from functools import wraps"),
          new CodeLine(""),
          new CodeLine("def my_decorator(func):"),
          new CodeLine(
            "  @wraps(func)",
            StateEnum.CORRECT,
            "Preserves metadata!",
          ),
          new CodeLine("  def wrapper(*args, **kwargs):"),
          new CodeLine("    return func(*args, **kwargs)"),
          new CodeLine("  return wrapper"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Class Decorators")
    .setHref("class-decorators-1")
    .setTags([kt.python])
    .setSynopsis("Using decorators on classes")
    .setText("Identify correct class decorator usage")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("@decorator", StateEnum.CORRECT, "Correct!"),
          new CodeLine("class MyClass:"),
          new CodeLine("  pass"),
          new CodeLine(""),
          new CodeLine("class @decorator:", StateEnum.WRONG, "Wrong syntax"),
          new CodeLine("  pass"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Property Decorator")
    .setHref("property-decorator-1")
    .setTags([kt.python])
    .setSynopsis("Using @property decorator")
    .setText("How do you define a property in a class?")
    .setLevel(3)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("class Circle:"),
          new CodeLine("  @property", StateEnum.CORRECT, "Correct!"),
          new CodeLine("  def radius(self):"),
          new CodeLine("    return self._radius"),
          new CodeLine(""),
          new CodeLine("  @radius.setter"),
          new CodeLine("  def radius(self, value):"),
          new CodeLine("    self._radius = value"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Static Method Decorator")
    .setHref("static-method-decorator-1")
    .setTags([kt.python])
    .setSynopsis("Using @staticmethod decorator")
    .setText("Choose the correct staticmethod syntax")
    .setLevel(3)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("class Math:"),
          new CodeLine("  @staticmethod", StateEnum.CORRECT, "No self needed!"),
          new CodeLine("  def add(a, b):"),
          new CodeLine("    return a + b"),
          new CodeLine(""),
          new CodeLine("  @staticmethod"),
          new CodeLine(
            "  def add(self, a, b):",
            StateEnum.WRONG,
            "staticmethod doesn't need self",
          ),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Class Method Decorator")
    .setHref("class-method-decorator-1")
    .setTags([kt.python])
    .setSynopsis("Using @classmethod decorator")
    .setText("Identify correct classmethod usage")
    .setLevel(3)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("class Person:"),
          new CodeLine("  count = 0"),
          new CodeLine("  @classmethod", StateEnum.CORRECT, "Correct!"),
          new CodeLine("  def get_count(cls):"),
          new CodeLine("    return cls.count"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Decorator Side Effects")
    .setHref("decorator-side-effects-1")
    .setTags([kt.python])
    .setSynopsis("Understanding decorator execution")
    .setText("When does the decorator execute?")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("def my_decorator(func):"),
          new CodeLine(
            "  print('Decorating')",
            StateEnum.CORRECT,
            "Runs at definition",
          ),
          new CodeLine("  def wrapper():"),
          new CodeLine("    print('Calling')"),
          new CodeLine("    return func()"),
          new CodeLine("  return wrapper"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Timing Decorator")
    .setHref("timing-decorator-1")
    .setTags([kt.python])
    .setSynopsis("Creating a timing decorator")
    .setText("Which library helps measure function execution time?")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("import time"),
          new CodeLine(""),
          new CodeLine("def timing_decorator(func):"),
          new CodeLine("  @wraps(func)"),
          new CodeLine("  def wrapper(*args, **kwargs):"),
          new CodeLine(
            "    start = time.time()",
            StateEnum.CORRECT,
            "Record start time",
          ),
          new CodeLine("    result = func(*args, **kwargs)"),
          new CodeLine("    end = time.time()"),
          new CodeLine("    print(f'Took {end - start}s')"),
          new CodeLine("    return result"),
          new CodeLine("  return wrapper"),
        ],
        "python",
      ),
    )
    .build(),
];
