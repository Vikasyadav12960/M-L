const ML_TOPICS = [
  {
    "id": "topic-01",
    "chapter": "Foundations",
    "title": "The machine learning map",
    "intro": "Pick the learning setup from the data and the decision you need to make.",
    "terms": [
      [
        "Supervised learning",
        "Learn from examples with known targets. Regression predicts a number. Classification predicts a category."
      ],
      [
        "Unsupervised learning",
        "Find structure without target labels. Common tasks include clustering, compression and anomaly detection."
      ],
      [
        "Other learning setups",
        "Semi-supervised learning mixes labeled and unlabeled data. Self-supervised learning creates targets from the input. Reinforcement learning learns from rewards."
      ],
      [
        "Features, labels and predictions",
        "A feature is an input. A label is a known target. Inference uses the fitted model to make a prediction."
      ]
    ]
  },
  {
    "id": "topic-02",
    "chapter": "Foundations",
    "title": "An end-to-end ML workflow",
    "intro": "A clear question and a fair test matter as much as choosing an algorithm.",
    "terms": [
      [
        "Define the task",
        "Specify the prediction target, the unit of observation, the prediction time and the success metric."
      ],
      [
        "Prepare and split",
        "Inspect missingness, duplicates and class balance. Split by row, group or time to match deployment."
      ],
      [
        "Fit and compare",
        "Build a simple baseline. Fit preprocessing inside each training fold, then compare models on the same folds."
      ],
      [
        "Test and report",
        "Evaluate the selected model on held-out data. Record error patterns, limits and the reproducible setup."
      ]
    ]
  },
  {
    "id": "topic-03",
    "chapter": "Foundations",
    "title": "Data preparation and features",
    "intro": "Transform inputs using information that will actually be available at prediction time.",
    "terms": [
      [
        "EDA",
        "Exploratory data analysis checks distributions, outliers, missing values, duplicates and relationships."
      ],
      [
        "Imputation and encoding",
        "Imputation fills missing values. One-hot encoding maps categories to separate indicator columns."
      ],
      [
        "Scaling",
        "Standardization subtracts the training mean and divides by the training standard deviation. It often matters for k-NN, SVM and PCA."
      ],
      [
        "Pipeline and leakage",
        "A pipeline applies the same fitted transformations at training and inference. Leakage occurs when training uses information unavailable at prediction time."
      ]
    ]
  },
  {
    "id": "topic-04",
    "chapter": "Foundations",
    "title": "The math behind ML",
    "intro": "Connect each mathematical idea to an operation you can implement.",
    "terms": [
      [
        "Linear algebra",
        "Vectors hold features, matrices hold batches, and dot products compute weighted sums. Projections and eigenvectors explain PCA."
      ],
      [
        "Calculus and optimization",
        "A derivative measures local change. A gradient collects partial derivatives. Gradient descent steps in the opposite direction."
      ],
      [
        "Probability",
        "Conditional probability and Bayes’ rule explain how evidence changes probabilities. Likelihood measures how well parameters explain observed data."
      ],
      [
        "Statistics",
        "The mean describes the center. Variance measures average squared deviation from the mean. Sampling and confidence intervals help quantify uncertainty about an estimate."
      ]
    ]
  },
  {
    "id": "topic-05",
    "chapter": "Foundations",
    "title": "How a model learns",
    "intro": "The training objective tells the optimizer what to improve.",
    "terms": [
      [
        "Loss and objective",
        "Loss measures prediction error. The training objective aggregates loss and may add a regularization penalty."
      ],
      [
        "Parameters and hyperparameters",
        "Training learns weights and biases. You choose settings such as learning rate, tree depth and the number of neighbors."
      ],
      [
        "Gradient update",
        "θ ← θ − η∇J(θ). Here J is the objective, η is the learning rate and θ is the parameter vector."
      ],
      [
        "Batch and epoch",
        "A batch is a subset processed for one training update. An epoch is one pass through the training dataset."
      ]
    ]
  },
  {
    "id": "topic-06",
    "chapter": "Classical ML",
    "title": "Linear regression by hand",
    "intro": "A straight line predicts house price in lakh from area in square feet.",
    "terms": [
      [
        "Training examples",
        "500 sq ft costs 20 lakh, 1,000 costs 35, and 1,500 costs 50."
      ],
      [
        "Mean baseline",
        "Predict 35 each time. Actual minus predicted gives −15, 0 and +15. The mean squared error is 150 lakh²."
      ],
      [
        "Fitted line",
        "ŷ = 5 + 0.03x. The slope is ₹3,000 per sq ft. Training error is zero for these three points."
      ],
      [
        "Extrapolation",
        "At 2,500 sq ft, the fitted line predicts 80 lakh. This extends the relationship beyond the observed sizes."
      ]
    ]
  },
  {
    "id": "topic-07",
    "chapter": "Classical ML",
    "title": "Logistic regression and classification",
    "intro": "A binary classifier produces a score that a threshold converts into a class decision.",
    "terms": [
      [
        "Logit and sigmoid",
        "The logit is the log-odds. Logistic regression models it as a weighted sum. The sigmoid maps the sum to an estimated probability."
      ],
      [
        "Binary cross-entropy",
        "The loss penalizes low probability assigned to the true class. Confident wrong predictions incur a large penalty."
      ],
      [
        "Decision threshold",
        "Classify as positive above a chosen cutoff. Select the cutoff on validation data using the costs of false alarms and misses."
      ],
      [
        "Multiclass and multilabel",
        "Multiclass predicts one of several classes and often uses softmax. Multilabel can predict several labels for one example."
      ]
    ]
  },
  {
    "id": "topic-08",
    "chapter": "Classical ML",
    "title": "Trees and ensembles",
    "intro": "Tree models learn feature splits. Ensembles combine multiple models to improve predictions.",
    "terms": [
      [
        "Decision tree",
        "Each split reduces impurity or regression error. Gini impurity and entropy measure class mixing. Max depth limits complexity."
      ],
      [
        "Random forest",
        "Bagging trains trees on bootstrap samples. Random forests also consider random subsets of features at each split."
      ],
      [
        "Gradient boosting",
        "Build trees sequentially to improve the current objective. XGBoost, LightGBM and CatBoost are popular implementations."
      ],
      [
        "Hands-on comparison",
        "Compare a shallow tree, a deep tree and a forest on the same splits. Inspect training and validation scores for each."
      ]
    ]
  },
  {
    "id": "topic-09",
    "chapter": "Classical ML",
    "title": "k-NN, naive Bayes and SVM",
    "intro": "Three alternatives that learn from distance, probability or separating margins.",
    "terms": [
      [
        "k-nearest neighbors",
        "Predict from nearby examples. The choice of k, distance metric and feature scaling can change the result."
      ],
      [
        "Naive Bayes",
        "Apply Bayes’ rule with conditional independence of features given the class. Multinomial naive Bayes is a text-classification baseline."
      ],
      [
        "Support vector machine",
        "Learn a separating boundary with a large margin. Support vectors influence that boundary. C controls the penalty for margin violations."
      ],
      [
        "Kernel",
        "A kernel computes similarity corresponding to an implicit feature space. An RBF kernel can support nonlinear boundaries."
      ]
    ]
  },
  {
    "id": "topic-10",
    "chapter": "Evaluation",
    "title": "Splits, validation and tuning",
    "intro": "A trustworthy score estimates performance on examples the training process has never seen.",
    "terms": [
      [
        "Training, validation and test",
        "Fit on training data, tune on validation data and reserve the test set for final evaluation."
      ],
      [
        "Cross-validation",
        "Train on k−1 folds and validate on the remaining fold. Repeat across folds and summarize the scores."
      ],
      [
        "Stratified, grouped and temporal",
        "Stratification preserves class proportions. Group splits keep related rows together. Time splits train on earlier observations."
      ],
      [
        "Hyperparameter search",
        "Compare grid, random or Bayesian search on validation folds. Nested CV separates tuning from performance estimation."
      ]
    ]
  },
  {
    "id": "topic-11",
    "chapter": "Evaluation",
    "title": "Classification metrics",
    "intro": "When misses and false alarms have different costs, accuracy alone can hide poor performance.",
    "terms": [
      [
        "Confusion matrix",
        "TP and TN are correct positive and negative decisions. FP is a false alarm. FN is a missed positive."
      ],
      [
        "Precision, recall and F1",
        "Precision = TP/(TP+FP). Recall = TP/(TP+FN). F1 is their harmonic mean."
      ],
      [
        "ROC-AUC and PR-AUC",
        "ROC compares true-positive and false-positive rates. The precision–recall curve is useful when positives are rare."
      ],
      [
        "Class imbalance and calibration",
        "For rare events, compare against the majority baseline. A calibrated 0.8 prediction should be positive about 80% of the time."
      ]
    ]
  },
  {
    "id": "topic-12",
    "chapter": "Evaluation",
    "title": "Regression metrics and residuals",
    "intro": "The right metric reflects the kinds of prediction errors the application can tolerate.",
    "terms": [
      [
        "MAE and RMSE",
        "MAE averages absolute errors. RMSE is the square root of mean squared error and gives large misses more weight."
      ],
      [
        "R²",
        "Measures improvement over a mean-target reference under squared error. It can be negative on held-out data."
      ],
      [
        "Residual",
        "A residual is actual minus predicted. Plot residuals against predictions or time to find systematic patterns."
      ],
      [
        "Model comparison",
        "Report error in target units, compare against a baseline and inspect performance across relevant data slices."
      ]
    ]
  },
  {
    "id": "topic-13",
    "chapter": "Evaluation",
    "title": "Generalization and regularization",
    "intro": "Compare training and validation behavior to diagnose what to change.",
    "terms": [
      [
        "Underfitting",
        "High training and validation error can indicate a model that is too simple, weak features or incomplete optimization."
      ],
      [
        "Overfitting",
        "Low training error and higher validation error can indicate that the model adapts too closely to training examples."
      ],
      [
        "Bias and variance",
        "Bias is systematic error from a model’s assumptions. Variance is sensitivity to the sampled training data."
      ],
      [
        "L1, L2 and early stopping",
        "L1 can drive some weights to zero. L2 discourages large weights. Early stopping ends training when validation stops improving."
      ]
    ]
  },
  {
    "id": "topic-14",
    "chapter": "Unsupervised",
    "title": "Clustering and anomaly detection",
    "intro": "Unlabeled data can reveal groups, density patterns and unusual observations.",
    "terms": [
      [
        "k-means",
        "Alternate point assignment and centroid updates to reduce within-cluster squared distances. Choose k and scale meaningful features."
      ],
      [
        "Hierarchical clustering",
        "Agglomerative methods merge clusters step by step. A dendrogram shows the merge hierarchy."
      ],
      [
        "DBSCAN",
        "Connect dense neighborhoods and flag sparse points as noise. The radius and minimum samples control the result."
      ],
      [
        "Evaluation and anomalies",
        "Silhouette compares within-cluster cohesion and separation. Isolation Forest flags points that isolate unusually quickly."
      ]
    ]
  },
  {
    "id": "topic-15",
    "chapter": "Unsupervised",
    "title": "PCA and dimensionality reduction",
    "intro": "A lower-dimensional representation can reveal structure or reduce computation.",
    "terms": [
      [
        "PCA",
        "Principal component analysis projects centered data onto orthogonal directions of greatest variance."
      ],
      [
        "Explained variance",
        "Measures how much total variance each component captures. Scaling features can change the components."
      ],
      [
        "t-SNE and UMAP",
        "Explore local structure in a 2D embedding. Visible gaps and apparent cluster sizes can be sensitive to settings."
      ],
      [
        "Feature selection",
        "Keep some original features. In feature extraction, PCA instead constructs new features from the originals."
      ]
    ]
  },
  {
    "id": "topic-16",
    "chapter": "Deep Learning",
    "title": "Neural networks and backpropagation",
    "intro": "A network composes layers of learned transformations.",
    "terms": [
      [
        "Neuron and activation",
        "A unit computes a weighted sum plus a bias. ReLU applies max(0, x), giving stacked layers nonlinear behavior."
      ],
      [
        "Forward pass and backpropagation",
        "Compute predictions and loss in the forward pass. Backpropagation uses the chain rule to compute parameter gradients."
      ],
      [
        "Optimizers and regularization",
        "SGD and Adam update parameters. Dropout randomly masks activations during training. Validation can guide early stopping."
      ],
      [
        "Practice experiment",
        "Implement a two-layer network in NumPy. Check gradients numerically and compare your training curves against a framework."
      ]
    ]
  },
  {
    "id": "topic-17",
    "chapter": "Deep Learning",
    "title": "CNNs, sequence models and transformers",
    "intro": "Architecture choices reflect which relationships the model needs to learn.",
    "terms": [
      [
        "CNN",
        "Convolutions apply shared filters across nearby positions. Common computer-vision tasks include classification, detection and segmentation."
      ],
      [
        "RNN and LSTM",
        "Recurrent networks process sequences using a state. LSTM gates help retain and update information across steps."
      ],
      [
        "Embeddings and attention",
        "Embeddings represent tokens or items as learned vectors. Attention combines information from other positions using relevance weights."
      ],
      [
        "Transformer and LLM",
        "Transformers combine attention and feed-forward layers. Many LLMs pretrain by predicting the next token and adapt through fine-tuning."
      ]
    ]
  },
  {
    "id": "topic-18",
    "chapter": "Applications",
    "title": "Specialized learning problems",
    "intro": "The target, available feedback and evaluation protocol change across domains.",
    "terms": [
      [
        "Time-series forecasting",
        "Use lags, rolling statistics and seasonal baselines. Test with chronological splits and match the actual forecast horizon."
      ],
      [
        "Recommender systems",
        "Collaborative filtering uses interaction patterns. Content-based methods use item attributes. Recall@k and NDCG@k evaluate ranked results."
      ],
      [
        "Reinforcement learning",
        "An agent takes actions in an environment. A policy chooses actions. Return accumulates reward. Exploration gathers information."
      ],
      [
        "Probabilistic and generative models",
        "A generative model learns a data distribution or joint distribution. Examples include mixture models, autoregressive models and diffusion."
      ]
    ]
  },
  {
    "id": "topic-19",
    "chapter": "Applications",
    "title": "Responsible and reproducible ML",
    "intro": "A useful model needs traceable evidence and continued evaluation after release.",
    "terms": [
      [
        "Reproducibility",
        "Track data and code versions, dependencies, random seeds, configurations and metrics. Record how to rerun the experiment."
      ],
      [
        "Interpretability and fairness",
        "Inspect errors across relevant groups. Permutation importance measures score drops after shuffling a feature. SHAP attributes individual predictions."
      ],
      [
        "Deployment and monitoring",
        "Batch and online inference serve different latency needs. Monitor input drift, performance when labels arrive and system reliability."
      ],
      [
        "Drift",
        "Data drift changes input distributions. Concept drift changes the relationship between inputs and targets."
      ]
    ]
  },
  {
    "id": "topic-20",
    "chapter": "Practice",
    "title": "A portfolio project for battery QC",
    "intro": "Prototype a model that flags packs for additional inspection from simulated or public tabular measurements.",
    "terms": [
      [
        "Task and data",
        "Use recorded measurements such as voltage spread, resistance and temperature. Define the target as a later inspection result."
      ],
      [
        "Baselines and models",
        "Compare a simple rule, logistic regression and a tree ensemble. Keep packs from the same batch together during splitting."
      ],
      [
        "Report",
        "Compare precision and recall at a selected threshold. Inspect missed defects and false alarms by batch. Explain the limits of the dataset."
      ],
      [
        "GitHub deliverables",
        "Include a README, setup instructions, training script, evaluation notebook, plots and a brief model card."
      ]
    ]
  },
  {
    "id": "topic-21",
    "chapter": "Practice",
    "title": "An eight-week study order",
    "intro": "Pair exam preparation with one measurable implementation or experiment each week.",
    "terms": [
      [
        "Weeks 1–2",
        "Learn NumPy, data preparation and linear regression. Derive the loss and implement gradient descent."
      ],
      [
        "Weeks 3–4",
        "Cover logistic regression, k-NN, naive Bayes, trees and SVM. Calculate a confusion matrix by hand."
      ],
      [
        "Weeks 5–6",
        "Compare ensembles, validate fairly, then study k-means and PCA. Create an example of leakage and fix it."
      ],
      [
        "Weeks 7–8 and beyond",
        "Train a small neural network and finish the QC project. Next, read one paper and reproduce a baseline with an ablation."
      ]
    ]
  },
  {
    "id": "topic-22",
    "chapter": "Practice",
    "title": "Terms that come up in exams and projects",
    "intro": "Use these distinctions to explain what a model or experiment is doing.",
    "terms": [
      [
        "Loss and metric",
        "Loss drives optimization. A metric measures how well the model meets an evaluation goal."
      ],
      [
        "Baseline and benchmark",
        "A baseline is a simple reference method. A benchmark is a shared task and protocol for comparison."
      ],
      [
        "Ablation and error analysis",
        "An ablation removes or changes one component to measure its contribution. Error analysis looks for recurring failure patterns."
      ],
      [
        "Distribution shift and generalization",
        "Distribution shift is a change in the data-generating distribution. Generalization is performance on examples outside training."
      ]
    ]
  },
  {
    "id": "topic-23",
    "chapter": "Practice",
    "title": "References and practice material",
    "intro": "Use these resources alongside the worked examples and implementation exercises.",
    "terms": [
      [
        "Google Machine Learning Crash Course",
        "Regression, classification, neural networks and interactive exercises. developers.google.com/machine-learning/crash-course"
      ],
      [
        "scikit-learn User Guide",
        "Classical algorithms, preprocessing, model selection and evaluation. https://scikit-learn.org/stable/user_guide.html"
      ],
      [
        "GitHub Primer",
        "Visual reference for dark surfaces, navigation and labels. https://primer.style/"
      ],
      [
        "First lab",
        "Recreate slide 07 in NumPy, then compare the fitted coefficients against scikit-learn."
      ]
    ]
  }
];

