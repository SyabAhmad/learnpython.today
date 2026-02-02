import { GameBuilder } from "@/types/game";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { knownTags as kt } from "@/config/tag";

export const htmlFormGames = [
  new GameBuilder()
    .setTitle("HTML Form Input Type")
    .setHref("html-form-input-type")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Identify the correct input type for email validation")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<form>", StateEnum.NORMAL, "Start form"),
          new CodeLine(
            '  <label for="email">Email:</label>',
            StateEnum.NORMAL,
            "Label for input",
          ),
          new CodeLine(
            '  <input type="mail" id="email" name="email">',
            StateEnum.ERROR,
            "Error! The correct input type is 'email', not 'mail'.",
          ),
          new CodeLine(
            '  <input type="email" id="email" name="email">',
            StateEnum.CORRECT,
            "Correct! 'email' type provides built-in validation for email format.",
            10,
          ),
          new CodeLine(
            '  <input type="text" id="email" name="email">',
            StateEnum.WRONG,
            "'text' type does not validate email format. Use 'email' type instead.",
          ),
          new CodeLine(
            '  <input type="e-mail" id="email" name="email">',
            StateEnum.WRONG,
            "'e-mail' is not a valid HTML5 input type. The correct type is 'email'.",
          ),
          new CodeLine(
            '  <input type="Email" id="email" name="email">',
            StateEnum.WRONG,
            "HTML input types are case-sensitive and lowercase. Use 'email', not 'Email'.",
          ),
          new CodeLine("</form>", StateEnum.NORMAL, "Close form"),
        ],
        "html",
      ),
    )
    .setText(
      "HTML5 provides specific input types for different data. The 'email' type automatically validates that the user enters a valid email address. Find the incorrect input type and select the right one.",
    )
    .setCategory("HTML Forms")
    .build(),

  new GameBuilder()
    .setTitle("Form Input Placeholder")
    .setHref("html-form-placeholder")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Identify the correct attribute for placeholder text")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<form>", StateEnum.NORMAL, "Start form"),
          new CodeLine(
            '  <label for="search">Search:</label>',
            StateEnum.NORMAL,
            "Label",
          ),
          new CodeLine(
            '  <input type="text" hint="Enter search">',
            StateEnum.ERROR,
            "Error! Use 'placeholder'.",
          ),
          new CodeLine(
            '  <input type="text" placeholder="Enter search">',
            StateEnum.CORRECT,
            "Correct! Shows example text.",
            10,
          ),
          new CodeLine(
            '  <input type="text" title="Enter search">',
            StateEnum.WRONG,
            "'title' is for tooltips.",
          ),
          new CodeLine(
            '  <input type="text" help="Enter search">',
            StateEnum.WRONG,
            "'help' is not valid.",
          ),
          new CodeLine(
            '  <input type="text" default="Enter search">',
            StateEnum.WRONG,
            "'default' is not for placeholders.",
          ),
          new CodeLine("</form>", StateEnum.NORMAL, "Close form"),
        ],
        "html",
      ),
    )
    .setText(
      "The 'placeholder' attribute shows example text inside an input field. It disappears when the user starts typing.",
    )
    .setCategory("HTML Forms")
    .build(),
];
