# Machine Learning Fundamentals — Lesson Notes

15 concise, Python-first lessons adapted from six lecture decks.

## 01. AI vs ML vs Deep Learning
**Source:** 1.pptx · slides 5–6, 17–21. **Time:** ~5 min.

AI is the broad field; ML learns patterns from data; deep learning is ML with multilayer neural networks.

### Core concepts
- A rule-based program follows rules that a developer writes.
- An ML model estimates a rule or parameters from examples.
- Deep learning is not required for every AI problem; start with a simple baseline.

**For AI engineers:** Before choosing a neural network, define the input, output, success metric, and a simple baseline.

### Python example

```python
examples = [(1, 0), (2, 0), (4, 1), (5, 1)]
negative_max = max(x for x, label in examples if label == 0)
positive_min = min(x for x, label in examples if label == 1)
threshold = (negative_max + positive_min) / 2

def predict(x):
    return int(x >= threshold)

print(f"Learned threshold: {threshold:.1f}")
print("Prediction for 3.5:", predict(3.5))
```

**Expected output**

```text
Learned threshold: 3.0
Prediction for 3.5: 1
```

**Try it:** Change the input from 3.5 to 2.5. Predict the output before running the code.

**Hint:** A value below the threshold belongs to class 0.

**Check:** What makes a model machine learning? → It estimates behavior from examples

---

## 02. Learning Types & the Training Loop
**Source:** 1.pptx · slides 17–23. **Time:** ~7 min.

Understand supervised, unsupervised, and reinforcement learning—then fit your first tiny regression model.

### Core concepts
- Supervised: examples have targets; used for regression or classification.
- Unsupervised: discover structure without target labels.
- Reinforcement: an agent learns from rewards after actions.

**For AI engineers:** A practical workflow is data → split → train → evaluate → improve; do not judge a model only on training data.

### Python example

```python
x = [1, 2, 3, 4]
y = [3, 5, 7, 9]
x_mean = sum(x) / len(x)
y_mean = sum(y) / len(y)
slope = sum((a-x_mean)*(b-y_mean) for a, b in zip(x, y))         / sum((a-x_mean)**2 for a in x)
intercept = y_mean - slope * x_mean

print(f"y = {slope:.1f}x + {intercept:.1f}")
print("Prediction at x=6:", slope*6 + intercept)
```

**Expected output**

```text
y = 2.0x + 1.0
Prediction at x=6: 13.0
```

**Try it:** Predict y for x=10. What risk is involved in extrapolating beyond the training range?

**Hint:** Use slope*10 + intercept; a trend outside observed data is not automatically reliable.

**Check:** Which setting uses input/target pairs? → Supervised learning

---

## 03. Rules, Facts & Forward Chaining
**Source:** 2.pptx · slides 9–12, 19–22, 28–29. **Time:** ~7 min.

Represent knowledge explicitly and infer new facts from rules.

### Core concepts
- Propositional rules use implication: P → Q.
- Forward chaining starts from facts and applies rules until no new facts appear.
- Deductive results depend on the truth and completeness of your rules.

**For AI engineers:** Rule engines are useful for validation and guardrails; use statistical models when rules cannot capture uncertainty.

### Python example

```python
facts = {"high_temperature", "cough"}
rules = [
    ({"high_temperature", "cough"}, "possible_flu"),
    ({"possible_flu"}, "suggest_medical_review"),
]

changed = True
while changed:
    changed = False
    for conditions, conclusion in rules:
        if conditions <= facts and conclusion not in facts:
            facts.add(conclusion)
            changed = True

print("possible_flu" in facts)
print("suggest_medical_review" in facts)
```

**Expected output**

```text
True
True
```

**Try it:** Add the fact `difficulty_breathing` and a rule that infers `urgent_review` from it.

**Hint:** Insert an extra rule in the list and an extra fact in the set.

**Check:** What does forward chaining start with? → Known facts

---

## 04. Semantic Networks & Graph Reasoning
**Source:** 2.pptx · slides 12–17. **Time:** ~6 min.

A knowledge graph stores entities as nodes and relationships as edges.

### Core concepts
- `is-a` links form a simple taxonomy such as Cat → Mammal → Animal.
- An instance may inherit information through successive relationships.
- Ontologies add formal constraints; a Python dictionary is a useful small prototype.

