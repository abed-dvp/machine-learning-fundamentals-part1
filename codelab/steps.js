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
    "learn": "Python is a high-level, readable programming language. Begin by checking the interpreter and running one short program.",
    "bullets": [
      "Install Python 3 from python.org or your system package manager; verify it in a terminal with python --version (on Windows, py --version may work).",
      "Run python -m pip --version to check the package manager; python -m venv .venv creates a project-specific environment.",
      "print() displays text; quotes make a string literal. The browser practice editor runs Python without installing it locally."
    ],
    "example": "print(\"Hello, World!\")",
    "output": "Hello, World!",
    "challenge": "Edit the program so it prints Hello, Machine Learning! exactly.",
    "starter": "print(\"Hello, World!\")",
    "solution": "print(\"Hello, Machine Learning!\")",
    "takeaway": "Engineering connection (added): Reproducible Python versions and isolated environments prevent dependency conflicts.",
    "check": "assert \"Hello, Machine Learning!\" in __output__, \"Print Hello, Machine Learning! exactly.\""
  },
  {
    "id": 2,
    "unit": 1,
    "title": "Variables & print()",
    "slides": "Lecture 1 · slides 11–14",
    "time": "6 min",
    "learn": "A variable names a value. Python assigns with = and does not require explicit variable type declarations.",
    "bullets": [
      "A variable such as model_name can reference a string; accuracy can reference a float.",
      "Use descriptive snake_case names rather than single letters in production code.",
      "print() can show multiple values; f-strings format values inside readable messages."
    ],
    "example": "model_name = \"Baseline\"\naccuracy = 0.85\nprint(model_name, accuracy)\nprint(f\"Model: {model_name}\")",
    "output": "Baseline 0.85\nModel: Baseline",
    "challenge": "Create a variable called epochs with value 10, then print Epochs: 10 using an f-string.",
    "starter": "model_name = \"Baseline\"\n# Your turn: add epochs and print the label",
    "solution": "epochs = 10\nprint(f\"Epochs: {epochs}\")",
    "takeaway": "Engineering connection (added): Clear names help when tracking metrics and hyperparameters.",
    "check": "assert epochs == 10, \"Set epochs to 10.\"\nassert \"Epochs: 10\" in __output__, \"Print Epochs: 10.\""
  },
  {
    "id": 3,
    "unit": 1,
    "title": "Operators & type conversion",
    "slides": "Lecture 1 · slides 15–16",
    "time": "7 min",
    "learn": "Use numeric operators for calculations and explicit type conversion when a value arrives as text.",
    "bullets": [
      "int('12') creates an integer; float('0.25') creates a decimal number; str(42) creates text.",
      "Arithmetic operators include +, -, *, /, //, %, **. / returns float; // floor-divides.",
      "Use == for equality checks, not = (assignment). Avoid multiplying strings when you mean numeric multiplication."
    ],
    "example": "batches = int(\"4\")\nitems_per_batch = 8\ncount = batches * items_per_batch\nprint(\"Samples:\", count)\nprint(\"Remainder:\", count % 5)",
    "output": "Samples: 32\nRemainder: 2",
    "challenge": "Convert the string '12' to a number and multiply it by 3. Store the answer in total.",
    "starter": "raw = \"12\"\n# Your turn: define total\nprint(total)",
    "solution": "raw = \"12\"\ntotal = int(raw) * 3\nprint(total)",
    "takeaway": "Engineering connection (added): Always validate incoming data types before numeric feature calculations.",
    "check": "assert total == 36, \"Expected total = int(raw) * 3.\""
  },
  {
    "id": 4,
    "unit": 1,
    "title": "For & while loops",
    "slides": "Lecture 1 · slide 19",
    "time": "7 min",
    "learn": "Loops repeat a task: for visits each item in a sequence; while continues while a condition holds.",
    "bullets": [
      "range(1, 5) produces 1, 2, 3, 4 (the stop is excluded).",
      "A for loop is suitable for traversing samples; a while loop is suitable for a condition-based process.",
      "Watch indentation and make sure while loops can terminate."
    ],
    "example": "scores = [3, 5, 7]\ntotal = 0\nfor score in scores:\n    total += score\nprint(\"Sum:\", total)\ncountdown = 2\nwhile countdown > 0:\n    countdown -= 1\nprint(\"Done\")",
    "output": "Sum: 15\nDone",
    "challenge": "Use a for loop to calculate the sum of numbers 1 through 5 in a variable named total.",
    "starter": "total = 0\n# Your turn: loop through range(1, 6)\nprint(\"Sum:\", total)",
    "solution": "total = 0\nfor number in range(1, 6):\n    total += number\nprint(\"Sum:\", total)",
    "takeaway": "Engineering connection (added): For large arrays, NumPy vectorization is often faster than Python loops.",
    "check": "assert total == 15, \"The sum of 1 through 5 should be 15.\""
  },
  {
    "id": 5,
    "unit": 1,
    "title": "Functions & lambda",
    "slides": "Lecture 1 · slides 21–22",
    "time": "7 min",
    "learn": "Functions make repeated logic reusable. A lambda is a compact one-expression function.",
    "bullets": [
      "def introduces a function; parameters receive inputs, and return sends back a result.",
      "A function without an explicit return returns None.",
      "lambda value: value * 2 is handy for short expressions, but def is clearer for multi-step behavior."
    ],
    "example": "def add(a, b):\n    return a + b\n\ndouble = lambda x: x * 2\nprint(add(3, 4))\nprint(double(5))",
    "output": "7\n10",
    "challenge": "Define multiply(a, b) that returns the product, and print multiply(3, 4).",
    "starter": "# Your turn: define multiply(a, b)\nprint(multiply(3, 4))",
    "solution": "def multiply(a, b):\n    return a * b\n\nprint(multiply(3, 4))",
    "takeaway": "Engineering connection (added): Small pure functions are easier to test within a data pipeline.",
    "check": "assert multiply(3, 4) == 12, \"multiply(3, 4) must return 12.\"\nassert multiply(0, 10) == 0, \"Check the zero case.\""
  },
  {
    "id": 6,
    "unit": 1,
    "title": "Classes & objects",
    "slides": "Lecture 1 · slide 23",
    "time": "7 min",
    "learn": "Object-oriented programming groups data and behavior into classes and their instances.",
    "bullets": [
      "class declares a reusable type; an instance is an object created from it.",
      "__init__ initializes instance data; self refers to the current object.",
      "Attributes hold state, while methods are functions attached to objects."
    ],
    "example": "class Model:\n    def __init__(self, name):\n        self.name = name\n\nmodel = Model(\"Baseline\")\nprint(model.name)",
    "output": "Baseline",
    "challenge": "Add a method describe(self) that returns 'Model: ' followed by the object's name.",
    "starter": "class Model:\n    def __init__(self, name):\n        self.name = name\n    # Your turn: add describe(self)\n\nmodel = Model(\"Baseline\")\nprint(model.describe())",
    "solution": "class Model:\n    def __init__(self, name):\n        self.name = name\n\n    def describe(self):\n        return \"Model: \" + self.name\n\nmodel = Model(\"Baseline\")\nprint(model.describe())",
    "takeaway": "Engineering connection (added): Class-based estimators commonly store settings at initialization.",
    "check": "assert Model(\"Baseline\").describe() == \"Model: Baseline\", \"describe() must include the model name.\"\nassert Model(\"Tree\").describe() == \"Model: Tree\", \"Do not hard-code a single name.\""
  },
  {
    "id": 7,
    "unit": 1,
    "title": "Exception handling",
    "slides": "Lecture 1 · slide 24",
    "time": "7 min",
    "learn": "try and except handle expected errors; finally runs whether an error occurred or not.",
    "bullets": [
      "Catch a specific exception such as ValueError rather than hiding all errors.",
      "finally is suitable for cleanup, but does not suppress an exception by itself.",
      "Avoid silently replacing faulty data: choose a documented fallback or report the error."
    ],
    "example": "try:\n    value = int(\"not-a-number\")\nexcept ValueError:\n    value = 0\nfinally:\n    print(\"Conversion attempted\")\nprint(value)",
    "output": "Conversion attempted\n0",
    "challenge": "Write a function safe_int(text) that returns int(text), or -1 when conversion fails with ValueError.",
    "starter": "def safe_int(text):\n    # Your turn: use try/except ValueError\n    pass\n\nprint(safe_int(\"8\"), safe_int(\"bad\"))",
    "solution": "def safe_int(text):\n    try:\n        return int(text)\n    except ValueError:\n        return -1\n\nprint(safe_int(\"8\"), safe_int(\"bad\"))",
    "takeaway": "Engineering connection (added): Log invalid inputs and track missing-data handling instead of hiding failures.",
    "check": "assert safe_int(\"8\") == 8, \"A valid number should convert to int.\"\nassert safe_int(\"bad\") == -1, \"Return -1 for invalid text.\""
  },
  {
    "id": 8,
    "unit": 2,
    "title": "Numeric, string & Boolean types",
    "slides": "Lecture 2 · slides 5–9",
    "time": "6 min",
    "learn": "Core types include int, float, complex, str and bool. type() reveals the runtime type of a value.",
    "bullets": [
      "int represents whole numbers, float decimal numbers, and complex numbers have a real and imaginary part.",
      "str stores text; a string cannot be modified in place.",
      "bool is True or False. Note that bool is a subclass of int; use explicit intent when validating data."
    ],
    "example": "age = 35\nprice = 3.5\nname = \"Python\"\nactive = True\nprint(type(age).__name__, type(price).__name__)\nprint(name.upper(), active)",
    "output": "int float\nPYTHON True",
    "challenge": "Create threshold as a float of 0.7 and flag as a Boolean True.",
    "starter": "# Your turn: define threshold and flag\nprint(threshold, flag)",
    "solution": "threshold = 0.7\nflag = True\nprint(threshold, flag)",
    "takeaway": "Engineering connection (added): Distinguish numeric features, categorical strings and Boolean flags before modeling.",
    "check": "assert type(threshold) is float and threshold == 0.7, \"threshold must be the float 0.7.\"\nassert type(flag) is bool and flag is True, \"flag must be True (bool).\""
  },
  {
    "id": 9,
    "unit": 2,
    "title": "Lists: indexing & mutation",
    "slides": "Lecture 2 · slide 11",
    "time": "7 min",
    "learn": "Lists are ordered, mutable containers suited to collections that change during processing.",
    "bullets": [
      "Indices start at zero: values[0] is the first element, values[-1] the last.",
      "append adds to the end; insert adds at a position; remove deletes the first matching value.",
      "Slicing values[1:3] returns items at indices 1 and 2."
    ],
    "example": "scores = [70, 80, 90]\nscores.append(100)\nprint(scores[0], scores[-1])\nprint(scores[1:3])",
    "output": "70 100\n[80, 90]",
    "challenge": "Starting with scores = [70, 80, 90], insert 75 at position 1 and remove 90.",
    "starter": "scores = [70, 80, 90]\n# Your turn: insert and remove\nprint(scores)",
    "solution": "scores = [70, 80, 90]\nscores.insert(1, 75)\nscores.remove(90)\nprint(scores)",
    "takeaway": "Engineering connection (added): Python lists are flexible containers, while arrays are better for large numeric tensors.",
    "check": "assert scores == [70, 75, 80], \"Expected [70, 75, 80].\""
  },
  {
    "id": 10,
    "unit": 2,
    "title": "Tuples & unpacking",
    "slides": "Lecture 2 · slide 12",
    "time": "6 min",
    "learn": "Tuples are ordered, immutable containers, useful for fixed-length records and function return values.",
    "bullets": [
      "Use parentheses or commas to construct a tuple; a single-item tuple needs a trailing comma.",
      "Unpacking assigns tuple components to multiple names.",
      "The tuple cannot have its elements reassigned, although objects inside it may be mutable."
    ],
    "example": "point = (3, 4)\nx, y = point\nprint(\"x:\", x, \"y:\", y)\nprint(\"Length:\", len(point))",
    "output": "x: 3 y: 4\nLength: 2",
    "challenge": "Unpack the tuple shape = (128, 64) into rows and columns, then print them.",
    "starter": "shape = (128, 64)\n# Your turn: unpack rows and columns\nprint(rows, columns)",
    "solution": "shape = (128, 64)\nrows, columns = shape\nprint(rows, columns)",
    "takeaway": "Engineering connection (added): Tensor and dataset dimensions are often represented as tuples.",
    "check": "assert rows == 128 and columns == 64, \"Unpack shape into rows and columns.\""
  },
  {
    "id": 11,
    "unit": 2,
    "title": "Dictionaries: keyed data",
    "slides": "Lecture 2 · slide 14",
    "time": "7 min",
    "learn": "A dictionary maps unique keys to values. It is useful for configuration and structured records.",
    "bullets": [
      "Read with settings['key'] when the key is mandatory; settings.get('key', fallback) handles missing keys.",
      "items() yields key/value pairs, while keys() and values() provide views.",
      "Assignment can update an existing value or introduce a new key."
    ],
    "example": "settings = {\"model\": \"baseline\", \"epochs\": 10}\nsettings[\"epochs\"] = 12\nprint(settings[\"model\"])\nprint(settings.get(\"batch_size\", 32))",
    "output": "baseline\n32",
    "challenge": "Create a dictionary config with 'learning_rate': 0.01 and 'epochs': 20.",
    "starter": "config = {}\n# Your turn: add two configuration keys\nprint(config)",
    "solution": "config = {\"learning_rate\": 0.01, \"epochs\": 20}\nprint(config)",
    "takeaway": "Engineering connection (added): Dictionaries are common for experiment and hyperparameter configuration.",
    "check": "assert config.get(\"learning_rate\") == 0.01, \"Set learning_rate = 0.01.\"\nassert config.get(\"epochs\") == 20, \"Set epochs = 20.\""
  },
  {
    "id": 12,
    "unit": 2,
    "title": "Sets: unique items",
    "slides": "Lecture 2 · slide 15",
    "time": "6 min",
    "learn": "A set stores unique hashable elements and supports fast membership and set operations.",
    "bullets": [
      "set([1, 1, 2]) becomes {1, 2}; order is not guaranteed.",
      "Use | for union, & for intersection, and - for difference.",
      "Use set() for an empty set, because {} creates an empty dictionary."
    ],
    "example": "train = {\"cat\", \"dog\"}\ntest = {\"dog\", \"bird\"}\nprint(sorted(train | test))\nprint(sorted(train & test))",
    "output": "['bird', 'cat', 'dog']\n['dog']",
    "challenge": "Create a set unique_labels from ['cat', 'cat', 'dog', 'bird'], and print its length.",
    "starter": "labels = [\"cat\", \"cat\", \"dog\", \"bird\"]\n# Your turn: create unique_labels\nprint(len(unique_labels))",
    "solution": "labels = [\"cat\", \"cat\", \"dog\", \"bird\"]\nunique_labels = set(labels)\nprint(len(unique_labels))",
    "takeaway": "Engineering connection (added): Sets are useful for checking label overlaps and distinct categories.",
    "check": "assert unique_labels == {\"cat\", \"dog\", \"bird\"}, \"Keep every unique label exactly once.\""
  },
  {
    "id": 13,
    "unit": 2,
    "title": "Mutable, immutable & variable scope",
    "slides": "Lecture 2 · slides 17–19",
    "time": "8 min",
    "learn": "Lists and dictionaries are mutable; strings and tuples are immutable. Function-local names are separate from global names.",
    "bullets": [
      "Two variables can point to the same list; changing it through either name affects both.",
      "Use list.copy() when you need a new top-level list; nested mutable elements still need deeper copying.",
      "Variables created inside a function are usually local; return values instead of mutating global state."
    ],
    "example": "original = [1, 2]\nalias = original\nalias.append(3)\nprint(original)\n\ndef doubled(value):\n    result = value * 2\n    return result\nprint(doubled(4))",
    "output": "[1, 2, 3]\n8",
    "challenge": "Create safe_copy from original using .copy(), then append 99 without changing original.",
    "starter": "original = [1, 2]\n# Your turn: make an independent list named safe_copy\n# Append 99 to safe_copy\nprint(original, safe_copy)",
    "solution": "original = [1, 2]\nsafe_copy = original.copy()\nsafe_copy.append(99)\nprint(original, safe_copy)",
    "takeaway": "Engineering connection (added): Avoid accidental shared mutable state when preparing data for experiments.",
    "check": "assert original == [1, 2], \"Do not mutate original.\"\nassert safe_copy == [1, 2, 99], \"Append 99 to the copy.\"\nassert safe_copy is not original, \"Create a separate list object.\""
  },
  {
    "id": 14,
    "unit": 3,
    "title": "Comparisons, if & else",
    "slides": "Lecture 3 · slides 5–7",
    "time": "7 min",
    "learn": "An if condition executes its indented block when a Boolean expression is true; else handles the other path.",
    "bullets": [
      "Comparison operators include ==, !=, <, <=, >, >=.",
      "A colon begins a block; consistent indentation is part of Python syntax.",
      "Only one branch of an if/else pair executes."
    ],
    "example": "age = 18\nif age >= 18:\n    label = \"Adult\"\nelse:\n    label = \"Minor\"\nprint(label)",
    "output": "Adult",
    "challenge": "Write a function age_group(age) that returns 'Adult' for 18 or older and 'Minor' otherwise.",
    "starter": "def age_group(age):\n    # Your turn: if / else\n    pass\n\nprint(age_group(18))",
    "solution": "def age_group(age):\n    if age >= 18:\n        return \"Adult\"\n    else:\n        return \"Minor\"\n\nprint(age_group(18))",
    "takeaway": "Engineering connection (added): Clear decision boundaries matter when translating probability scores into classes.",
    "check": "assert age_group(18) == \"Adult\", \"Check the inclusive boundary.\"\nassert age_group(17) == \"Minor\", \"Check below the boundary.\"\nassert age_group(40) == \"Adult\", \"Check above the boundary.\""
  },
  {
    "id": 15,
    "unit": 3,
    "title": "Elif: several branches",
    "slides": "Lecture 3 · slides 8–10",
    "time": "7 min",
    "learn": "elif checks additional conditions only when preceding if/elif conditions were false.",
    "bullets": [
      "Conditions are evaluated top to bottom; order matters.",
      "Use an else fallback so your function handles every valid input.",
      "For ranges like grades, test boundary values such as 79, 80, 89 and 90."
    ],
    "example": "score = 85\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelse:\n    grade = \"C\"\nprint(grade)",
    "output": "B",
    "challenge": "Define grade_for(score) with A for score >= 90, B for >= 80, otherwise C.",
    "starter": "def grade_for(score):\n    # Your turn: if, elif, else\n    pass\n\nprint(grade_for(85))",
    "solution": "def grade_for(score):\n    if score >= 90:\n        return \"A\"\n    elif score >= 80:\n        return \"B\"\n    else:\n        return \"C\"\n\nprint(grade_for(85))",
    "takeaway": "Engineering connection (added): Ordered conditions are useful for post-processing classification scores.",
    "check": "assert grade_for(95) == \"A\", \"Check the A threshold.\"\nassert grade_for(90) == \"A\", \"Check the A boundary.\"\nassert grade_for(85) == \"B\", \"Check the B range.\"\nassert grade_for(79) == \"C\", \"Check the fallback.\""
  },
  {
    "id": 16,
    "unit": 3,
    "title": "Nested if statements",
    "slides": "Lecture 3 · slides 11–13",
    "time": "7 min",
    "learn": "A nested if checks an additional condition inside a branch that has already passed.",
    "bullets": [
      "The inner condition runs only when the outer condition is true.",
      "Use indentation to show each decision layer clearly.",
      "Guard conditions can avoid deeply nested code in larger functions (additional practice advice)."
    ],
    "example": "number = 10\nif number > 0:\n    if number % 2 == 0:\n        print(\"Positive even\")\n    else:\n        print(\"Positive odd\")",
    "output": "Positive even",
    "challenge": "Define describe(number): return 'Positive even' if positive and even, 'Positive odd' if positive and odd, and 'Not positive' otherwise.",
    "starter": "def describe(number):\n    # Your turn: nested conditions\n    pass\n\nprint(describe(10))",
    "solution": "def describe(number):\n    if number > 0:\n        if number % 2 == 0:\n            return \"Positive even\"\n        else:\n            return \"Positive odd\"\n    return \"Not positive\"\n\nprint(describe(10))",
    "takeaway": "Engineering connection (added): Nested rules help with multi-stage validation, but prefer readable conditions.",
    "check": "assert describe(10) == \"Positive even\"\nassert describe(7) == \"Positive odd\"\nassert describe(0) == \"Not positive\"\nassert describe(-2) == \"Not positive\""
  },
  {
    "id": 17,
    "unit": 3,
    "title": "and, or & not",
    "slides": "Lecture 3 · slides 15–16",
    "time": "7 min",
    "learn": "Logical operators combine Boolean expressions to express more complex decisions.",
    "bullets": [
      "and is true only when both conditions are true; or is true when at least one is true.",
      "not negates a Boolean expression; Python evaluates and/or with short-circuiting.",
      "Prefer parentheses when mixing operators, even when you know precedence."
    ],
    "example": "score = 0.92\napproved = True\nblocked = False\nif score >= 0.9 and approved and not blocked:\n    print(\"Ready\")\nelse:\n    print(\"Review\")",
    "output": "Ready",
    "challenge": "Define can_release(score, approved, blocked). Return True only if score >= 0.9 and approved and not blocked.",
    "starter": "def can_release(score, approved, blocked):\n    # Your turn: return a Boolean expression\n    pass\n\nprint(can_release(0.95, True, False))",
    "solution": "def can_release(score, approved, blocked):\n    return score >= 0.9 and approved and not blocked\n\nprint(can_release(0.95, True, False))",
    "takeaway": "Engineering connection (added): Combine validation and release criteria explicitly rather than in hidden side effects.",
    "check": "assert can_release(0.95, True, False) is True\nassert can_release(0.85, True, False) is False\nassert can_release(0.95, False, False) is False\nassert can_release(0.95, True, True) is False"
  },
  {
    "id": 18,
    "unit": 3,
    "title": "Conditional expression & final practice",
    "slides": "Lecture 3 · slide 17",
    "time": "7 min",
    "learn": "Python's conditional expression chooses one of two values in a single readable line.",
    "bullets": [
      "The syntax is value_if_true if condition else value_if_false.",
      "Use it for short assignments, not deeply nested decision trees.",
      "Final exercise connects a numerical threshold to a classification decision (an added engineering example)."
    ],
    "example": "number = 11\nparity = \"Even\" if number % 2 == 0 else \"Odd\"\nprint(parity)\nprobability = 0.8\nlabel = \"positive\" if probability >= 0.5 else \"negative\"\nprint(label)",
    "output": "Odd\npositive",
    "challenge": "Define predict_label(probability, threshold=0.5) that returns 'positive' for probability >= threshold, else 'negative'.",
    "starter": "def predict_label(probability, threshold=0.5):\n    # Your turn: use a conditional expression\n    pass\n\nprint(predict_label(0.7))",
    "solution": "def predict_label(probability, threshold=0.5):\n    return \"positive\" if probability >= threshold else \"negative\"\n\nprint(predict_label(0.7))",
    "takeaway": "Engineering connection (added): Threshold selection affects false positives and false negatives; never infer quality from the threshold alone.",
    "check": "assert predict_label(0.7) == \"positive\"\nassert predict_label(0.3) == \"negative\"\nassert predict_label(0.5) == \"positive\"\nassert predict_label(0.7, threshold=0.8) == \"negative\""
  }
];
