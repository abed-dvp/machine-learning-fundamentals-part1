# Machine Learning Fundamentals · Python-First Codelab

A concise, **hands-on self-study course** distilled from six supplied lecture decks (191 slides). It focuses on the concepts a junior AI/ML engineer must understand and the Python techniques needed to apply them—without reproducing every slide.

**[Open the Codelab](./index.html)** · [Practical review exercises](./PRACTICE.md) · [Local end-to-end pipeline](./labs/final_pipeline.py)

## Scope and learning outcomes

This batch covers introductory AI, knowledge representation, Bayesian reasoning, graph search, optimization, game-tree search, and practical data preparation. Some modules are broader *AI* topics rather than machine-learning algorithms; they remain included because they are in the course materials.

| Source deck | Essential coverage | Python emphasis |
|---|---|---|
| `1.pptx` (30 slides) | AI vs ML vs DL; types of learning; model training | Learn a tiny threshold, fit a simple line |
| `2.pptx` (36) | Logic, inference, semantic networks | Forward chaining, graph traversal |
| `3.pptx` (34) | Priors/posteriors, conditional independence, DAGs | Bayes calculation, network factorization |
| `4.pptx` (34) | BFS, DFS, A*, gradient descent | `deque`, `heapq`, gradient updates |
| `5.pptx` (30) | Minimax, alpha-beta, MCTS basics | Recursion, pruning, random rollouts |
| `6.pptx` (27) | Missing values, scaling, encoding, leakage | `pandas`, scikit-learn `Pipeline` |

There are **15 focused lessons**; most take 5–10 minutes. Each includes three key points, an engineering takeaway, editable Python, one challenge, and one quick knowledge check. Numbered slide references appear at the top of each lesson.

## How to run

### Option A — Browser Codelab

Serve the folder with Python:

```bash
cd machine-learning-fundamentals-codelab
python -m http.server 8000
```

Open **http://localhost:8000**. The lesson text works offline after files are available. **Run Python** lazily downloads Pyodide when you first click it, so the first execution needs an internet connection. `pandas` / `scikit-learn` lessons load extra packages and take longer on first run. The runtime executes on the browser's main thread (no classic Web Workers). This is an educational client-side Python runner, not a secure execution sandbox for untrusted code.

### Option B — Local Python for the final ML pipeline

From this directory:

```bash
python -m venv .venv
```

Activate it:

```powershell
# Windows PowerShell
.venv\Scripts\Activate.ps1
```

```bash
# macOS / Linux
source .venv/bin/activate
```

Install dependencies:

```bash
python -m pip install -r requirements.txt
python labs/final_pipeline.py
```

The script generates **synthetic data** with a fixed seed, splits before fitting transforms, and measures held-out performance. Results depend on package versions but should show a working train/test pipeline.

## Engineering essentials — quick reference

| Technique | What it does | When to use it | Key pitfall |
|---|---|---|---|
| Train/test split | Reserves unseen data for evaluation | Every predictive ML project | Fitting preprocessing on test data |
| `SimpleImputer` | Learns replacement values from training features | Missing numeric/categorical records | Treating missingness as harmless |
| `StandardScaler` | Centers and rescales numeric features | KNN, SVM, gradient-based models | Assuming output lies in [0,1] |
| `OneHotEncoder` | Converts categories into binary indicators | Non-ordinal categorical input | Unknown category crashes without `handle_unknown` |
| `Pipeline` | Keeps fit/transform/predict steps together | Reproducible training and inference | Manual steps drifting between train/test |
| BFS / DFS | Traverses graphs with queue / stack | Pathfinding, state exploration | DFS is not shortest-path by default |
| A* | Prioritizes g(n)+h(n) | Weighted route planning | Overestimating heuristics can lose optimality |
| Gradient descent | Updates weights to reduce loss | Optimizer mechanics | Unstable learning rate |
| Bayesian update | Converts prior + evidence to posterior | Decisions under uncertainty | Ignoring base rates and assumptions |
| Alpha-beta | Skips game-tree branches | Competitive search | Move order changes speed, not result |

## What we deliberately compressed

The course briefly references the timeline of AI, speculative AI capability categories, framework histories, edge AI, ontology formalisms, advanced Bayesian-network extensions, evolutionary optimization, tabu search, and swarm methods. These are worth recognizing, but this batch prioritizes the Python implementations and modeling choices most transferable to engineering practice.

## Important distinctions

- A Bayesian-network edge represents a *modeled conditional dependency*. Causal claims require stronger assumptions; do not infer causality just from an arrow.
- The rollout lab introduces one component of **MCTS**, not a full MCTS implementation.
- Data in demonstrations is **synthetic** and not for clinical, financial, or product decision-making.
- The sklearn example is a **baseline workflow**, not a production-ready ML service. Production also needs validation, schema checks, monitoring, and versioned artifacts.

## Repository layout

```text
machine-learning-fundamentals-codelab/
├── index.html         # Interactive reader and Python editor
├── styles.css         # Responsive light/dark design
├── lessons.js         # 15 curated lessons with source slide references
├── app.js             # Navigation, code execution, knowledge checks
├── README.md          # Concise independent reference
├── PRACTICE.md        # 6 recap exercises
├── LESSONS.md         # Readable lessons + Python snippets
├── requirements.txt   # Local ML dependencies
├── labs/
│   └── final_pipeline.py
└── .nojekyll          # GitHub Pages compatibility
```

## Deploy to GitHub Pages

Push the folder contents to a GitHub repository. Go to **Settings → Pages → Deploy from a branch**, select **main / (root)**, and save. The website will be served as a static page; no server or API key is required.

*Based on the six lecture files supplied for this project. Explanations and runnable examples are independently authored. Source deck slide numbers are shown within each lesson.*