'use strict';
window.CODELAB_MODULES=[
  {
    "title": "Introduction to Python Programming",
    "source": "Lecture 1 · 26 slides"
  },
  {
    "title": "Variables & Data Types",
    "source": "Lecture 2 · 22 slides"
  },
  {
    "title": "Conditions & If Statements",
    "source": "Lecture 3 · 20 slides"
  }
];
window.CODELAB_STEPS=[
  {
    "id": 1,
    "unit": 1,
    "title": "Setup & Hello World",
    "slides": "Lecture 1 · slides 8–11",
    "time": "7 min",
    "learn": "Write and execute your first Python program. `print()` sends text to the output.",
    "bullets": [
      "Check Python in the terminal: python --version (or py --version on Windows).",
      "Create an isolated environment: python -m venv .venv.",
      "Text in quotes is a string. print() displays it."
    ],
    "example": "print(\"Hello, World!\")",
    "output": "Hello, World!",
    "challenge": "Edit the program so it prints Hello, Machine Learning! exactly.",
    "starter": "print(\"Hello, World!\")",
    "solution": "print(\"Hello, Machine Learning!\")",
    "takeaway": "Keep each project in its own virtual environment. The online Codelab runs without a local installation.",
    "check": "assert \"Hello, Machine Learning!\" in __output__, \"Print Hello, Machine Learning! exactly.\""
  },
  {
    "id": 2,
    "unit": 1,
    "title": "Variables & print()",
    "slides": "Lecture 1 · slides 11–14",
    "time": "6 min",
    "learn": "Variables name values. Use = to assign them and f-strings to display them.",
    "bullets": [
      "Python variables are dynamically typed.",
      "Use descriptive snake_case names such as model_name.",
      "In an f-string, {name} inserts the variable's value."
    ],
    "example": "model_name = \"Baseline\"\naccuracy = 0.85\nprint(model_name, accuracy)\nprint(f\"Model: {model_name}\")",
    "output": "Baseline 0.85\nModel: Baseline",
    "challenge": "Create a variable called epochs with value 10, then print Epochs: 10 using an f-string.",
    "starter": "model_name = \"Baseline\"\n# Your turn: add epochs and print the label",
    "solution": "epochs = 10\nprint(f\"Epochs: {epochs}\")",
    "takeaway": "For experiment settings and metrics, choose descriptive names rather than `x` or `a`.",
    "check": "assert epochs == 10, \"Set epochs to 10.\"\nassert \"Epochs: 10\" in __output__, \"Print Epochs: 10.\""
  },
  {
    "id": 3,
    "unit": 1,
    "title": "Operators & type conversion",
    "slides": "Lecture 1 · slides 15–16",
    "time": "7 min",
    "learn": "Convert numeric strings before calculating; learn /, //, %, and **.",
    "bullets": [
      "int('4') and float('0.5') convert strings to numbers.",
      "/ divides; // floor-divides; % returns the remainder.",
      "** calculates powers. == compares values, = assigns values."
    ],
    "example": "batches = int(\"4\")\nitems_per_batch = 8\ncount = batches * items_per_batch\nprint(\"Samples:\", count)\nprint(\"Remainder:\", count % 5)",
    "output": "Samples: 32\nRemainder: 2",
    "challenge": "Convert the string '12' to a number and multiply it by 3. Store the answer in total.",
    "starter": "raw = \"12\"\n# Your turn: define total\nprint(total)",
    "solution": "raw = \"12\"\ntotal = int(raw) * 3\nprint(total)",
    "takeaway": "`int('hello')` raises `ValueError`: validate imported numbers rather than silently assuming they are valid.",
    "check": "assert total == 36, \"Expected total = int(raw) * 3.\""
  },
  {
    "id": 4,
    "unit": 1,
    "title": "For & while loops",
    "slides": "Lecture 1 · slide 19",
    "time": "7 min",
    "learn": "Use for to visit items and while to repeat based on a condition.",
    "bullets": [
      "for item in items iterates through a collection.",
      "range(1, 6) yields 1 through 5 (stop excluded).",
      "A while loop must eventually make its condition false."
    ],
    "example": "scores = [3, 5, 7]\ntotal = 0\nfor score in scores:\n    total += score\nprint(\"Sum:\", total)\ncountdown = 2\nwhile countdown > 0:\n    countdown -= 1\nprint(\"Done\")",
    "output": "Sum: 15\nDone",
    "challenge": "Use a for loop to calculate the sum of numbers 1 through 5 in a variable named total.",
    "starter": "total = 0\n# Your turn: loop through range(1, 6)\nprint(\"Sum:\", total)",
    "solution": "total = 0\nfor number in range(1, 6):\n    total += number\nprint(\"Sum:\", total)",
    "takeaway": "For large numeric arrays, use array operations when appropriate instead of slow Python-level loops.",
    "check": "assert total == 15, \"The sum of 1 through 5 should be 15.\""
  },
  {
    "id": 5,
    "unit": 1,
    "title": "Functions & lambda",
    "slides": "Lecture 1 · slides 21–22",
    "time": "7 min",
    "learn": "Define reusable functions with def and return; use lambda for one expression.",
    "bullets": [
      "Parameters receive inputs; return sends a result back.",
      "A function without return produces None.",
      "lambda x: x * 2 is a one-expression function."
    ],
    "example": "def add(a, b):\n    return a + b\n\ndouble = lambda x: x * 2\nprint(add(3, 4))\nprint(double(5))",
    "output": "7\n10",
    "challenge": "Define multiply(a, b) that returns the product, and print multiply(3, 4).",
    "starter": "# Your turn: define multiply(a, b)\nprint(multiply(3, 4))",
    "solution": "def multiply(a, b):\n    return a * b\n\nprint(multiply(3, 4))",
    "takeaway": "Small functions that return results are easier to test and reuse in data-processing code.",
    "check": "assert multiply(3, 4) == 12, \"multiply(3, 4) must return 12.\"\nassert multiply(0, 10) == 0, \"Check the zero case.\""
  },
  {
    "id": 6,
    "unit": 1,
    "title": "Classes & objects",
    "slides": "Lecture 1 · slide 23",
    "time": "7 min",
    "learn": "Classes group attributes and methods; objects are individual instances.",
    "bullets": [
      "class defines a type; Model('Baseline') constructs an object.",
      "__init__ initializes data when the object is created.",
      "self.name belongs to the current instance."
    ],
    "example": "class Model:\n    def __init__(self, name):\n        self.name = name\n\nmodel = Model(\"Baseline\")\nprint(model.name)",
    "output": "Baseline",
    "challenge": "Add a method describe(self) that returns 'Model: ' followed by the object's name.",
    "starter": "class Model:\n    def __init__(self, name):\n        self.name = name\n    # Your turn: add describe(self)\n\nmodel = Model(\"Baseline\")\nprint(model.describe())",
    "solution": "class Model:\n    def __init__(self, name):\n        self.name = name\n\n    def describe(self):\n        return \"Model: \" + self.name\n\nmodel = Model(\"Baseline\")\nprint(model.describe())",
    "takeaway": "Class-based model APIs often organize configuration and behavior this way.",
    "check": "assert Model(\"Baseline\").describe() == \"Model: Baseline\", \"describe() must include the model name.\"\nassert Model(\"Tree\").describe() == \"Model: Tree\", \"Do not hard-code a single name.\""
  },
  {
    "id": 7,
    "unit": 1,
    "title": "Exception handling",
    "slides": "Lecture 1 · slide 24",
    "time": "7 min",
    "learn": "Use try/except for expected errors and finally for cleanup.",
    "bullets": [
      "int('bad') raises ValueError.",
      "Catch specific exceptions, not every possible error.",
      "finally runs after try/except, even when an exception occurs."
    ],
    "example": "try:\n    value = int(\"not-a-number\")\nexcept ValueError:\n    value = 0\nfinally:\n    print(\"Conversion attempted\")\nprint(value)",
    "output": "Conversion attempted\n0",
    "challenge": "Write a function safe_int(text) that returns int(text), or -1 when conversion fails with ValueError.",
    "starter": "def safe_int(text):\n    # Your turn: use try/except ValueError\n    pass\n\nprint(safe_int(\"8\"), safe_int(\"bad\"))",
    "solution": "def safe_int(text):\n    try:\n        return int(text)\n    except ValueError:\n        return -1\n\nprint(safe_int(\"8\"), safe_int(\"bad\"))",
    "takeaway": "A fallback value must be intentional; for real datasets, consider recording invalid rows.",
    "check": "assert safe_int(\"8\") == 8, \"A valid number should convert to int.\"\nassert safe_int(\"bad\") == -1, \"Return -1 for invalid text.\""
  },
  {
    "id": 8,
    "unit": 2,
    "title": "Numeric, string & Boolean types",
    "slides": "Lecture 2 · slides 5–9",
    "time": "6 min",
    "learn": "Learn int, float, complex, str, and bool, and inspect them with type().",
    "bullets": [
      "int and float store numeric values; str stores text.",
      "bool values are True and False.",
      "Non-empty strings are truthy, even the string 'False'."
    ],
    "example": "age = 35\nprice = 3.5\nname = \"Python\"\nactive = True\nprint(type(age).__name__, type(price).__name__)\nprint(name.upper(), active)",
    "output": "int float\nPYTHON True",
    "challenge": "Create threshold as a float of 0.7 and flag as a Boolean True.",
    "starter": "# Your turn: define threshold and flag\nprint(threshold, flag)",
    "solution": "threshold = 0.7\nflag = True\nprint(threshold, flag)",
    "takeaway": "When preparing features, distinguish numeric values from categorical strings and Boolean flags.",
    "check": "assert type(threshold) is float and threshold == 0.7, \"threshold must be the float 0.7.\"\nassert type(flag) is bool and flag is True, \"flag must be True (bool).\""
  },
  {
    "id": 9,
    "unit": 2,
    "title": "Lists: indexing & mutation",
    "slides": "Lecture 2 · slide 11",
    "time": "7 min",
    "learn": "Lists are ordered and mutable; use indexing, slicing, and list methods.",
    "bullets": [
      "Indexing starts at 0; -1 means the last element.",
      "append(), insert(), and remove() modify the list.",
      "A slice values[1:3] excludes index 3."
    ],
    "example": "scores = [70, 80, 90]\nscores.append(100)\nprint(scores[0], scores[-1])\nprint(scores[1:3])",
    "output": "70 100\n[80, 90]",
    "challenge": "Starting with scores = [70, 80, 90], insert 75 at position 1 and remove 90.",
    "starter": "scores = [70, 80, 90]\n# Your turn: insert and remove\nprint(scores)",
    "solution": "scores = [70, 80, 90]\nscores.insert(1, 75)\nscores.remove(90)\nprint(scores)",
    "takeaway": "`.append()` modifies the list and returns `None`, so do not assign its result back to the list.",
    "check": "assert scores == [70, 75, 80], \"Expected [70, 75, 80].\""
  },
  {
    "id": 10,
    "unit": 2,
    "title": "Tuples & unpacking",
    "slides": "Lecture 2 · slide 12",
    "time": "6 min",
    "learn": "Tuples are ordered but immutable; use unpacking for fixed-size records.",
    "bullets": [
      "(3, 4) is a tuple; (3,) creates a single-item tuple.",
      "x, y = point unpacks a pair.",
      "Tuple elements cannot be reassigned."
    ],
    "example": "point = (3, 4)\nx, y = point\nprint(\"x:\", x, \"y:\", y)\nprint(\"Length:\", len(point))",
    "output": "x: 3 y: 4\nLength: 2",
    "challenge": "Unpack the tuple shape = (128, 64) into rows and columns, then print them.",
    "starter": "shape = (128, 64)\n# Your turn: unpack rows and columns\nprint(rows, columns)",
    "solution": "shape = (128, 64)\nrows, columns = shape\nprint(rows, columns)",
    "takeaway": "Dataset shapes are often represented as tuples, such as `(128, 64)`.",
    "check": "assert rows == 128 and columns == 64, \"Unpack shape into rows and columns.\""
  },
  {
    "id": 11,
    "unit": 2,
    "title": "Dictionaries: keyed data",
    "slides": "Lecture 2 · slide 14",
    "time": "7 min",
    "learn": "Dictionaries map keys to values, making named data easy to access.",
    "bullets": [
      "data['key'] reads a key; it raises KeyError if missing.",
      "data.get('key', default) provides a fallback.",
      "Use keys(), values(), or items() when iterating."
    ],
    "example": "settings = {\"model\": \"baseline\", \"epochs\": 10}\nsettings[\"epochs\"] = 12\nprint(settings[\"model\"])\nprint(settings.get(\"batch_size\", 32))",
    "output": "baseline\n32",
    "challenge": "Create a dictionary config with 'learning_rate': 0.01 and 'epochs': 20.",
    "starter": "config = {}\n# Your turn: add two configuration keys\nprint(config)",
    "solution": "config = {\"learning_rate\": 0.01, \"epochs\": 20}\nprint(config)",
    "takeaway": "Dictionaries are commonly used for hyperparameters, metadata and experiment configurations.",
    "check": "assert config.get(\"learning_rate\") == 0.01, \"Set learning_rate = 0.01.\"\nassert config.get(\"epochs\") == 20, \"Set epochs = 20.\""
  },
  {
    "id": 12,
    "unit": 2,
    "title": "Sets: unique items",
    "slides": "Lecture 2 · slide 15",
    "time": "6 min",
    "learn": "Sets keep unique values and support fast membership and set operations.",
    "bullets": [
      "Duplicate values are removed automatically.",
      "| is union, & is intersection, - is difference.",
      "Sets are unordered. Create an empty set with set()."
    ],
    "example": "train = {\"cat\", \"dog\"}\ntest = {\"dog\", \"bird\"}\nprint(sorted(train | test))\nprint(sorted(train & test))",
    "output": "['bird', 'cat', 'dog']\n['dog']",
    "challenge": "Create a set unique_labels from ['cat', 'cat', 'dog', 'bird'], and print its length.",
    "starter": "labels = [\"cat\", \"cat\", \"dog\", \"bird\"]\n# Your turn: create unique_labels\nprint(len(unique_labels))",
    "solution": "labels = [\"cat\", \"cat\", \"dog\", \"bird\"]\nunique_labels = set(labels)\nprint(len(unique_labels))",
    "takeaway": "Sets are convenient for comparing label names across train and test datasets.",
    "check": "assert unique_labels == {\"cat\", \"dog\", \"bird\"}, \"Keep every unique label exactly once.\""
  },
  {
    "id": 13,
    "unit": 2,
    "title": "Mutable, immutable & variable scope",
    "slides": "Lecture 2 · slides 17–19",
    "time": "8 min",
    "learn": "Understand mutable objects, shallow copies, and function-local variables.",
    "bullets": [
      "Lists and dictionaries are mutable; strings and tuples are not.",
      "alias = original does not copy a list.",
      "copy() makes a shallow copy; function variables are local by default."
    ],
    "example": "original = [1, 2]\nalias = original\nalias.append(3)\nprint(original)\n\ndef doubled(value):\n    result = value * 2\n    return result\nprint(doubled(4))",
    "output": "[1, 2, 3]\n8",
    "challenge": "Create safe_copy from original using .copy(), then append 99 without changing original.",
    "starter": "original = [1, 2]\n# Your turn: make an independent list named safe_copy\n# Append 99 to safe_copy\nprint(original, safe_copy)",
    "solution": "original = [1, 2]\nsafe_copy = original.copy()\nsafe_copy.append(99)\nprint(original, safe_copy)",
    "takeaway": "Avoid accidentally sharing mutable sample lists between steps in a preprocessing pipeline.",
    "check": "assert original == [1, 2], \"Do not mutate original.\"\nassert safe_copy == [1, 2, 99], \"Append 99 to the copy.\"\nassert safe_copy is not original, \"Create a separate list object.\""
  },
  {
    "id": 14,
    "unit": 3,
    "title": "Comparisons, if & else",
    "slides": "Lecture 3 · slides 5–7",
    "time": "7 min",
    "learn": "Use if/else for decisions and indentation to define each branch.",
    "bullets": [
      "Comparisons like >= and == return Boolean values.",
      "Use a colon and indentation for each block.",
      ">= includes the boundary value."
    ],
    "example": "age = 18\nif age >= 18:\n    label = \"Adult\"\nelse:\n    label = \"Minor\"\nprint(label)",
    "output": "Adult",
    "challenge": "Write a function age_group(age) that returns 'Adult' for 18 or older and 'Minor' otherwise.",
    "starter": "def age_group(age):\n    # Your turn: if / else\n    pass\n\nprint(age_group(18))",
    "solution": "def age_group(age):\n    if age >= 18:\n        return \"Adult\"\n    else:\n        return \"Minor\"\n\nprint(age_group(18))",
    "takeaway": "Test boundary values such as 17, 18 and 19 when writing threshold logic.",
    "check": "assert age_group(18) == \"Adult\", \"Check the inclusive boundary.\"\nassert age_group(17) == \"Minor\", \"Check below the boundary.\"\nassert age_group(40) == \"Adult\", \"Check above the boundary.\""
  },
  {
    "id": 15,
    "unit": 3,
    "title": "Elif: several branches",
    "slides": "Lecture 3 · slides 8–10",
    "time": "7 min",
    "learn": "Use elif for several mutually exclusive cases; check conditions top to bottom.",
    "bullets": [
      "The first matching if/elif branch wins.",
      "Put the higher threshold before the lower one.",
      "else handles values that matched no earlier branch."
    ],
    "example": "score = 85\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelse:\n    grade = \"C\"\nprint(grade)",
    "output": "B",
    "challenge": "Define grade_for(score) with A for score >= 90, B for >= 80, otherwise C.",
    "starter": "def grade_for(score):\n    # Your turn: if, elif, else\n    pass\n\nprint(grade_for(85))",
    "solution": "def grade_for(score):\n    if score >= 90:\n        return \"A\"\n    elif score >= 80:\n        return \"B\"\n    else:\n        return \"C\"\n\nprint(grade_for(85))",
    "takeaway": "Ordering thresholds correctly prevents classification rules from shadowing one another.",
    "check": "assert grade_for(95) == \"A\", \"Check the A threshold.\"\nassert grade_for(90) == \"A\", \"Check the A boundary.\"\nassert grade_for(85) == \"B\", \"Check the B range.\"\nassert grade_for(79) == \"C\", \"Check the fallback.\""
  },
  {
    "id": 16,
    "unit": 3,
    "title": "Nested if statements",
    "slides": "Lecture 3 · slides 11–13",
    "time": "7 min",
    "learn": "Nested if statements express a second decision inside a first one.",
    "bullets": [
      "The inner if runs only if the outer condition is true.",
      "number % 2 == 0 identifies even numbers.",
      "Indentation determines the nesting structure."
    ],
    "example": "number = 10\nif number > 0:\n    if number % 2 == 0:\n        print(\"Positive even\")\n    else:\n        print(\"Positive odd\")",
    "output": "Positive even",
    "challenge": "Define describe(number): return 'Positive even' if positive and even, 'Positive odd' if positive and odd, and 'Not positive' otherwise.",
    "starter": "def describe(number):\n    # Your turn: nested conditions\n    pass\n\nprint(describe(10))",
    "solution": "def describe(number):\n    if number > 0:\n        if number % 2 == 0:\n            return \"Positive even\"\n        else:\n            return \"Positive odd\"\n    return \"Not positive\"\n\nprint(describe(10))",
    "takeaway": "Multi-stage validation often uses nested conditions, but readability matters more than compactness.",
    "check": "assert describe(10) == \"Positive even\"\nassert describe(7) == \"Positive odd\"\nassert describe(0) == \"Not positive\"\nassert describe(-2) == \"Not positive\""
  },
  {
    "id": 17,
    "unit": 3,
    "title": "and, or & not",
    "slides": "Lecture 3 · slides 15–16",
    "time": "7 min",
    "learn": "Combine conditions using and, or, and not.",
    "bullets": [
      "and means both; or means at least one.",
      "not negates a Boolean value.",
      "Short-circuiting skips unnecessary checks."
    ],
    "example": "score = 0.92\napproved = True\nblocked = False\nif score >= 0.9 and approved and not blocked:\n    print(\"Ready\")\nelse:\n    print(\"Review\")",
    "output": "Ready",
    "challenge": "Define can_release(score, approved, blocked). Return True only if score >= 0.9 and approved and not blocked.",
    "starter": "def can_release(score, approved, blocked):\n    # Your turn: return a Boolean expression\n    pass\n\nprint(can_release(0.95, True, False))",
    "solution": "def can_release(score, approved, blocked):\n    return score >= 0.9 and approved and not blocked\n\nprint(can_release(0.95, True, False))",
    "takeaway": "A model release rule might combine quality checks and approval flags, but its actual thresholds must be validated.",
    "check": "assert can_release(0.95, True, False) is True\nassert can_release(0.85, True, False) is False\nassert can_release(0.95, False, False) is False\nassert can_release(0.95, True, True) is False"
  },
  {
    "id": 18,
    "unit": 3,
    "title": "Conditional expression & final practice",
    "slides": "Lecture 3 · slide 17",
    "time": "7 min",
    "learn": "Use a conditional expression for short two-way assignments.",
    "bullets": [
      "Syntax: value_if_true if condition else value_if_false.",
      "Prefer normal if/elif/else for complex branching.",
      "Probability thresholds are decisions, not model quality scores."
    ],
    "example": "number = 11\nparity = \"Even\" if number % 2 == 0 else \"Odd\"\nprint(parity)\nprobability = 0.8\nlabel = \"positive\" if probability >= 0.5 else \"negative\"\nprint(label)",
    "output": "Odd\npositive",
    "challenge": "Define predict_label(probability, threshold=0.5) that returns 'positive' for probability >= threshold, else 'negative'.",
    "starter": "def predict_label(probability, threshold=0.5):\n    # Your turn: use a conditional expression\n    pass\n\nprint(predict_label(0.7))",
    "solution": "def predict_label(probability, threshold=0.5):\n    return \"positive\" if probability >= threshold else \"negative\"\n\nprint(predict_label(0.7))",
    "takeaway": "Prediction thresholds affect false positives and false negatives; experiment metrics are needed to choose them.",
    "check": "assert predict_label(0.7) == \"positive\"\nassert predict_label(0.3) == \"negative\"\nassert predict_label(0.5) == \"positive\"\nassert predict_label(0.7, threshold=0.8) == \"negative\""
  }
];
