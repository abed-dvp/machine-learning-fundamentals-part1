window.MODULES = [
  {
    "title": "AI & ML Essentials",
    "file": "1.pptx",
    "slides": 30,
    "tag": "Foundations"
  },
  {
    "title": "Knowledge Representation",
    "file": "2.pptx",
    "slides": 36,
    "tag": "Reasoning"
  },
  {
    "title": "Bayesian Networks",
    "file": "3.pptx",
    "slides": 34,
    "tag": "Probability"
  },
  {
    "title": "Search & Optimization",
    "file": "4.pptx",
    "slides": 34,
    "tag": "Algorithms"
  },
  {
    "title": "Adversarial Search",
    "file": "5.pptx",
    "slides": 30,
    "tag": "Planning"
  },
  {
    "title": "Data & Feature Engineering",
    "file": "6.pptx",
    "slides": 27,
    "tag": "Applied ML"
  }
];
window.LESSONS = [
  {
    "unit": 1,
    "title": "AI vs ML vs Deep Learning",
    "slides": "1.pptx · slides 5–6, 17–21",
    "minutes": 5,
    "summary": "AI is the broad field; ML learns patterns from data; deep learning is ML with multilayer neural networks.",
    "ideas": [
      "A rule-based program follows rules that a developer writes.",
      "An ML model estimates a rule or parameters from examples.",
      "Deep learning is not required for every AI problem; start with a simple baseline."
    ],
    "engineering": "Before choosing a neural network, define the input, output, success metric, and a simple baseline.",
    "walkthrough": [
      "`examples` contains an input and its known label.",
      "The threshold is learned from the boundary between the two classes.",
      "This is a deliberately simple illustrative learner, not a general classifier."
    ],
    "code": "examples = [(1, 0), (2, 0), (4, 1), (5, 1)]\nnegative_max = max(x for x, label in examples if label == 0)\npositive_min = min(x for x, label in examples if label == 1)\nthreshold = (negative_max + positive_min) / 2\n\ndef predict(x):\n    return int(x >= threshold)\n\nprint(f\"Learned threshold: {threshold:.1f}\")\nprint(\"Prediction for 3.5:\", predict(3.5))",
    "expected": "Learned threshold: 3.0\nPrediction for 3.5: 1",
    "challenge": "Change the input from 3.5 to 2.5. Predict the output before running the code.",
    "hint": "A value below the threshold belongs to class 0.",
    "solution": "# Add after the original snippet:\nprint(\"Prediction for 2.5:\", predict(2.5))  # 0",
    "quiz": [
      "What makes a model machine learning?",
      "It estimates behavior from examples",
      "It must use a neural network",
      "It contains any if/else statement",
      0,
      "ML learns parameters or patterns from data; neural networks are one family of models."
    ]
  },
  {
    "unit": 1,
    "title": "Learning Types & the Training Loop",
    "slides": "1.pptx · slides 17–23",
    "minutes": 7,
    "summary": "Understand supervised, unsupervised, and reinforcement learning—then fit your first tiny regression model.",
    "ideas": [
      "Supervised: examples have targets; used for regression or classification.",
      "Unsupervised: discover structure without target labels.",
      "Reinforcement: an agent learns from rewards after actions."
    ],
    "engineering": "A practical workflow is data → split → train → evaluate → improve; do not judge a model only on training data.",
    "walkthrough": [
      "The regression slope is covariance divided by variance.",
      "The intercept is the target mean minus slope × input mean.",
      "On this tiny perfect dataset, the fitted line is y = 2x + 1."
    ],
    "code": "x = [1, 2, 3, 4]\ny = [3, 5, 7, 9]\nx_mean = sum(x) / len(x)\ny_mean = sum(y) / len(y)\nslope = sum((a-x_mean)*(b-y_mean) for a, b in zip(x, y))         / sum((a-x_mean)**2 for a in x)\nintercept = y_mean - slope * x_mean\n\nprint(f\"y = {slope:.1f}x + {intercept:.1f}\")\nprint(\"Prediction at x=6:\", slope*6 + intercept)",
    "expected": "y = 2.0x + 1.0\nPrediction at x=6: 13.0",
    "challenge": "Predict y for x=10. What risk is involved in extrapolating beyond the training range?",
    "hint": "Use slope*10 + intercept; a trend outside observed data is not automatically reliable.",
    "solution": "print(\"Prediction at x=10:\", slope*10 + intercept)  # 21.0",
    "quiz": [
      "Which setting uses input/target pairs?",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning",
      1,
      "Supervised learning estimates a mapping from features to known targets."
    ]
  },
  {
    "unit": 2,
    "title": "Rules, Facts & Forward Chaining",
    "slides": "2.pptx · slides 9–12, 19–22, 28–29",
    "minutes": 7,
    "summary": "Represent knowledge explicitly and infer new facts from rules.",
    "ideas": [
      "Propositional rules use implication: P → Q.",
      "Forward chaining starts from facts and applies rules until no new facts appear.",
      "Deductive results depend on the truth and completeness of your rules."
    ],
    "engineering": "Rule engines are useful for validation and guardrails; use statistical models when rules cannot capture uncertainty.",
    "walkthrough": [
      "A rule is `(required_facts, inferred_fact)`.",
      "Repeated passes apply rules that become active after earlier inferences.",
      "This is a toy rule system; it must never be treated as a medical diagnosis."
    ],
    "code": "facts = {\"high_temperature\", \"cough\"}\nrules = [\n    ({\"high_temperature\", \"cough\"}, \"possible_flu\"),\n    ({\"possible_flu\"}, \"suggest_medical_review\"),\n]\n\nchanged = True\nwhile changed:\n    changed = False\n    for conditions, conclusion in rules:\n        if conditions <= facts and conclusion not in facts:\n            facts.add(conclusion)\n            changed = True\n\nprint(\"possible_flu\" in facts)\nprint(\"suggest_medical_review\" in facts)",
    "expected": "True\nTrue",
    "challenge": "Add the fact `difficulty_breathing` and a rule that infers `urgent_review` from it.",
    "hint": "Insert an extra rule in the list and an extra fact in the set.",
    "solution": "facts.add(\"difficulty_breathing\")\nif \"difficulty_breathing\" in facts:\n    facts.add(\"urgent_review\")\nprint(\"urgent_review\" in facts)",
    "quiz": [
      "What does forward chaining start with?",
      "A desired goal",
      "Known facts",
      "A gradient",
      1,
      "Forward chaining is data-driven: infer conclusions from existing facts."
    ]
  },
  {
    "unit": 2,
    "title": "Semantic Networks & Graph Reasoning",
    "slides": "2.pptx · slides 12–17",
    "minutes": 6,
    "summary": "A knowledge graph stores entities as nodes and relationships as edges.",
    "ideas": [
      "`is-a` links form a simple taxonomy such as Cat → Mammal → Animal.",
      "An instance may inherit information through successive relationships.",
      "Ontologies add formal constraints; a Python dictionary is a useful small prototype."
    ],
    "engineering": "Graph models appear in entity linking, search, recommendation, and retrieval systems.",
    "walkthrough": [
      "The `parents` dictionary represents an `is-a` graph.",
      "The loop traverses parent links rather than memorizing every ancestor.",
      "For large graphs use a graph database or indexed traversal."
    ],
    "code": "parents = {\"Cat\": \"Mammal\", \"Mammal\": \"Animal\"}\ninstances = {\"Jerry\": \"Cat\"}\n\ndef is_a(entity, target):\n    current = instances.get(entity, entity)\n    while current:\n        if current == target:\n            return True\n        current = parents.get(current)\n    return False\n\nprint(\"Jerry is an Animal:\", is_a(\"Jerry\", \"Animal\"))\nprint(\"Jerry is a Bird:\", is_a(\"Jerry\", \"Bird\"))",
    "expected": "Jerry is an Animal: True\nJerry is a Bird: False",
    "challenge": "Add `Bird → Animal` and the instance `Tweety → Bird`, then query the result.",
    "hint": "Extend both dictionaries, then call `is_a('Tweety', 'Animal')`.",
    "solution": "parents[\"Bird\"] = \"Animal\"\ninstances[\"Tweety\"] = \"Bird\"\nprint(is_a(\"Tweety\", \"Animal\"))  # True",
    "quiz": [
      "What is a semantic-network edge?",
      "A relationship between nodes",
      "A model loss value",
      "A neural network weight only",
      0,
      "Edges encode relations such as is-a, part-of, or owned-by."
    ]
  },
  {
    "unit": 3,
    "title": "Bayes' Theorem: Update a Belief",
    "slides": "3.pptx · slides 5–9, 17–20",
    "minutes": 7,
    "summary": "Bayesian inference updates a prior probability when new evidence arrives.",
    "ideas": [
      "Prior: probability before observing evidence.",
      "Likelihood: probability of evidence under a hypothesis.",
      "Posterior: updated probability after incorporating evidence."
    ],
    "engineering": "Base rates matter: a frequent symptom can still have limited diagnostic value when the condition is rare.",
    "walkthrough": [
      "The numerator is P(flu) × P(fever | flu).",
      "The denominator adds both ways that fever can occur.",
      "All numbers here are invented for learning, not clinical estimates."
    ],
    "code": "p_flu = 0.10\np_fever_given_flu = 0.80\np_fever_given_no_flu = 0.20\n\nnumerator = p_flu * p_fever_given_flu\np_fever = numerator + (1 - p_flu) * p_fever_given_no_flu\nposterior = numerator / p_fever\nprint(f\"P(flu | fever) = {posterior:.3f}\")",
    "expected": "P(flu | fever) = 0.308",
    "challenge": "Change the prior from 0.10 to 0.01. What happens to the posterior?",
    "hint": "Keep the likelihoods fixed and rerun. A lower prior produces a lower posterior.",
    "solution": "p_flu = 0.01\nnumerator = p_flu * p_fever_given_flu\np_fever = numerator + (1 - p_flu) * p_fever_given_no_flu\nprint(round(numerator / p_fever, 3))  # 0.039",
    "quiz": [
      "What is the posterior?",
      "A prediction before evidence",
      "An updated probability after evidence",
      "The size of a dataset",
      1,
      "The posterior combines the prior and likelihood of the observed data."
    ]
  },
  {
    "unit": 3,
    "title": "Bayesian Networks & Conditional Independence",
    "slides": "3.pptx · slides 9–16",
    "minutes": 8,
    "summary": "A Bayesian network is a directed acyclic graph (DAG) plus conditional probability distributions.",
    "ideas": [
      "Nodes are random variables, arrows represent dependencies.",
      "The joint distribution factorizes into local terms for each node and its parents.",
      "Independence assumptions reduce the number of probabilities you need."
    ],
    "engineering": "Do not interpret a DAG arrow as proven causation without additional assumptions and evidence.",
    "walkthrough": [
      "For the toy graph Flu → Cough and Flu → Fever, assume symptoms independent *given* Flu.",
      "Compute the likelihood of both symptoms under flu and no-flu cases.",
      "Normalize the two weighted probabilities to get a posterior."
    ],
    "code": "p_flu = 0.10\np_cough_flu, p_fever_flu = 0.75, 0.80\np_cough_no, p_fever_no = 0.20, 0.15\n\nflu_weight = p_flu * p_cough_flu * p_fever_flu\nno_flu_weight = (1-p_flu) * p_cough_no * p_fever_no\nposterior = flu_weight / (flu_weight + no_flu_weight)\n\nprint(f\"P(flu | cough, fever) = {posterior:.3f}\")",
    "expected": "P(flu | cough, fever) = 0.690",
    "challenge": "Explain why multiplying symptom likelihoods is valid only under the stated conditional-independence assumption.",
    "hint": "Without independence, you need the joint quantity P(cough, fever | flu), not a simple product.",
    "solution": "# General form when likelihoods are not conditionally independent:\n# P(cough, fever | flu) must be estimated jointly.\nprint(\"Assumption checked: symptoms independent given Flu\")",
    "quiz": [
      "What does a BN need besides its DAG?",
      "Conditional probability distributions",
      "Just a visualization",
      "Only a training label",
      0,
      "The graph specifies structure; conditional distributions specify numerical probabilities."
    ]
  },
  {
    "unit": 4,
    "title": "BFS vs DFS in Python",
    "slides": "4.pptx · slides 5–9",
    "minutes": 7,
    "summary": "Both traverse graphs, but their exploration order changes the path you find.",
    "ideas": [
      "BFS uses a queue and finds shortest paths in unweighted graphs.",
      "DFS follows a branch deeply (stack/recursion), not necessarily finding the shortest route.",
      "Visited-state handling prevents cycles and repeated work."
    ],
    "engineering": "Use BFS for minimum-hop paths; use DFS for traversal, backtracking, and connectivity checks.",
    "walkthrough": [
      "The queue makes BFS examine shallower paths first.",
      "The recursive DFS tries the first branch before alternatives.",
      "Here DFS returns a longer first-found path than BFS."
    ],
    "code": "from collections import deque\n\ngraph = {\n    \"A\": [\"B\", \"C\"], \"B\": [\"D\"], \"D\": [\"E\"],\n    \"E\": [\"G\"], \"C\": [\"G\"], \"G\": []\n}\n\ndef bfs(start, goal):\n    queue = deque([(start, [start])])\n    seen = {start}\n    while queue:\n        node, path = queue.popleft()\n        if node == goal:\n            return path\n        for nxt in graph[node]:\n            if nxt not in seen:\n                seen.add(nxt)\n                queue.append((nxt, path + [nxt]))\n\ndef dfs(node, goal, seen=None):\n    seen = set() if seen is None else seen\n    seen.add(node)\n    if node == goal:\n        return [node]\n    for nxt in graph[node]:\n        if nxt not in seen:\n            tail = dfs(nxt, goal, seen)\n            if tail:\n                return [node] + tail\n\nprint(\"BFS:\", bfs(\"A\", \"G\"))\nprint(\"DFS:\", dfs(\"A\", \"G\"))",
    "expected": "BFS: ['A', 'C', 'G']\nDFS: ['A', 'B', 'D', 'E', 'G']",
    "challenge": "Reverse the neighbors of A from `['B','C']` to `['C','B']`. How does DFS change?",
    "hint": "DFS prioritizes the first neighbor. BFS still finds a minimum-hop route.",
    "solution": "graph[\"A\"] = [\"C\", \"B\"]\nprint(dfs(\"A\", \"G\"))  # ['A', 'C', 'G']",
    "quiz": [
      "When does BFS guarantee a shortest path?",
      "When every edge has equal cost",
      "When edge weights are negative",
      "When the graph is infinite",
      0,
      "On unweighted or equal-cost graphs, BFS minimizes the number of edges."
    ]
  },
  {
    "unit": 4,
    "title": "A* Search & Heuristic Design",
    "slides": "4.pptx · slides 10–15",
    "minutes": 8,
    "summary": "A* balances the cost already paid with an estimate of remaining cost.",
    "ideas": [
      "Priority f(n) = g(n) + h(n).",
      "g is actual cost so far; h estimates cost to the goal.",
      "An admissible heuristic never overestimates; a consistent heuristic supports efficient graph search."
    ],
    "engineering": "This is useful in path planning and scheduling when the state space is too large for blind search.",
    "walkthrough": [
      "`heapq` is the priority queue ordered by f.",
      "`best` tracks the cheapest known cost to each state.",
      "The toy graph has non-negative weights and an admissible heuristic."
    ],
    "code": "from heapq import heappush, heappop\n\nedges = {\"A\": [(\"B\",1),(\"C\",4)],\n         \"B\": [(\"C\",2),(\"D\",5)],\n         \"C\": [(\"D\",1)], \"D\": []}\nh = {\"A\":3, \"B\":2, \"C\":1, \"D\":0}\n\ndef astar(start, goal):\n    queue = [(h[start], 0, start, [start])]\n    best = {start: 0}\n    while queue:\n        _, cost, node, path = heappop(queue)\n        if cost > best[node]:\n            continue\n        if node == goal:\n            return cost, path\n        for nxt, weight in edges[node]:\n            new_cost = cost + weight\n            if new_cost < best.get(nxt, float(\"inf\")):\n                best[nxt] = new_cost\n                heappush(queue, (new_cost+h[nxt], new_cost, nxt, path+[nxt]))\n\nprint(astar(\"A\", \"D\"))",
    "expected": "(4, ['A', 'B', 'C', 'D'])",
    "challenge": "Set all heuristic values to 0. Which classic shortest-path algorithm does A* become?",
    "hint": "With h=0, nodes are prioritized by accumulated cost g: Dijkstra/UCS.",
    "solution": "h = {node: 0 for node in h}\nprint(astar(\"A\", \"D\"))  # same optimal route",
    "quiz": [
      "What is f(n) in A*?",
      "Only h(n)",
      "g(n) + h(n)",
      "g(n) - h(n)",
      1,
      "A* prioritizes the sum of path cost so far and estimated remaining cost."
    ]
  },
  {
    "unit": 4,
    "title": "Gradient Descent: Train Model Parameters",
    "slides": "4.pptx · slides 18–20, 29–30",
    "minutes": 8,
    "summary": "Optimization is at the core of training ML models: minimize a loss by updating parameters.",
    "ideas": [
      "Mean squared error measures average squared prediction error.",
      "Gradient descent changes parameters against the loss gradient.",
      "Learning rate controls step size; too large can diverge, too small can be slow."
    ],
    "engineering": "Know the loop behind PyTorch/optimizer.step(), even when a library handles differentiation.",
    "walkthrough": [
      "The model is ŷ = w·x + b.",
      "Compute derivatives of mean squared error w.r.t. w and b.",
      "Update both parameters repeatedly; this is batch gradient descent."
    ],
    "code": "x = [0, 1, 2, 3]\ny = [1, 3, 5, 7]\nw, b = 0.0, 0.0\nlr = 0.05\n\nfor epoch in range(600):\n    predictions = [w*xi + b for xi in x]\n    errors = [pred - target for pred, target in zip(predictions, y)]\n    dw = 2 * sum(err*xi for err, xi in zip(errors, x)) / len(x)\n    db = 2 * sum(errors) / len(x)\n    w -= lr * dw\n    b -= lr * db\n\nprint(f\"w={w:.3f}, b={b:.3f}\")",
    "expected": "w=2.000, b=1.000",
    "challenge": "Try `lr=1.0` and observe what happens. Then return to `0.05`.",
    "hint": "A very large learning rate may overshoot and cause instability or divergence.",
    "solution": "lr = 0.05  # stable on this specific dataset\nprint(\"Prediction for x=4:\", round(w*4 + b, 2))  # 9.0",
    "quiz": [
      "What does gradient descent minimize?",
      "A loss function",
      "The number of dataset rows",
      "The number of features in all cases",
      0,
      "It uses gradient information to iteratively reduce an objective function."
    ]
  },
  {
    "unit": 5,
    "title": "Minimax: Decisions Against an Opponent",
    "slides": "5.pptx · slides 5–15",
    "minutes": 7,
    "summary": "Minimax selects moves assuming an adversary will choose the response worst for you.",
    "ideas": [
      "MAX chooses the highest value; MIN chooses the lowest.",
      "Terminal values come from game outcomes or evaluation functions.",
      "The full search tree grows exponentially with depth."
    ],
    "engineering": "Relevant for game agents and competitive planning; distinguish it from single-agent optimization.",
    "walkthrough": [
      "Nested Python lists represent a small alternating game tree.",
      "At the root MAX chooses; at each child MIN chooses.",
      "Recursion propagates leaf utilities back toward the root."
    ],
    "code": "tree = [[3, 5], [2, 9], [0, 1]]\n\ndef minimax(node, maximizing):\n    if isinstance(node, int):\n        return node\n    values = [minimax(child, not maximizing) for child in node]\n    return max(values) if maximizing else min(values)\n\nprint(\"Optimal guaranteed value:\", minimax(tree, True))",
    "expected": "Optimal guaranteed value: 3",
    "challenge": "Change the first branch from `[3,5]` to `[1,5]`. Which branch now looks best to MAX?",
    "hint": "MAX compares the minimum available from each branch: 1, 2, and 0.",
    "solution": "tree[0] = [1, 5]\nprint(minimax(tree, True))  # 2",
    "quiz": [
      "At a MIN node, which value is selected?",
      "Largest child value",
      "Smallest child value",
      "Random child value",
      1,
      "The opponent is modeled as minimizing the root player's utility."
    ]
  },
  {
    "unit": 5,
    "title": "Alpha-Beta Pruning: Same Result, Less Search",
    "slides": "5.pptx · slides 16–24",
    "minutes": 9,
    "summary": "Alpha-beta eliminates branches that cannot change the final minimax decision.",
    "ideas": [
      "Alpha is MAX's best guaranteed score so far.",
      "Beta is MIN's best guaranteed score so far.",
      "Once beta ≤ alpha, remaining siblings may be skipped without changing the result."
    ],
    "engineering": "Move ordering can dramatically reduce work; pruning changes efficiency, not the optimal minimax value.",
    "walkthrough": [
      "The first branch establishes alpha = 5.",
      "The second MIN branch finds value 2, so further search there is unnecessary.",
      "Leaf counters make the computational saving visible."
    ],
    "code": "tree = [[[3,5],[6,9]], [[1,2],[0,7]]]\n\ndef search(node, maximize, alpha=float(\"-inf\"), beta=float(\"inf\"), counts=None):\n    if counts is None:\n        counts = {\"leaves\": 0}\n    if isinstance(node, int):\n        counts[\"leaves\"] += 1\n        return node\n    if maximize:\n        value = float(\"-inf\")\n        for child in node:\n            value = max(value, search(child, False, alpha, beta, counts))\n            alpha = max(alpha, value)\n            if beta <= alpha:\n                break\n    else:\n        value = float(\"inf\")\n        for child in node:\n            value = min(value, search(child, True, alpha, beta, counts))\n            beta = min(beta, value)\n            if beta <= alpha:\n                break\n    return value\n\ncounts = {\"leaves\": 0}\nprint(\"Value:\", search(tree, True, counts=counts))\nprint(\"Evaluated leaves:\", counts[\"leaves\"], \"of 8\")",
    "expected": "Value: 5\nEvaluated leaves: 5 of 8",
    "challenge": "Reverse the order of the two large branches. Does the answer change? What happens to pruning?",
    "hint": "The value stays 5; leaf visits may change because move ordering affects pruning.",
    "solution": "reversed_tree = list(reversed(tree))\nc = {\"leaves\": 0}\nprint(search(reversed_tree, True, counts=c), c[\"leaves\"])",
    "quiz": [
      "Alpha-beta pruning changes which property?",
      "Optimal minimax value",
      "Number of branches evaluated",
      "Opponent's rules",
      1,
      "It can skip irrelevant branches but returns the same minimax value."
    ]
  },
  {
    "unit": 5,
    "title": "Monte Carlo Tree Search: Rollout Intuition",
    "slides": "5.pptx · slides 25–27",
    "minutes": 6,
    "summary": "MCTS evaluates actions by running simulated games rather than expanding every possible game state.",
    "ideas": [
      "Full MCTS typically includes selection, expansion, simulation, and backpropagation.",
      "A rollout samples an outcome from a simulated trajectory.",
      "More samples reduce estimation noise but cost computation."
    ],
    "engineering": "This small Python demo implements rollout estimation only—not full tree search or UCT.",
    "walkthrough": [
      "Each action has a toy win chance.",
      "Random rollouts estimate empirical success rates.",
      "The action with higher sampled success is preferred in this toy setting."
    ],
    "code": "import random\nrng = random.Random(42)\nwin_chance = {\"safe_move\": 0.62, \"risky_move\": 0.45}\n\nfor action, probability in win_chance.items():\n    wins = sum(rng.random() < probability for _ in range(1000))\n    print(f\"{action}: {wins/1000:.3f}\")",
    "expected": "safe_move: 0.600\nrisky_move: 0.441",
    "challenge": "Reduce the number of rollouts to 10. Why might the ranking become less reliable?",
    "hint": "Fewer random samples increase the variance of the estimated win rates.",
    "solution": "rng = random.Random(42)\nfor action, p in win_chance.items():\n    print(action, sum(rng.random() < p for _ in range(10)) / 10)",
    "quiz": [
      "Is the rollout example full MCTS?",
      "Yes, it includes the whole tree policy",
      "No, it demonstrates one component",
      "It is the same as gradient descent",
      1,
      "Actual MCTS also maintains and selects nodes in a search tree."
    ]
  },
  {
    "unit": 6,
    "title": "Cleaning Missing Values & Outliers",
    "slides": "6.pptx · slides 5–10, 21–24",
    "minutes": 7,
    "summary": "Real data is messy. Learn to inspect missingness and flag unusual observations before training.",
    "ideas": [
      "Use median imputation for suitable numeric variables as a baseline.",
      "The IQR rule flags candidate outliers, not automatically erroneous records.",
      "Inspect distributions and domain context before deleting records."
    ],
    "engineering": "Never estimate fill values, caps, or thresholds from your held-out test set.",
    "walkthrough": [
      "Pandas counts missing entries and computes a median.",
      "The IQR upper fence is Q3 + 1.5×IQR.",
      "An outlier flag preserves the original value for investigation."
    ],
    "code": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"age\": [22, 28, None, 35, 42, 31, 29, 38, 27],\n    \"income\": [38, 42, 40, 45, 48, 39, 41, 46, 450]\n})\nprint(\"Missing age:\", df[\"age\"].isna().sum())\ndf[\"age\"] = df[\"age\"].fillna(df[\"age\"].median())\nq1, q3 = df[\"income\"].quantile([0.25, 0.75])\nupper = q3 + 1.5 * (q3-q1)\ndf[\"income_outlier\"] = df[\"income\"] > upper\nprint(\"Flagged incomes:\", int(df[\"income_outlier\"].sum()))",
    "expected": "Missing age: 1\nFlagged incomes: 1",
    "challenge": "What would go wrong if you used the test-set median to fill training records?",
    "hint": "That leaks information across the evaluation boundary. Fit imputation on training data only.",
    "solution": "print(\"Imputed ages:\", df[\"age\"].isna().sum())  # 0",
    "quiz": [
      "Should every IQR-flagged value be deleted?",
      "Yes, always",
      "No, investigate first",
      "Only when it is positive",
      1,
      "Rare observations can be legitimate and predictive."
    ]
  },
  {
    "unit": 6,
    "title": "Scaling, Encoding & Leakage Prevention",
    "slides": "6.pptx · slides 11–15, 17–18, 24",
    "minutes": 8,
    "summary": "Preprocessing must be fitted on training data, then applied unchanged to validation/test data.",
    "ideas": [
      "Standardization: (x − train mean) / train standard deviation.",
      "Categorical variables need an appropriate encoding.",
      "A scikit-learn Pipeline prevents accidental refitting on the test split."
    ],
    "engineering": "Scaling matters for KNN/SVM/gradient-based methods. Tree models are generally less sensitive to monotonic scaling.",
    "walkthrough": [
      "The pipeline learns the median and scaling statistics from training rows.",
      "The test row is transformed with those learned values.",
      "Never call `fit_transform` on a test set."
    ],
    "code": "import numpy as np\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.preprocessing import StandardScaler\n\ntrain = np.array([[20.], [30.], [np.nan], [40.]])\ntest = np.array([[100.]])\npreprocess = make_pipeline(SimpleImputer(strategy=\"median\"), StandardScaler())\ntrain_scaled = preprocess.fit_transform(train)\ntest_scaled = preprocess.transform(test)\n\nprint(\"Train mean after scaling:\", round(train_scaled.mean(), 3))\nprint(\"Test value:\", round(test_scaled[0,0], 3))",
    "expected": "Train mean after scaling: 0.0\nTest value: 9.899",
    "challenge": "Why is the transformed test value allowed to be outside [-1,1]?",
    "hint": "StandardScaler is not MinMaxScaler; it centers and divides by standard deviation, without clipping.",
    "solution": "print(\"Training scaled values:\", train_scaled.ravel().round(2).tolist())",
    "quiz": [
      "Which operation belongs on the held-out test set?",
      "fit_transform()",
      "transform() only",
      "fit() again",
      1,
      "Use the transforms learned solely on training data."
    ]
  },
  {
    "unit": 6,
    "title": "End-to-End ML Pipeline",
    "slides": "6.pptx · slides 15, 17–24",
    "minutes": 10,
    "summary": "Combine splitting, imputation, one-hot encoding, scaling, training, and evaluation in one reproducible workflow.",
    "ideas": [
      "Use train/test split before fitting feature transforms.",
      "ColumnTransformer handles numeric and categorical features separately.",
      "Evaluate once on unseen data; keep feature construction consistent at inference."
    ],
    "engineering": "This is the core habit of an AI engineer: reproducible preprocessing plus a baseline model and a measurable metric.",
    "walkthrough": [
      "Generate a synthetic classification dataset with a fixed seed.",
      "Build a preprocessing+logistic regression Pipeline.",
      "Print held-out accuracy; the data is illustrative, not a performance benchmark."
    ],
    "code": "import random\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.preprocessing import OneHotEncoder, StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score\n\nrng = random.Random(12)\nrows = []\nfor _ in range(120):\n    sessions = rng.randint(0, 12)\n    spend = rng.randint(10, 100)\n    plan = rng.choice([\"basic\", \"pro\"])\n    score = sessions + (plan == \"pro\") * 2 + spend / 30\n    renewed = int(score + rng.uniform(-2, 2) > 8)\n    rows.append((sessions, spend, plan, renewed))\ndf = pd.DataFrame(rows, columns=[\"sessions\", \"spend\", \"plan\", \"renewed\"])\nX, y = df.drop(columns=\"renewed\"), df[\"renewed\"]\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.25, stratify=y, random_state=42\n)\nnum = Pipeline([(\"impute\", SimpleImputer(strategy=\"median\")),\n                (\"scale\", StandardScaler())])\ncat = OneHotEncoder(handle_unknown=\"ignore\")\nprep = ColumnTransformer([(\"num\", num, [\"sessions\", \"spend\"]),\n                          (\"cat\", cat, [\"plan\"])])\nmodel = Pipeline([(\"prep\", prep),\n                  (\"clf\", LogisticRegression(max_iter=1000))])\nmodel.fit(X_train, y_train)\npred = model.predict(X_test)\nprint(\"Train:\", len(X_train), \"Test:\", len(X_test))\nprint(\"Held-out accuracy:\", round(accuracy_score(y_test, pred), 3))",
    "expected": "Train: 90 Test: 30\nHeld-out accuracy: 0.9",
    "challenge": "Add `df['sessions_per_spend'] = df['sessions'] / df['spend']` and include it in numeric features. Did test accuracy improve?",
    "hint": "Create new features before splitting only if they use row-local information. Add the column to the numeric selector, then compare honestly.",
    "solution": "df[\"sessions_per_spend\"] = df[\"sessions\"] / df[\"spend\"]\nprint(df[\"sessions_per_spend\"].head(3).round(3).tolist())",
    "quiz": [
      "Why is preprocessing inside Pipeline useful?",
      "It guarantees 100% accuracy",
      "It ensures train-fitted transforms apply consistently",
      "It removes the need for validation",
      1,
      "Pipeline keeps fitting and inference steps consistent and reduces leakage risk."
    ]
  }
];