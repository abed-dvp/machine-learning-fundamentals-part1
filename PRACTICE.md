# Six practical review exercises

Aim for **20–40 minutes** total. Work in the browser Codelab or a local Python file. Every task is directly connected to one of the six source decks; treat this as a brief recap, not an additional long course.

## 1 · Model baseline (`1.pptx`)

Using `[(1,0),(2,0),(4,1),(5,1)]`, learn a threshold between the negative and positive classes. Predict labels for `2.5`, `3.5`, and `6`. **Check:** the predictions should be `0, 1, 1`. Explain one reason the model may fail on new data.

## 2 · Forward chaining (`2.pptx`)

Start with facts `{"user_verified", "payment_complete"}`. Apply rules: both facts imply `can_access_course`, and `can_access_course` implies `show_dashboard`. **Check:** both new facts should be inferred. Discuss when deterministic rules are preferable to ML.

## 3 · Bayes (`3.pptx`)

Suppose `P(condition)=0.05`, `P(test+ | condition)=0.9`, and `P(test+ | no condition)=0.1`. Calculate `P(condition | test+)` using Python. **Check:** approximately `0.321`. Explain why 90% test sensitivity does not imply a 90% posterior.

## 4 · Graph search (`4.pptx`)

Draw nodes A, B, C, D with weighted edges A→B=2, A→C=5, B→C=1, C→D=1. Use A* or Dijkstra to find A→D. **Check:** route A→B→C→D, total cost `4`.

## 5 · Alpha-beta (`5.pptx`)

Evaluate `[[[3,5],[6,9]], [[1,2],[0,7]]]` with Minimax, then Alpha-beta. **Check:** both return `5`; Alpha-beta can skip some leaves. Explain why searching the most promising moves first helps.

## 6 · Leakage-safe pipeline (`6.pptx`)

Run `python labs/final_pipeline.py`. Locate the train/test split, numeric imputer, categorical encoder, scaler, estimator, and evaluation metric. Introduce a new row-local feature (`sessions/spend`) and decide whether it belongs in the numeric columns. **Check:** the script still trains and evaluates on the held-out 25%.

## Interview-ready checklist

- Can I explain **why** a particular algorithm is used, not only its name?
- Can I translate the idea into **working Python**?
- Can I identify assumptions and failure modes (base rates, heuristics, leakage, overfitting)?
- Can I explain how I would evaluate the result on data the model has not seen?