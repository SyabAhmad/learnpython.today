import { GameBuilder } from "@/types/game";
import { Language, GameMechanic } from "@/types/codeLine";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";

export const cssBasicsGames = [
  new GameBuilder()
    .setTitle("CSS Selector Syntax")
    .setHref("css-selector-basic")
    .setTags([])
    .setSynopsis("Fix the CSS selector")
    .setText(
      `CSS selectors target HTML elements. Find the error in this selector rule.`,
    )
    .setLevel(1)
    .setLanguage(Language.CSS)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("CSS Basics")
    .setSubcategory("Selectors")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("body {", StateEnum.NORMAL),
          new CodeLine("  background-color: white;", StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
          new CodeLine(".container {", StateEnum.NORMAL),
          new CodeLine(
            "  width: 1200px",
            StateEnum.ERROR,
            "Missing semicolon at end of property",
          ),
          new CodeLine(
            "  width: 1200px;",
            StateEnum.CORRECT,
            "Correct: Semicolon added to CSS property",
            10,
          ),
          new CodeLine(
            "  width 1200px;",
            StateEnum.WRONG,
            "Missing colon between property and value",
          ),
          new CodeLine(
            "  width: 1200;",
            StateEnum.WRONG,
            "Missing unit - should be 1200px",
          ),
          new CodeLine("  margin: 0 auto;", StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.CSS,
        "Valid CSS",
        "Valid CSS",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("CSS Class Selector")
    .setHref("css-class-selector")
    .setTags([])
    .setSynopsis("Use class selectors correctly")
    .setText("CSS class selectors start with a dot (.). Find the error.")
    .setLevel(1)
    .setLanguage(Language.CSS)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("CSS Basics")
    .setSubcategory("Selectors")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "#button {",
            StateEnum.ERROR,
            "ID selector uses #, but should be class with .",
          ),
          new CodeLine(
            ".button {",
            StateEnum.CORRECT,
            "Correct: Class selector uses dot (.)",
            10,
          ),
          new CodeLine(
            "button {",
            StateEnum.WRONG,
            "Element selector, not class selector",
          ),
          new CodeLine(
            ":button {",
            StateEnum.WRONG,
            "Pseudo-selector syntax, not class selector",
          ),
          new CodeLine("  padding: 10px;", StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.CSS,
        "Styled button",
        "Styled button",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("CSS Property Value")
    .setHref("css-property-value")
    .setTags([])
    .setSynopsis("Use correct CSS property values")
    .setText("CSS properties need proper values. Find the error.")
    .setLevel(1)
    .setLanguage(Language.CSS)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("CSS Basics")
    .setSubcategory("Properties")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("h1 {", StateEnum.NORMAL),
          new CodeLine(
            "  color #ff0000;",
            StateEnum.ERROR,
            "Missing colon after color property",
          ),
          new CodeLine(
            "  color: #ff0000;",
            StateEnum.CORRECT,
            "Correct: Colon separates property and value",
            10,
          ),
          new CodeLine(
            "  color: ff0000;",
            StateEnum.WRONG,
            "Missing # for hex color",
          ),
          new CodeLine("  color #ff0000;", StateEnum.WRONG, "Missing colon"),
          new CodeLine("  font-size: 24px;", StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.CSS,
        "Red heading",
        "Red heading",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("CSS ID Selector")
    .setHref("css-id-selector")
    .setTags([])
    .setSynopsis("Use ID selectors with hash symbol")
    .setText("CSS ID selectors start with # (hash). Find the correct syntax.")
    .setLevel(1)
    .setLanguage(Language.CSS)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("CSS Basics")
    .setSubcategory("Selectors")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            ".header {",
            StateEnum.ERROR,
            "Class selector (.) should be ID selector (#)",
          ),
          new CodeLine(
            "#header {",
            StateEnum.CORRECT,
            "Correct: ID selector uses hash (#)",
            10,
          ),
          new CodeLine("header {", StateEnum.WRONG, "Element selector, not ID"),
          new CodeLine(
            "@header {",
            StateEnum.WRONG,
            "@ is for at-rules, not selectors",
          ),
          new CodeLine("  width: 100%;", StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.CSS,
        "Full width header",
        "Full width header",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("CSS Margin Property")
    .setHref("css-margin")
    .setTags([])
    .setSynopsis("Set margin correctly")
    .setText("Margin adds space outside an element. Find the error.")
    .setLevel(1)
    .setLanguage(Language.CSS)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("CSS Basics")
    .setSubcategory("Box Model")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("div {", StateEnum.NORMAL),
          new CodeLine(
            "  margin 20px;",
            StateEnum.ERROR,
            "Missing colon after margin",
          ),
          new CodeLine(
            "  margin: 20px;",
            StateEnum.CORRECT,
            "Correct: Colon after property name",
            10,
          ),
          new CodeLine(
            "  margin: 20px",
            StateEnum.WRONG,
            "Missing semicolon at end",
          ),
          new CodeLine(
            "  margins: 20px;",
            StateEnum.WRONG,
            "Property is margin, not margins",
          ),
          new CodeLine("  padding: 10px;", StateEnum.NORMAL),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.CSS,
        "Element with spacing",
        "Element with spacing",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("CSS Font Size")
    .setHref("css-font-size")
    .setTags([])
    .setSynopsis("Set font size with units")
    .setText("Font size requires a unit like px, em, or rem. Find the error.")
    .setLevel(1)
    .setLanguage(Language.CSS)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("CSS Basics")
    .setSubcategory("Typography")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("p {", StateEnum.NORMAL),
          new CodeLine(
            "  font-size: 16;",
            StateEnum.ERROR,
            "Missing unit (px, em, rem, etc)",
          ),
          new CodeLine(
            "  font-size: 16px;",
            StateEnum.CORRECT,
            "Correct: Font size with px unit",
            10,
          ),
          new CodeLine(
            "  font-size: 16px",
            StateEnum.WRONG,
            "Missing semicolon",
          ),
          new CodeLine("  font-size 16px;", StateEnum.WRONG, "Missing colon"),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.CSS,
        "16 pixel text",
        "16 pixel text",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("CSS Background Color")
    .setHref("css-bg-color")
    .setTags([])
    .setSynopsis("Set background color correctly")
    .setText(
      "Background color can use hex, rgb, or named colors. Find the error.",
    )
    .setLevel(1)
    .setLanguage(Language.CSS)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("CSS Basics")
    .setSubcategory("Colors")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("body {", StateEnum.NORMAL),
          new CodeLine(
            "  background-color: blue",
            StateEnum.ERROR,
            "Missing semicolon",
          ),
          new CodeLine(
            "  background-color: blue;",
            StateEnum.CORRECT,
            "Correct: Color with semicolon",
            10,
          ),
          new CodeLine(
            "  background blue;",
            StateEnum.WRONG,
            "Property should be background-color",
          ),
          new CodeLine(
            "  background-color blue;",
            StateEnum.WRONG,
            "Missing colon",
          ),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.CSS,
        "Blue background",
        "Blue background",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("CSS Text Alignment")
    .setHref("css-text-align")
    .setTags([])
    .setSynopsis("Align text using text-align")
    .setText(
      "Text-align controls horizontal alignment of text. Find the error.",
    )
    .setLevel(1)
    .setLanguage(Language.CSS)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("CSS Basics")
    .setSubcategory("Typography")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("h1 {", StateEnum.NORMAL),
          new CodeLine(
            "  text-alignment: center;",
            StateEnum.ERROR,
            "Property is text-align, not text-alignment",
          ),
          new CodeLine(
            "  text-align: center;",
            StateEnum.CORRECT,
            "Correct: Property name is text-align",
            10,
          ),
          new CodeLine(
            "  align: center;",
            StateEnum.WRONG,
            "Property should be text-align",
          ),
          new CodeLine(
            "  text-align center;",
            StateEnum.WRONG,
            "Missing colon",
          ),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.CSS,
        "Centered text",
        "Centered text",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("CSS Border")
    .setHref("css-border")
    .setTags([])
    .setSynopsis("Add a border to an element")
    .setText("Border uses shorthand: width style color. Find the error.")
    .setLevel(2)
    .setLanguage(Language.CSS)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("CSS Basics")
    .setSubcategory("Box Model")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("box {", StateEnum.NORMAL),
          new CodeLine(
            "  border: 1px solid",
            StateEnum.ERROR,
            "Missing color value",
          ),
          new CodeLine(
            "  border: 1px solid black;",
            StateEnum.CORRECT,
            "Correct: Width, style, and color specified",
            10,
          ),
          new CodeLine(
            "  border 1px solid black;",
            StateEnum.WRONG,
            "Missing colon",
          ),
          new CodeLine(
            "  border: 1px black;",
            StateEnum.WRONG,
            "Missing style (solid, dashed, dotted)",
          ),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.CSS,
        "Bordered element",
        "Bordered element",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("CSS Padding")
    .setHref("css-padding")
    .setTags([])
    .setSynopsis("Set padding inside an element")
    .setText("Padding adds space inside an element. Find the correct syntax.")
    .setLevel(1)
    .setLanguage(Language.CSS)
    .setMechanic(GameMechanic.MARKUP_VALIDATION)
    .setCategory("CSS Basics")
    .setSubcategory("Box Model")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(".btn {", StateEnum.NORMAL),
          new CodeLine(
            "  padding 15px;",
            StateEnum.ERROR,
            "Missing colon after property",
          ),
          new CodeLine(
            "  padding: 15px;",
            StateEnum.CORRECT,
            "Correct: Colon and semicolon present",
            10,
          ),
          new CodeLine("  padding: 15px", StateEnum.WRONG, "Missing semicolon"),
          new CodeLine(
            "  paddings: 15px;",
            StateEnum.WRONG,
            "Property is padding, not paddings",
          ),
          new CodeLine("}", StateEnum.NORMAL),
        ],
        Language.CSS,
        "Button with padding",
        "Button with padding",
      ),
    )
    .build(),
];
