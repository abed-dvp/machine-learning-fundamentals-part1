"""Validate all interactive Codelab examples and reference exercise answers."""
import ast
import contextlib
import io
import json
import pathlib
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]
RAW = (ROOT / "codelab" / "steps.js").read_text(encoding="utf-8")
STEPS = json.loads(RAW.split("window.CODELAB_STEPS=", 1)[1].strip().removesuffix(";"))


class VerifyCourse(unittest.TestCase):
    def test_lesson_structure(self):
        self.assertEqual(len(STEPS), 21)
        self.assertEqual(len({step["id"] for step in STEPS}), 21)
        self.assertEqual([sum(step["unit"] == n for step in STEPS) for n in (1, 2, 3)], [8, 8, 5])
        for step in STEPS:
            with self.subTest(step=step["id"]):
                for field in ("title", "slides", "learn", "example", "output",
                              "challenge", "starter", "solution", "check"):
                    self.assertTrue(step[field], field)

    def test_examples_match_expected_output(self):
        for step in STEPS:
            with self.subTest(step=step["id"], title=step["title"]):
                ast.parse(step["example"])
                output = io.StringIO()
                with contextlib.redirect_stdout(output):
                    exec(compile(step["example"], "<lesson>", "exec"), {"__name__": "__main__"})
                self.assertEqual(output.getvalue().strip(), step["output"].strip())

    def test_reference_answers_pass_checks(self):
        for step in STEPS:
            with self.subTest(step=step["id"], title=step["title"]):
                ast.parse(step["starter"])
                ast.parse(step["solution"])
                ast.parse(step["check"])
                namespace = {"__name__": "__main__"}
                output = io.StringIO()
                with contextlib.redirect_stdout(output):
                    exec(compile(step["solution"], "<solution>", "exec"), namespace)
                namespace["__output__"] = output.getvalue()
                exec(compile(step["check"], "<check>", "exec"), namespace)


if __name__ == "__main__":
    unittest.main()
