import { GameBuilder } from "@/types/game";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { knownTags as kt } from "@/config/tag";

export const htmlButtonGames = [
  new GameBuilder()
    .setTitle("HTML Button Type")
    .setHref("html-button-type")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Identify the correct button submit type")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<form>", StateEnum.NORMAL, "Start form"),
          new CodeLine(
            '  <input type="text" placeholder="Enter your name">',
            StateEnum.NORMAL,
            "Text input",
          ),
          new CodeLine(
            '  <button type="submit-form">',
            StateEnum.ERROR,
            "Error! The correct type is 'submit', not 'submit-form'.",
          ),
          new CodeLine(
            '  <button type="submit">',
            StateEnum.CORRECT,
            "Correct! 'submit' type sends the form data to the server.",
            10,
          ),
          new CodeLine(
            '  <button type="form">',
            StateEnum.WRONG,
            "'form' is not a valid button type. Use 'submit' to submit the form.",
          ),
          new CodeLine(
            '  <button type="send">',
            StateEnum.WRONG,
            "'send' is not an HTML button type. Use 'submit' instead.",
          ),
          new CodeLine(
            "  <button submit>",
            StateEnum.WRONG,
            "'submit' without 'type=' is not valid. Use type='submit' instead.",
          ),
          new CodeLine("    Submit Form", StateEnum.NORMAL, "Button text"),
          new CodeLine("  </button>", StateEnum.NORMAL, "Close button"),
          new CodeLine("</form>", StateEnum.NORMAL, "Close form"),
        ],
        "html",
      ),
    )
    .setText(
      "HTML buttons have different types: 'submit' sends form data, 'reset' clears the form, and 'button' is generic. Find the incorrect button type and select the correct one.",
    )
    .setCategory("HTML Buttons")
    .build(),

  new GameBuilder()
    .setTitle("Button Reset Type")
    .setHref("html-button-reset")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Identify the reset button type for clearing forms")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<form>", StateEnum.NORMAL, "Start form"),
          new CodeLine(
            '  <input type="text" name="username" placeholder="Username">',
            StateEnum.NORMAL,
            "Username field",
          ),
          new CodeLine(
            '  <input type="email" name="email" placeholder="Email">',
            StateEnum.NORMAL,
            "Email field",
          ),
          new CodeLine(
            '  <button type="clear">',
            StateEnum.ERROR,
            "Error! Use 'reset' type.",
          ),
          new CodeLine(
            '  <button type="reset">',
            StateEnum.CORRECT,
            "Correct! Clears all form fields.",
            10,
          ),
          new CodeLine(
            '  <button type="empty">',
            StateEnum.WRONG,
            "'empty' is not valid. Use 'reset'.",
          ),
          new CodeLine(
            '  <button type="clear-form">',
            StateEnum.WRONG,
            "'clear-form' is not valid. Use 'reset'.",
          ),
          new CodeLine(
            "  <button reset>",
            StateEnum.WRONG,
            "Must use type='reset' attribute.",
          ),
          new CodeLine("    Clear Form", StateEnum.NORMAL, "Button text"),
          new CodeLine("  </button>", StateEnum.NORMAL, "Close button"),
          new CodeLine("</form>", StateEnum.NORMAL, "Close form"),
        ],
        "html",
      ),
    )
    .setText(
      "The 'reset' button type clears all form fields back to their default values. Useful for giving users a way to start over.",
    )
    .setCategory("HTML Buttons")
    .build(),
];
