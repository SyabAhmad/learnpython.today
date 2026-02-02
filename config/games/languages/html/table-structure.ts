import { GameBuilder } from "@/types/game";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { knownTags as kt } from "@/config/tag";

export const htmlTableGames = [
  new GameBuilder()
    .setTitle("HTML Table Structure")
    .setHref("html-table-structure")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Fix the incorrect table row tag")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<table>", StateEnum.NORMAL, "Table container"),
          new CodeLine("  <tr>", StateEnum.NORMAL, "Table row"),
          new CodeLine("    <th>Name</th>", StateEnum.NORMAL, "Header cell"),
          new CodeLine("    <th>Age</th>", StateEnum.NORMAL, "Header cell"),
          new CodeLine("  </tr>", StateEnum.NORMAL, "Close header row"),
          new CodeLine(
            "  <trow>",
            StateEnum.ERROR,
            "Error! Use <tr> (table row), not <trow>.",
          ),
          new CodeLine("    <td>John</td>", StateEnum.NORMAL, "Data cell"),
          new CodeLine("    <td>25</td>", StateEnum.NORMAL, "Data cell"),
          new CodeLine("  </tr>", StateEnum.NORMAL, "Close row"),
          new CodeLine(
            "  <tr>",
            StateEnum.CORRECT,
            "Correct! <tr> is the proper tag for table rows.",
            10,
          ),
          new CodeLine("    <td>Jane</td>", StateEnum.NORMAL, "Data cell"),
          new CodeLine("    <td>28</td>", StateEnum.NORMAL, "Data cell"),
          new CodeLine("  </tr>", StateEnum.NORMAL, "Close row"),
          new CodeLine("</table>", StateEnum.NORMAL, "Close table"),
        ],
        "html",
      ),
    )
    .setText(
      "HTML tables use <table> for the container, <tr> for rows, <th> for header cells, and <td> for data cells. Find the incorrect tag and select the correct table row tag.",
    )
    .setCategory("HTML Tables")
    .build(),

  new GameBuilder()
    .setTitle("Table Header Cell vs Data Cell")
    .setHref("html-th-vs-td")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Identify when to use <th> vs <td> in tables")
    .setLevel(1)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<table>", StateEnum.NORMAL, "Table container"),
          new CodeLine("  <tr>", StateEnum.NORMAL, "Header row"),
          new CodeLine(
            "    <td>Name</td>",
            StateEnum.ERROR,
            "Error! Use <th> for header cells.",
          ),
          new CodeLine(
            "    <th>Name</th>",
            StateEnum.CORRECT,
            "Correct! <th> is for header cells and indicates importance.",
            10,
          ),
          new CodeLine(
            "    <thead>Name</thead>",
            StateEnum.WRONG,
            "<thead> is for grouping header rows, not individual cells. Use <th>.",
          ),
          new CodeLine(
            "    <header>Name</header>",
            StateEnum.WRONG,
            "'header' is not a table cell tag. Use <th> for table headers.",
          ),
          new CodeLine("    <th>Age</th>", StateEnum.NORMAL, "Header cell"),
          new CodeLine("  </tr>", StateEnum.NORMAL, "Close header row"),
          new CodeLine("  <tr>", StateEnum.NORMAL, "Data row"),
          new CodeLine("    <td>John</td>", StateEnum.NORMAL, "Data cell"),
          new CodeLine("    <td>25</td>", StateEnum.NORMAL, "Data cell"),
          new CodeLine("  </tr>", StateEnum.NORMAL, "Close data row"),
          new CodeLine("</table>", StateEnum.NORMAL, "Close table"),
        ],
        "html",
      ),
    )
    .setText(
      "Use <th> (table header) for column/row headers and <td> (table data) for regular cells. Headers are often bold and help screen readers understand table structure.",
    )
    .setCategory("HTML Tables")
    .build(),

  new GameBuilder()
    .setTitle("Table Section Tags")
    .setHref("html-table-sections")
    .setTags([kt.html, kt.syntax])
    .setSynopsis("Organize tables with thead, tbody, and tfoot")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("<table>", StateEnum.NORMAL, "Table container"),
          new CodeLine(
            "  <header>",
            StateEnum.ERROR,
            "Error! Use <thead> to group header rows, not <header>.",
          ),
          new CodeLine(
            "  <thead>",
            StateEnum.CORRECT,
            "Correct! <thead> groups the table header rows.",
            10,
          ),
          new CodeLine(
            "  <top>",
            StateEnum.WRONG,
            "'top' is not a valid table tag. Use <thead> for header rows.",
          ),
          new CodeLine(
            "  <head>",
            StateEnum.WRONG,
            "<head> is for document metadata. Use <thead> for table headers.",
          ),
          new CodeLine("    <tr>", StateEnum.NORMAL, "Header row"),
          new CodeLine("      <th>Product</th>", StateEnum.NORMAL, "Header"),
          new CodeLine("      <th>Price</th>", StateEnum.NORMAL, "Header"),
          new CodeLine("    </tr>", StateEnum.NORMAL, "Close row"),
          new CodeLine("  </thead>", StateEnum.NORMAL, "Close thead"),
          new CodeLine("  <tbody>", StateEnum.NORMAL, "Body section"),
          new CodeLine("    <tr>", StateEnum.NORMAL, "Data row"),
          new CodeLine("      <td>Laptop</td>", StateEnum.NORMAL, "Data"),
          new CodeLine("      <td>$999</td>", StateEnum.NORMAL, "Data"),
          new CodeLine("    </tr>", StateEnum.NORMAL, "Close row"),
          new CodeLine("  </tbody>", StateEnum.NORMAL, "Close tbody"),
          new CodeLine("  <tfoot>", StateEnum.NORMAL, "Footer"),
          new CodeLine("    <tr>", StateEnum.NORMAL, "Footer row"),
          new CodeLine("      <td>Total</td>", StateEnum.NORMAL, "Footer"),
          new CodeLine("      <td>$999</td>", StateEnum.NORMAL, "Footer"),
          new CodeLine("    </tr>", StateEnum.NORMAL, "Close row"),
          new CodeLine("  </tfoot>", StateEnum.NORMAL, "Close tfoot"),
          new CodeLine("</table>", StateEnum.NORMAL, "Close table"),
        ],
        "html",
      ),
    )
    .setText(
      "Use <thead> for header rows, <tbody> for body rows, and <tfoot> for footer rows. This structure helps accessibility tools and styling.",
    )
    .setCategory("HTML Tables")
    .build(),
];
