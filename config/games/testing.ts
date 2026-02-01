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
            "Correct! TestCase is the right base class",
            10,
          ),
          new CodeLine(
            "class TestMath(unittest.TestSuite):",
            StateEnum.WRONG,
            "TestSuite is for grouping tests",
          ),
          new CodeLine(
            "class TestMath(unittest.Test):",
            StateEnum.WRONG,
            "unittest.Test doesn't exist",
          ),
          new CodeLine(
            "class TestMath(Test):",
            StateEnum.WRONG,
            "Must inherit from unittest.TestCase",
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
            "Deprecated - use assertEqual instead.",
          ),
          new CodeLine(
            "self.assert_equal(a, b)",
            StateEnum.WRONG,
            "Wrong name - Python uses camelCase: assertEqual.",
          ),
          new CodeLine(
            "self.assertEq(a, b)",
            StateEnum.WRONG,
            "This method doesn't exist; use assertEqual.",
          ),
          new CodeLine(
            "assert a == b",
            StateEnum.WRONG,
            "Plain assert works but doesn't provide unittest's helpful error messages.",
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
          new CodeLine("@pytest.fixture", StateEnum.CORRECT, "Correct!", 10),
          new CodeLine(
            "@pytest.mark.fixture",
            StateEnum.WRONG,
            "Wrong: should use @pytest.fixture not @pytest.mark.fixture",
          ),
          new CodeLine(
            "@fixture",
            StateEnum.WRONG,
            "Missing pytest module reference",
          ),
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
            10,
          ),
          new CodeLine(
            "def setup(self):",
            StateEnum.WRONG,
            "Wrong: should be setUp with capital U",
          ),
          new CodeLine(
            "def setup_method(self):",
            StateEnum.WRONG,
            "That's for pytest, not unittest",
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
            "Correct! Mock with return_value",
            10,
          ),
          new CodeLine(
            "mock_func = Mock(returns=42)",
            StateEnum.WRONG,
            "Wrong: should be return_value not returns",
          ),
          new CodeLine(
            "mock_func = MagicMock(value=42)",
            StateEnum.WRONG,
            "Should use Mock, not MagicMock here",
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
            "Correct! Full path to function",
            10,
          ),
          new CodeLine(
            "@patch('external_func')",
            StateEnum.WRONG,
            "Must use full module path",
          ),
          new CodeLine(
            "@mock('module.external_func')",
            StateEnum.WRONG,
            "Should use @patch not @mock",
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
            "Correct! Proper parametrize syntax",
            10,
          ),
          new CodeLine(
            "@pytest.parametrize('input,expected', [",
            StateEnum.WRONG,
            "Should use @pytest.mark.parametrize",
          ),
          new CodeLine(
            "@parametrize('input,expected', [",
            StateEnum.WRONG,
            "Missing pytest module",
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
            "Correct! Skip with reason",
            10,
          ),
          new CodeLine(
            "@skip(reason='WIP')",
            StateEnum.WRONG,
            "Must use @pytest.mark.skip",
          ),
          new CodeLine(
            "@pytest.skip('WIP')",
            StateEnum.WRONG,
            "This is a function, not a decorator",
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
    .setLevel(3)
    .setDisabled(false)
    .setExtern(false)
    .setText(
      "Which command correctly installs and runs code coverage analysis?",
    )
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("# To measure code coverage, you need to:"),
          new CodeLine(""),
          new CodeLine(
            "pip install coverage",
            StateEnum.CORRECT,
            "Correct! 'coverage' is the standard Python package for measuring code coverage.",
            10,
          ),
          new CodeLine(
            "pip install pytest-coverage",
            StateEnum.WRONG,
            "Wrong package name. Use 'coverage' package, not 'pytest-coverage'.",
          ),
          new CodeLine(
            "pip install codecov",
            StateEnum.WRONG,
            "Incorrect. 'codecov' is a CI/CD service for tracking coverage, not the tool itself.",
          ),
          new CodeLine(
            "pip install code-coverage",
            StateEnum.WRONG,
            "Incorrect. The correct package name is 'coverage' with no hyphen.",
          ),
          new CodeLine("# Then run: coverage run -m pytest"),
          new CodeLine("# Generate report: coverage report"),
        ],
        "python",
      ),
    )
    .setCategory("Testing")
    .build(),
  new GameBuilder()
    .setTitle("Assertion Error Messages")
    .setHref("assertion-error-messages-1")
    .setTags([kt.python])
    .setSynopsis("Adding custom assertion messages")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setText(
      "When writing assertions, you can add custom error messages. Identify the correct syntax.",
    )
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("a, b = 5, 10"),
          new CodeLine("# Which assertion with message is correct?"),
          new CodeLine(""),
          new CodeLine(
            "self.assertEqual(a, b, message='Numbers should match')",
            StateEnum.ERROR,
            "Incorrect parameter name. The parameter is 'msg', not 'message'.",
          ),
          new CodeLine(
            "self.assertEqual(a, b, msg='Numbers should match')",
            StateEnum.CORRECT,
            "Correct! Use the keyword argument 'msg' to add a custom error message.",
            10,
          ),
          new CodeLine(
            "self.assertEqual(a, b, 'Numbers should match')",
            StateEnum.WRONG,
            "While this works as a positional argument, using 'msg=' is more explicit and readable.",
          ),
          new CodeLine(
            "self.assertEqual(a, b, error='Numbers should match')",
            StateEnum.WRONG,
            "Wrong parameter name - there is no 'error' parameter in assertEqual.",
          ),
          new CodeLine(
            "self.assertEqual(a, b): 'Numbers should match'",
            StateEnum.WRONG,
            "Invalid syntax - you can't use a colon outside a function definition.",
          ),
        ],
        "python",
      ),
    )
    .setCategory("Testing")
    .build(),
];
