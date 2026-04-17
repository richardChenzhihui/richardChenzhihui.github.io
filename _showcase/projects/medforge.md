---
show: true
width: 12
group: projects
date: 2026-04-17 00:01:00 +0800
---

<div class="p-4">
    <h2 data-en="MedForge: Interpretable Medical Deepfake Detection via Forgery-aware Reasoning" data-zh="MedForge：基于伪造感知推理的可解释医学深度伪造检测">MedForge: Interpretable Medical Deepfake Detection via Forgery-aware Reasoning</h2>
    <hr />

    <div class="row">
        <div class="col-md-8">
            <p data-en="A data-and-model framework for trustworthy medical deepfake detection, built around evidence-grounded reasoning, forgery localization, and a public demo stack." data-zh="一个面向可信医学深度伪造检测的数据与模型框架，核心是证据驱动推理、伪造区域定位，以及可公开体验的演示系统。">
                A data-and-model framework for trustworthy medical deepfake detection, built around evidence-grounded reasoning, forgery localization, and a public demo stack.
            </p>

            <h4 data-en="What is included" data-zh="目前公开内容">What is included</h4>
            <ul>
                <li data-en="<strong>ACL 2026 main conference paper</strong> on interpretable medical forgery detection" data-zh="<strong>ACL 2026 主会议论文</strong>，聚焦可解释医学伪造检测">
                    <strong>ACL 2026 main conference paper</strong> on interpretable medical forgery detection
                </li>
                <li data-en="<strong>MedForge-90K dataset</strong>: 30K real images, 30K lesion implant forgeries, and 30K lesion removal forgeries" data-zh="<strong>MedForge-90K 数据集</strong>：30K 真实图像、30K 病灶植入伪造、30K 病灶移除伪造">
                    <strong>MedForge-90K dataset</strong>: 30K real images, 30K lesion implant forgeries, and 30K lesion removal forgeries
                </li>
                <li data-en="<strong>MedForge-Reasoner</strong>: a Qwen3-VL based detector using a Localize-then-Analyze reasoning pipeline" data-zh="<strong>MedForge-Reasoner</strong>：基于 Qwen3-VL 的检测模型，采用先定位再分析的推理流程">
                    <strong>MedForge-Reasoner</strong>: a Qwen3-VL based detector using a Localize-then-Analyze reasoning pipeline
                </li>
                <li data-en="<strong>Interactive demo</strong> for medical image deepfake detection and reasoning visualization" data-zh="<strong>交互 Demo</strong>：可直接体验医学图像深度伪造检测与推理可视化">
                    <strong>Interactive demo</strong> for medical image deepfake detection and reasoning visualization
                </li>
            </ul>

            <h4 data-en="Why it matters" data-zh="为什么重要">Why it matters</h4>
            <ul>
                <li data-en="Moves beyond black-box real/fake prediction to localized, evidence-grounded explanations" data-zh="不再停留于黑盒真伪判断，而是给出定位明确、证据驱动的解释">
                    Moves beyond black-box real/fake prediction to localized, evidence-grounded explanations
                </li>
                <li data-en="Targets realistic lesion implantation and removal risks in chest X-ray, brain MRI, and fundus images" data-zh="面向胸部 X 光、脑部 MRI、眼底图像中的真实病灶植入与移除风险">
                    Targets realistic lesion implantation and removal risks in chest X-ray, brain MRI, and fundus images
                </li>
                <li data-en="Combines dataset, model, and demo into a single research artifact instead of a paper-only release" data-zh="不仅发布论文，也同步公开数据集、模型与演示系统，形成完整研究资产">
                    Combines dataset, model, and demo into a single research artifact instead of a paper-only release
                </li>
            </ul>

            <h4 data-en="Public resources" data-zh="公开资源">Public resources</h4>
            <table class="table table-sm table-bordered">
                <thead>
                    <tr>
                        <th data-en="Asset" data-zh="资源">Asset</th>
                        <th data-en="Details" data-zh="说明">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-en="Paper" data-zh="论文">Paper</td>
                        <td data-en="ACL 2026 Main Conference" data-zh="ACL 2026 主会议">ACL 2026 Main Conference</td>
                    </tr>
                    <tr>
                        <td data-en="Dataset" data-zh="数据集">Dataset</td>
                        <td data-en="MedForge-90K, covering CT, MRI, and X-ray with 19 lesion types" data-zh="MedForge-90K，覆盖 CT、MRI、X 光，共 19 类病灶">MedForge-90K, covering CT, MRI, and X-ray with 19 lesion types</td>
                    </tr>
                    <tr>
                        <td data-en="Model" data-zh="模型">Model</td>
                        <td data-en="MedForge-Reasoner on Hugging Face" data-zh="Hugging Face 上的 MedForge-Reasoner">MedForge-Reasoner on Hugging Face</td>
                    </tr>
                    <tr>
                        <td data-en="Demo" data-zh="演示">Demo</td>
                        <td data-en="Online detector Space for interactive testing" data-zh="在线检测 Space，可直接交互体验">Online detector Space for interactive testing</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="col-md-4">
            <img src="/assets/images/publications/medforge/fig1.png" alt="MedForge framework" class="img-fluid rounded shadow-sm mb-3">

            <div class="d-grid gap-2">
                <a href="https://arxiv.org/abs/2603.18577" target="_blank" class="btn btn-primary btn-sm">
                    <span data-en="Read Paper" data-zh="阅读论文">Read Paper</span>
                </a>
                <a href="https://huggingface.co/spaces/RichardChenZH/medforge-medical-deepfake-detector" target="_blank" class="btn btn-success btn-sm">
                    <span data-en="Try Demo" data-zh="体验 Demo">Try Demo</span>
                </a>
                <a href="https://huggingface.co/RichardChenZH/MedForge-Reasoner" target="_blank" class="btn btn-secondary btn-sm">
                    <span data-en="Model" data-zh="模型">Model</span>
                </a>
                <a href="https://huggingface.co/datasets/RichardChenZH/MedForge-90K" target="_blank" class="btn btn-info btn-sm">
                    <span data-en="Dataset" data-zh="数据集">Dataset</span>
                </a>
                <a href="/publications/medforge.html" class="btn btn-outline-dark btn-sm">
                    <span data-en="Project Page" data-zh="项目页面">Project Page</span>
                </a>
            </div>

            <div class="mt-3 p-2 bg-light rounded">
                <p class="small mb-1"><strong data-en="Highlights" data-zh="亮点">Highlights</strong></p>
                <p class="small mb-0">
                    <span class="badge badge-success" data-en="ACL 2026" data-zh="ACL 2026">ACL 2026</span>
                    <span class="badge badge-info" data-en="Demo + Model + Dataset" data-zh="Demo + 模型 + 数据集">Demo + Model + Dataset</span>
                </p>
            </div>
        </div>
    </div>
</div>
