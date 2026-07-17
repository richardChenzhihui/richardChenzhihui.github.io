---
title:          "Looking Ahead to Stay Grounded: Future-Discounted Visual Credit Assignment for VLM Reinforcement Learning"
title_zh:       "Looking Ahead to Stay Grounded：面向视觉语言模型强化学习的未来折扣视觉信用分配"
date:           2026-06-20 00:01:00 +0800
selected:       true
pub:            "ICLR 2026 submission"
pub_zh:         "ICLR 2026 在投"
pub_date:       "2026"
pub_last:       ' <span class="badge badge-pill badge-publication badge-warning">Under Review</span> <span class="badge badge-pill badge-publication badge-info">First Author</span>'
pub_last_zh:    ' <span class="badge badge-pill badge-publication badge-warning">在投</span> <span class="badge badge-pill badge-publication badge-info">一作</span>'
abstract: >-
  V-FIPO targets a core failure mode of RLVR post-training for vision-language models: token-level credit assignment that only rewards instant visual dependence, which lets models drift into ungrounded reasoning over long horizons. We extend credit assignment to future-discounted visual grounding — a token earns visual credit not only for the evidence it uses now, but for how that evidence supports discounted future reasoning steps — encouraging policies that stay anchored to the image across multi-step chains of thought. Developed during my Multimodal Agent RL research internship at ByteDance (Singapore).
abstract_zh: >-
  V-FIPO 针对视觉语言模型 RLVR 后训练的一个核心失效模式：token 级信用分配只奖励「即时视觉依赖」，使模型在长推理链中逐渐脱离视觉证据。我们将信用分配扩展为「未来折扣视觉锚定」——token 获得的视觉信用不仅来自当前使用的证据，也来自该证据对折扣后未来推理步骤的支撑——从而促使策略在多步思维链中始终锚定图像。该工作完成于字节跳动（新加坡）多模态 Agent 强化学习研发实习期间。
authors:
  - Zhihui Chen
  - Yike Yun
  - et al.
---
