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
            "def fetch_data():",
            StateEnum.ERROR,
            "A function containing 'await' must be declared with 'async def'.",
          ),
          new CodeLine(
            "async def fetch_data():",
            StateEnum.CORRECT,
            "Correct! Use 'async def' for coroutines.",
            10,
          ),
          new CodeLine(
            "await def fetch_data():",
            StateEnum.WRONG,
            "Incorrect keyword; 'await' is used inside the body, not for definition.",
          ),
          new CodeLine(
            "coroutine def fetch_data():",
            StateEnum.WRONG,
            "There is no 'coroutine' keyword for function definition in Python.",
          ),
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
            "  result = long_operation()",
            StateEnum.ERROR,
            "Calling an async function without 'await' returns a coroutine object, not the result.",
          ),
          new CodeLine(
            "  result = await long_operation()",
            StateEnum.CORRECT,
            "Correct! 'await' pauses execution until the coroutine completes.",
            15,
          ),
          new CodeLine(
            "  result = yield from long_operation()",
            StateEnum.WRONG,
            "'yield from' is the old syntax (Python 3.4); 'await' is preferred in async def.",
          ),
          new CodeLine(
            "  result = asyncio.run(long_operation())",
            StateEnum.WRONG,
            "You cannot use asyncio.run() inside an existing event loop.",
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
          new CodeLine(
            "asyncio.start(main())",
            StateEnum.ERROR,
            "The modern entry point to run an async main function is 'asyncio.run()'.",
          ),
          new CodeLine(
            "asyncio.run(main())",
            StateEnum.CORRECT,
            "Correct! asyncio.run() handles event loop lifecycle for you.",
            15,
          ),
          new CodeLine(
            "main()",
            StateEnum.WRONG,
            "Simply calling a coroutine function does not execute it.",
          ),
          new CodeLine(
            "asyncio.execute(main())",
            StateEnum.WRONG,
            "There is no 'execute' function in the asyncio module.",
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
          new CodeLine(
            "await asyncio.all(task1(), task2())",
            StateEnum.ERROR,
            "To run multiple coroutines concurrently and wait for them, use 'asyncio.gather()'.",
          ),
          new CodeLine(
            "await asyncio.gather(task1(), task2())",
            StateEnum.CORRECT,
            "Correct! asyncio.gather() runs tasks concurrently.",
            20,
          ),
          new CodeLine(
            "await (task1(), task2())",
            StateEnum.WRONG,
            "You cannot await a tuple of coroutines directly.",
          ),
          new CodeLine(
            "asyncio.gather(task1(), task2())",
            StateEnum.WRONG,
            "You must 'await' the gather() call to get the results.",
          ),
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
            "with session.get(url) as resp:",
            StateEnum.ERROR,
            "For non-blocking I/O (like aiohttp), you must use 'async with'.",
          ),
          new CodeLine(
            "async with session.get(url) as resp:",
            StateEnum.CORRECT,
            "Correct! 'async with' invokes the __aenter__ and __aexit__ methods.",
            20,
          ),
          new CodeLine(
            "await with session.get(url) as resp:",
            StateEnum.WRONG,
            "Invalid syntax; it's 'async with', not 'await with'.",
          ),
          new CodeLine(
            "with await session.get(url) as resp:",
            StateEnum.WRONG,
            "Invalid syntax for an asynchronous context manager.",
          ),
          new CodeLine("  data = await resp.json()"),
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
            "time.sleep(1)",
            StateEnum.ERROR,
            "time.sleep() is blocking and will stop the entire event loop.",
          ),
          new CodeLine(
            "await asyncio.sleep(1)",
            StateEnum.CORRECT,
            "Correct! asyncio.sleep() is non-blocking and allows other tasks to run.",
            10,
          ),
          new CodeLine(
            "asyncio.sleep(1)",
            StateEnum.WRONG,
            "You must 'await' the sleep() call; otherwise, it just returns a coroutine.",
          ),
          new CodeLine(
            "await time.sleep(1)",
            StateEnum.WRONG,
            "You cannot await time.sleep() because it is not a coroutine.",
          ),
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
          new CodeLine(
            "task.stop()",
            StateEnum.ERROR,
            "The method to stop an asyncio Task is '.cancel()'.",
          ),
          new CodeLine(
            "task.cancel()",
            StateEnum.CORRECT,
            "Correct! This raises a CancelledError inside the coroutine.",
            20,
          ),
          new CodeLine(
            "task.kill()",
            StateEnum.WRONG,
            "Tasks don't have a kill() method; that's for processes.",
          ),
          new CodeLine(
            "await task.end()",
            StateEnum.WRONG,
            "Methods don't exist; use .cancel() instead.",
          ),
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
          new CodeLine(
            "catch Exception as e:",
            StateEnum.ERROR,
            "Python uses 'except', not 'catch', even in async code.",
          ),
          new CodeLine(
            "except Exception as e:",
            StateEnum.CORRECT,
            "Correct! Normal try/except blocks work perfectly for awaited coroutines.",
            15,
          ),
          new CodeLine(
            "async except Exception:",
            StateEnum.WRONG,
            "There is no 'async except' keyword in Python.",
          ),
          new CodeLine(
            "error Exception:",
            StateEnum.WRONG,
            "The keyword is 'except'.",
          ),
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
          new CodeLine("try:"),
          new CodeLine(
            "  await asyncio.timeout(operation(), 5)",
            StateEnum.ERROR,
            "The function to wait for a coroutine with a timeout is 'asyncio.wait_for()'.",
          ),
          new CodeLine(
            "  await asyncio.wait_for(operation(), timeout=5)",
            StateEnum.CORRECT,
            "Correct! This will raise asyncio.TimeoutError if the limit is reached.",
            20,
          ),
          new CodeLine(
            "  await operation(timeout=5)",
            StateEnum.WRONG,
            "Most coroutines don't take a native timeout argument; use wait_for.",
          ),
          new CodeLine(
            "  asyncio.wait(operation(), timeout=5)",
            StateEnum.WRONG,
            "asyncio.wait() takes a collection of tasks and works differently.",
          ),
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
          new CodeLine(
            "def async_gen():",
            StateEnum.ERROR,
            "An asynchronous generator must be defined using 'async def'.",
          ),
          new CodeLine(
            "async def async_gen():",
            StateEnum.CORRECT,
            "Correct! This allows the use of 'yield' and 'await' within the body.",
            20,
          ),
          new CodeLine(
            "yield async def async_gen():",
            StateEnum.WRONG,
            "Invalid syntax for defining an async generator.",
          ),
          new CodeLine(
            "async generator async_gen():",
            StateEnum.WRONG,
            "There is no 'generator' keyword for definitions.",
          ),
          new CodeLine("  for i in range(10):"),
          new CodeLine("    yield i"),
          new CodeLine("    await asyncio.sleep(1)"),
        ],
        "python",
      ),
    )
    .build(),
];
