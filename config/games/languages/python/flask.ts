import { GameBuilder } from "@/types/game";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { knownTags as kt } from "@/config/tag";

export const pythonFlaskGames = [
  new GameBuilder()
    .setTitle("Flask Route Decorator")
    .setHref("flask-route-basic")
    .setTags([kt.python])
    .setSynopsis("Fix the Flask route decorator syntax")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("from flask import Flask", StateEnum.NORMAL),
          new CodeLine("app = Flask(__name__)", StateEnum.NORMAL),
          new CodeLine(
            '@app.rout("/")',
            StateEnum.ERROR,
            "Typo! Should be @app.route() - missing the 'e'.",
          ),
          new CodeLine(
            '@app.route("/")',
            StateEnum.CORRECT,
            "Correct! The decorator method is 'route' with an 'e'.",
            10,
          ),
          new CodeLine(
            '@app.Route("/")',
            StateEnum.WRONG,
            "Python is case-sensitive. The decorator method is lowercase 'route'.",
          ),
          new CodeLine(
            '@app.router("/")',
            StateEnum.WRONG,
            "The Flask method is 'route', not 'router'.",
          ),
          new CodeLine(
            '@route.app("/")',
            StateEnum.WRONG,
            "The correct syntax is @app.route(), not @route.app().",
          ),
          new CodeLine("def hello():", StateEnum.NORMAL),
          new CodeLine('    return "Hello World"', StateEnum.NORMAL),
        ],
        "python",
      ),
    )
    .setText(
      "Flask uses decorators to map URLs to functions. Find the syntax error in this route definition. The decorator should tell Flask how to handle requests to specific URLs.",
    )
    .setCategory("Flask")
    .build(),
];
