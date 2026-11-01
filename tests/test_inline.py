"""Verify that each taught concept has a matching runnable or terminal activity."""
import ast
import contextlib
import io
import json
import pathlib
import re
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]

def parse_js_json(filename, prefix):
    raw = (ROOT / 'codelab' / filename).read_text(encoding='utf-8')
    return json.loads(raw.split(prefix, 1)[1].strip().removesuffix(';'))

STEPS = parse_js_json('steps.js', 'window.CODELAB_STEPS=')
EXTRAS = parse_js_json('activities.js', 'window.CODELAB_ACTIVITIES=')

class TestInlineActivities(unittest.TestCase):
    def test_coverage(self):
        self.assertEqual({int(key) for key in EXTRAS}, set(range(1,19)))
        self.assertEqual(len(STEPS),18)
        for step in STEPS:
            self.assertTrue(EXTRAS[str(step["id"])])
        self.assertEqual(
            [a['kind'] for a in EXTRAS['1']],
            ['terminal', 'python', 'terminal'])

    def test_samples_and_reference_solutions(self):
        count = 0
        for step in STEPS:
            combined = list(EXTRAS[str(step['id'])]) + [dict(step,kind='python')]
            for activity in combined:
                with self.subTest(step=step['id'], title=activity.get('title')):
                    self.assertTrue(activity['challenge'])
                    if activity['kind'] == 'terminal':
                        self.assertTrue(activity['example'])
                        self.assertTrue(activity['output'])
                        continue
                    count += 1
                    code = activity['example']
                    solution = activity['solution']
                    checks = activity['check']
                    ast.parse(code)
                    ast.parse(solution)
                    ast.parse(checks)
                    output = io.StringIO()
                    with contextlib.redirect_stdout(output):
                        exec(compile(code,'<example>','exec'), {'__name__':'__main__'})
                    self.assertEqual(output.getvalue().strip(),activity['output'].strip())

                    values = {'__name__':'__main__'}
                    out = io.StringIO()
                    with contextlib.redirect_stdout(out):
                        exec(compile(solution,'<solution>','exec'),values)
                    values['__output__'] = out.getvalue()
                    exec(compile(checks,'<checks>','exec'),values)
        self.assertGreaterEqual(count, 40)

    def test_html_wiring(self):
        html = (ROOT / 'codelab' / 'index.html').read_text()
        for name in ('steps.js','activities.js','app.js'):
            self.assertIn(name,html)
            self.assertTrue((ROOT/'codelab'/name).exists())
        for selector in ('activityList','runtimeText','completeButton','stepNav','themeButton'):
            self.assertIn('id="'+selector+'"', html)

if __name__ == '__main__':
    unittest.main()
