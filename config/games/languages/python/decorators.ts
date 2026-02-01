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
          new CodeLine(
            "my_decorator@",
            StateEnum.ERROR,
            "Decorator symbol '@' must come before the name.",
          ),
          new CodeLine(
            "@my_decorator",
            StateEnum.CORRECT,
            "Correct! The @ symbol prefixes the decorator name.",
            10,
          ),
          new CodeLine(
            "decorate(my_decorator)",
            StateEnum.WRONG,
            "This is not valid syntax for a decorator.",
          ),
          new CodeLine(
            "# @my_decorator",
            StateEnum.WRONG,
            "Commenting out the decorator will disable it.",
          ),
          new CodeLine("def greet():"),
          new CodeLine("  print('Hello!')"),
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
          new CodeLine(
            "  return func",
            StateEnum.ERROR,
            "We must return the inner decorator function, not the original function.",
          ),
          new CodeLine(
            "  return decorator",
            StateEnum.CORRECT,
            "Correct! We return the decorator which will then wrap the function.",
            10,
          ),
          new CodeLine(
            "  return wrapper",
            StateEnum.WRONG,
            "Wrapper is too deep; we need to return the 'decorator' function first.",
          ),
          new CodeLine(
            "  return arg",
            StateEnum.WRONG,
            "Returning the argument doesn't make this a decorator.",
          ),
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
            "@@decorator2",
            StateEnum.ERROR,
            "Double '@' represents invalid syntax.",
          ),
          new CodeLine(
            "@decorator2",
            StateEnum.CORRECT,
            "Correct! Decorators are stacked vertically.",
            10,
          ),
          new CodeLine(
            "and @decorator2",
            StateEnum.WRONG,
            "There is no 'and' keyword used for stacking decorators.",
          ),
          new CodeLine(
            ", @decorator2",
            StateEnum.WRONG,
            "Decorators cannot be comma-separated on the same line.",
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
            "  @wrap(func)",
            StateEnum.ERROR,
            "The decorator is named 'wraps', plural, from the functools module.",
          ),
          new CodeLine(
            "  @wraps(func)",
            StateEnum.CORRECT,
            "Correct! @wraps(func) preserves the metadata of the original function.",
            15,
          ),
          new CodeLine(
            "  @func.wraps",
            StateEnum.WRONG,
            "The wraps decorator is not an attribute of the function itself.",
          ),
          new CodeLine(
            "  @metadata(func)",
            StateEnum.WRONG,
            "There is no built-in @metadata decorator.",
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
          new CodeLine(
            "class @decorator:",
            StateEnum.ERROR,
            "Class decorators must be placed BEFORE the class definition.",
          ),
          new CodeLine(
            "@decorator",
            StateEnum.CORRECT,
            "Correct! Class decorators go above the 'class' keyword.",
            10,
          ),
          new CodeLine(
            "class MyClass(@decorator):",
            StateEnum.WRONG,
            "Placing it there would make it a base class, which is different.",
          ),
          new CodeLine(
            "MyClass = decorate(MyClass)",
            StateEnum.WRONG,
            "While logically correct in some cases, it's not the decorator syntax.",
          ),
          new CodeLine("class MyClass:"),
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
          new CodeLine(
            "  @getter",
            StateEnum.ERROR,
            "Python uses '@property' for getter methods.",
          ),
          new CodeLine(
            "  @property",
            StateEnum.CORRECT,
            "Correct! @property makes a method accessible like an attribute.",
            15,
          ),
          new CodeLine(
            "  @attr",
            StateEnum.WRONG,
            "There is no built-in @attr decorator for this purpose.",
          ),
          new CodeLine(
            "  @get_radius",
            StateEnum.WRONG,
            "Custom names don't work; it must be @property.",
          ),
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
          new CodeLine(
            "  @static",
            StateEnum.ERROR,
            "The decorator is '@staticmethod', not '@static'.",
          ),
          new CodeLine(
            "  @staticmethod",
            StateEnum.CORRECT,
            "Correct! staticmethods don't receive an implicit first argument.",
            10,
          ),
          new CodeLine(
            "  @class_static",
            StateEnum.WRONG,
            "No such decorator exists in standard Python.",
          ),
          new CodeLine(
            "  @function",
            StateEnum.WRONG,
            "The decorator should specify the method type.",
          ),
          new CodeLine("  def add(a, b):"),
          new CodeLine("    return a + b"),
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
          new CodeLine(
            "  @cls_method",
            StateEnum.ERROR,
            "The correct decorator is '@classmethod'.",
          ),
          new CodeLine(
            "  @classmethod",
            StateEnum.CORRECT,
            "Correct! classmethods receive the class as the first argument.",
            15,
          ),
          new CodeLine(
            "  @static",
            StateEnum.WRONG,
            "staticmethods don't receive the class argument 'cls'.",
          ),
          new CodeLine(
            "  @metamethod",
            StateEnum.WRONG,
            "This is not a standard Python decorator.",
          ),
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
            "  print('I run when the function is called')",
            StateEnum.ERROR,
            "Actually, the outer part of a decorator runs at function *definition* time.",
          ),
          new CodeLine(
            "  print('Decorating')",
            StateEnum.CORRECT,
            "Correct! This runs as soon as the function is decorated (at import or definition).",
            20,
          ),
          new CodeLine(
            "  def wrapper():",
            StateEnum.WRONG,
            "This defines the wrapper, but doesn't explain the side effect.",
          ),
          new CodeLine(
            "  print('Never runs')",
            StateEnum.WRONG,
            "It definitely runs when the file is parsed!",
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
            "    start = clock.now()",
            StateEnum.ERROR,
            "There is no 'clock' module in standard Python for this; use 'time'.",
          ),
          new CodeLine(
            "    start = time.time()",
            StateEnum.CORRECT,
            "Correct! time.time() is commonly used to measure duration.",
            15,
          ),
          new CodeLine(
            "    start = datetime.now()",
            StateEnum.WRONG,
            "While possible, it's less efficient than time.time() for raw timing.",
          ),
          new CodeLine(
            "    start = stopwatch.start()",
            StateEnum.WRONG,
            "No such standard library module exists.",
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
