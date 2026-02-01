import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const fileIOGames: Game[] = [
  new GameBuilder()
    .setTitle("Opening a File")
    .setHref("file-open-basic")
    .setTags([kt.syntax, kt.file_io])
    .setSynopsis("The classic way to access disk data.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("f = open('data.txt', 'r')", StateEnum.NORMAL),
          new CodeLine("content = f.read()", StateEnum.NORMAL),
          new CodeLine(
            "f.stop()",
            StateEnum.ERROR,
            "To free resources, you must use '.close()', not '.stop()'.",
          ),
          new CodeLine(
            "f.close()",
            StateEnum.CORRECT,
            "Perfect! Always close your files manually if not using a context manager.",
            10,
          ),
          new CodeLine(
            "f.end()",
            StateEnum.WRONG,
            "There is no 'end()' method for files in Python.",
          ),
          new CodeLine(
            "f.quit()",
            StateEnum.WRONG,
            "Files are closed, not 'quit'.",
          ),
          new CodeLine(
            "del f",
            StateEnum.WRONG,
            "Deleting the variable doesn't guarantee the file buffer is flushed or closed immediately.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "After opening and reading a file, how do you correctly signal you are finished with it?",
    )
    .setCategory("File I/O")
    .build(),

  new GameBuilder()
    .setTitle("The Context Manager")
    .setHref("file-with-statement")
    .setTags([kt.syntax, kt.file_io])
    .setSynopsis("The professional way to handle files.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "using open('file.txt') as f:",
            StateEnum.ERROR,
            "Python uses 'with', not 'using'.",
          ),
          new CodeLine(
            "with open('file.txt') as f:",
            StateEnum.CORRECT,
            "Correct! 'with' ensures the file is closed automatically.",
            10,
          ),
          new CodeLine(
            "with f = open('file.txt'):",
            StateEnum.WRONG,
            "The 'as' keyword is required for assignment in 'with' blocks.",
          ),
          new CodeLine(
            "open('file.txt') as f:",
            StateEnum.WRONG,
            "Missing the 'with' keyword.",
          ),
          new CodeLine(
            "attached open('file.txt') as f:",
            StateEnum.WRONG,
            "'attached' is not a keyword in Python.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Identify the Pythonic way to open a file so it closes automatically.",
    )
    .setCategory("File I/O")
    .build(),

  new GameBuilder()
    .setTitle("Writing vs Appending")
    .setHref("file-mode-append")
    .setTags([kt.syntax, kt.file_io])
    .setSynopsis("Don't overwrite your data accidentally!")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("# I want to add text to the end of a file"),
          new CodeLine(
            "with open('log.txt', 'w') as f:",
            StateEnum.ERROR,
            "'w' overwrites the file. Use 'a' to append.",
          ),
          new CodeLine(
            "with open('log.txt', 'a') as f:",
            StateEnum.CORRECT,
            "Correct! 'a' stands for Append.",
            10,
          ),
          new CodeLine(
            "with open('log.txt', 'add') as f:",
            StateEnum.WRONG,
            "Mode must be a single character or specific combination (e.g., 'a', 'r+').",
          ),
          new CodeLine(
            "with open('log.txt', 'append') as f:",
            StateEnum.WRONG,
            "Python uses short codes like 'a', not full words.",
          ),
          new CodeLine(
            "with open('log.txt', 'wa') as f:",
            StateEnum.WRONG,
            "'wa' is not a valid mode. Use 'a' to append.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Which mode should you use to add data to an existing file without deleting its contents?",
    )
    .setCategory("File I/O")
    .build(),

  new GameBuilder()
    .setTitle("Reading Lines")
    .setHref("file-readlines")
    .setTags([kt.syntax, kt.file_io])
    .setSynopsis("Efficiently looping through lines.")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("with open('text.txt') as f:"),
          new CodeLine(
            "  for line in f.get_lines():",
            StateEnum.ERROR,
            "Files are iterable by line by default; there is no 'get_lines()' method.",
          ),
          new CodeLine(
            "  for line in f:",
            StateEnum.CORRECT,
            "Yes! Iterating directly over the file object is memory efficient.",
            10,
          ),
          new CodeLine(
            "  for line in f.read():",
            StateEnum.WRONG,
            "f.read() returns one big string; this would iterate character by character.",
          ),
          new CodeLine(
            "  for line in f.all():",
            StateEnum.WRONG,
            "There is no '.all()' method on file objects.",
          ),
          new CodeLine(
            "  for line in next(f):",
            StateEnum.WRONG,
            "next(f) would only get the first line and then loop over its characters.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "What is the most efficient way to iterate over every line in a file?",
    )
    .setCategory("File I/O")
    .build(),

  new GameBuilder()
    .setTitle("Binary Mode")
    .setHref("file-binary-read")
    .setTags([kt.syntax, kt.file_io])
    .setSynopsis("Reading non-text data like images.")
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("# Read an image file"),
          new CodeLine(
            "with open('image.png', 'r') as f:",
            StateEnum.ERROR,
            "Reading binary data as text will likely cause an encoding error. Use 'rb' mode.",
          ),
          new CodeLine(
            "with open('image.png', 'rb') as f:",
            StateEnum.CORRECT,
            "Correct! 'rb' stands for read binary.",
            10,
          ),
          new CodeLine(
            "with open('image.png', 'bin') as f:",
            StateEnum.WRONG,
            "'bin' is not a valid mode string in Python.",
          ),
          new CodeLine(
            "with open('image.png', 'binary') as f:",
            StateEnum.WRONG,
            "Use 'rb' for binary reading mode.",
          ),
          new CodeLine(
            "with open('image.png', 'b') as f:",
            StateEnum.WRONG,
            "You must specify 'r', 'w', or 'a' along with 'b' (e.g., 'rb').",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Identify the correct mode for reading binary data (like images or compiled files).",
    )
    .setCategory("File I/O")
    .build(),
];
