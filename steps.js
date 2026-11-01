'use strict';
// Adapt the existing 15 AI-engineering lessons to the familiar Python Codelab interface.
// Only coding tasks with objectively verifiable results offer automatic checks.
const CODING_CHECKS = {
  1: 'assert "Prediction for 2.5:" in __output__ and __output__.split("Prediction for 2.5:")[-1].strip().startswith("0"), "Print the prediction for 2.5 (class 0)."',
  2: 'assert "Prediction at x=10:" in __output__ and "21.0" in __output__, "Print the prediction at x=10 (21.0)."',
  3: 'assert "difficulty_breathing" in facts and "urgent_review" in facts, "Add the new fact and infer urgent_review."',
  4: 'assert is_a("Tweety", "Animal"), "Add Tweety as a Bird and Bird as an Animal."',
  5: 'assert abs(p_flu - 0.01) < 0.000001, "Change the prior p_flu to 0.01."',
  7: 'assert graph["A"] == ["C", "B"], "Reverse neighbors of A to C, B."',
  8: 'assert all(value == 0 for value in h.values()), "Set every heuristic value to zero."',
  10: 'assert tree[0] == [1, 5], "Change the first branch to [1, 5]."',
  11: 'assert reversed_tree == list(reversed(tree)), "Create reversed_tree to compare move ordering."',
  15: 'assert "sessions_per_spend" in df.columns, "Create sessions_per_spend."\nassert "sessions_per_spend" in X_train.columns, "Include it before splitting X and y."\nassert "sessions_per_spend" in next(cols for name, _, cols in prep.transformers if name == "num"), "Include the new feature in the numeric transformer."'
};
window.CODELAB_STEPS = window.LESSONS.map(function(lesson, index) {
  const id = index + 1;
  return {
    id: id,
    unit: lesson.unit,
    title: lesson.title,
    time: lesson.minutes + ' min',
    slides: lesson.slides,
    learn: lesson.summary,
    bullets: lesson.ideas,
    walkthrough: lesson.walkthrough,
    example: lesson.code,
    output: lesson.expected,
    challenge: lesson.challenge,
    starter: lesson.code + '\n\n# YOUR TURN: ' + lesson.challenge,
    solution: lesson.solution,
    takeaway: lesson.engineering,
    quiz: lesson.quiz,
    check: CODING_CHECKS[id] || ''
  };
});
