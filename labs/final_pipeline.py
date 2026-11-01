"""Module 6 practical: safe, reproducible synthetic-data ML baseline.
Run from the project root: python labs/final_pipeline.py
"""
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