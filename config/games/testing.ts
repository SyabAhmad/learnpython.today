import { Game, GameBuilder } from "@/types/game";
import { knownTags as kt } from "@/config/tag";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";

export const testingGames: Game[] = [
  new GameBuilder()
    .setTitle("Unit Test Basics")
    .setHref("unit-test-basics-1")
    .setTags([kt.python])
    .setSynopsis("Understanding unit tests")
    .setText("Identify correct test structure")
    .setLevel(2)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("import unittest"),
          new CodeLine(""),
          new CodeLine(
            "class TestMath(unittest.TestCase):",
            StateEnum.CORRECT,
            "Correct!",
          ),
          new CodeLine("  def test_addition(self):"),
          new CodeLine("    self.assertEqual(1 + 1, 2)"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Unittest Assertions")
    .setHref("unittest-assertions-1")
    .setTags([kt.python])
    .setSynopsis("Common unittest assertions")
    .setText("Choose correct assertion method")
    .setLevel(2)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("self.assertEqual(a, b)", StateEnum.CORRECT, "Correct!"),
          new CodeLine(
            "self.assertEquals(a, b)",
            StateEnum.WRONG,
            "Deprecated",
          ),
          new CodeLine(
            "self.assert_equal(a, b)",
            StateEnum.WRONG,
            "Wrong name",
          ),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Pytest Fixture")
    .setHref("pytest-fixture-1")
    .setTags([kt.python])
    .setSynopsis("Using pytest fixtures")
    .setText("Identify correct fixture syntax")
    .setLevel(3)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("import pytest"),
          new CodeLine(""),
          new CodeLine("@pytest.fixture", StateEnum.CORRECT, "Correct!"),
          new CodeLine("def sample_data():"),
          new CodeLine("  return [1, 2, 3]"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Test Setup and Teardown")
    .setHref("test-setup-teardown-1")
    .setTags([kt.python])
    .setSynopsis("Setup and cleanup in tests")
    .setText("Choose correct setup method")
    .setLevel(3)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "def setUp(self):",
            StateEnum.CORRECT,
            "Runs before each test",
          ),
          new CodeLine("  self.test_data = [1, 2, 3]"),
          new CodeLine(""),
          new CodeLine("def tearDown(self):"),
          new CodeLine("  # Cleanup code"),
          new CodeLine("  pass"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Mock Objects")
    .setHref("mock-objects-1")
    .setTags([kt.python])
    .setSynopsis("Using unittest.mock")
    .setText("How to mock external dependencies?")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("from unittest.mock import Mock"),
          new CodeLine(""),
          new CodeLine(
            "mock_func = Mock(return_value=42)",
            StateEnum.CORRECT,
            "Correct!",
          ),
          new CodeLine("result = mock_func()"),
          new CodeLine("# result == 42"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Patch Decorator")
    .setHref("patch-decorator-1")
    .setTags([kt.python])
    .setSynopsis("Using @patch decorator")
    .setText("Identify correct @patch usage")
    .setLevel(4)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "@patch('module.external_func')",
            StateEnum.CORRECT,
            "Correct!",
          ),
          new CodeLine("def test_func(self, mock_external):"),
          new CodeLine("  mock_external.return_value = 100"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Parameterized Tests")
    .setHref("parameterized-tests-1")
    .setTags([kt.python])
    .setSynopsis("Running same test with different inputs")
    .setText("Use @pytest.mark.parametrize")
    .setLevel(3)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "@pytest.mark.parametrize('input,expected', [",
            StateEnum.CORRECT,
            "Correct!",
          ),
          new CodeLine("  (2, 4),"),
          new CodeLine("  (3, 9),"),
          new CodeLine("])"),
          new CodeLine("def test_square(input, expected):"),
          new CodeLine("  assert input ** 2 == expected"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Test Skip")
    .setHref("test-skip-1")
    .setTags([kt.python])
    .setSynopsis("Skipping tests conditionally")
    .setText("How to skip a test?")
    .setLevel(2)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "@pytest.mark.skip(reason='WIP')",
            StateEnum.CORRECT,
            "Correct!",
          ),
          new CodeLine("def test_feature():"),
          new CodeLine("  pass"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Test Coverage")
    .setHref("test-coverage-1")
    .setTags([kt.python])
    .setSynopsis("Measuring test coverage")
    .setText("Which tool measures code coverage?")
    .setLevel(3)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("# Install coverage"),
          new CodeLine(
            "# pip install coverage",
            StateEnum.CORRECT,
            "Coverage.py",
          ),
          new CodeLine("# coverage run -m pytest"),
          new CodeLine("# coverage report"),
        ],
        "python",
      ),
    )
    .build(),
  new GameBuilder()
    .setTitle("Assertion Error Messages")
    .setHref("assertion-error-messages-1")
    .setTags([kt.python])
    .setSynopsis("Adding custom assertion messages")
    .setText("Identify correct assertion with message")
    .setLevel(2)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "self.assertEqual(a, b, 'Numbers should match')",
            StateEnum.CORRECT,
            "Correct!",
          ),
          new CodeLine(
            "self.assertEqual(a, b, msg='Numbers should match')",
            StateEnum.CORRECT,
            "Also correct!",
          ),
        ],
        "python",
      ),
    )
    .build(),
];
