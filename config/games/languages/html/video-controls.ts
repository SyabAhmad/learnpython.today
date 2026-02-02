import { GameBuilder } from "@/types/game";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { knownTags as kt } from "@/config/tag";

export const htmlVideoGames = [
  new GameBuilder()
    .setTitle("HTML Video Controls")
    .setHref("html-video-controls")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Fix the video tag attribute for user controls")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            '<video width="320" height="240">',
            StateEnum.ERROR,
            "Error! Missing the 'controls' attribute to show play/pause buttons.",
          ),
          new CodeLine(
            '<video width="320" height="240" controls>',
            StateEnum.CORRECT,
            "Correct! The 'controls' attribute displays video player controls.",
            10,
          ),
          new CodeLine(
            '<video width="320" height="240" control>',
            StateEnum.WRONG,
            "'control' (singular) is not valid. Use 'controls' (plural) instead.",
          ),
          new CodeLine(
            '<video width="320" height="240" player>',
            StateEnum.WRONG,
            "'player' is not a video attribute. Use 'controls' to enable controls.",
          ),
          new CodeLine(
            '<video width="320" height="240" enable-controls>',
            StateEnum.WRONG,
            "'enable-controls' is not valid. Use the 'controls' boolean attribute.",
          ),
          new CodeLine(
            '  <source src="movie.mp4" type="video/mp4">',
            StateEnum.NORMAL,
            "Video source",
          ),
          new CodeLine(
            "  Your browser does not support the video tag.",
            StateEnum.NORMAL,
            "Fallback text",
          ),
          new CodeLine("</video>", StateEnum.NORMAL, "Close video"),
        ],
        "html",
      ),
    )
    .setText(
      "The <video> tag displays videos on web pages. The 'controls' attribute enables play, pause, and volume buttons. Find the missing attribute and select the correct option.",
    )
    .setCategory("HTML Media")
    .build(),

  new GameBuilder()
    .setTitle("Video Autoplay Attribute")
    .setHref("html-video-autoplay")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Identify the correct autoplay attribute")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            '<video width="320" height="240" auto-play>',
            StateEnum.ERROR,
            "Error! Use 'autoplay'.",
          ),
          new CodeLine(
            '<video width="320" height="240" autoplay>',
            StateEnum.CORRECT,
            "Correct! Starts automatically when page loads.",
            10,
          ),
          new CodeLine(
            '<video width="320" height="240" autoplay="true">',
            StateEnum.WRONG,
            "'autoplay' is boolean. Just use 'autoplay'.",
          ),
          new CodeLine(
            '<video width="320" height="240" auto>',
            StateEnum.WRONG,
            "'auto' is not valid. Use 'autoplay'.",
          ),
          new CodeLine(
            '<video width="320" height="240" start>',
            StateEnum.WRONG,
            "'start' is not an attribute. Use 'autoplay'.",
          ),
          new CodeLine(
            '  <source src="movie.mp4" type="video/mp4">',
            StateEnum.NORMAL,
            "Video source",
          ),
          new CodeLine("</video>", StateEnum.NORMAL, "Close video"),
        ],
        "html",
      ),
    )
    .setText(
      "The 'autoplay' attribute makes videos start automatically when the page loads.",
    )
    .setCategory("HTML Media")
    .build(),
];
