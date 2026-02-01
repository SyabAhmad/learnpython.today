import { GameBuilder } from "@/types/game";
import { Language, GameMechanic, BackendService } from "@/types/codeLine";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { knownTags as kt } from "@/config/tag";

export const pythonFlaskGames = [
  new GameBuilder()
    .setTitle("Flask Route Decorator")
    .setHref("flask-route-basic")
    .setTags([kt.python])
    .setSynopsis("Fix the Flask route decorator syntax")
    .setText(
      `Flask uses decorators to map URLs to functions. Find the error in this route definition.`,
    )
    .setLevel(2)
    .setLanguage(Language.PYTHON)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setBackendService(BackendService.FLASK)
    .setCategory("Python Backend")
    .setSubcategory("Flask")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("from flask import Flask", StateEnum.NORMAL),
          new CodeLine("app = Flask(__name__)", StateEnum.NORMAL),
          new CodeLine(
            '@app.rout("/")',
            StateEnum.ERROR,
            "Should be @app.route() with an 'e'",
          ),
          new CodeLine("def hello():", StateEnum.NORMAL),
          new CodeLine('    return "Hello World"', StateEnum.NORMAL),
        ],
        Language.PYTHON,
        "",
        "",
      ),
    )
    .build(),
];
