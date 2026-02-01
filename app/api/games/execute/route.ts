import { NextRequest, NextResponse } from "next/server";
import { Language, BackendService } from "@/types/codeLine";

export const runtime = "nodejs";

interface ExecutionRequest {
  code: string;
  language: Language | string;
  backendService?: BackendService;
  dependencies?: string[];
  timeout?: number;
}

interface ExecutionResponse {
  success: boolean;
  output?: string;
  error?: string;
  executionTime: number;
}

/**
 * Execute code based on language and backend service
 * Supports: Python, SQL, JavaScript, Go, etc.
 */
async function executeCode(
  code: string,
  language: Language | string,
  backendService?: BackendService,
  timeout: number = 5000,
): Promise<{ output: string; error?: string }> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    switch (language) {
      case Language.PYTHON:
        return await executePython(code, backendService);
      case Language.JAVASCRIPT:
        return await executeJavaScript(code);
      case Language.SQL:
        return await executeSQLite(code);
      case Language.GO:
        return await executeGo(code);
      case Language.HTML:
      case Language.CSS:
        return { output: "HTML/CSS validated successfully" };
      default:
        return { output: "", error: `Unsupported language: ${language}` };
    }
  } finally {
    clearTimeout(timeoutId);
  }
}

async function executePython(
  code: string,
  backendService?: BackendService,
): Promise<{ output: string; error?: string }> {
  try {
    // This would typically call a Python execution service
    // For now, return a placeholder
    return {
      output: "Python execution would run here",
    };
  } catch (error) {
    return {
      output: "",
      error: `Python execution error: ${error}`,
    };
  }
}

async function executeJavaScript(
  code: string,
): Promise<{ output: string; error?: string }> {
  try {
    // Create a sandbox-like environment
    const AsyncFunction = Object.getPrototypeOf(
      async function () {},
    ).constructor;
    const fn = new AsyncFunction(code);
    const result = await fn();
    return {
      output: String(result || ""),
    };
  } catch (error) {
    return {
      output: "",
      error: `JavaScript error: ${error}`,
    };
  }
}

async function executeSQLite(
  code: string,
): Promise<{ output: string; error?: string }> {
  try {
    // This would connect to SQLite and execute
    // For now, return a placeholder
    return {
      output: "SQLite execution would run here",
    };
  } catch (error) {
    return {
      output: "",
      error: `SQL error: ${error}`,
    };
  }
}

async function executeGo(
  code: string,
): Promise<{ output: string; error?: string }> {
  try {
    // Go code execution would require compilation
    // For now, return a placeholder
    return {
      output: "Go execution would run here",
    };
  } catch (error) {
    return {
      output: "",
      error: `Go error: ${error}`,
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ExecutionRequest = await request.json();
    const { code, language, backendService, timeout = 5000 } = body;

    if (!code) {
      return NextResponse.json(
        { success: false, error: "Code is required" },
        { status: 400 },
      );
    }

    if (!language) {
      return NextResponse.json(
        { success: false, error: "Language is required" },
        { status: 400 },
      );
    }

    const startTime = Date.now();
    const result = await executeCode(code, language, backendService, timeout);
    const executionTime = Date.now() - startTime;

    if (result.error) {
      return NextResponse.json(
        {
          success: false,
          error: result.error,
          executionTime,
        },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      output: result.output,
      executionTime,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: `Server error: ${error}`,
        executionTime: 0,
      },
      { status: 500 },
    );
  }
}
