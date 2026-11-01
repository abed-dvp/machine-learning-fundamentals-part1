# 🧠 Machine Learning Fundamentals — Part 1

A practical Python fundamentals guide covering **three lectures** through clear explanations, runnable examples, and exercises.

> 🚀 **Interactive Codelab:** https://abed-dvp.github.io/machine-learning-fundamentals-part1/  
> 📚 **Course material:** 3 lectures · 68 slides · 18 lessons  
> 🐍 **Python:** 3.11+ (standard library only)

---

## 📚 What You'll Learn

By the end, you'll understand:

- Python setup, variables, and operators
- Loops and reusable functions
- Basic classes and exception handling
- Python data types and collections
- Mutability, copying, and scope
- Comparisons, conditionals, and Boolean logic
- Simple decision rules useful in data and machine-learning workflows

---

## ⚙️ Getting Started

Install Python from [python.org](https://www.python.org/downloads/) and check it in the **terminal**:

```bash
python --version
```

Create a virtual environment for a local project:

```bash
python -m venv .venv
```

Activate it using `.\\.venv\\Scripts\\Activate.ps1` in Windows PowerShell or `source .venv/bin/activate` on macOS/Linux. You can also run the course examples directly in the browser Codelab without a local installation.

---


## Lecture 1 — Python Programming


### 1. ⚙️ Setup & Hello World

Python reads like ordinary instructions: each line performs an action. You can run code in a terminal, VS Code, Jupyter, or the browser Codelab.

```python
print("Hello, World!")
```

**Output:**

```text
Hello, World!
```

**Key idea**

- Install Python 3 from [python.org](https://www.python.org/downloads/).
- In a terminal, `python --version` checks the interpreter (on Windows, `py --version` may work).
- To keep project packages isolated, run `python -m venv .venv`.
- `print()` displays text. Quotation marks create a string.

---


### 2. 📦 Variables & print()

Variables give names to values. Python decides a value's type at runtime, so you do not declare the type when assigning it.

```python
model_name = "Baseline"
accuracy = 0.85
print(model_name, accuracy)
print(f"Model: {model_name}")
```

**Output:**

```text
Baseline 0.85
Model: Baseline
```

**Key idea**

- `=` assigns a value. `==` compares two values.
- `model_name` and `accuracy` are readable `snake_case` variable names.
- An f-string such as `f"Model: {model_name}"` inserts a value into text.
- Use `type(value)` when checking a variable's type.

---


### 3. ➕ Operators & type conversion

Python supports arithmetic and comparisons. Values received as text must be converted before doing numeric calculations.

```python
batches = int("4")
items_per_batch = 8
count = batches * items_per_batch
print("Samples:", count)
print("Remainder:", count % 5)
```

**Output:**

```text
Samples: 32
Remainder: 2
```

**Key idea**

- `+`, `-`, `*`, `/` are the usual arithmetic operators.
- `//` is floor division; `%` returns a remainder; `**` raises a power.
- `int('4')` converts text to an integer; `float('0.5')` gives a float.
- `10 / 4` is `2.5`, but `10 // 4` is `2`.

---


### 4. 🔁 For & while loops

Use a `for` loop when you want to visit each item. Use a `while` loop when an action should repeat until a condition becomes false.

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

**Output:**

```text
Sum: 15
Done
```

**Key idea**

- `for score in scores:` visits each list element.
- `total += score` adds the current number to a running total.
- `range(1, 6)` generates `1, 2, 3, 4, 5`; the end is excluded.
- A `while` loop must have a path to termination.

---


### 5. 🧰 Functions & lambda

A function is a reusable block of code. It receives arguments through parameters and returns a value to the caller.

```python
def add(a, b):
    return a + b

double = lambda x: x * 2
print(add(3, 4))
print(double(5))
```

**Output:**

```text
7
10
```

**Key idea**

- Define a function with `def name(parameters):`.
- Use `return` to produce a result; `print()` only displays it.
- A `lambda` is a short anonymous function limited to one expression.
- Prefer a regular `def` for logic that needs several steps.

---


### 6. 🏗️ Classes & objects

A class describes what its objects contain and can do. Each created object is an instance of the class.

```python
class Model:
    def __init__(self, name):
        self.name = name

model = Model("Baseline")
print(model.name)
```

**Output:**

```text
Baseline
```

**Key idea**

- `class Model:` defines a class.
- `__init__(self, name)` runs when an instance is created.
- `self.name` stores an attribute on that particular object.
- A method is a function called through an object.

---


### 7. 🛡️ Exception handling

Exceptions report problems while a program runs. Handle specific, expected errors so that one invalid input does not crash your workflow unexpectedly.

```python
try:
    value = int("not-a-number")
except ValueError:
    value = 0
finally:
    print("Conversion attempted")
print(value)
```

**Output:**

```text
Conversion attempted
0
```

**Key idea**

- `try` contains code that may raise an error.
- `except ValueError` handles that type of error.
- `finally` runs whether the `try` block succeeds or fails.
- Do not use a broad `except:` to hide programming mistakes.

---


## Lecture 2 — Variables & Data Types


### 8. 🔤 Numeric, string & Boolean types

Python provides several built-in types. Picking the right type is a basic part of working with data.

```python
age = 35
price = 3.5
name = "Python"
active = True
print(type(age).__name__, type(price).__name__)
print(name.upper(), active)
```

**Output:**

```text
int float
PYTHON True
```

**Key idea**

- `int` holds whole numbers; `float` holds decimal values; `complex` holds numbers such as `2 + 3j`.
- `str` stores text, and `bool` stores `True` or `False`.
- `type(value).__name__` shows the type name.
- `bool('False')` is `True` because any non-empty string is truthy.

---


### 9. 📋 Lists: indexing & mutation

A list is an ordered collection that you can change after creating it.

```python
scores = [70, 80, 90]
scores.append(100)
print(scores[0], scores[-1])
print(scores[1:3])
```

**Output:**

```text
70 100
[80, 90]
```

**Key idea**

- The first element is at index `0`; `scores[-1]` is the last.
- `.append(value)` adds to the end; `.insert(index, value)` inserts at a position.
- `.remove(value)` removes the first matching item.
- `scores[1:3]` returns elements at indices 1 and 2 (not 3).

---


### 10. 📐 Tuples & unpacking

A tuple is an ordered, fixed-length sequence whose elements cannot be reassigned.

```python
point = (3, 4)
x, y = point
print("x:", x, "y:", y)
print("Length:", len(point))
```

**Output:**

```text
x: 3 y: 4
Length: 2
```

**Key idea**

- Use `(3, 4)` to store a pair of values.
- `x, y = point` unpacks values into two names.
- `(3,)` is a one-item tuple; `(3)` is just the number 3.
- A tuple can contain a mutable list: the tuple itself remains immutable, but the list can still change.

---


### 11. 🗂️ Dictionaries: keyed data

A dictionary stores values under named keys. It is well suited to configuration and structured records.

```python
settings = {"model": "baseline", "epochs": 10}
settings["epochs"] = 12
print(settings["model"])
print(settings.get("batch_size", 32))
```

**Output:**

```text
baseline
32
```

**Key idea**

- Read required keys with `settings['model']`.
- Use `settings.get('batch_size', 32)` when a missing key is acceptable.
- Assign `settings['epochs'] = 12` to add or update a value.
- `.items()` supplies `(key, value)` pairs for iteration.

---


### 12. 🧩 Sets: unique items

A set stores unique items. It is useful for deduplication, checking membership and comparing groups.

```python
train = {"cat", "dog"}
test = {"dog", "bird"}
print(sorted(train | test))
print(sorted(train & test))
```

**Output:**

```text
['bird', 'cat', 'dog']
['dog']
```

**Key idea**

- `set(['cat', 'cat', 'dog'])` produces two unique items.
- `a | b` is union, `a & b` intersection, and `a - b` difference.
- Set elements have no guaranteed display order.
- Use `set()` for an empty set; `{}` makes an empty dictionary.

---


### 13. 🔄 Mutable, immutable & variable scope

Some Python objects can change in place; others cannot. Variables also have a scope that determines where a name can be used.

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

**Output:**

```text
[1, 2, 3]
8
```

**Key idea**

- Lists and dictionaries are mutable; strings, numbers and tuples are immutable.
- `alias = original` gives two names for the same list.
- `original.copy()` makes a new outer list (a shallow copy).
- Names defined inside a function are generally local to that function.

---


## Lecture 3 — Conditions & If Statements


### 14. 🚦 Comparisons, if & else

An `if` statement runs a block only when its condition is true. `else` provides the alternative.

```python
age = 18
if age >= 18:
    label = "Adult"
else:
    label = "Minor"
print(label)
```

**Output:**

```text
Adult
```

**Key idea**

- Comparisons such as `>=`, `<`, `==` and `!=` produce Boolean results.
- A colon starts the block; indentation defines its contents.
- `age >= 18` includes 18, not just values above it.
- `if/else` executes exactly one of its two branches.

---


### 15. 🛣️ Elif: several branches

`elif` introduces another condition after `if`. Branches are checked in order until one matches.

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

**Output:**

```text
B
```

**Key idea**

- `if score >= 90` must be checked before `elif score >= 80`.
- Only the first matching branch executes.
- The final `else` provides a fallback.
- For ranges, test values just below and exactly at the boundaries.

---


### 16. 🌳 Nested if statements

A nested `if` places one decision inside another. The inner decision runs only when the outer condition passes.

```python
number = 10
if number > 0:
    if number % 2 == 0:
        print("Positive even")
    else:
        print("Positive odd")
```

**Output:**

```text
Positive even
```

**Key idea**

- Check `number > 0` before asking whether the number is even.
- `number % 2 == 0` tests evenness.
- Indentation shows which branch each `else` belongs to.
- Prefer early returns if many levels of nesting make code hard to read.

---


### 17. 🔗 and, or & not

Use logical operators to combine conditions in one decision.

```python
score = 0.92
approved = True
blocked = False
if score >= 0.9 and approved and not blocked:
    print("Ready")
else:
    print("Review")
```

**Output:**

```text
Ready
```

**Key idea**

- `and` requires both conditions to be true.
- `or` requires at least one condition to be true.
- `not` reverses a Boolean value.
- Python short-circuits `and` and `or`; parentheses improve readability.

---


### 18. 🎯 Conditional expression & final practice

A conditional expression chooses a value in a single line. It is useful for simple, readable decisions.

```python
number = 11
parity = "Even" if number % 2 == 0 else "Odd"
print(parity)
probability = 0.8
label = "positive" if probability >= 0.5 else "negative"
print(label)
```

**Output:**

```text
Odd
positive
```

**Key idea**

- Syntax: `value_if_true if condition else value_if_false`.
- Avoid deeply nested conditional expressions.
- A simple prediction threshold can map a probability to a label.
- In real ML, choose thresholds based on validation and error costs, not convenience.

**Machine-learning connection:** Prediction thresholds affect false positives and false negatives; experiment metrics are needed to choose them.

---


## 🧠 Quick Python Cheat Sheet

```python
# Variables and core data types
threshold = 0.8
model_name = "Baseline"
is_trained = True

# Collections
scores = [0.7, 0.9, 0.85]       # list: mutable, ordered
shape = (3, 1)                  # tuple: fixed-length
settings = {"epochs": 10}       # dictionary: key/value
labels = {"cat", "dog"}         # set: unique values

# Loop
for score in scores:
    print(score)

# Function and condition
def classify(score, threshold=0.8):
    return "positive" if score >= threshold else "negative"

print(classify(0.9))             # positive
```

### Data structures at a glance

| Type | Example | Important property |
|---|---|---|
| `list` | `[1, 2, 3]` | Ordered, mutable |
| `tuple` | `(128, 64)` | Ordered, immutable |
| `dict` | `{"epochs": 10}` | Maps keys to values |
| `set` | `{"A", "B"}` | Unique, unordered values |

### Operator reference

| Operator | Meaning | Example |
|---|---|---|
| `/` | True division | `10 / 4 == 2.5` |
| `//` | Floor division | `10 // 4 == 2` |
| `%` | Remainder | `10 % 4 == 2` |
| `**` | Power | `2 ** 3 == 8` |
| `==` | Equal | `3 == 3` |
| `!=` | Not equal | `3 != 4` |
| `>=` | Greater/equal | `3 >= 3` |

---

## 🧪 Interactive Practice

The **[browser Codelab](https://abed-dvp.github.io/machine-learning-fundamentals-part1/codelab/)** includes all 18 steps, editable Python exercises, **Run Python**, **Check answer**, solutions, and local progress tracking. The first run downloads the Python runtime, so it requires an internet connection.

For each lesson, read the example, predict the output, then solve the corresponding exercise without looking at the solution.

---

## 📁 Repository Structure

```text
machine-learning-fundamentals-part1/
├── README.md                   # Self-study lesson notes
├── STUDY_GUIDE.md              # Short revision guide
├── index.html                  # Codelab redirect
├── codelab/
│   ├── index.html              # Interactive UI
│   ├── app.js                  # Python runner and navigation
│   ├── steps.js                # 18 lessons and exercises
│   └── styles.css              # Layout and themes
└── tests/test_lessons.py       # Automated example/solution tests
```

**Source:** The first three Machine Learning Fundamentals lectures (Python Programming, Variables & Data Types, and Conditions). Examples and practice exercises are written for this repository; they are not verbatim slide excerpts.
