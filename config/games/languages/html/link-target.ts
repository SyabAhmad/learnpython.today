import { GameBuilder } from "@/types/game";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { knownTags as kt } from "@/config/tag";

export const htmlLinkGames = [
  new GameBuilder()
    .setTitle("HTML Link Target Attribute")
    .setHref("html-link-target")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Fix the anchor tag's target attribute syntax")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body content"),
          new CodeLine(
            '    <a href="https://example.com" target="new">',
            StateEnum.ERROR,
            "Error! The target value should be '_blank', not 'new'.",
          ),
          new CodeLine(
            '    <a href="https://example.com" target="_blank">',
            StateEnum.CORRECT,
            "Correct! '_blank' opens the link in a new tab or window.",
            10,
          ),
          new CodeLine(
            '    <a href="https://example.com" target="blank">',
            StateEnum.WRONG,
            "'blank' without underscore is not valid. Use '_blank' instead.",
          ),
          new CodeLine(
            '    <a href="https://example.com" target="_new">',
            StateEnum.WRONG,
            "'_new' is not a standard target value. Use '_blank' to open in new tab.",
          ),
          new CodeLine(
            '    <a href="https://example.com" new-window>',
            StateEnum.WRONG,
            "'new-window' is not an HTML attribute. Use target='_blank' instead.",
          ),
          new CodeLine("      Visit Example", StateEnum.NORMAL, "Link text"),
          new CodeLine("    </a>", StateEnum.NORMAL, "Close anchor"),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "The 'target' attribute in anchor tags controls where a link opens. '_blank' is the standard value to open links in a new tab or window. Find the incorrect target value and select the correct one.",
    )
    .setCategory("HTML Links")
    .build(),

  new GameBuilder()
    .setTitle("Anchor Tag with ID Reference")
    .setHref("html-anchor-id-reference")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Fix the incorrect internal link reference")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body content"),
          new CodeLine(
            '    <a href="#contact-section">',
            StateEnum.NORMAL,
            "Link to internal section",
          ),
          new CodeLine("      Go to Contact", StateEnum.NORMAL, "Link text"),
          new CodeLine("    </a>", StateEnum.NORMAL, "Close anchor"),
          new CodeLine("", StateEnum.NORMAL, ""),
          new CodeLine(
            '    <section name="contact-section">',
            StateEnum.ERROR,
            "Error! Use 'id' attribute, not 'name' for section targeting.",
          ),
          new CodeLine(
            '    <section id="contact-section">',
            StateEnum.CORRECT,
            "Correct! The 'id' attribute makes this section linkable via #contact-section.",
            10,
          ),
          new CodeLine(
            '    <section class="contact-section">',
            StateEnum.WRONG,
            "'class' is for styling. Use 'id' to create link targets.",
          ),
          new CodeLine(
            '    <section anchor="contact-section">',
            StateEnum.WRONG,
            "'anchor' is not a valid HTML attribute. Use 'id' instead.",
          ),
          new CodeLine(
            "      <h2>Contact Us</h2>",
            StateEnum.NORMAL,
            "Heading",
          ),
          new CodeLine(
            "      <p>Contact details...</p>",
            StateEnum.NORMAL,
            "Content",
          ),
          new CodeLine("    </section>", StateEnum.NORMAL, "Close section"),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "Use the 'id' attribute to create link targets within a page. Links reference these IDs with a hash (#). For example, href='#section-name' links to id='section-name'.",
    )
    .setCategory("HTML Links")
    .build(),

  new GameBuilder()
    .setTitle("Link Rel Attribute")
    .setHref("html-link-rel-attribute")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Identify the correct rel attribute for external links")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<html>", StateEnum.NORMAL, "Document root"),
          new CodeLine("  <body>", StateEnum.NORMAL, "Body content"),
          new CodeLine(
            '    <a href="https://external-site.com">',
            StateEnum.ERROR,
            "Error! External links should include rel='noopener noreferrer' for security.",
          ),
          new CodeLine(
            '    <a href="https://external-site.com" rel="noopener noreferrer">',
            StateEnum.CORRECT,
            "Correct! This protects user privacy and site security with external links.",
            10,
          ),
          new CodeLine(
            '    <a href="https://external-site.com" rel="external">',
            StateEnum.WRONG,
            "'external' is not a standard rel value. Use 'noopener noreferrer'.",
          ),
          new CodeLine(
            '    <a href="https://external-site.com" secure>',
            StateEnum.WRONG,
            "'secure' is not an HTML attribute. Use rel='noopener noreferrer'.",
          ),
          new CodeLine(
            '    <a href="https://external-site.com" target="_blank">',
            StateEnum.WRONG,
            "target='_blank' alone is not enough. Add rel='noopener noreferrer' for security.",
          ),
          new CodeLine("      External Site", StateEnum.NORMAL, "Link text"),
          new CodeLine("    </a>", StateEnum.NORMAL, "Close anchor"),
          new CodeLine("  </body>", StateEnum.NORMAL, "Close body"),
          new CodeLine("</html>", StateEnum.NORMAL, "Close document"),
        ],
        "html",
      ),
    )
    .setText(
      "External links opened in new tabs should use rel='noopener noreferrer' for security. This prevents the new page from accessing your page's window object.",
    )
    .setCategory("HTML Links")
    .build(),
];
