---
title:          "MedForge: Interpretable Medical Deepfake Detection via Forgery-aware Reasoning"
title_zh:       "MedForge：基于伪造感知推理的可解释医学深度伪造检测"
date:           2026-04-10 00:01:00 +0800
selected:       true
pub:            "Annual Meeting of the Association for Computational Linguistics (ACL)"
pub_zh:         "计算语言学协会年会 (ACL)"
pub_date:       "2026"
pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Main Conference</span>'
pub_last_zh:    ' <span class="badge badge-pill badge-publication badge-success">主会议</span>'
abstract: >-
  As generative models improve, medical deepfakes that implant or remove lesions while staying visually plausible pose growing risks to clinical safety and the integrity of medical evidence. Most prior work reduces detection to binary real-vs-fake scoring with little insight into where manipulation occurs or why. We present MedForge, an interpretable framework that introduces MedForge-90K—the first large-scale explainable medical deepfake dataset spanning CT, MRI, and X-ray, covering 19 lesion types with forgeries from 10 state-of-the-art deepfake models, each paired with expert-guided localization and clinical-grade explanations—and MedForge-Reasoner, a detector trained with a Localize-then-Analyze chain-of-thought paradigm and Forgery-aware GSPO reinforcement learning. MedForge-Reasoner achieves state-of-the-art detection while producing localized, verifiable medical rationales.
abstract_zh: >-
  随着生成模型能力提升，可在影像中植入或移除病灶且仍看似合理的医学深度伪造，对临床安全与医学证据可信性带来新风险。既有方法多将任务简化为真伪二分类，却难以说明伪造位置与判据。本文提出 MedForge：推出 MedForge-90K——首个大规模可解释医学深度伪造数据集，覆盖 CT、MRI 与 X 线，含 19 类病灶、由 10 种前沿深度伪造模型生成伪造样本，并提供专家引导的定位与临床级解释；以及 MedForge-Reasoner，采用「先定位再分析」思维链与 Forgery-aware GSPO 强化学习训练。实验表明该检测器达到领先检测性能，并能给出可对照影像验证的本地化医学解释。
cover:          /assets/images/publications/medforge/fig1.png
authors:
  - Zhihui Chen
  - Kai He
  - Qingyuan Lei
  - Bin Pu
  - Jian Zhang
  - Yuling Xu
  - Mengling Feng#
links:
  Paper: https://arxiv.org/abs/2603.18577
  Project Page: /publications/medforge.html
  Resources: https://lnkd.in/gYmJNaX4
links_zh:
  论文: https://arxiv.org/abs/2603.18577
  项目页面: /publications/medforge.html
  资源: https://lnkd.in/gYmJNaX4
---
