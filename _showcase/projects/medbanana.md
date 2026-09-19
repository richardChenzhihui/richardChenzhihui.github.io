---
show: true
width: 12
group: projects
date: 2026-06-29 00:01:00 +0800
---

<div class="p-4">
    <h2 data-en="Med-Banana: RSI through Medical Agent Self-Improvement (EMNLP 2026)" data-zh="Med-Banana：面向医疗 Agent 自优化的 RSI 研究实践（EMNLP 2026）">Med-Banana: RSI through Medical Agent Self-Improvement (EMNLP 2026)</h2>
    <hr />

    <div class="row">
        <div class="col-md-8">
            <p data-en="<strong>Prompt-Level Self-Improvement · Verifier Feedback · Agentic Post-Training</strong>" data-zh="<strong>Prompt 自优化 · 验证反馈 · Agentic 后训练</strong>"><strong>Prompt-Level Self-Improvement · Verifier Feedback · Agentic Post-Training</strong></p>
            <p data-en="Med-Banana connects my RSI research to medical agents: the system uses its failed attempts to revise how it approaches the next edit. The recursive improvement happens in the prompt policy, guided by a learned verifier and refiner." data-zh="Med-Banana 将我的 RSI 研究落到医疗 Agent：系统从自身失败中提取反馈，修正下一轮编辑的指令策略。递归改进发生在 Prompt 层面，由经过训练的验证器与精炼器驱动。">Med-Banana connects my RSI research to medical agents: the system uses its failed attempts to revise how it approaches the next edit. The recursive improvement happens in the prompt policy, guided by a learned verifier and refiner.</p>
            <h4 data-en="The Self-Improvement Loop" data-zh="自优化机制">The Self-Improvement Loop</h4>
            <ol>
            <li data-en="<strong>Edit:</strong> Generate a candidate from the source image and current prompt pair." data-zh="<strong>执行：</strong>基于原始影像与当前正负 Prompt 生成候选结果。"><strong>Edit:</strong> Generate a candidate from the source image and current prompt pair.</li>
            <li data-en="<strong>Verify:</strong> Diagnose failures in pathology, anatomy, instruction compliance, and imaging fidelity." data-zh="<strong>验证：</strong>从病理合理性、解剖结构、指令遵循与成像保真度诊断失败。"><strong>Verify:</strong> Diagnose failures in pathology, anatomy, instruction compliance, and imaging fidelity.</li>
            <li data-en="<strong>Refine:</strong> Use rejection reasons and failure history to revise both prompts, then retry from the original image." data-zh="<strong>递归修正：</strong>结合拒绝原因与历史失败改写正负 Prompt，从原始影像重新尝试。"><strong>Refine:</strong> Use rejection reasons and failure history to revise both prompts, then retry from the original image.</li>
            <li data-en="<strong>Learn:</strong> Train the editor on successful edits and the verifier and refiner on trajectory-level feedback." data-zh="<strong>轨迹学习：</strong>以成功编辑训练编辑器，以成败判断与修正轨迹训练验证器和精炼器。"><strong>Learn:</strong> Train the editor on successful edits and the verifier and refiner on trajectory-level feedback.</li>
            </ol>
            <p data-en="<strong>Med-Banana-80K:</strong> 50,635 successful and 37,822 failed attempts across three imaging modalities and 23 disease categories; 100K+ Hugging Face downloads." data-zh="<strong>Med-Banana-80K：</strong>50,635 条成功与 37,822 条失败轨迹，覆盖三种医学影像模态与 23 类疾病；Hugging Face 下载量超过 100K。"><strong>Med-Banana-80K:</strong> 50,635 successful and 37,822 failed attempts across three imaging modalities and 23 disease categories; 100K+ Hugging Face downloads.</p>

            <h4 data-en="Dataset Statistics" data-zh="数据集统计">Dataset Statistics</h4>
            <table class="table table-sm table-bordered">
                <thead>
                    <tr>
                        <th data-en="Modality" data-zh="模态">Modality</th>
                        <th data-en="Task" data-zh="任务">Task</th>
                        <th data-en="Diseases" data-zh="疾病数">Diseases</th>
                        <th data-en="Success" data-zh="成功">Success</th>
                        <th data-en="Failed" data-zh="失败">Failed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chest X-ray</td>
                        <td>Add</td>
                        <td>12</td>
                        <td>9,854</td>
                        <td>7,971</td>
                    </tr>
                    <tr>
                        <td>Chest X-ray</td>
                        <td>Remove</td>
                        <td>12</td>
                        <td>10,667</td>
                        <td>4,750</td>
                    </tr>
                    <tr>
                        <td>Brain MRI</td>
                        <td>Add</td>
                        <td>4</td>
                        <td>4,536</td>
                        <td>8,630</td>
                    </tr>
                    <tr>
                        <td>Brain MRI</td>
                        <td>Remove</td>
                        <td>4</td>
                        <td>4,355</td>
                        <td>6,949</td>
                    </tr>
                    <tr>
                        <td>Fundus</td>
                        <td>Add</td>
                        <td>7</td>
                        <td>18,505</td>
                        <td>3,162</td>
                    </tr>
                    <tr>
                        <td>Fundus</td>
                        <td>Remove</td>
                        <td>7</td>
                        <td>2,718</td>
                        <td>6,360</td>
                    </tr>
                    <tr class="font-weight-bold">
                        <td colspan="2" data-en="Total" data-zh="总计">Total</td>
                        <td>23+</td>
                        <td>50,635</td>
                        <td>37,822</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="col-md-4">
            <img src="/assets/images/covers/medbanana_cover.png" alt="Med-Banana-80K samples" class="img-fluid rounded shadow-sm mb-3">
            
            <div class="d-grid gap-2">
                <a href="https://arxiv.org/abs/2511.00801" target="_blank" class="btn btn-primary btn-sm">
                    📄 <span data-en="Read Paper" data-zh="阅读论文">Read Paper</span>
                </a>
                <a href="https://github.com/richardChenzhihui/med-banana-50k/" target="_blank" class="btn btn-secondary btn-sm">
                    💻 <span data-en="View Code" data-zh="查看代码">View Code</span>
                </a>
                <a href="https://huggingface.co/datasets/RichardChenZH/Med-Banana-80K" target="_blank" class="btn btn-info btn-sm">
                    📦 <span data-en="Dataset on Hugging Face (100K+ downloads)" data-zh="Hugging Face 数据集（100K+ 下载）">Dataset on Hugging Face (100K+ downloads)</span>
                </a>
            </div>
        </div>
    </div>
    
    <div class="mt-3">
        <p class="small text-muted" data-en="<strong>Open asset:</strong> Dataset, code, and paper are publicly available for medically grounded image editing research." data-zh="<strong>开放资产：</strong>数据集、代码与论文已公开，可用于医学约束下的图像编辑研究。">
            <strong>Open asset:</strong> Dataset, code, and paper are publicly available for medically grounded image editing research.
        </p>
    </div>
</div>

