import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const oopGames: Game[] = [
  new GameBuilder()
    .setTitle("The missing 'self'")
    .setHref("oop-self-1")
    .setTags([kt.syntax])
    .setSynopsis("Identify the missing self parameter in a method.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("class Dog:"),
          new CodeLine(
            "  def bark():",
            StateEnum.ERROR,
            "Instance methods must take 'self' as the first argument.",
          ),
          new CodeLine(
            "  def bark(self):",
            StateEnum.CORRECT,
            "Correct! 'self' represents the instance of the class.",
            30,
          ),
          new CodeLine(
            "  def bark(cls):",
            StateEnum.WRONG,
            "'cls' is used for class methods, not instance methods.",
          ),
          new CodeLine("    print('Woof!')", StateEnum.NORMAL),
        ],
        "python",
      ),
    )
    .setText(
      `In Python classes, every instance method must receive the object itself as the first argument. 
        By convention, we call this parameter \`self\`.`,
    )
    .build(),
  new GameBuilder()
    .setTitle("Constructor Spelling")
    .setHref("oop-init-1")
    .setTags([kt.syntax])
    .setSynopsis("Find the typo in the constructor method name.")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("class Cat:"),
          new CodeLine(
            "  def _init_(self, name):",
            StateEnum.ERROR,
            "The constructor needs double underscores on both sides.",
          ),
          new CodeLine(
            "  def __init__(self, name):",
            StateEnum.CORRECT,
            "Perfect! It's a 'dunder' (double underscore) method.",
            20,
          ),
          new CodeLine(
            "  def cat(self, name):",
            StateEnum.WRONG,
            "Constructors in Python are always named __init__.",
          ),
          new CodeLine("    self.name = name", StateEnum.NORMAL),
        ],
        "python",
      ),
    )
    .setText(
      `The method that initializes a new object is a special method called \`__init__\`. 
        Notice the two underscores before and after "init"!`,
    )
    .build(),
];
