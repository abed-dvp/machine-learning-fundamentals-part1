# 🧠 Machine Learning Fundamentals — Part 1

**Python Foundations: a practical self-study reference**  
Three university lecture decks · 18 focused lessons · editable exercises · automated code checks

> **Interactive Codelab:** https://abed-dvp.github.io/machine-learning-fundamentals-part1/  
> **Source files:** Lecture 1 (26 slides), Lecture 2 (22 slides), Lecture 3 (20 slides)  
> **Prerequisites:** None beyond a willingness to run and edit simple Python code.

This repository teaches the Python concepts from the first three **Machine Learning Fundamentals** lectures. It includes short, precise explanations, tested code snippets, expected outputs, practical exercises, and notes on where each concept appears in AI engineering.

The lecture slide decks establish the topic scope; practical examples, challenges, and engineering applications are original extensions for hands-on learning.

---

## 📚 What you'll learn

| Lecture | Focus | Lessons |
| --- | --- | ---: |
| 1 — Introduction to Python | Setup, syntax, variables, operators, loops, functions, classes and errors | 1–7 |
| 2 — Variables & Data Types | Numbers, strings, lists, tuples, dictionaries, sets, mutability and scope | 8–13 |
| 3 — Conditions & If Statements | Comparisons, if/elif/else, nesting, Boolean operators and conditional expressions | 14–18 |

**Study approach:** Read each topic, predict the output before running it, then complete its challenge in the Codelab. Use this README as your reference and the Codelab as your interactive exercise book.

---

## ⚙️ Python setup (Windows, macOS, Linux)

