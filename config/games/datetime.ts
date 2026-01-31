import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const datetimeGames: Game[] = [
  new GameBuilder()
    .setTitle("Importing Date")
    .setHref("datetime-import-basic")
    .setTags([kt.syntax, kt.datetime])
    .setSynopsis("Getting the current date.")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "import date",
            StateEnum.ERROR,
            "The module is named 'datetime'.",
          ),
          new CodeLine(
            "from datetime import date",
            StateEnum.CORRECT,
            "Correct! This allows you to use 'date.today()'.",
            10,
          ),
          new CodeLine("import clock", StateEnum.WRONG),
        ],
        "python",
      ),
    )
    .setText("Which standard module handles dates and times in Python?")
    .setCategory("DateTime")
    .build(),

  new GameBuilder()
    .setTitle("Formatting Dates")
    .setHref("datetime-strftime")
    .setTags([kt.syntax, kt.datetime])
    .setSynopsis("Converting dates to pretty strings.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("from datetime import datetime"),
          new CodeLine("now = datetime.now()"),
          new CodeLine(
            "s = now.to_string('%Y-%m-%d')",
            StateEnum.ERROR,
            "The method is 'strftime()' (string format time).",
          ),
          new CodeLine(
            "s = now.strftime('%Y-%m-%d')",
            StateEnum.CORRECT,
            "Correct! strftime() is used for formatting.",
            10,
          ),
          new CodeLine(
            "s = now.format('%Y-%m-%d')",
            StateEnum.WRONG,
            "Python uses strftime, not format, for date objects.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Identify the method used to format a datetime object into a readable string.",
    )
    .setCategory("DateTime")
    .build(),

  new GameBuilder()
    .setTitle("Parsing Strings to Dates")
    .setHref("datetime-strptime")
    .setTags([kt.syntax, kt.datetime])
    .setSynopsis("Converting strings back into date objects.")
    .setLevel(4)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("from datetime import datetime"),
          new CodeLine("date_str = '2023-01-01'"),
          new CodeLine(
            "dt = datetime.parse(date_str, '%Y-%m-%d')",
            StateEnum.ERROR,
            "The method is 'strptime()' (string parse time).",
          ),
          new CodeLine(
            "dt = datetime.strptime(date_str, '%Y-%m-%d')",
            StateEnum.CORRECT,
            "Correct! strptime() parses strings into dates.",
            10,
          ),
          new CodeLine("dt = datetime.from_str(date_str)", StateEnum.WRONG),
        ],
        "python",
      ),
    )
    .setText(
      "Which class method parses a string representation of a date into a datetime object?",
    )
    .setCategory("DateTime")
    .build(),

  new GameBuilder()
    .setTitle("Time Differences")
    .setHref("datetime-timedelta")
    .setTags([kt.basics, kt.datetime])
    .setSynopsis("Calculating the gap between two dates.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("from datetime import datetime, timedelta"),
          new CodeLine("d1 = datetime(2023, 1, 1)"),
          new CodeLine("d2 = datetime(2023, 1, 5)"),
          new CodeLine("diff = d2 - d1"),
          new CodeLine("print(type(diff)) # What is the type of diff?"),
          new CodeLine("TimeGap", StateEnum.WRONG),
          new CodeLine(
            "timedelta",
            StateEnum.CORRECT,
            "Correct! A subtraction between two dates returns a timedelta object.",
            10,
          ),
          new CodeLine(
            "int",
            StateEnum.ERROR,
            "It returns a complex object, not just a number of days.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Subtracting one date from another returns an object of which class?",
    )
    .setCategory("DateTime")
    .build(),

  new GameBuilder()
    .setTitle("Extracting Components")
    .setHref("datetime-extract")
    .setTags([kt.basics, kt.datetime])
    .setSynopsis("Getting just the year or month.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("from datetime import date"),
          new CodeLine("d = date.today()"),
          new CodeLine(
            "yr = d.get_year()",
            StateEnum.ERROR,
            "Access the attributes directly: d.year, d.month, etc.",
          ),
          new CodeLine(
            "yr = d.year",
            StateEnum.CORRECT,
            "Correct! Properties like .year and .month are readily available.",
            10,
          ),
          new CodeLine("yr = d['year']", StateEnum.WRONG),
        ],
        "python",
      ),
    )
    .setText("How do you quickly access the numerical year of a date object?")
    .setCategory("DateTime")
    .build(),
];