**For AI engineers:** Graph models appear in entity linking, search, recommendation, and retrieval systems.

### Python example

```python
parents = {"Cat": "Mammal", "Mammal": "Animal"}
instances = {"Jerry": "Cat"}

def is_a(entity, target):
    current = instances.get(entity, entity)
    while current:
        if current == target:
            return True
        current = parents.get(current)
    return False

print("Jerry is an Animal:", is_a("Jerry", "Animal"))
print("Jerry is a Bird:", is_a("Jerry", "Bird"))
```

**Expected output**

```text
Jerry is an Animal: True
Jerry is a Bird: False
```

**Try it:** Add `Bird → Animal` and the instance `Tweety → Bird`, then query the result.

**Hint:** Extend both dictionaries, then call `is_a('Tweety', 'Animal')`.

**Check:** What is a semantic-network edge? → A relationship between nodes

---

## 05. Bayes' Theorem: Update a Belief
**Source:** 3.pptx · slides 5–9, 17–20. **Time:** ~7 min.

Bayesian inference updates a prior probability when new evidence arrives.

### Core concepts
- Prior: probability before observing evidence.
- Likelihood: probability of evidence under a hypothesis.
- Posterior: updated probability after incorporating evidence.

**For AI engineers:** Base rates matter: a frequent symptom can still have limited diagnostic value when the condition is rare.

### Python example

```python
p_flu = 0.10
p_fever_given_flu = 0.80
p_fever_given_no_flu = 0.20

numerator = p_flu * p_fever_given_flu
p_fever = numerator + (1 - p_flu) * p_fever_given_no_flu
posterior = numerator / p_fever
print(f"P(flu | fever) = {posterior:.3f}")
```

**Expected output**

```text
P(flu | fever) = 0.308
```

**Try it:** Change the prior from 0.10 to 0.01. What happens to the posterior?

**Hint:** Keep the likelihoods fixed and rerun. A lower prior produces a lower posterior.

**Check:** What is the posterior? → An updated probability after evidence

---

## 06. Bayesian Networks & Conditional Independence
**Source:** 3.pptx · slides 9–16. **Time:** ~8 min.

A Bayesian network is a directed acyclic graph (DAG) plus conditional probability distributions.

### Core concepts
- Nodes are random variables, arrows represent dependencies.
- The joint distribution factorizes into local terms for each node and its parents.
- Independence assumptions reduce the number of probabilities you need.

**For AI engineers:** Do not interpret a DAG arrow as proven causation without additional assumptions and evidence.

### Python example

```python
p_flu = 0.10
p_cough_flu, p_fever_flu = 0.75, 0.80
p_cough_no, p_fever_no = 0.20, 0.15

flu_weight = p_flu * p_cough_flu * p_fever_flu
no_flu_weight = (1-p_flu) * p_cough_no * p_fever_no
posterior = flu_weight / (flu_weight + no_flu_weight)

print(f"P(flu | cough, fever) = {posterior:.3f}")
```

**Expected output**

```text
P(flu | cough, fever) = 0.690
```

**Try it:** Explain why multiplying symptom likelihoods is valid only under the stated conditional-independence assumption.

**Hint:** Without independence, you need the joint quantity P(cough, fever | flu), not a simple product.

**Check:** What does a BN need besides its DAG? → Conditional probability distributions

---

## 07. BFS vs DFS in Python
**Source:** 4.pptx · slides 5–9. **Time:** ~7 min.

Both traverse graphs, but their exploration order changes the path you find.

### Core concepts
- BFS uses a queue and finds shortest paths in unweighted graphs.
- DFS follows a branch deeply (stack/recursion), not necessarily finding the shortest route.
- Visited-state handling prevents cycles and repeated work.

**For AI engineers:** Use BFS for minimum-hop paths; use DFS for traversal, backtracking, and connectivity checks.

### Python example

