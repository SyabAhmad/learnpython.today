import { GameBuilder } from "@/types/game";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { knownTags as kt } from "@/config/tag";

export const htmlAttributesGames = [
  new GameBuilder()
    .setTitle("HTML Image Attribute")
    .setHref("html-image-attribute")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Fix the missing required attribute in an image tag")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body content"),
          new CodeLine(
            '    <img src="photo.jpg">',
            StateEnum.ERROR,
            "Error! The 'alt' attribute is required for accessibility and SEO.",
          ),
          new CodeLine(
            '    <img src="photo.jpg" alt="A beautiful sunset">',
            StateEnum.CORRECT,
            "Correct! The 'alt' attribute provides alternative text for screen readers.",
            10,
          ),
          new CodeLine(
            '    <img src="photo.jpg" title="A beautiful sunset">',
            StateEnum.WRONG,
            "'title' is optional and provides hover text, but 'alt' is required for accessibility.",
          ),
          new CodeLine(
            '    <img src="photo.jpg" description="A beautiful sunset">',
            StateEnum.WRONG,
            "'description' is not a valid HTML attribute. Use 'alt' for image alternative text.",
          ),
          new CodeLine(
            '    <img src="photo.jpg" text="A beautiful sunset">',
            StateEnum.WRONG,
            "'text' is not an HTML image attribute. The correct attribute is 'alt'.",
          ),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "HTML image tags require the 'alt' attribute for accessibility. This helps screen readers describe images to visually impaired users. Find the missing attribute and select the correct option.",
    )
    .setCategory("HTML Images")
    .build(),

  new GameBuilder()
    .setTitle("Image Width and Height")
    .setHref("html-image-dimensions")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Set correct attributes for image dimensions")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body content"),
          new CodeLine(
            '    <img src="logo.png" size="100">',
            StateEnum.ERROR,
            "Error! Use 'width' and 'height'.",
          ),
          new CodeLine(
            '    <img src="logo.png" width="100" height="100" alt="Logo">',
            StateEnum.CORRECT,
            "Correct! Improves page loading.",
            10,
          ),
          new CodeLine(
            '    <img src="logo.png" dimensions="100x100" alt="Logo">',
            StateEnum.WRONG,
            "'dimensions' is not valid.",
          ),
          new CodeLine(
            '    <img src="logo.png" scale="100" alt="Logo">',
            StateEnum.WRONG,
            "'scale' is not an attribute.",
          ),
          new CodeLine(
            '    <img src="logo.png" w="100" h="100" alt="Logo">',
            StateEnum.WRONG,
            "Use full names: 'width' and 'height'.",
          ),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "Always specify 'width' and 'height' for images to improve page loading performance.",
    )
    .setCategory("HTML Images")
    .build(),
];
