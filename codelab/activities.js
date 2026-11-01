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
  ],
  "7": [
    {
      "kind": "python",
      "title": "Catch ValueError",
      "note": "Catch the expected exception rather than hiding all errors.",
      "example": "try:\n    int(\"bad\")\nexcept ValueError:\n    print(\"Invalid\")",
      "output": "Invalid",
      "challenge": "Write parse(text) returning the integer or None on ValueError.",
      "starter": "def parse(text):\n    pass\nprint(parse(\"bad\"))",
      "solution": "def parse(text):\n    try:\n        return int(text)\n    except ValueError:\n        return None\nprint(parse(\"bad\"))",
      "check": "assert parse(\"7\") == 7 and parse(\"bad\") is None, \"Catch ValueError and return None.\""
    },
    {
      "kind": "python",
      "title": "finally runs cleanup",
      "note": "A finally block runs whether the conversion worked or not.",
      "example": "try:\n    int(\"5\")\nfinally:\n    print(\"Finished\")",
      "output": "Finished",
      "challenge": "Add finally to print Finished after the invalid conversion.",
      "starter": "try:\n    int(\"bad\")\nexcept ValueError:\n    print(\"Fallback\")\n# finally needed",
      "solution": "try:\n    int(\"bad\")\nexcept ValueError:\n    print(\"Fallback\")\nfinally:\n    print(\"Finished\")",
      "check": "assert __output__.splitlines()[-1] == \"Finished\", \"Print Finished in finally.\""
    }
  ],
  "8": [
    {
      "kind": "python",
      "title": "Inspect data types",
      "note": "Python has int, float, complex, str and bool; type() inspects a value.",
      "example": "print(type(10).__name__)\nprint(type(3.5).__name__)\nprint(type(\"ML\").__name__)\nprint(type(True).__name__)",
      "output": "int\nfloat\nstr\nbool",
      "challenge": "Create a complex number sample = 2 + 3j.",
      "starter": "sample = None\nprint(type(sample).__name__)",
      "solution": "sample = 2 + 3j\nprint(type(sample).__name__)",
      "check": "assert isinstance(sample, complex), \"Use a complex number with j.\""
    },
    {
      "kind": "python",
      "title": "Boolean truthiness",
      "note": "An empty string is falsey; even the string 'False' is truthy.",
      "example": "print(bool(\"\"))\nprint(bool(\"False\"))\nprint(bool(0))",
      "output": "False\nTrue\nFalse",
      "challenge": "Set is_valid to bool('') and inspect it.",
      "starter": "is_valid = True\nprint(is_valid)",
      "solution": "is_valid = bool(\"\")\nprint(is_valid)",
      "check": "assert is_valid is False, \"An empty string is falsey.\""
    }
  ],
  "9": [
    {
      "kind": "python",
      "title": "Index and slice lists",
      "note": "Index 0 is first; -1 last; the stop index in a slice is excluded.",
      "example": "values = [10, 20, 30, 40]\nprint(values[0])\nprint(values[-1])\nprint(values[1:3])",
      "output": "10\n40\n[20, 30]",
      "challenge": "Set middle to elements at indices 1 and 2.",
      "starter": "values = [5, 10, 15, 20]\nmiddle = []\nprint(middle)",
      "solution": "values = [5, 10, 15, 20]\nmiddle = values[1:3]\nprint(middle)",
      "check": "assert middle == [10, 15], \"Use values[1:3].\""
    },
    {
      "kind": "python",
      "title": "Append, insert, remove",
      "note": "These methods change the original list.",
      "example": "items = [1, 3]\nitems.insert(1, 2)\nitems.append(4)\nprint(items)",
      "output": "[1, 2, 3, 4]",
      "challenge": "Append 4 to values, then remove 2.",
      "starter": "values = [1, 2, 3]\n# Change values\nprint(values)",
      "solution": "values = [1, 2, 3]\nvalues.append(4)\nvalues.remove(2)\nprint(values)",
      "check": "assert values == [1, 3, 4], \"Use append and remove.\""
    }
  ],
  "10": [
    {
      "kind": "python",
      "title": "Tuple creation and unpacking",
      "note": "Unpack fixed-size tuples into separate variable names.",
      "example": "shape = (128, 64)\nrows, columns = shape\nprint(rows, columns)",
      "output": "128 64",
      "challenge": "Create a single-item tuple containing 5.",
      "starter": "single = (5)\nprint(type(single).__name__)",
      "solution": "single = (5,)\nprint(type(single).__name__)",
      "check": "assert single == (5,), \"Use the trailing comma (5,).\""
    }
  ],
  "11": [
    {
      "kind": "python",
      "title": "Safe dictionary lookup",
      "note": "dictionary.get(key, default) handles optional keys.",
      "example": "cfg = {\"epochs\": 10}\nprint(cfg[\"epochs\"])\nprint(cfg.get(\"batch_size\", 32))",
      "output": "10\n32",
      "challenge": "Read learning_rate with fallback 0.01.",
      "starter": "config = {\"epochs\": 20}\nlearning_rate = None\nprint(learning_rate)",
      "solution": "config = {\"epochs\": 20}\nlearning_rate = config.get(\"learning_rate\", 0.01)\nprint(learning_rate)",
      "check": "assert learning_rate == 0.01, \"Use get() with a default.\""
    },
    {
      "kind": "python",
      "title": "Update dictionary entries",
      "note": "Assign a key to update its value; .items() yields key and value pairs.",
      "example": "cfg = {\"epochs\": 10}\ncfg[\"epochs\"] = 15\nfor k, v in cfg.items():\n    print(k, v)",
      "output": "epochs 15",
      "challenge": "Change epochs to 25 and add batch_size 32.",
      "starter": "config = {\"epochs\": 10}\n# Update it\nprint(config)",
      "solution": "config = {\"epochs\": 25, \"batch_size\": 32}\nprint(config)",
      "check": "assert config[\"epochs\"] == 25 and config[\"batch_size\"] == 32, \"Update both keys.\""
    }
  ],
  "12": [
    {
      "kind": "python",
      "title": "Remove duplicate values",
      "note": "set() creates an unordered collection of unique values.",
      "example": "labels = [\"cat\", \"cat\", \"dog\"]\nprint(len(set(labels)))",
      "output": "2",
      "challenge": "Create distinct from numbers.",
      "starter": "numbers = [1, 1, 2, 2, 3]\ndistinct = None\nprint(len(distinct))",
      "solution": "numbers = [1, 1, 2, 2, 3]\ndistinct = set(numbers)\nprint(len(distinct))",
      "check": "assert distinct == {1, 2, 3}, \"Convert to a set.\""
    },
    {
      "kind": "python",
      "title": "Union, intersection, difference",
      "note": "Use |, & and - to compare two sets.",
      "example": "a = {1, 2, 3}\nb = {3, 4}\nprint(sorted(a | b))\nprint(sorted(a & b))",
      "output": "[1, 2, 3, 4]\n[3]",
      "challenge": "Store the shared items of a and b in common.",
      "starter": "a = {1, 2, 3}\nb = {3, 4}\ncommon = set()\nprint(common)",
      "solution": "a = {1, 2, 3}\nb = {3, 4}\ncommon = a & b\nprint(common)",
      "check": "assert common == {3}, \"Use intersection &.\""
    }
  ],
  "13": [
    {
      "kind": "python",
      "title": "Aliasing vs copying",
      "note": "alias = original points to the same mutable list.",
      "example": "original = [1, 2]\nalias = original\nalias.append(3)\nprint(original)",
      "output": "[1, 2, 3]",
      "challenge": "Create alias for numbers and append 4 to the shared list.",
      "starter": "numbers = [1, 2, 3]\nalias = None\nprint(numbers)",
      "solution": "numbers = [1, 2, 3]\nalias = numbers\nalias.append(4)\nprint(numbers)",
      "check": "assert alias is numbers and numbers == [1, 2, 3, 4], \"Share and mutate one list.\""
    },
    {
      "kind": "python",
      "title": "Local scope",
      "note": "A local variable belongs inside a function. Return values instead of changing global state.",
      "example": "value = 10\ndef double(x):\n    local_result = x * 2\n    return local_result\nprint(double(value))\nprint(value)",
      "output": "20\n10",
      "challenge": "Define triple(x) without modifying global value.",
      "starter": "value = 5\ndef triple(x):\n    pass\nprint(triple(value))",
      "solution": "value = 5\ndef triple(x):\n    return 3 * x\nprint(triple(value))",
      "check": "assert triple(5) == 15 and value == 5, \"Return without changing global state.\""
    }
  ]
};