```python
from collections import deque

graph = {
    "A": ["B", "C"], "B": ["D"], "D": ["E"],
    "E": ["G"], "C": ["G"], "G": []
}

def bfs(start, goal):
    queue = deque([(start, [start])])
    seen = {start}
    while queue:
        node, path = queue.popleft()
        if node == goal:
            return path
        for nxt in graph[node]:
            if nxt not in seen:
                seen.add(nxt)
                queue.append((nxt, path + [nxt]))

def dfs(node, goal, seen=None):
    seen = set() if seen is None else seen
    seen.add(node)
    if node == goal:
        return [node]
    for nxt in graph[node]:
        if nxt not in seen:
            tail = dfs(nxt, goal, seen)
            if tail:
                return [node] + tail

print("BFS:", bfs("A", "G"))
print("DFS:", dfs("A", "G"))
```

**Expected output**

```text
BFS: ['A', 'C', 'G']
DFS: ['A', 'B', 'D', 'E', 'G']
```

**Try it:** Reverse the neighbors of A from `['B','C']` to `['C','B']`. How does DFS change?

**Hint:** DFS prioritizes the first neighbor. BFS still finds a minimum-hop route.

**Check:** When does BFS guarantee a shortest path? → When every edge has equal cost

---

## 08. A* Search & Heuristic Design
**Source:** 4.pptx · slides 10–15. **Time:** ~8 min.

A* balances the cost already paid with an estimate of remaining cost.

### Core concepts
- Priority f(n) = g(n) + h(n).
- g is actual cost so far; h estimates cost to the goal.
- An admissible heuristic never overestimates; a consistent heuristic supports efficient graph search.

**For AI engineers:** This is useful in path planning and scheduling when the state space is too large for blind search.

### Python example

```python
from heapq import heappush, heappop

edges = {"A": [("B",1),("C",4)],
         "B": [("C",2),("D",5)],
         "C": [("D",1)], "D": []}
h = {"A":3, "B":2, "C":1, "D":0}

def astar(start, goal):
    queue = [(h[start], 0, start, [start])]
    best = {start: 0}
    while queue:
        _, cost, node, path = heappop(queue)
        if cost > best[node]:
            continue
        if node == goal:
            return cost, path
        for nxt, weight in edges[node]:
            new_cost = cost + weight
            if new_cost < best.get(nxt, float("inf")):
                best[nxt] = new_cost
                heappush(queue, (new_cost+h[nxt], new_cost, nxt, path+[nxt]))

print(astar("A", "D"))
```

**Expected output**

```text
(4, ['A', 'B', 'C', 'D'])
```

**Try it:** Set all heuristic values to 0. Which classic shortest-path algorithm does A* become?

**Hint:** With h=0, nodes are prioritized by accumulated cost g: Dijkstra/UCS.

**Check:** What is f(n) in A*? → g(n) + h(n)

---

## 09. Gradient Descent: Train Model Parameters
**Source:** 4.pptx · slides 18–20, 29–30. **Time:** ~8 min.

Optimization is at the core of training ML models: minimize a loss by updating parameters.

### Core concepts
- Mean squared error measures average squared prediction error.
- Gradient descent changes parameters against the loss gradient.
- Learning rate controls step size; too large can diverge, too small can be slow.

**For AI engineers:** Know the loop behind PyTorch/optimizer.step(), even when a library handles differentiation.

### Python example

```python
x = [0, 1, 2, 3]
y = [1, 3, 5, 7]
w, b = 0.0, 0.0
lr = 0.05

for epoch in range(600):
    predictions = [w*xi + b for xi in x]
    errors = [pred - target for pred, target in zip(predictions, y)]
    dw = 2 * sum(err*xi for err, xi in zip(errors, x)) / len(x)
    db = 2 * sum(errors) / len(x)
    w -= lr * dw
    b -= lr * db

print(f"w={w:.3f}, b={b:.3f}")
```

**Expected output**

```text
w=2.000, b=1.000
```

**Try it:** Try `lr=1.0` and observe what happens. Then return to `0.05`.

**Hint:** A very large learning rate may overshoot and cause instability or divergence.

**Check:** What does gradient descent minimize? → A loss function

---

## 10. Minimax: Decisions Against an Opponent
**Source:** 5.pptx · slides 5–15. **Time:** ~7 min.

Minimax selects moves assuming an adversary will choose the response worst for you.

### Core concepts
- MAX chooses the highest value; MIN chooses the lowest.
- Terminal values come from game outcomes or evaluation functions.
- The full search tree grows exponentially with depth.

