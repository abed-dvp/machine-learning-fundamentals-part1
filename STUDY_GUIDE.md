# Part 1 — Short self-study guide

This Codelab covers the first **three** Machine Learning Fundamentals slide decks (68 slides total), focused on Python foundations. It is deliberately a compact source for self-study rather than a full Python textbook.

## Lecture 1 — Introduction to Python Programming

- **Environment:** install Python 3; verify with `python --version`. Use `python -m venv .venv` for project isolation.
- **Values and statements:** variables name values; `print()` displays output; indentation defines blocks.
- **Operators:** `/` true division, `//` floor division, `%` remainder, `**` powers. Convert numeric text using `int()` or `float()` before calculating.
- **Control flow:** `for` iterates over a collection; `while` checks a repeated condition.
- **Functions:** use `def` and `return` for reusable logic. `lambda` is concise for one expression.
- **OOP:** `class`, `__init__`, `self` hold instance state.
- **Errors:** catch specific exception types with `try/except`; `finally` performs cleanup.

## Lecture 2 — Variables & Data Types

- **Primitives:** `int`, `float`, `complex`, `str`, `bool`.
- **List vs tuple:** list mutable, tuple immutable; both can be indexed and unpacked where appropriate.
- **Dictionary:** key/value lookup via `data[key]`; safe fallback via `data.get(key, default)`.
- **Set:** unique, unordered values; union `|`, intersection `&`, difference `-`.
- **Mutability:** `alias = original` shares a mutable object; `original.copy()` creates a shallow copy.
- **Scope:** local function variables usually do not change global variables; return results explicitly.

## Lecture 3 — Conditions & If Statements

- **Comparison:** `==` equality; `!=` inequality; `>=` inclusive boundary.
- **Branches:** `if / elif / else` checks conditions in order. Always verify boundary cases.
- **Nested conditions:** useful for staged rules, but excessive nesting reduces readability.
- **Logic:** `and`, `or`, `not`; evaluation short-circuits.
- **Conditional expression:** `'yes' if condition else 'no'` for compact single assignments.

## How the answer checker works

Each step stores a short Python assertion test. Click **Check answer** to execute your edited code and then the assertions. A passing check records completion automatically; only your current browser stores the progress. Tests verify behavior for representative inputs, not production correctness.

## AI engineering additions

The source slides focus on Python syntax. Additional practical examples show how these topics apply to model configurations, thresholds, feature types and reproducible experimentation. These examples are supplementary material.