Download a current Python 3 release from [python.org](https://www.python.org/downloads/) or use your system's package manager. These are **terminal commands**, not Python statements.

| Terminal command | What it does |
| --- | --- |
| `python --version` | Show the installed Python version |
| `py --version` | Check the Windows Python launcher (when installed) |
| `python -m pip --version` | Check the `pip` installer tied to that Python |
| `python -m venv .venv` | Create an isolated environment in `.venv` |
| `python hello.py` | Run the `hello.py` file from the current folder |
| `python -m pip install package_name` | Install a package in the selected Python environment |

Activate the virtual environment in **PowerShell** with `.\\.venv\\Scripts\\Activate.ps1`, or on **macOS/Linux** with `source .venv/bin/activate`. For this particular course, the examples need **no external Python packages**.

You can also skip local setup and use [the browser Codelab](https://abed-dvp.github.io/machine-learning-fundamentals-part1/codelab/); its Python runtime downloads on first use.

---

# Lecture 1 — Python Programming Essentials


## 1. ⚙️ Setup & Hello World

<sub>Lecture 1 · slides 8–11</sub>

Python is a high-level, readable programming language. Begin by checking the interpreter and running one short program.

### Key concepts

- Install Python 3 from python.org or your system package manager; verify it in a terminal with python --version (on Windows, py --version may work).
- Run python -m pip --version to check the package manager; python -m venv .venv creates a project-specific environment.
- print() displays text; quotes make a string literal. The browser practice editor runs Python without installing it locally.

### Why it matters

The interpreter executes instructions written in a `.py` file. A string in quotes is literal text; `print()` sends that text to standard output. You can use the browser editor for these exercises, but local projects still benefit from a dedicated virtual environment.

```python
print("Hello, World!")
```

**Expected output**

```text
Hello, World!
```

**Watch out:** Check whether `python --version` works before trying to install any packages. If the command is unavailable on Windows, try `py --version`; it may be the installed launcher.

**Try it:** Edit the program so it prints Hello, Machine Learning! exactly.  
**Why an AI engineer cares:** Reproducible Python versions and isolated environments prevent dependency conflicts.

---

## 2. 🧱 Variables & print()

<sub>Lecture 1 · slides 11–14</sub>

A variable names a value. Python assigns with = and does not require explicit variable type declarations.

### Key concepts

- A variable such as model_name can reference a string; accuracy can reference a float.
- Use descriptive snake_case names rather than single letters in production code.
- print() can show multiple values; f-strings format values inside readable messages.

### How variables work

`model_name = "Baseline"` binds a name to a string, while `accuracy = 0.85` binds another name to a floating-point number. An f-string substitutes a variable's value inside braces, making logs easier to read.

```python
model_name = "Baseline"
accuracy = 0.85
print(model_name, accuracy)
print(f"Model: {model_name}")
```

**Expected output**

```text
Baseline 0.85
Model: Baseline
```

**Watch out:** `=` assigns a value, but `==` checks equality. Python variables are not restricted to one static type, but changing types unexpectedly makes debugging harder.

**Try it:** Create a variable called epochs with value 10, then print Epochs: 10 using an f-string.  
**Why an AI engineer cares:** Clear names help when tracking metrics and hyperparameters.

---

## 3. ➕ Operators & type conversion

<sub>Lecture 1 · slides 15–16</sub>

Use numeric operators for calculations and explicit type conversion when a value arrives as text.

### Key concepts

- int('12') creates an integer; float('0.25') creates a decimal number; str(42) creates text.
- Arithmetic operators include +, -, *, /, //, %, **. / returns float; // floor-divides.
- Use == for equality checks, not = (assignment). Avoid multiplying strings when you mean numeric multiplication.

### Arithmetic and conversions

`int("4")` turns numeric text into an integer so that multiplication acts numerically. `%` gives the remainder, which is useful for evenly grouping items or checking parity. Unlike `//`, `/` performs true division.

```python
batches = int("4")
items_per_batch = 8
count = batches * items_per_batch
print("Samples:", count)
print("Remainder:", count % 5)
```

**Expected output**

```text
Samples: 32
Remainder: 2
```

**Watch out:** `int("abc")` raises `ValueError`. Don't assume CSV data, form fields, or API responses contain valid numbers; validate before conversion.

**Try it:** Convert the string '12' to a number and multiply it by 3. Store the answer in total.  
**Why an AI engineer cares:** Always validate incoming data types before numeric feature calculations.

---

## 4. 🔁 For & while loops

<sub>Lecture 1 · slide 19</sub>

Loops repeat a task: for visits each item in a sequence; while continues while a condition holds.

### Key concepts

- range(1, 5) produces 1, 2, 3, 4 (the stop is excluded).
- A for loop is suitable for traversing samples; a while loop is suitable for a condition-based process.
- Watch indentation and make sure while loops can terminate.

### Choosing the right loop

`for score in scores` visits every element; `total += score` is a shorthand for adding the current value to the accumulated total. The `while` loop continues until the countdown is no longer positive.

```python
scores = [3, 5, 7]
total = 0
for score in scores:
    total += score
print("Sum:", total)
countdown = 2
while countdown > 0:
    countdown -= 1
print("Done")
```

**Expected output**

```text
Sum: 15
Done
```

**Watch out:** The second argument of `range()` is excluded. A `while` loop must change the condition or it can run forever. Avoid manual loops for large numerical matrices when a vectorized operation is available.

**Try it:** Use a for loop to calculate the sum of numbers 1 through 5 in a variable named total.  
**Why an AI engineer cares:** For large arrays, NumPy vectorization is often faster than Python loops.

---

## 5. 🧰 Functions & lambda

<sub>Lecture 1 · slides 21–22</sub>

Functions make repeated logic reusable. A lambda is a compact one-expression function.

### Key concepts

- def introduces a function; parameters receive inputs, and return sends back a result.
- A function without an explicit return returns None.
- lambda value: value * 2 is handy for short expressions, but def is clearer for multi-step behavior.

### Parameters and return values

`add(a, b)` receives two arguments and returns a result without printing it. The caller decides how to use that result. `lambda x: x * 2` defines a one-expression anonymous function.

```python
def add(a, b):
    return a + b

double = lambda x: x * 2
print(add(3, 4))
print(double(5))
```

**Expected output**

```text
7
10
```

**Watch out:** A function that only prints a value normally returns `None`. Use `return` for reusable computations and choose `def` for functions requiring more than a simple expression.

**Try it:** Define multiply(a, b) that returns the product, and print multiply(3, 4).  
**Why an AI engineer cares:** Small pure functions are easier to test within a data pipeline.

---

## 6. 🏗️ Classes & objects

<sub>Lecture 1 · slide 23</sub>

Object-oriented programming groups data and behavior into classes and their instances.

### Key concepts

- class declares a reusable type; an instance is an object created from it.
- __init__ initializes instance data; self refers to the current object.
- Attributes hold state, while methods are functions attached to objects.

### Object state

The `Model` class is a blueprint. Creating `Model("Baseline")` runs `__init__` and stores the provided name on the instance as `self.name`. Each instance can hold its own state.

```python
class Model:
    def __init__(self, name):
        self.name = name

model = Model("Baseline")
print(model.name)
```

**Expected output**

```text
Baseline
```

**Watch out:** `self` is the instance, not a special keyword. Do not accidentally store per-instance values on the class when separate objects must not share state.

**Try it:** Add a method describe(self) that returns 'Model: ' followed by the object's name.  
**Why an AI engineer cares:** Class-based estimators commonly store settings at initialization.

---

## 7. 🛡️ Exception handling

<sub>Lecture 1 · slide 24</sub>

try and except handle expected errors; finally runs whether an error occurred or not.

### Key concepts

- Catch a specific exception such as ValueError rather than hiding all errors.
- finally is suitable for cleanup, but does not suppress an exception by itself.
- Avoid silently replacing faulty data: choose a documented fallback or report the error.

### Predictable error handling

`int("not-a-number")` raises `ValueError`. The `except ValueError` branch handles that expected failure, while `finally` runs whether conversion succeeded or failed.

```python
try:
    value = int("not-a-number")
except ValueError:
    value = 0
finally:
    print("Conversion attempted")
print(value)
```

**Expected output**

```text
Conversion attempted
0
```

**Watch out:** Avoid `except:` without an exception type: it can hide programming defects. A fallback like `0` should be a deliberate business rule, not a silent assumption for missing data.

**Try it:** Write a function safe_int(text) that returns int(text), or -1 when conversion fails with ValueError.  
**Why an AI engineer cares:** Log invalid inputs and track missing-data handling instead of hiding failures.

---

# Lecture 2 — Variables & Data Types


## 8. 🔤 Numeric, string & Boolean types

<sub>Lecture 2 · slides 5–9</sub>

Core types include int, float, complex, str and bool. type() reveals the runtime type of a value.

### Key concepts

- int represents whole numbers, float decimal numbers, and complex numbers have a real and imaginary part.
- str stores text; a string cannot be modified in place.
- bool is True or False. Note that bool is a subclass of int; use explicit intent when validating data.

### Selecting types

Python distinguishes numeric values (`int`, `float`, `complex`), strings (`str`), and Boolean flags (`bool`). `type(value).__name__` tells you the exact runtime type.

```python
age = 35
price = 3.5
name = "Python"
active = True
print(type(age).__name__, type(price).__name__)
print(name.upper(), active)
```

**Expected output**

```text
int float
PYTHON True
```

**Watch out:** `bool("False")` is `True` because non-empty strings are truthy. Explicitly parse textual flags; don't rely on a string's truthiness to represent a business decision.

**Try it:** Create threshold as a float of 0.7 and flag as a Boolean True.  
**Why an AI engineer cares:** Distinguish numeric features, categorical strings and Boolean flags before modeling.

---

## 9. 📋 Lists: indexing & mutation

<sub>Lecture 2 · slide 11</sub>

Lists are ordered, mutable containers suited to collections that change during processing.

### Key concepts

- Indices start at zero: values[0] is the first element, values[-1] the last.
- append adds to the end; insert adds at a position; remove deletes the first matching value.
- Slicing values[1:3] returns items at indices 1 and 2.

### Indexing and mutation

List positions begin at 0. `append()` changes the original list, negative indexing accesses elements from the end, and slicing creates a new list of selected elements.

```python
scores = [70, 80, 90]
scores.append(100)
print(scores[0], scores[-1])
print(scores[1:3])
```

**Expected output**

```text
70 100
[80, 90]
```

**Watch out:** `scores[1:3]` includes index 1 but excludes index 3. `append()` returns `None`, so avoid assigning `scores = scores.append(100)`.

**Try it:** Starting with scores = [70, 80, 90], insert 75 at position 1 and remove 90.  
**Why an AI engineer cares:** Python lists are flexible containers, while arrays are better for large numeric tensors.

---

## 10. 📐 Tuples & unpacking

<sub>Lecture 2 · slide 12</sub>

Tuples are ordered, immutable containers, useful for fixed-length records and function return values.

### Key concepts

- Use parentheses or commas to construct a tuple; a single-item tuple needs a trailing comma.
- Unpacking assigns tuple components to multiple names.
- The tuple cannot have its elements reassigned, although objects inside it may be mutable.

### Fixed-size records

`point = (3, 4)` stores two values in an ordered tuple. `x, y = point` unpacks them in order. Tuple elements cannot be rebound individually.

```python
point = (3, 4)
x, y = point
print("x:", x, "y:", y)
print("Length:", len(point))
```

**Expected output**

```text
x: 3 y: 4
Length: 2
```

**Watch out:** A one-element tuple is written `(3,)`, not `(3)`. A tuple's immutability does not make nested lists or dictionaries immutable.

**Try it:** Unpack the tuple shape = (128, 64) into rows and columns, then print them.  
**Why an AI engineer cares:** Tensor and dataset dimensions are often represented as tuples.

---

## 11. 🗂️ Dictionaries: keyed data

<sub>Lecture 2 · slide 14</sub>

A dictionary maps unique keys to values. It is useful for configuration and structured records.

### Key concepts

- Read with settings['key'] when the key is mandatory; settings.get('key', fallback) handles missing keys.
- items() yields key/value pairs, while keys() and values() provide views.
- Assignment can update an existing value or introduce a new key.

### Mappings and safe lookup

A dictionary maps names to values, so `settings["model"]` reads a required key. `get("batch_size", 32)` uses a fallback when the key is absent.

```python
settings = {"model": "baseline", "epochs": 10}
settings["epochs"] = 12
print(settings["model"])
print(settings.get("batch_size", 32))
```

**Expected output**

```text
baseline
32
```

**Watch out:** Using `settings["missing"]` raises `KeyError`; use `.get()` only when missing keys are legitimate. Keys must be hashable, and repeated keys overwrite earlier values.

**Try it:** Create a dictionary config with 'learning_rate': 0.01 and 'epochs': 20.  
**Why an AI engineer cares:** Dictionaries are common for experiment and hyperparameter configuration.

---

## 12. 🧩 Sets: unique items

<sub>Lecture 2 · slide 15</sub>

A set stores unique hashable elements and supports fast membership and set operations.

### Key concepts

- set([1, 1, 2]) becomes {1, 2}; order is not guaranteed.
- Use | for union, & for intersection, and - for difference.
- Use set() for an empty set, because {} creates an empty dictionary.

### Uniqueness and set operations

`train | test` combines unique items; `train & test` keeps the common ones. Sorting before printing produces a predictable display order.

```python
train = {"cat", "dog"}
test = {"dog", "bird"}
print(sorted(train | test))
print(sorted(train & test))
```

**Expected output**

```text
['bird', 'cat', 'dog']
['dog']
```

**Watch out:** Sets are unordered and should not be indexed. `{}` creates an empty dictionary; use `set()` for an empty set.

**Try it:** Create a set unique_labels from ['cat', 'cat', 'dog', 'bird'], and print its length.  
**Why an AI engineer cares:** Sets are useful for checking label overlaps and distinct categories.

---

## 13. 🔄 Mutable, immutable & variable scope

<sub>Lecture 2 · slides 17–19</sub>

Lists and dictionaries are mutable; strings and tuples are immutable. Function-local names are separate from global names.

### Key concepts

- Two variables can point to the same list; changing it through either name affects both.
- Use list.copy() when you need a new top-level list; nested mutable elements still need deeper copying.
- Variables created inside a function are usually local; return values instead of mutating global state.

### Object identity vs copying

`alias = original` does not copy a list; it creates a second reference to the same object. `.copy()` makes a new outer list. A function-local name is normally distinct from global scope.

```python
original = [1, 2]
alias = original
alias.append(3)
print(original)

def doubled(value):
    result = value * 2
    return result
print(doubled(4))
```

**Expected output**

```text
[1, 2, 3]
8
```

**Watch out:** A shallow copy still shares nested mutable elements. When handling nested sample records, consider whether you need independent copies and avoid modifying global state in helper functions.

**Try it:** Create safe_copy from original using .copy(), then append 99 without changing original.  
**Why an AI engineer cares:** Avoid accidental shared mutable state when preparing data for experiments.

---

# Lecture 3 — Conditions & Decision Logic


## 14. 🚦 Comparisons, if & else

<sub>Lecture 3 · slides 5–7</sub>

An if condition executes its indented block when a Boolean expression is true; else handles the other path.

### Key concepts

- Comparison operators include ==, !=, <, <=, >, >=.
- A colon begins a block; consistent indentation is part of Python syntax.
- Only one branch of an if/else pair executes.

### Boundary decisions

`age >= 18` includes the value 18. Python executes the indented `if` branch when the condition is true; otherwise it runs `else`. Exactly one branch executes.

```python
age = 18
if age >= 18:
    label = "Adult"
else:
    label = "Minor"
print(label)
```

**Expected output**

```text
Adult
```

**Watch out:** Always test just below, at, and above the decision boundary. Using `=` where `==` is required is a syntax error in ordinary conditions.

**Try it:** Write a function age_group(age) that returns 'Adult' for 18 or older and 'Minor' otherwise.  
**Why an AI engineer cares:** Clear decision boundaries matter when translating probability scores into classes.

---

## 15. 🛣️ Elif: several branches

<sub>Lecture 3 · slides 8–10</sub>

elif checks additional conditions only when preceding if/elif conditions were false.

### Key concepts

- Conditions are evaluated top to bottom; order matters.
- Use an else fallback so your function handles every valid input.
- For ranges like grades, test boundary values such as 79, 80, 89 and 90.

### Priority of conditions

`if score >= 90` is tested first; only if it fails does `elif score >= 80` run. This ordering prevents a score of 95 from being assigned B.

```python
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"
print(grade)
```

**Expected output**

```text
B
```

**Watch out:** Place stricter conditions before broader ones. Define an `else` policy for values not covered by earlier checks, and consider how invalid scores should be handled.

**Try it:** Define grade_for(score) with A for score >= 90, B for >= 80, otherwise C.  
**Why an AI engineer cares:** Ordered conditions are useful for post-processing classification scores.

---

## 16. 🌳 Nested if statements

<sub>Lecture 3 · slides 11–13</sub>

A nested if checks an additional condition inside a branch that has already passed.

### Key concepts

- The inner condition runs only when the outer condition is true.
- Use indentation to show each decision layer clearly.
- Guard conditions can avoid deeply nested code in larger functions (additional practice advice).

### Two-stage decision making

The outer `if number > 0` rejects zero and negative values. Only positive numbers reach the inner parity check, where `number % 2 == 0` identifies even numbers.

```python
number = 10
if number > 0:
    if number % 2 == 0:
        print("Positive even")
    else:
        print("Positive odd")
```

**Expected output**

```text
Positive even
```

**Watch out:** Indentation controls which `else` belongs to which `if`. When nested logic grows, consider early returns to simplify reading.

**Try it:** Define describe(number): return 'Positive even' if positive and even, 'Positive odd' if positive and odd, and 'Not positive' otherwise.  
**Why an AI engineer cares:** Nested rules help with multi-stage validation, but prefer readable conditions.

---

## 17. 🔗 and, or & not

<sub>Lecture 3 · slides 15–16</sub>

Logical operators combine Boolean expressions to express more complex decisions.

### Key concepts

- and is true only when both conditions are true; or is true when at least one is true.
- not negates a Boolean expression; Python evaluates and/or with short-circuiting.
- Prefer parentheses when mixing operators, even when you know precedence.

### Combining gates

`and` requires all conditions, `or` accepts at least one, and `not` reverses a Boolean condition. Python short-circuits evaluations once the overall result is determined.

```python
score = 0.92
approved = True
blocked = False
if score >= 0.9 and approved and not blocked:
    print("Ready")
else:
    print("Review")
```

**Expected output**

```text
Ready
```

**Watch out:** Use parentheses for mixed operators even though `not` binds before `and`, which binds before `or`. A condition like `score >= 0.9` is an illustrative rule, not a universally valid ML release criterion.

**Try it:** Define can_release(score, approved, blocked). Return True only if score >= 0.9 and approved and not blocked.  
**Why an AI engineer cares:** Combine validation and release criteria explicitly rather than in hidden side effects.

---

## 18. 🎯 Conditional expression & final practice

<sub>Lecture 3 · slide 17</sub>

Python's conditional expression chooses one of two values in a single readable line.

### Key concepts

- The syntax is value_if_true if condition else value_if_false.
- Use it for short assignments, not deeply nested decision trees.
- Final exercise connects a numerical threshold to a classification decision (an added engineering example).

### Single-line conditional decisions

The expression `'Even' if condition else 'Odd'` returns one of two strings. The probability example demonstrates how a threshold maps a numeric score to a label.

```python
number = 11
parity = "Even" if number % 2 == 0 else "Odd"
print(parity)
probability = 0.8
label = "positive" if probability >= 0.5 else "negative"
print(label)
```

**Expected output**

```text
Odd
positive
```

**Watch out:** A threshold alone does not measure model quality. For real classifiers, evaluate errors on held-out examples and choose the threshold to fit the application.

**Try it:** Define predict_label(probability, threshold=0.5) that returns 'positive' for probability >= threshold, else 'negative'.  
**Why an AI engineer cares:** Threshold selection affects false positives and false negatives; never infer quality from the threshold alone.

---

# ⚡ Quick reference

## Python data structures

| Structure | Example | Ordered? | Can you modify it? | Main use |
| --- | --- | --- | --- | --- |
| `list` | `[1, 2, 3]` | Yes | Yes | Sequence of values |
| `tuple` | `(128, 64)` | Yes | No (outer structure) | Fixed-size records, shapes |
| `dict` | `{"epochs": 10}` | Insertion order | Yes | Keyed records and settings |
| `set` | `{"cat", "dog"}` | No | Yes | Unique values and membership |

## Common Python operators

| Operator | Meaning | Example | Result |
| --- | --- | --- | --- |
| `/` | True division | `10 / 4` | `2.5` |
| `//` | Floor division | `10 // 4` | `2` |
| `%` | Remainder | `10 % 4` | `2` |
| `**` | Power | `2 ** 3` | `8` |
| `==` | Equality | `3 == 3` | `True` |
| `>=` | Greater or equal | `3 >= 4` | `False` |
| `and` | Both conditions | `True and False` | `False` |
| `or` | Either condition | `True or False` | `True` |
| `not` | Negation | `not True` | `False` |

## Mini cheat sheet

```python
scores = [70, 85, 90]                  # list
config = {"threshold": 0.8}            # dict
unique = set(scores)                   # set
shape = (3, 1)                         # tuple

def passed(score, threshold=80):       # function + default argument
    return score >= threshold          # comparison

results = []                           # mutable container
for score in scores:                   # for loop
    label = "pass" if passed(score) else "review"
    results.append(label)

print(results)                         # ['review', 'pass', 'pass']
```

---

# 🧪 Practice in the interactive Codelab

The interactive version provides an editable **Try it** Python editor, **Run Python**, **Check answer** with assertions, expected output, solutions, step navigation, light/dark themes, and local progress tracking.

**Start:** https://abed-dvp.github.io/machine-learning-fundamentals-part1/

A successful code check marks the step as complete; the progress is saved in your browser's local storage. The first Python run requires internet to download the runtime. Automated checks cover representative inputs, not every possible edge case.

---

# 📁 Repository structure

```text
machine-learning-fundamentals-part1/
├── README.md                  # Self-study reference (this document)
├── STUDY_GUIDE.md             # Condensed overview and study workflow
├── index.html                 # Redirect to interactive Codelab
├── codelab/
│   ├── index.html             # Responsive teaching interface
│   ├── app.js                 # Navigation, browser Python, answer checks
│   ├── steps.js               # 18 lessons with examples and exercises
│   └── styles.css             # Light and dark styling
├── tests/test_lessons.py      # Tests examples and reference solutions
└── .github/workflows/
    ├── validate.yml           # Automated test suite
    └── pages.yml              # GitHub Pages deployment
```

## Recommended learning workflow

1. Read one section of this README and predict the example's output.
2. Open that step in the Codelab and type the solution yourself.
3. Run the code, compare the actual output and solve any error messages.
4. Click **Check answer** for feedback; use **Show solution** only if needed.
5. Rebuild the idea without looking at the source, then move to the next step.

The goal is to understand **how Python behaves** and be able to apply the building blocks confidently to future data processing and machine-learning tasks.
