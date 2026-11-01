# 🧠 Machine Learning Fundamentals — Part 1

A concise Python Codelab based on the first three **Machine Learning Fundamentals** lecture decks. Read the explanation, run the example, and complete one practice task per topic.

> 🚀 **Interactive Codelab:** https://abed-dvp.github.io/machine-learning-fundamentals-part1/  
> 📚 **Source:** Lecture 1 (26 slides), Lecture 2 (22 slides), Lecture 3 (20 slides)

## What you'll learn

- Introduction to Python: setup, variables, operators, loops, functions, lambda, classes, errors
- Variables and Data Types: numbers, strings, Boolean, lists, tuples, dictionaries, sets, mutability, scope
- Conditions and If Statements: if/else, elif, nested if, logical operators, ternary expression

The three slide decks overlap on basic variables and conditions. Repeated explanations are kept short rather than taught twice.

## Getting started

Install Python from [python.org](https://www.python.org/downloads/) and use the terminal to check the installation:

```bash
python --version
```

A local Python file can be executed with `python example.py`. Alternatively, open the [Codelab](https://abed-dvp.github.io/machine-learning-fundamentals-part1/) and run the examples in your browser. The browser downloads its Python runtime on first use.

---


# Lecture 1 — Introduction to Python Programming

## 1. Python & Hello World

Python is a high-level, readable programming language used for many tasks, including machine learning.

- Created by Guido van Rossum in 1991; Python is free and open source.
- Install Python from python.org/downloads. Jupyter Notebook is another environment for running Python.
- Use print() to display a message. The online editor runs Python in your browser.

```python
print('Hello, World!')
```

**Output:**

```text
Hello, World!
```

**Practice:** Change the message to Hello, Python! and print it.

---

## 2. Variables & Type Conversion

Variables hold values without requiring an explicit type declaration. Conversion functions change a value's type.

- Assign values using =, such as x = 10 and y = 'Hello'.
- int(), float(), and str() convert between common types.

```python
x = 10
y = 'Hello'
print(x, y)
print(int('20') + x)
```

**Output:**

```text
10 Hello
30
```

**Practice:** Convert the string '5' to an integer, add 10, and save the result as total.

---

## 3. Python Operators

Operators let Python perform calculations and compare or combine values.

- Arithmetic operators: +, -, *, /, //, %, **.
- Comparisons like > and == return Boolean values. Logical operators include and, or, not.
- Python also supports bitwise operators such as & (bitwise AND).

```python
print(10 + 3)
print(10 > 3)
print(True and False)
print(5 & 3)
```

**Output:**

```text
13
True
False
1
```

**Practice:** Create sum_result = 6 + 4 and is_equal = (6 == 4).

---

## 4. For & While Loops

Loops repeat code. for iterates through a sequence, while repeats while a condition is true.

- A for loop goes through items or numbers produced by range().
- A while loop needs a changing condition so it eventually ends.

```python
for i in range(3):
    print(i)

count = 0
while count < 2:
    count += 1
print('Count:', count)
```

**Output:**

```text
0
1
2
Count: 2
```

**Practice:** Use a for loop to sum 1 to 3 in total. Then use while to increase count from 0 to 2.

---

## 5. Functions with def

A function is a reusable block of code defined using def. return provides its result.

- Parameters receive values when the function is called.
- Indent the function body and use return to send a value back.

```python
def add(a, b):
    return a + b

print(add(2, 3))
```

**Output:**

```text
5
```

**Practice:** Create a function multiply(a, b) that returns the product.

---

## 6. Lambda Functions

A lambda is a short anonymous function written as a single expression.

- Lambda syntax: lambda parameters: expression.
- The result of the expression is returned automatically.

```python
add = lambda x, y: x + y
print(add(2, 3))
```

**Output:**

```text
5
```

**Practice:** Create a lambda named double that multiplies its input by 2.

---

## 7. Classes & Objects

Classes are templates for creating objects. __init__ initializes an object's data.

- class Dog defines a class; Dog('Max') creates an object.
- self.name stores a name inside that object.

```python
class Dog:
    def __init__(self, name):
        self.name = name

dog = Dog('Max')
print(dog.name)
```

**Output:**

```text
Max
```

**Practice:** Create an object named pet from Dog with the name 'Rex'.

---

## 8. Exception Handling

try, except, and finally help handle errors in a controlled way.

- try contains code that might fail; except handles the error.
- finally executes whether an error occurred or not.

```python
try:
    number = int('abc')
except ValueError:
    print('Invalid number')
finally:
    print('Finished')
```

**Output:**

```text
Invalid number
Finished
```

**Practice:** Handle ValueError from int('bad') and always print 'Done' using finally.

---


# Lecture 2 — Variables and Data Types

## 9. Variables & Numeric Types

Python variables are dynamically typed. Numeric types include int, float, and complex.

- int represents whole numbers, float decimals, and complex numbers with a real and imaginary part.
- Use type() to see a value's type.

```python
x = 5
y = 3.14
z = 2 + 3j
print(type(x).__name__)
print(type(y).__name__)
print(type(z).__name__)
```

**Output:**

```text
int
float
complex
```

**Practice:** Define num = 7.5 and print its type.

---

## 10. Strings & Booleans

A string contains characters in quotes. A Boolean represents True or False.

- Strings use single or double quotation marks.
- Boolean values are written True and False.

```python
name = 'John'
status = True
print(name)
print(status)
```

**Output:**

```text
John
True
```

**Practice:** Create name = 'Alice' and status = False and print both.

---

## 11. Lists

Lists are ordered, mutable sequences. Their elements are accessible by index.

- Write a list with square brackets: [1, 2, 3].
- append(), insert(), and remove() change a list; indexing starts at 0.

```python
values = [1, 2, 3]
values.append(4)
values.insert(0, 0)
values.remove(2)
print(values)
print(values[0])
```

**Output:**

```text
[0, 1, 3, 4]
0
```

**Practice:** Starting with [1, 2, 3], append 4, then remove 2.

---

## 12. Tuples

Tuples are ordered but immutable sequences. You can unpack their values into variables.

- Use parentheses: (1, 2, 3).
- Unpack using a, b, c = (1, 2, 3).

```python
numbers = (1, 2, 3)
a, b, c = numbers
print(a, b, c)
```

**Output:**

```text
1 2 3
```

**Practice:** Unpack the tuple (4, 5, 6) into x, y, and z.

---

## 13. Dictionaries

Dictionaries store values in key-value pairs.

- Read a value using a key, for example data['name'].
- Common methods are keys(), values(), items(), and update().

```python
person = {'name': 'Alice', 'age': 25}
print(person['name'])
print(list(person.keys()))
person.update({'age': 26})
print(person['age'])
```

**Output:**

```text
Alice
['name', 'age']
26
```

**Practice:** Create a dictionary person containing name = 'Bob' and age = 30.

---

## 14. Sets

Sets are unordered collections of unique elements.

- A set removes repeated elements.
- union combines sets, intersection finds common elements, and difference finds elements in one set but not the other.

```python
a = {1, 2, 3}
b = {3, 4}
print(sorted(a | b))
print(sorted(a & b))
print(sorted(a - b))
```

**Output:**

```text
[1, 2, 3, 4]
[3]
[1, 2]
```

**Practice:** Using sets a and b, save their intersection in common.

---

## 15. Mutable, Immutable & Dynamic Typing

Lists and dictionaries are mutable, while tuples and strings are immutable. Python names can refer to values of different types.

- A mutable object can be changed after creation.
- Dynamic typing allows reassigning a variable from one type to another.

```python
numbers = [1, 2]
numbers.append(3)
value = 10
value = 'ten'
print(numbers)
print(value)
```

**Output:**

```text
[1, 2, 3]
ten
```

**Practice:** Append 4 to numbers and change value from 10 to the string 'ten'.

---

## 16. Global & Local Variables

A global variable is defined outside a function; a local variable is defined inside it.

- Local variables belong to their function's scope.
- A local name can differ from a global name with the same spelling.

```python
x = 10
def show():
    x = 5
    return x
print(show())
print(x)
```

**Output:**

```text
5
10
```

**Practice:** Make show() return 8 using a local x, while the global x stays 10.

---


# Lecture 3 — Conditions and If Statements

## 17. If & Else

If statements select a block of code based on a Boolean condition.

- Use if condition: followed by an indented block.
- else handles the alternative when the condition is False.

```python
age = 18
if age >= 18:
    print('Adult')
else:
    print('Minor')
```

**Output:**

```text
Adult
```

**Practice:** Set age = 16 and print 'Minor' using if/else.

---

## 18. Elif

elif allows additional conditions after an if statement.

- Conditions are evaluated in order.
- The first matching if/elif branch is executed; else is the fallback.

```python
score = 85
if score >= 90:
    print('A')
elif score >= 80:
    print('B')
else:
    print('C')
```

**Output:**

```text
B
```

**Practice:** Set score = 95 and print A using if/elif/else.

---

## 19. Nested If

An if statement can be written inside another if statement.

- The inner condition runs only when the outer condition is True.
- Indentation shows the relationship between the conditions.

```python
number = 10
if number > 0:
    if number % 2 == 0:
        print('Even')
```

**Output:**

```text
Even
```

**Practice:** Using a nested if, print Even when number is positive and even.

---

## 20. Logical Operators: and, or, not

Logical operators combine or reverse Boolean conditions.

- and requires both conditions to be True.
- or requires at least one condition to be True.
- not reverses a Boolean value.

```python
age = 20
if age > 18 and age < 30:
    print('Young Adult')
score = 45
if score < 50 or score > 90:
    print('Low or High Score')
status = False
if not status:
    print('Inactive')
```

**Output:**

```text
Young Adult
Low or High Score
Inactive
```

**Practice:** With age=20, score=45, and status=False, write the three if statements using and, or, and not.

---

## 21. Ternary Operator

A ternary expression is a short way to select one of two values.

- Syntax: value_if_true if condition else value_if_false.
- Use it when the decision is short and simple.

```python
number = 10
result = 'Even' if number % 2 == 0 else 'Odd'
print(result)
```

**Output:**

```text
Even
```

**Practice:** Set number = 7 and calculate result as Even or Odd with one conditional expression.

---

## Practice

Each of the 21 topics has one matching coding exercise in the [interactive Codelab](https://abed-dvp.github.io/machine-learning-fundamentals-part1/). Use **Run Python** to inspect output and **Check answer** to validate your code.

The course follows the uploaded slide topics closely. Where a slide only names a concept, a small Python example is included to make it runnable. No extra machine-learning algorithms or unrelated projects are introduced.
