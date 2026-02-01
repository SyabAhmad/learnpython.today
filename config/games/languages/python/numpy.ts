import { GameBuilder } from "@/types/game";
import { Language, GameMechanic } from "@/types/codeLine";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";

export const pythonNumpyGames = [
  new GameBuilder()
    .setTitle("NumPy Array Import")
    .setHref("numpy-import-array")
    .setTags([])
    .setSynopsis("Fix the NumPy import and array creation")
    .setText(
      `NumPy arrays are more efficient than Python lists for numerical operations. Find the error in this code.`,
    )
    .setLevel(2)
    .setLanguage(Language.PYTHON)
    .setMechanic(GameMechanic.BUG_FINDING)
    .setCategory("Python Backend")
    .setSubcategory("NumPy")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("import numpy as np", StateEnum.NORMAL),
          new CodeLine(
            "arr = np.array([1, 2, 3]",
            StateEnum.ERROR,
            "Missing closing bracket",
          ),
          new CodeLine("print(arr.shape)", StateEnum.NORMAL),
        ],
        Language.PYTHON,
        "(3,)",
        "(3,)",
      ),
    )
    .build(),
];
