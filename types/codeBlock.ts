import { CodeLine, Language, BackendService } from "@/types/codeLine";

export interface CodeBlockConfig {
  language: Language | string;
  backendService?: BackendService;
  timeout?: number;
  executable?: boolean;
  environment?: Record<string, string>;
  dependencies?: string[];
  presetCode?: string;
}

export class CodeBlock {
  codeLines: CodeLine[];
  language: string;
  output: string;
  expected: string;
  log: string;
  backendService?: BackendService;
  timeout?: number;
  executable?: boolean;
  environment?: Record<string, string>;
  dependencies?: string[];

  constructor(
    codeLines: CodeLine[],
    language: string = "python",
    output: string = "",
    expected: string = "",
    log: string = "",
    backendService?: BackendService,
    timeout: number = 5000,
    executable: boolean = false,
    environment?: Record<string, string>,
    dependencies?: string[],
  ) {
    this.codeLines = codeLines;
    this.language = language;
    this.output = output;
    this.expected = expected;
    this.log = log;
    this.backendService = backendService;
    this.timeout = timeout;
    this.executable = executable;
    this.environment = environment;
    this.dependencies = dependencies;
  }
}
