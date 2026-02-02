import { GameBuilder } from "@/types/game";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { knownTags as kt } from "@/config/tag";

export const htmlMetaGames = [
  new GameBuilder()
    .setTitle("HTML Meta Charset")
    .setHref("html-meta-charset")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Fix the character encoding meta tag")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "<!DOCTYPE html>",
            StateEnum.NORMAL,
            "HTML5 declaration",
          ),
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <head>", StateEnum.NORMAL, "Document metadata"),
          new CodeLine(
            '    <meta char="utf-8">',
            StateEnum.ERROR,
            "Error! The correct attribute is 'charset', not 'char'.",
          ),
          new CodeLine(
            '    <meta charset="utf-8">',
            StateEnum.CORRECT,
            "Correct! The 'charset' meta tag specifies the character encoding.",
            10,
          ),
          new CodeLine(
            '    <meta encoding="utf-8">',
            StateEnum.WRONG,
            "'encoding' is not a valid meta attribute. Use 'charset' instead.",
          ),
          new CodeLine(
            '    <meta utf="8">',
            StateEnum.WRONG,
            "'utf' is not a valid meta attribute. Use 'charset=\"utf-8\"' instead.",
          ),
          new CodeLine(
            "    <charset utf-8>",
            StateEnum.WRONG,
            "'charset' is not a standalone tag. Use <meta charset=\"utf-8\"> instead.",
          ),
          new CodeLine(
            "    <title>My Page</title>",
            StateEnum.NORMAL,
            "Page title",
          ),
          new CodeLine("  </head>", StateEnum.NORMAL, "Close head"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body content"),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "The <meta charset> tag in the <head> section tells the browser what character encoding to use. UTF-8 is the standard encoding for most websites. Find the incorrect meta attribute and select the correct one.",
    )
    .setCategory("HTML Meta Tags")
    .build(),

  new GameBuilder()
    .setTitle("Meta Viewport Tag")
    .setHref("html-meta-viewport")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Add the correct viewport meta tag for mobile")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "<!DOCTYPE html>",
            StateEnum.NORMAL,
            "HTML5 declaration",
          ),
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <head>", StateEnum.NORMAL, "Document metadata"),
          new CodeLine(
            '    <meta mobile="device-width">',
            StateEnum.ERROR,
            "Error! Use name='viewport'.",
          ),
          new CodeLine(
            '    <meta name="viewport" content="width=device-width, initial-scale=1">',
            StateEnum.CORRECT,
            "Correct! Makes pages responsive.",
            10,
          ),
          new CodeLine(
            '    <meta viewport="device-width">',
            StateEnum.WRONG,
            "Use name='viewport' content='...'.",
          ),
          new CodeLine(
            '    <meta responsive="width=device-width">',
            StateEnum.WRONG,
            "Use name='viewport' for responsiveness.",
          ),
          new CodeLine(
            '    <meta device="mobile" scale="1">',
            StateEnum.WRONG,
            "Use name='viewport' for mobile.",
          ),
          new CodeLine(
            "    <title>My Page</title>",
            StateEnum.NORMAL,
            "Page title",
          ),
          new CodeLine("  </head>", StateEnum.NORMAL, "Close head"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "The viewport meta tag tells browsers how to scale the page on mobile devices. Essential for responsive design.",
    )
    .setCategory("HTML Meta Tags")
    .build(),
];
