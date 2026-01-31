import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const asyncGames: Game[] = [
  new GameBuilder()
    .setTitle("Async Function Basics")
    .setHref("async-function-basics-1")
    .setTags([kt.python])
    .setSynopsis("Understanding async/await syntax")
    .setText("Identify correct async function definition")
    .setLevel(3)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "async def fetch_data():",
            StateEnum.CORRECT,
            "Correct!",
          ),
          new CodeLine("  return await get_api_data()"),
          new CodeLine(""),
          new CodeLine("def fetch_data():", StateEnum.WRONG, "Missing async"),
          new CodeLine("  return await get_api_data()"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Await Usage")
    .setHref("await-usage-1")
    .setTags([kt.python])
    .setSynopsis("When to use await")
    .setText("Where should await be used?")
    .setLevel(3)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("async def main():"),
          new CodeLine(
            "  result = await long_operation()",
            StateEnum.CORRECT,
            "Correct!",
          ),
          new CodeLine(
            "  result = long_operation()",
            StateEnum.WRONG,
            "Missing await",
          ),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Asyncio Event Loop")
    .setHref("asyncio-event-loop-1")
    .setTags([kt.python])
    .setSynopsis("Running async functions")
    .setText("How to run async code?")
    .setLevel(3)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("import asyncio"),
          new CodeLine(""),
          new CodeLine("asyncio.run(main())", StateEnum.CORRECT, "Python 3.7+"),
          new CodeLine("loop = asyncio.get_event_loop()"),
          new CodeLine(
            "loop.run_until_complete(main())",
            StateEnum.CORRECT,
            "Traditional way",
          ),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Gather Concurrent Tasks")
    .setHref("gather-tasks-1")
    .setTags([kt.python])
    .setSynopsis("Running multiple coroutines concurrently")
    .setText("Use asyncio.gather to run tasks concurrently")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("await asyncio.gather(", StateEnum.CORRECT, "Correct!"),
          new CodeLine("  task1(),"),
          new CodeLine("  task2(),"),
          new CodeLine("  task3()"),
          new CodeLine(")"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Async Context Manager")
    .setHref("async-context-manager-1")
    .setTags([kt.python])
    .setSynopsis("Using async with statement")
    .setText("Choose correct async context manager")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "async with session.get(url) as resp:",
            StateEnum.CORRECT,
            "Correct!",
          ),
          new CodeLine("  data = await resp.json()"),
          new CodeLine(""),
          new CodeLine(
            "with session.get(url) as resp:",
            StateEnum.WRONG,
            "Missing async",
          ),
          new CodeLine("  data = resp.json()"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Asyncio Sleep")
    .setHref("asyncio-sleep-1")
    .setTags([kt.python])
    .setSynopsis("Non-blocking sleep in async")
    .setText("Which sleep to use in async code?")
    .setLevel(3)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "await asyncio.sleep(1)",
            StateEnum.CORRECT,
            "Non-blocking!",
          ),
          new CodeLine("time.sleep(1)", StateEnum.WRONG, "Blocks event loop"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Task Cancellation")
    .setHref("task-cancellation-1")
    .setTags([kt.python])
    .setSynopsis("Canceling async tasks")
    .setText("How to cancel a running task?")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("task = asyncio.create_task(long_op())"),
          new CodeLine("task.cancel()", StateEnum.CORRECT, "Correct!"),
          new CodeLine("await task"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Exception in Async")
    .setHref("exception-in-async-1")
    .setTags([kt.python])
    .setSynopsis("Handling exceptions in async code")
    .setText("Identify correct async error handling")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("try:", StateEnum.CORRECT, "Correct!"),
          new CodeLine("  result = await risky_operation()"),
          new CodeLine("except Exception as e:"),
          new CodeLine("  print(f'Error: {e}')"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Wait For Timeout")
    .setHref("wait-for-timeout-1")
    .setTags([kt.python])
    .setSynopsis("Setting timeout for async operations")
    .setText("How to add timeout to async operation?")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("try:", StateEnum.CORRECT, "Correct!"),
          new CodeLine("  await asyncio.wait_for(operation(), timeout=5)"),
          new CodeLine("except asyncio.TimeoutError:"),
          new CodeLine("  print('Timed out!')"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Async Generator")
    .setHref("async-generator-1")
    .setTags([kt.python])
    .setSynopsis("Using async generators")
    .setText("Identify async generator syntax")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("async def async_gen():", StateEnum.CORRECT, "Correct!"),
          new CodeLine("  for i in range(10):"),
          new CodeLine("    yield i"),
          new CodeLine("    await asyncio.sleep(1)"),
        ],
        "python",
      ),
    )
    .build(),
];