**For AI engineers:** Relevant for game agents and competitive planning; distinguish it from single-agent optimization.

### Python example

```python
tree = [[3, 5], [2, 9], [0, 1]]

def minimax(node, maximizing):
    if isinstance(node, int):
        return node
    values = [minimax(child, not maximizing) for child in node]
    return max(values) if maximizing else min(values)

print("Optimal guaranteed value:", minimax(tree, True))
```

**Expected output**

```text
Optimal guaranteed value: 3
```

**Try it:** Change the first branch from `[3,5]` to `[1,5]`. Which branch now looks best to MAX?

**Hint:** MAX compares the minimum available from each branch: 1, 2, and 0.

**Check:** At a MIN node, which value is selected? → Smallest child value

---

## 11. Alpha-Beta Pruning: Same Result, Less Search
**Source:** 5.pptx · slides 16–24. **Time:** ~9 min.

Alpha-beta eliminates branches that cannot change the final minimax decision.

### Core concepts
- Alpha is MAX's best guaranteed score so far.
- Beta is MIN's best guaranteed score so far.
- Once beta ≤ alpha, remaining siblings may be skipped without changing the result.

**For AI engineers:** Move ordering can dramatically reduce work; pruning changes efficiency, not the optimal minimax value.

### Python example

```python
tree = [[[3,5],[6,9]], [[1,2],[0,7]]]

def search(node, maximize, alpha=float("-inf"), beta=float("inf"), counts=None):
    if counts is None:
        counts = {"leaves": 0}
    if isinstance(node, int):
        counts["leaves"] += 1
        return node
    if maximize:
        value = float("-inf")
        for child in node:
            value = max(value, search(child, False, alpha, beta, counts))
            alpha = max(alpha, value)
            if beta <= alpha:
                break
    else:
        value = float("inf")
        for child in node:
            value = min(value, search(child, True, alpha, beta, counts))
            beta = min(beta, value)
            if beta <= alpha:
                break
    return value

counts = {"leaves": 0}
print("Value:", search(tree, True, counts=counts))
print("Evaluated leaves:", counts["leaves"], "of 8")
```

**Expected output**

```text
Value: 5
Evaluated leaves: 5 of 8
```

**Try it:** Reverse the order of the two large branches. Does the answer change? What happens to pruning?

**Hint:** The value stays 5; leaf visits may change because move ordering affects pruning.

**Check:** Alpha-beta pruning changes which property? → Number of branches evaluated

---

## 12. Monte Carlo Tree Search: Rollout Intuition
**Source:** 5.pptx · slides 25–27. **Time:** ~6 min.

MCTS evaluates actions by running simulated games rather than expanding every possible game state.

### Core concepts
- Full MCTS typically includes selection, expansion, simulation, and backpropagation.
- A rollout samples an outcome from a simulated trajectory.
- More samples reduce estimation noise but cost computation.

**For AI engineers:** This small Python demo implements rollout estimation only—not full tree search or UCT.

### Python example

```python
import random
rng = random.Random(42)
win_chance = {"safe_move": 0.62, "risky_move": 0.45}

for action, probability in win_chance.items():
    wins = sum(rng.random() < probability for _ in range(1000))
    print(f"{action}: {wins/1000:.3f}")
```

**Expected output**

```text
safe_move: 0.600
risky_move: 0.441
```

**Try it:** Reduce the number of rollouts to 10. Why might the ranking become less reliable?

**Hint:** Fewer random samples increase the variance of the estimated win rates.

**Check:** Is the rollout example full MCTS? → No, it demonstrates one component

---

## 13. Cleaning Missing Values & Outliers
**Source:** 6.pptx · slides 5–10, 21–24. **Time:** ~7 min.

Real data is messy. Learn to inspect missingness and flag unusual observations before training.

### Core concepts
- Use median imputation for suitable numeric variables as a baseline.
- The IQR rule flags candidate outliers, not automatically erroneous records.
- Inspect distributions and domain context before deleting records.

**For AI engineers:** Never estimate fill values, caps, or thresholds from your held-out test set.

### Python example

