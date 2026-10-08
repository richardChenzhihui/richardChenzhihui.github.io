---
title:          "MedForge-RSI: Medical Deepfake Detection via Recursive Self-Improvement"
title_zh:       "MedForge-RSI：基于递归自进化的医学深度伪造检测"
date:           2026-09-29 00:01:00 +0800
selected:       true
pub:            "arXiv:2609.36549"
pub_zh:         "arXiv:2609.36549"
pub_date:       "2026"
pub_last:       ' <span class="badge badge-pill badge-publication badge-neutral">Preprint</span>'
pub_last_zh:    ' <span class="badge badge-pill badge-publication badge-neutral">预印本</span>'
abstract: >-
  Text-guided image editors can generate high-fidelity medical deepfakes, challenging the reliability of clinical imagery. Although reasoning-based detectors perform strongly in distribution, they degrade substantially under deployment shift. MedForge-Reasoner, an 8B vision-language model trained with supervised fine-tuning and reinforcement learning, achieves 99.2% accuracy on its target distribution, yet misclassifies 40% of authentic scans, reaches only 77% accuracy on unseen generators, and falls to 59% under transmission distortion. Adapting such models through conventional retraining is costly, requiring large-scale supervision and expert-designed guidelines. We introduce MedForge-RSI, a recursive self-improvement framework that enables a deployed detector to adapt while keeping its model weights frozen. Over 20 rounds, the detector analyzes verified errors, accumulates reusable experience, and autonomously develops image-analysis tools, while an independent acceptance test retains only validated improvements. Across 49 registered configurations, MedForge-RSI increases average accuracy over four test sets from 75.0% to 84.4%. On a held-out 4,000-image evaluation, it improves clean accuracy from 76.5% to 87.9% and transmission-distorted accuracy from 59.0% to 70.5%, with the largest gains in authentic-image recall. Controlled analysis across all 49 trajectories identifies which self-improvement mechanisms replicate across seeds, shows acceptance testing to be the largest individual contributor, and reveals a taxonomy of failed adaptations. We release the complete trajectories, including all rejected and rolled-back changes.
abstract_zh: >-
  文本引导的图像编辑器可以生成高保真的医学深度伪造内容，对临床影像的可信性构成挑战。基于推理的检测器虽然在分布内表现强劲，但在部署偏移下会明显退化：MedForge-Reasoner 是一个经监督微调与强化学习训练的 8B 视觉语言模型，在目标分布上达到 99.2% 的准确率，却对 40% 的真实扫描影像产生误判，在未见过的生成器上仅 77%，传输失真下降至 59%。通过常规再训练来适配这类模型代价高昂，需要大规模监督与专家设计的准则。我们提出 MedForge-RSI：一个让已部署检测器在模型权重冻结的情况下持续适配的递归自进化（RSI）框架。在 20 轮中，检测器分析经过验证的错误、积累可复用经验、自主开发图像分析工具，并由独立验收测试只保留经验证的改进。在 49 个登记配置上，MedForge-RSI 将四个测试集的平均准确率从 75.0% 提升到 84.4%；在 4,000 张留出影像的评估上，干净影像准确率从 76.5% 提升到 87.9%，传输失真影像从 59.0% 提升到 70.5%，其中真实影像召回率提升最大。对全部 49 条轨迹的受控分析识别出哪些自我改进机制可跨随机种子复现，显示验收测试是最大的单项贡献，并给出失败适配的分类。我们发布完整轨迹，包括所有被拒绝与回滚的改动。
thumbnail:      /assets/images/publications/medforge-rsi/thumb.svg
authors:
  - Zhihui Chen
  - Mengling Feng
links:
  Paper: https://arxiv.org/abs/2609.36549
links_zh:
  论文: https://arxiv.org/abs/2609.36549
---
