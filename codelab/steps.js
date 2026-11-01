'use strict';
window.CODELAB_MODULES=[
  {
    "title": "Introduction to Python Programming",
    "source": "1(4).pptx · 26 slides"
  },
  {
    "title": "Variables and Data Types",
    "source": "2(4).pptx · 22 slides"
  },
  {
    "title": "Conditions and If Statements",
    "source": "3(4).pptx · 20 slides"
  }
];
window.CODELAB_STEPS=[
  {
    "id": 1,
    "unit": 1,
    "title": "Python & Hello World",
    "slides": "Lecture 1 · slides 5–11",
    "time": "4 min",
    "learn": "Python is a high-level, readable programming language used for many tasks, including machine learning.",
    "bullets": [
      "Created by Guido van Rossum in 1991; Python is free and open source.",
      "Install Python from python.org/downloads. Jupyter Notebook is another environment for running Python.",
      "Use print() to display a message. The online editor runs Python in your browser."
    ],
    "example": "print('Hello, World!')",
    "output": "Hello, World!",
    "challenge": "Change the message to Hello, Python! and print it.",
    "starter": "print('Hello, World!')",
    "solution": "print('Hello, Python!')",
    "takeaway": "",
    "check": "assert __output__.strip() == 'Hello, Python!', 'Print Hello, Python! exactly.'"
  },
  {
    "id": 2,
    "unit": 1,
    "title": "Variables & Type Conversion",
    "slides": "Lecture 1 · slides 13–15",
    "time": "4 min",
    "learn": "Variables hold values without requiring an explicit type declaration. Conversion functions change a value's type.",
    "bullets": [
      "Assign values using =, such as x = 10 and y = 'Hello'.",
      "int(), float(), and str() convert between common types."
    ],
    "example": "x = 10\ny = 'Hello'\nprint(x, y)\nprint(int('20') + x)",
    "output": "10 Hello\n30",
    "challenge": "Convert the string '5' to an integer, add 10, and save the result as total.",
    "starter": "total = 0\n# Convert '5' and add 10\nprint(total)",
    "solution": "total = int('5') + 10\nprint(total)",
    "takeaway": "",
    "check": "assert total == 15, 'Use int() to convert the text.'"
  },
  {
    "id": 3,
    "unit": 1,
    "title": "Python Operators",
    "slides": "Lecture 1 · slide 16",
    "time": "4 min",
    "learn": "Operators let Python perform calculations and compare or combine values.",
    "bullets": [
      "Arithmetic operators: +, -, *, /, //, %, **.",
      "Comparisons like > and == return Boolean values. Logical operators include and, or, not.",
      "Python also supports bitwise operators such as & (bitwise AND)."
    ],
    "example": "print(10 + 3)\nprint(10 > 3)\nprint(True and False)\nprint(5 & 3)",
    "output": "13\nTrue\nFalse\n1",
    "challenge": "Create sum_result = 6 + 4 and is_equal = (6 == 4).",
    "starter": "sum_result = 0\nis_equal = True\nprint(sum_result, is_equal)",
    "solution": "sum_result = 6 + 4\nis_equal = (6 == 4)\nprint(sum_result, is_equal)",
    "takeaway": "",
    "check": "assert sum_result == 10 and is_equal is False, 'Calculate the sum and equality comparison.'"
  },
  {
    "id": 4,
    "unit": 1,
    "title": "For & While Loops",
    "slides": "Lecture 1 · slide 19",
    "time": "4 min",
    "learn": "Loops repeat code. for iterates through a sequence, while repeats while a condition is true.",
    "bullets": [
      "A for loop goes through items or numbers produced by range().",
      "A while loop needs a changing condition so it eventually ends."
    ],
    "example": "for i in range(3):\n    print(i)\n\ncount = 0\nwhile count < 2:\n    count += 1\nprint('Count:', count)",
    "output": "0\n1\n2\nCount: 2",
    "challenge": "Use a for loop to sum 1 to 3 in total. Then use while to increase count from 0 to 2.",
    "starter": "total = 0\ncount = 0\n# Add a for loop and a while loop\nprint(total, count)",
    "solution": "total = 0\nfor number in range(1, 4):\n    total += number\ncount = 0\nwhile count < 2:\n    count += 1\nprint(total, count)",
    "takeaway": "",
    "check": "assert total == 6 and count == 2, 'Practice both for and while loops.'"
  },
  {
    "id": 5,
    "unit": 1,
    "title": "Functions with def",
    "slides": "Lecture 1 · slide 21",
    "time": "4 min",
    "learn": "A function is a reusable block of code defined using def. return provides its result.",
    "bullets": [
      "Parameters receive values when the function is called.",
      "Indent the function body and use return to send a value back."
    ],
    "example": "def add(a, b):\n    return a + b\n\nprint(add(2, 3))",
    "output": "5",
    "challenge": "Create a function multiply(a, b) that returns the product.",
    "starter": "def multiply(a, b):\n    pass\n\nprint(multiply(2, 4))",
    "solution": "def multiply(a, b):\n    return a * b\n\nprint(multiply(2, 4))",
    "takeaway": "",
    "check": "assert multiply(2, 4) == 8 and multiply(3, 5) == 15, 'Return a * b.'"
  },
  {
    "id": 6,
    "unit": 1,
    "title": "Lambda Functions",
    "slides": "Lecture 1 · slide 22",
    "time": "4 min",
    "learn": "A lambda is a short anonymous function written as a single expression.",
    "bullets": [
      "Lambda syntax: lambda parameters: expression.",
      "The result of the expression is returned automatically."
    ],
    "example": "add = lambda x, y: x + y\nprint(add(2, 3))",
    "output": "5",
    "challenge": "Create a lambda named double that multiplies its input by 2.",
    "starter": "double = lambda x: x\nprint(double(4))",
    "solution": "double = lambda x: x * 2\nprint(double(4))",
    "takeaway": "",
    "check": "assert double(4) == 8 and double(6) == 12, 'Return twice the input.'"
  },
  {
    "id": 7,
    "unit": 1,
    "title": "Classes & Objects",
    "slides": "Lecture 1 · slide 23",
    "time": "4 min",
    "learn": "Classes are templates for creating objects. __init__ initializes an object's data.",
    "bullets": [
      "class Dog defines a class; Dog('Max') creates an object.",
      "self.name stores a name inside that object."
    ],
    "example": "class Dog:\n    def __init__(self, name):\n        self.name = name\n\ndog = Dog('Max')\nprint(dog.name)",
    "output": "Max",
    "challenge": "Create an object named pet from Dog with the name 'Rex'.",
    "starter": "class Dog:\n    def __init__(self, name):\n        self.name = name\n\n# Create pet\nprint(pet.name)",
    "solution": "class Dog:\n    def __init__(self, name):\n        self.name = name\n\npet = Dog('Rex')\nprint(pet.name)",
    "takeaway": "",
    "check": "assert isinstance(pet, Dog) and pet.name == 'Rex', 'Create Dog(\\'Rex\\') as pet.'"
  },
  {
    "id": 8,
    "unit": 1,
    "title": "Exception Handling",
    "slides": "Lecture 1 · slide 24",
    "time": "4 min",
    "learn": "try, except, and finally help handle errors in a controlled way.",
    "bullets": [
      "try contains code that might fail; except handles the error.",
      "finally executes whether an error occurred or not."
    ],
    "example": "try:\n    number = int('abc')\nexcept ValueError:\n    print('Invalid number')\nfinally:\n    print('Finished')",
    "output": "Invalid number\nFinished",
    "challenge": "Handle ValueError from int('bad') and always print 'Done' using finally.",
    "starter": "try:\n    number = int('bad')\n# Complete except and finally",
    "solution": "try:\n    number = int('bad')\nexcept ValueError:\n    print('Invalid')\nfinally:\n    print('Done')",
    "takeaway": "",
    "check": "assert 'Done' in __output__.splitlines(), 'Use finally to print Done.'\nassert 'Invalid' in __output__.splitlines(), 'Handle ValueError using except.'"
  },
  {
    "id": 9,
    "unit": 2,
    "title": "Variables & Numeric Types",
    "slides": "Lecture 2 · slides 5–7",
    "time": "4 min",
    "learn": "Python variables are dynamically typed. Numeric types include int, float, and complex.",
    "bullets": [
      "int represents whole numbers, float decimals, and complex numbers with a real and imaginary part.",
      "Use type() to see a value's type."
    ],
    "example": "x = 5\ny = 3.14\nz = 2 + 3j\nprint(type(x).__name__)\nprint(type(y).__name__)\nprint(type(z).__name__)",
    "output": "int\nfloat\ncomplex",
    "challenge": "Define num = 7.5 and print its type.",
    "starter": "num = 0\nprint(type(num).__name__)",
    "solution": "num = 7.5\nprint(type(num).__name__)",
    "takeaway": "",
    "check": "assert isinstance(num, float) and num == 7.5, 'Create the float 7.5.'"
  },
  {
    "id": 10,
    "unit": 2,
    "title": "Strings & Booleans",
    "slides": "Lecture 2 · slides 8–9",
    "time": "4 min",
    "learn": "A string contains characters in quotes. A Boolean represents True or False.",
    "bullets": [
      "Strings use single or double quotation marks.",
      "Boolean values are written True and False."
    ],
    "example": "name = 'John'\nstatus = True\nprint(name)\nprint(status)",
    "output": "John\nTrue",
    "challenge": "Create name = 'Alice' and status = False and print both.",
    "starter": "name = ''\nstatus = True\nprint(name)\nprint(status)",
    "solution": "name = 'Alice'\nstatus = False\nprint(name)\nprint(status)",
    "takeaway": "",
    "check": "assert name == 'Alice' and status is False, 'Use a string and a Boolean.'"
  },
  {
    "id": 11,
    "unit": 2,
    "title": "Lists",
    "slides": "Lecture 2 · slide 11",
    "time": "4 min",
    "learn": "Lists are ordered, mutable sequences. Their elements are accessible by index.",
    "bullets": [
      "Write a list with square brackets: [1, 2, 3].",
      "append(), insert(), and remove() change a list; indexing starts at 0."
    ],
    "example": "values = [1, 2, 3]\nvalues.append(4)\nvalues.insert(0, 0)\nvalues.remove(2)\nprint(values)\nprint(values[0])",
    "output": "[0, 1, 3, 4]\n0",
    "challenge": "Starting with [1, 2, 3], append 4, then remove 2.",
    "starter": "values = [1, 2, 3]\n# Change the list\nprint(values)",
    "solution": "values = [1, 2, 3]\nvalues.append(4)\nvalues.remove(2)\nprint(values)",
    "takeaway": "",
    "check": "assert values == [1, 3, 4], 'Use append and remove.'"
  },
  {
    "id": 12,
    "unit": 2,
    "title": "Tuples",
    "slides": "Lecture 2 · slide 12",
    "time": "4 min",
    "learn": "Tuples are ordered but immutable sequences. You can unpack their values into variables.",
    "bullets": [
      "Use parentheses: (1, 2, 3).",
      "Unpack using a, b, c = (1, 2, 3)."
    ],
    "example": "numbers = (1, 2, 3)\na, b, c = numbers\nprint(a, b, c)",
    "output": "1 2 3",
    "challenge": "Unpack the tuple (4, 5, 6) into x, y, and z.",
    "starter": "x, y, z = (0, 0, 0)\nprint(x, y, z)",
    "solution": "x, y, z = (4, 5, 6)\nprint(x, y, z)",
    "takeaway": "",
    "check": "assert (x, y, z) == (4, 5, 6), 'Unpack the three values.'"
  },
  {
    "id": 13,
    "unit": 2,
    "title": "Dictionaries",
    "slides": "Lecture 2 · slide 14",
    "time": "4 min",
    "learn": "Dictionaries store values in key-value pairs.",
    "bullets": [
      "Read a value using a key, for example data['name'].",
      "Common methods are keys(), values(), items(), and update()."
    ],
    "example": "person = {'name': 'Alice', 'age': 25}\nprint(person['name'])\nprint(list(person.keys()))\nperson.update({'age': 26})\nprint(person['age'])",
    "output": "Alice\n['name', 'age']\n26",
    "challenge": "Create a dictionary person containing name = 'Bob' and age = 30.",
    "starter": "person = {}\nprint(person)",
    "solution": "person = {'name': 'Bob', 'age': 30}\nprint(person)",
    "takeaway": "",
    "check": "assert person == {'name': 'Bob', 'age': 30}, 'Create the key-value pairs.'"
  },
  {
    "id": 14,
    "unit": 2,
    "title": "Sets",
    "slides": "Lecture 2 · slide 15",
    "time": "4 min",
    "learn": "Sets are unordered collections of unique elements.",
    "bullets": [
      "A set removes repeated elements.",
      "union combines sets, intersection finds common elements, and difference finds elements in one set but not the other."
    ],
    "example": "a = {1, 2, 3}\nb = {3, 4}\nprint(sorted(a | b))\nprint(sorted(a & b))\nprint(sorted(a - b))",
    "output": "[1, 2, 3, 4]\n[3]\n[1, 2]",
    "challenge": "Using sets a and b, save their intersection in common.",
    "starter": "a = {1, 2, 3}\nb = {3, 4}\ncommon = set()\nprint(common)",
    "solution": "a = {1, 2, 3}\nb = {3, 4}\ncommon = a & b\nprint(common)",
    "takeaway": "",
    "check": "assert common == {3}, 'Use intersection (&).'"
  },
  {
    "id": 15,
    "unit": 2,
    "title": "Mutable, Immutable & Dynamic Typing",
    "slides": "Lecture 2 · slides 17–18",
    "time": "4 min",
    "learn": "Lists and dictionaries are mutable, while tuples and strings are immutable. Python names can refer to values of different types.",
    "bullets": [
      "A mutable object can be changed after creation.",
      "Dynamic typing allows reassigning a variable from one type to another."
    ],
    "example": "numbers = [1, 2]\nnumbers.append(3)\nvalue = 10\nvalue = 'ten'\nprint(numbers)\nprint(value)",
    "output": "[1, 2, 3]\nten",
    "challenge": "Append 4 to numbers and change value from 10 to the string 'ten'.",
    "starter": "numbers = [1, 2, 3]\nvalue = 10\n# Change both\nprint(numbers, value)",
    "solution": "numbers = [1, 2, 3]\nnumbers.append(4)\nvalue = 10\nvalue = 'ten'\nprint(numbers, value)",
    "takeaway": "",
    "check": "assert numbers == [1, 2, 3, 4] and value == 'ten', 'Change the list and reassign the variable.'"
  },
  {
    "id": 16,
    "unit": 2,
    "title": "Global & Local Variables",
    "slides": "Lecture 2 · slide 19",
    "time": "4 min",
    "learn": "A global variable is defined outside a function; a local variable is defined inside it.",
    "bullets": [
      "Local variables belong to their function's scope.",
      "A local name can differ from a global name with the same spelling."
    ],
    "example": "x = 10\ndef show():\n    x = 5\n    return x\nprint(show())\nprint(x)",
    "output": "5\n10",
    "challenge": "Make show() return 8 using a local x, while the global x stays 10.",
    "starter": "x = 10\ndef show():\n    x = 0\n    return x\nprint(show(), x)",
    "solution": "x = 10\ndef show():\n    x = 8\n    return x\nprint(show(), x)",
    "takeaway": "",
    "check": "assert show() == 8 and x == 10, 'Keep the global value unchanged.'"
  },
  {
    "id": 17,
    "unit": 3,
    "title": "If & Else",
    "slides": "Lecture 3 · slides 5–7",
    "time": "4 min",
    "learn": "If statements select a block of code based on a Boolean condition.",
    "bullets": [
      "Use if condition: followed by an indented block.",
      "else handles the alternative when the condition is False."
    ],
    "example": "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
    "output": "Adult",
    "challenge": "Set age = 16 and print 'Minor' using if/else.",
    "starter": "age = 16\n# Add if/else",
    "solution": "age = 16\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
    "takeaway": "",
    "check": "assert __output__.strip() == 'Minor', 'Use if/else for age 16.'"
  },
  {
    "id": 18,
    "unit": 3,
    "title": "Elif",
    "slides": "Lecture 3 · slides 8–10",
    "time": "4 min",
    "learn": "elif allows additional conditions after an if statement.",
    "bullets": [
      "Conditions are evaluated in order.",
      "The first matching if/elif branch is executed; else is the fallback."
    ],
    "example": "score = 85\nif score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')\nelse:\n    print('C')",
    "output": "B",
    "challenge": "Set score = 95 and print A using if/elif/else.",
    "starter": "score = 95\n# Add if/elif/else",
    "solution": "score = 95\nif score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')\nelse:\n    print('C')",
    "takeaway": "",
    "check": "assert __output__.strip() == 'A', 'Check score >= 90 first.'"
  },
  {
    "id": 19,
    "unit": 3,
    "title": "Nested If",
    "slides": "Lecture 3 · slides 12–13",
    "time": "4 min",
    "learn": "An if statement can be written inside another if statement.",
    "bullets": [
      "The inner condition runs only when the outer condition is True.",
      "Indentation shows the relationship between the conditions."
    ],
    "example": "number = 10\nif number > 0:\n    if number % 2 == 0:\n        print('Even')",
    "output": "Even",
    "challenge": "Using a nested if, print Even when number is positive and even.",
    "starter": "number = 8\n# Add a nested if",
    "solution": "number = 8\nif number > 0:\n    if number % 2 == 0:\n        print('Even')",
    "takeaway": "",
    "check": "assert __output__.strip() == 'Even', 'Use both conditions in a nested if.'"
  },
  {
    "id": 20,
    "unit": 3,
    "title": "Logical Operators: and, or, not",
    "slides": "Lecture 3 · slides 15–16",
    "time": "4 min",
    "learn": "Logical operators combine or reverse Boolean conditions.",
    "bullets": [
      "and requires both conditions to be True.",
      "or requires at least one condition to be True.",
      "not reverses a Boolean value."
    ],
    "example": "age = 20\nif age > 18 and age < 30:\n    print('Young Adult')\nscore = 45\nif score < 50 or score > 90:\n    print('Low or High Score')\nstatus = False\nif not status:\n    print('Inactive')",
    "output": "Young Adult\nLow or High Score\nInactive",
    "challenge": "With age=20, score=45, and status=False, write the three if statements using and, or, and not.",
    "starter": "age = 20\nscore = 45\nstatus = False\n# Write three if statements",
    "solution": "age = 20\nscore = 45\nstatus = False\nif age > 18 and age < 30:\n    print('Young Adult')\nif score < 50 or score > 90:\n    print('Low or High Score')\nif not status:\n    print('Inactive')",
    "takeaway": "",
    "check": "assert __output__.splitlines() == ['Young Adult', 'Low or High Score', 'Inactive'], 'Use and, or, and not.'"
  },
  {
    "id": 21,
    "unit": 3,
    "title": "Ternary Operator",
    "slides": "Lecture 3 · slide 17",
    "time": "4 min",
    "learn": "A ternary expression is a short way to select one of two values.",
    "bullets": [
      "Syntax: value_if_true if condition else value_if_false.",
      "Use it when the decision is short and simple."
    ],
    "example": "number = 10\nresult = 'Even' if number % 2 == 0 else 'Odd'\nprint(result)",
    "output": "Even",
    "challenge": "Set number = 7 and calculate result as Even or Odd with one conditional expression.",
    "starter": "number = 7\nresult = ''\nprint(result)",
    "solution": "number = 7\nresult = 'Even' if number % 2 == 0 else 'Odd'\nprint(result)",
    "takeaway": "",
    "check": "assert result == 'Odd', 'Use the ternary expression to test parity.'"
  }
];
