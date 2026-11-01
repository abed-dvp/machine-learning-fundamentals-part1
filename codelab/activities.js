'use strict';
window.CODELAB_ACTIVITIES={
  "1": [
    {
      "kind": "terminal",
      "title": "Check Python version",
      "note": "Run in your local VS Code terminal (not the browser Python editor).",
      "example": "python --version",
      "output": "Python 3.x.y",
      "challenge": "Run this command and confirm that Python 3 is installed.",
      "alternate": "py --version  (Windows alternative)"
    },
    {
      "kind": "python",
      "title": "Inspect Python version in code",
      "note": "The version inside the browser is its own Python interpreter.",
      "example": "import sys\nprint(f\"Python {sys.version_info.major}\")",
      "output": "Python 3",
      "challenge": "Print the complete Python version string using sys.version.split()[0].",
      "starter": "import sys\n# Print the complete version",
      "solution": "import sys\nprint(sys.version.split()[0])",
      "check": "assert __output__.strip().startswith(\"3.\"), \"Print the complete version number.\""
    },
    {
      "kind": "terminal",
      "title": "Create a virtual environment",
      "note": "Run in a LOCAL project folder. The browser editor cannot create a venv for your computer.",
      "example": "python -m venv .venv\n.\\.venv\\Scripts\\Activate.ps1\npython -c \"import sys; print(sys.prefix != sys.base_prefix)\"",
      "output": "True after activation",
      "challenge": "Run these commands, confirm the result is True, then mark this task done.",
      "alternate": "macOS/Linux activation: source .venv/bin/activate"
    }
  ],
  "2": [
    {
      "kind": "python",
      "title": "Variables and assignment",
      "note": "Use = to give values names; use descriptive snake_case.",
      "example": "model = \"Baseline\"\nscore = 0.85\nprint(model)\nprint(type(score).__name__)",
      "output": "Baseline\nfloat",
      "challenge": "Create batch_size = 32.",
      "starter": "batch_size = 0\nprint(batch_size)",
      "solution": "batch_size = 32\nprint(batch_size)",
      "check": "assert batch_size == 32, \"Set batch_size to 32.\""
    },
    {
      "kind": "python",
      "title": "F-string formatting",
      "note": "The braces of an f-string insert the value or evaluated expression.",
      "example": "epochs = 10\nprint(f\"Epochs: {epochs}\")",
      "output": "Epochs: 10",
      "challenge": "Print Accuracy: 85% using a float value 0.85.",
      "starter": "accuracy = 0.85\n# Print accuracy as percent",
      "solution": "accuracy = 0.85\nprint(f\"Accuracy: {accuracy:.0%}\")",
      "check": "assert \"Accuracy: 85%\" in __output__, \"Use percentage formatting in an f-string.\""
    }
  ],
  "3": [
    {
      "kind": "python",
      "title": "Arithmetic operators",
      "note": "/ divides; // floor-divides; % gives remainder; ** exponentiates.",
      "example": "print(10 / 4)\nprint(10 // 4)\nprint(10 % 4)\nprint(2 ** 3)",
      "output": "2.5\n2\n2\n8",
      "challenge": "Set remainder to 17 % 5 and cube to 3 ** 3.",
      "starter": "remainder = 0\ncube = 0\nprint(remainder, cube)",
      "solution": "remainder = 17 % 5\ncube = 3 ** 3\nprint(remainder, cube)",
      "check": "assert remainder == 2 and cube == 27, \"Use % and **.\""
    }
  ],
  "4": [
    {
      "kind": "python",
      "title": "for and range()",
      "note": "range() excludes its stop argument.",
      "example": "for n in range(1, 4):\n    print(n)",
      "output": "1\n2\n3",
      "challenge": "Generate [2, 4, 6] using range.",
      "starter": "numbers = []\nprint(numbers)",
      "solution": "numbers = list(range(2, 7, 2))\nprint(numbers)",
      "check": "assert numbers == [2, 4, 6], \"Use range(start, stop, step).\""
    },
    {
      "kind": "python",
      "title": "while loops",
      "note": "A while condition must eventually become false.",
      "example": "n = 0\nwhile n < 3:\n    print(n)\n    n += 1",
      "output": "0\n1\n2",
      "challenge": "Increase count from 0 until it reaches 4.",
      "starter": "count = 0\n# while loop here\nprint(count)",
      "solution": "count = 0\nwhile count < 4:\n    count += 1\nprint(count)",
      "check": "assert count == 4, \"Increment count to 4.\""
    }
  ],
  "5": [
    {
      "kind": "python",
      "title": "Functions and return",
      "note": "return provides a result. print only displays one.",
      "example": "def double(x):\n    return x * 2\nprint(double(4))",
      "output": "8",
      "challenge": "Write square(x) that returns x ** 2.",
      "starter": "def square(x):\n    pass\nprint(square(5))",
      "solution": "def square(x):\n    return x ** 2\nprint(square(5))",
      "check": "assert square(5) == 25 and square(0) == 0, \"Return the square.\""
    },
    {
      "kind": "python",
      "title": "Lambda expressions",
      "note": "A lambda is a one-expression function.",
      "example": "double = lambda x: x * 2\nprint(double(7))",
      "output": "14",
      "challenge": "Create a lambda named triple that multiplies by 3.",
      "starter": "triple = lambda x: x\nprint(triple(4))",
      "solution": "triple = lambda x: x * 3\nprint(triple(4))",
      "check": "assert triple(4) == 12, \"Multiply by 3.\""
    }
  ],
  "6": [
    {
      "kind": "python",
      "title": "Class instances and attributes",
      "note": "__init__ initializes each instance; self stores its own attributes.",
      "example": "class Model:\n    def __init__(self, name):\n        self.name = name\nprint(Model(\"Tree\").name)",
      "output": "Tree",
      "challenge": "Add self.version to Model and accept it in the constructor.",
      "starter": "class Model:\n    def __init__(self, name, version):\n        self.name = name\n        # Set self.version\nm = Model(\"Tree\", 2)\nprint(m.version)",
      "solution": "class Model:\n    def __init__(self, name, version):\n        self.name = name\n        self.version = version\nm = Model(\"Tree\", 2)\nprint(m.version)",
      "check": "assert Model(\"Forest\", 3).version == 3, \"Store version on self.\""
    }
  ]
};
