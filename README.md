# Machine Learning Fundamentals — Part 1

**Abed Codelab · Python-first, self-study, 18 interactive steps.**

[Open the interactive Codelab](https://abed-dvp.github.io/machine-learning-fundamentals-part1/codelab/)

Inspired by the learning interface of [Python As Fast As Possible](https://github.com/abed-dvp/python-as-fast-as-possible): side navigation, concise explanation, example, expected output, editable Python challenge, **Run Python**, **Check answer**, optional solution, saved progress, and light/dark mode.

## Source lectures

1. Introduction to Python Programming — 26 slides (Python setup, variables, operators, loops, functions, lambdas, OOP, exception handling)
2. Variables and Data Types — 22 slides (numeric/string/Boolean types, lists, tuples, dicts, sets, mutability, scope)
3. Conditions and If Statements — 20 slides (if/else, elif, nested if, and/or/not, conditional expression)

The three uploaded lecture decks are the **topic basis**. The code examples, coding exercises, and engineering connections are newly authored teaching material. They are **not quotations from the slides**, and engineering connections are marked as added context. Repeated lecture topics are combined to reduce redundancy.

## How to study

Open the [Codelab](https://abed-dvp.github.io/machine-learning-fundamentals-part1/codelab/). In each step:

1. Read **Learn** and **Example**, and check the expected output.
2. Edit the **Try it** Python editor to solve the challenge.
3. Click **Run Python**; the first run downloads Pyodide to execute Python in the browser, no login or server required.
4. Click **Check answer** to run assertions against your solution. When tests pass, the step is marked complete.
5. Use **Show solution** only after attempting the challenge.

Progress and edited code are saved in your browser's local storage. Clearing browser data will remove them. The runtime is fetched from a CDN on first use; internet is required at least for that initial load. This is a client-side learning environment, not a secure execution sandbox for untrusted code.

## Run code locally

Python 3.11+ is recommended. Code uses only the standard library; no pip packages are needed.

```powershell
python --version
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -c "print('Hello, Machine Learning!')"
```

On macOS/Linux, activate with `source .venv/bin/activate`.

For more detail, read [STUDY_GUIDE.md](STUDY_GUIDE.md).

## Files

- `index.html` — redirects to interactive Codelab.
- `codelab/index.html` — reference-style Codelab layout.
- `codelab/steps.js` — 18 lessons, exercises, and Python assertions.
- `codelab/app.js` — navigation, progress, Python runner, answer checks, themes.
- `codelab/styles.css` — reference-style responsive light/dark interface.
- `STUDY_GUIDE.md` — local workflow and key concepts.

## Publishing

GitHub Pages: Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/(root)`. The interactive URL ends in `/codelab/`. If Pages has not been enabled, the GitHub link works but the live-site URL will not until it is enabled.