```python
import pandas as pd

df = pd.DataFrame({
    "age": [22, 28, None, 35, 42, 31, 29, 38, 27],
    "income": [38, 42, 40, 45, 48, 39, 41, 46, 450]
})
print("Missing age:", df["age"].isna().sum())
df["age"] = df["age"].fillna(df["age"].median())
q1, q3 = df["income"].quantile([0.25, 0.75])
upper = q3 + 1.5 * (q3-q1)
df["income_outlier"] = df["income"] > upper
print("Flagged incomes:", int(df["income_outlier"].sum()))
```

**Expected output**

```text
Missing age: 1
Flagged incomes: 1
```

**Try it:** What would go wrong if you used the test-set median to fill training records?

**Hint:** That leaks information across the evaluation boundary. Fit imputation on training data only.

**Check:** Should every IQR-flagged value be deleted? → No, investigate first

---

## 14. Scaling, Encoding & Leakage Prevention
**Source:** 6.pptx · slides 11–15, 17–18, 24. **Time:** ~8 min.

Preprocessing must be fitted on training data, then applied unchanged to validation/test data.

### Core concepts
- Standardization: (x − train mean) / train standard deviation.
- Categorical variables need an appropriate encoding.
- A scikit-learn Pipeline prevents accidental refitting on the test split.

**For AI engineers:** Scaling matters for KNN/SVM/gradient-based methods. Tree models are generally less sensitive to monotonic scaling.

### Python example

```python
import numpy as np
from sklearn.pipeline import make_pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler

train = np.array([[20.], [30.], [np.nan], [40.]])
test = np.array([[100.]])
preprocess = make_pipeline(SimpleImputer(strategy="median"), StandardScaler())
train_scaled = preprocess.fit_transform(train)
test_scaled = preprocess.transform(test)

print("Train mean after scaling:", round(train_scaled.mean(), 3))
print("Test value:", round(test_scaled[0,0], 3))
```

**Expected output**

```text
Train mean after scaling: 0.0
Test value: 9.899
```

**Try it:** Why is the transformed test value allowed to be outside [-1,1]?

**Hint:** StandardScaler is not MinMaxScaler; it centers and divides by standard deviation, without clipping.

**Check:** Which operation belongs on the held-out test set? → transform() only

---

## 15. End-to-End ML Pipeline
**Source:** 6.pptx · slides 15, 17–24. **Time:** ~10 min.

Combine splitting, imputation, one-hot encoding, scaling, training, and evaluation in one reproducible workflow.

### Core concepts
- Use train/test split before fitting feature transforms.
- ColumnTransformer handles numeric and categorical features separately.
- Evaluate once on unseen data; keep feature construction consistent at inference.

**For AI engineers:** This is the core habit of an AI engineer: reproducible preprocessing plus a baseline model and a measurable metric.

### Python example

```python
import random
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

rng = random.Random(12)
rows = []
for _ in range(120):
    sessions = rng.randint(0, 12)
    spend = rng.randint(10, 100)
    plan = rng.choice(["basic", "pro"])
    score = sessions + (plan == "pro") * 2 + spend / 30
    renewed = int(score + rng.uniform(-2, 2) > 8)
    rows.append((sessions, spend, plan, renewed))
df = pd.DataFrame(rows, columns=["sessions", "spend", "plan", "renewed"])
X, y = df.drop(columns="renewed"), df["renewed"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, stratify=y, random_state=42
)
num = Pipeline([("impute", SimpleImputer(strategy="median")),
                ("scale", StandardScaler())])
cat = OneHotEncoder(handle_unknown="ignore")
prep = ColumnTransformer([("num", num, ["sessions", "spend"]),
                          ("cat", cat, ["plan"])])
model = Pipeline([("prep", prep),
                  ("clf", LogisticRegression(max_iter=1000))])
model.fit(X_train, y_train)
pred = model.predict(X_test)
print("Train:", len(X_train), "Test:", len(X_test))
print("Held-out accuracy:", round(accuracy_score(y_test, pred), 3))
```

**Expected output**

```text
Train: 90 Test: 30
Held-out accuracy: 0.9
```

**Try it:** Add `df['sessions_per_spend'] = df['sessions'] / df['spend']` and include it in numeric features. Did test accuracy improve?

**Hint:** Create new features before splitting only if they use row-local information. Add the column to the numeric selector, then compare honestly.

**Check:** Why is preprocessing inside Pipeline useful? → It ensures train-fitted transforms apply consistently

---