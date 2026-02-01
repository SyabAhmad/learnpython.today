// Whether the line is OK, Problematic, A correct answer or a wrong one.
export enum StateEnum {
  NORMAL = 0,
  ERROR = 1,
  CORRECT = 2,
  WRONG = 3,
}

// Supported programming languages
export enum Language {
  PYTHON = "python",
  SQL = "sql",
  HTML = "html",
  CSS = "css",
  JAVASCRIPT = "javascript",
  GO = "go",
  FLASK = "flask",
}

// Supported backend/execution services
export enum BackendService {
  PYTHON = "python",
  FLASK = "flask",
  NUMPY = "numpy",
  MATPLOTLIB = "matplotlib",
  SQLITE = "sqlite",
  NODEJS = "nodejs",
  GO_RUNTIME = "go_runtime",
}

// Game mechanics/types
export enum GameMechanic {
  BUG_FINDING = "bug_finding",
  CODE_EXECUTION = "code_execution",
  MULTI_FILE = "multi_file",
  QUERY_OPTIMIZATION = "query_optimization",
  MARKUP_VALIDATION = "markup_validation",
}

// Class for a line (or logic group) of code in the codeblock
export class CodeLine {
  content: string;
  state: StateEnum;
  hint: string;
  score: number;

  constructor(
    content: string,
    state: StateEnum = StateEnum.NORMAL,
    hint: string = "",
    score: number = 0,
  ) {
    this.content = content;
    this.state = state;
    this.hint = hint;
    this.score = score;
    if (this.score == 0 && this.state == StateEnum.CORRECT) {
      this.score = 10;
    }
  }
}
