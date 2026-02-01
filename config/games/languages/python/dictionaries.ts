import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const dictionaryGames: Game[] = [
  new GameBuilder()
    .setTitle("Dictionary Key Access")
    .setHref("dictionary-keys-1")
    .setTags([kt.syntax])
    .setSynopsis("Learn how to safely access keys in a dictionary.")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("user = {'name': 'Alice', 'age': 25}"),
          new CodeLine(
            "print(user['email'])",
            StateEnum.ERROR,
            "Accessing a non-existent key raises a KeyError.",
          ),
          new CodeLine(
            "print(user.get('email', 'N/A'))",
            StateEnum.CORRECT,
            "Using .get() is safer as it returns a default value.",
            20,
          ),
          new CodeLine(
            "print(user.email)",
            StateEnum.WRONG,
            "Dictionaries do not support dot notation for keys.",
          ),
          new CodeLine(
            "print(user.find('email'))",
            StateEnum.WRONG,
            ".find() is for strings, not dictionaries.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      `When working with dictionaries, accessing a key that doesn't exist will crash your program with a KeyError. 
        Using the \`.get()\` method allows you to provide a fallback value if the key is missing.`,
    )
    .build(),
  new GameBuilder()
    .setTitle("Dictionary Comprehension")
    .setHref("dictionary-comprehension-1")
    .setTags([kt.syntax])
    .setSynopsis("Fix a dictionary comprehension syntax error.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("names = ['Alice', 'Bob']"),
          new CodeLine(
            "users = {name, len(name) for name in names}",
            StateEnum.ERROR,
            "Comprehensions need a colon between key and value.",
          ),
          new CodeLine(
            "users = {name: len(name) for name in names}",
            StateEnum.CORRECT,
            "Correct syntax for dictionary comprehension.",
            30,
          ),
          new CodeLine(
            "users = {name = len(name) for name in names}",
            StateEnum.WRONG,
            "Equal signs are for assignments, not comprehensions.",
          ),
          new CodeLine(
            "users = dict(name: len(name) for name in names)",
            StateEnum.WRONG,
            "The dict() constructor takes pairs or keyword arguments.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      `Dictionary comprehensions are a powerful way to create dictionaries in a single line. 
        The syntax is \`{key: value for item in iterable}\`. Spot the missing colon!`,
    )
    .build(),
];
