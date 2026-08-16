---
title:          "Med-Banana: Learning Agentic Quality-Controlled Medical Image Editing from Success-and-Failure Trajectories"
title_zh:       "Med-Banana：从成败轨迹学习 Agentic 质量可控的医学图像编辑"
date:           2026-08-16 00:01:00 +0800
selected:       true
pub:            "Conference on Empirical Methods in Natural Language Processing (EMNLP)"
pub_zh:         "自然语言处理实证方法会议 (EMNLP)"
pub_date:       "2026"
pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Accepted · Main Conference</span>'
pub_last_zh:    ' <span class="badge badge-pill badge-publication badge-success">已录用 · 主会议</span>'
abstract: >-
  Text-guided medical image editing must deliver the requested pathology while preserving anatomy, modality-specific appearance, and clinical plausibility. Existing datasets supervise editors only with accepted final edits and discard the failed attempts produced during generation. We argue that failures are indispensable supervision for agentic post-training: they specify what should be rejected, why an edit is medically or visually invalid, and how the instruction should be revised. We present Med-Banana, a trajectory-supervised framework that jointly trains an editor, a verifier, and a refiner for an edit-verify-refine inference loop, together with Med-Banana-80K, a large-scale resource of success-and-failure editing trajectories comprising candidate images, verification outcomes, rejection reasons, and prompt refinements (50,635 accepted + 37,822 rejected trajectories). Experiments with MLLM judges, blind expert assessment, and separability probes show consistent gains over open medical image editors. Code and data are publicly available.
abstract_zh: >-
  文本引导的医学图像编辑需要在实现目标病灶的同时，保持解剖结构、模态外观与临床合理性。既有数据集仅以被接受的最终编辑作为监督，而丢弃了生成过程中的失败尝试。我们认为，失败轨迹是 Agentic 后训练不可或缺的监督信号：它指明了应当拒绝什么、一次编辑为何在医学或视觉上不成立、以及指令应如何修正。我们提出 Med-Banana——一个轨迹监督框架，联合训练编辑器、验证器与精炼器，构成「编辑-验证-精炼」推理闭环；同时发布 Med-Banana-80K 大规模成败编辑轨迹资源，包含候选图像、验证结果、拒绝原因与指令修正（50,635 条成功 + 37,822 条失败轨迹）。基于 MLLM 评审、盲法专家评估与可分性探针的实验表明，该方法一致优于开源医学图像编辑器。代码与数据均已公开。
cover:          /assets/images/covers/medbanana_cover.jpg
authors:
  - Zhihui Chen
  - Qingyuan Lei
  - Mengling Feng
links:
  Paper: https://arxiv.org/abs/2511.00801
  Code: https://github.com/richardChenzhihui/med-banana-50k/
  Dataset: https://huggingface.co/datasets/RichardChenZH/Med-Banana-80K
  Project Page: /showcase.html#projects
links_zh:
  论文: https://arxiv.org/abs/2511.00801
  代码: https://github.com/richardChenzhihui/med-banana-50k/
  数据集: https://huggingface.co/datasets/RichardChenZH/Med-Banana-80K
  项目页面: /showcase.html#projects
---
