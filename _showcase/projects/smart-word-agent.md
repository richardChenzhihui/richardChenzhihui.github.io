---
show: true
width: 12
group: projects
date: 2026-07-01 00:01:00 +0800
---

<div class="p-4">
    <h2 data-en="Office Agent: Document-Editing Agent with a Rendered-Verification Loop" data-zh="Office Agent：带渲染验证闭环的文档编辑 Agent">Office Agent: Document-Editing Agent with a Rendered-Verification Loop</h2>
    <hr />

    <div class="row">
        <div class="col-md-8">
            <p data-en="An open-source document-agent line: <strong>smart-word-agent</strong> (ReAct harness, Kimi-K2 core, 1K+ downloads in week one) evolved into <strong>Office Agent</strong> — an agent that edits Word/Excel from natural language and then <em>proves</em> each edit: the real application re-renders the document, and an independent multimodal verifier audits the rendered pages before the loop moves on." data-zh="一个开源文档 Agent 系列：从 <strong>smart-word-agent</strong>（ReAct 框架、Kimi-K2 核心、首周 1K+ 下载）演进为 <strong>Office Agent</strong>——用自然语言编辑 Word/Excel，并对每步编辑进行<em>验证</em>：由真实 Office 应用重新渲染文档，交给独立的多模态验证器审查渲染页面后，闭环才继续。">
                An open-source document-agent line: <strong>smart-word-agent</strong> (ReAct harness, Kimi-K2 core, 1K+ downloads in week one) evolved into <strong>Office Agent</strong> — an agent that edits Word/Excel from natural language and then <em>proves</em> each edit: the real application re-renders the document, and an independent multimodal verifier audits the rendered pages before the loop moves on.
            </p>

            <h4 data-en="Why it maps to RL post-training" data-zh="为什么与 RL 后训练同构">Why it maps to RL post-training</h4>
            <ul>
                <li data-en="The harness is a <strong>verifier-in-the-loop system</strong>: plan &rarr; act &rarr; render &rarr; independent structured verdict &rarr; targeted repair — the same shape as reward design and eval loops in agent RL" data-zh="框架本质是<strong>验证器闭环系统</strong>：计划 &rarr; 执行 &rarr; 渲染 &rarr; 独立结构化裁决 &rarr; 定向修复——与 Agent RL 中的奖励设计和评测闭环同构">
                    The harness is a <strong>verifier-in-the-loop system</strong>: plan &rarr; act &rarr; render &rarr; independent structured verdict &rarr; targeted repair — the same shape as reward design and eval loops in agent RL
                </li>
                <li data-en="<strong>Failure-mode engineering</strong>: normalized error signatures, forced strategy switch after repeated same-class failures, hard per-step / per-task budgets" data-zh="<strong>失效模式工程</strong>：错误签名归一化、同类失败两次强制换策略、每步/每任务硬预算上限">
                    <strong>Failure-mode engineering</strong>: normalized error signatures, forced strategy switch after repeated same-class failures, hard per-step / per-task budgets
                </li>
                <li data-en="<strong>Safety by construction</strong>: original files never written before explicit confirmation, per-step snapshots with undo, document content treated as data (prompt-injection defense)" data-zh="<strong>设计即安全</strong>：显式确认前永不写入原文件、每步快照可撤销、文档内容视为数据而非指令（提示注入防御）">
                    <strong>Safety by construction</strong>: original files never written before explicit confirmation, per-step snapshots with undo, document content treated as data (prompt-injection defense)
                </li>
            </ul>

            <h4 data-en="Engineering highlights" data-zh="工程亮点">Engineering highlights</h4>
            <ul>
                <li data-en="<strong>Rendered-screenshot verification</strong>: AppleScript drives Word/Excel to export PDF &rarr; PyMuPDF page images &rarr; pixel-level diff marks changed regions &rarr; stateless visual verifier returns a structured verdict" data-zh="<strong>渲染截图验证</strong>：AppleScript 驱动 Word/Excel 导出 PDF &rarr; PyMuPDF 转页面图 &rarr; 像素级 diff 标注变更区域 &rarr; 无状态视觉验证器给出结构化裁决">
                    <strong>Rendered-screenshot verification</strong>: AppleScript drives Word/Excel to export PDF &rarr; PyMuPDF page images &rarr; pixel-level diff marks changed regions &rarr; stateless visual verifier returns a structured verdict
                </li>
                <li data-en="<strong>Plan-first execution with clarifying questions</strong>: multi-step tasks emit a live checklist; ambiguous instructions trigger interactive clarification instead of guessing" data-zh="<strong>先计划后执行 + 主动反问</strong>：多步任务实时输出清单；指令模糊时交互澄清而非盲猜">
                    <strong>Plan-first execution with clarifying questions</strong>: multi-step tasks emit a live checklist; ambiguous instructions trigger interactive clarification instead of guessing
                </li>
                <li data-en="<strong>Model-agnostic core</strong>: hot-swappable backends (Kimi-K2, MiniMax-M3, OpenAI/OpenRouter-compatible endpoints)" data-zh="<strong>模型无关内核</strong>：可热切换后端（Kimi-K2、MiniMax-M3、OpenAI/OpenRouter 兼容端点）">
                    <strong>Model-agnostic core</strong>: hot-swappable backends (Kimi-K2, MiniMax-M3, OpenAI/OpenRouter-compatible endpoints)
                </li>
                <li data-en="<strong>Shippable, tested software</strong>: single-file distribution for end users; offline unit / FakeLLM loop tests plus live integration tests" data-zh="<strong>可分发、有测试的软件</strong>：面向终端用户的单文件分发；离线单元 / FakeLLM 循环测试与真实集成测试">
                    <strong>Shippable, tested software</strong>: single-file distribution for end users; offline unit / FakeLLM loop tests plus live integration tests
                </li>
            </ul>

            <h4 data-en="Traction" data-zh="实际反响">Traction</h4>
            <ul>
                <li data-en="<strong>1,000+ downloads in the first week</strong> after the smart-word-agent release" data-zh="smart-word-agent <strong>发布首周下载量超过 1,000</strong>">
                    <strong>1,000+ downloads in the first week</strong> after the smart-word-agent release
                </li>
                <li data-en="Open-sourced on GitHub with an active issue/feedback loop from real users" data-zh="GitHub 开源，来自真实用户的 issue/反馈持续迭代">
                    Open-sourced on GitHub with an active issue/feedback loop from real users
                </li>
            </ul>
        </div>

        <div class="col-md-4">
            <img src="/assets/images/projects/smart-word-agent.svg" alt="Office Agent" class="img-fluid rounded shadow-sm mb-3">

            <div class="d-grid gap-2">
                <a href="https://github.com/richardChenzhihui/smart-word-agent" target="_blank" class="btn btn-primary btn-sm">
                    <span data-en="GitHub Repository" data-zh="GitHub 仓库">GitHub Repository</span>
                </a>
            </div>

            <div class="mt-3 p-2 bg-light rounded">
                <p class="small mb-1"><strong data-en="Highlights" data-zh="亮点">Highlights</strong></p>
                <p class="small mb-0">
                    <span class="badge badge-success" data-en="Render-Verify-Repair" data-zh="渲染-验证-修复">Render-Verify-Repair</span>
                    <span class="badge badge-info" data-en="Model-agnostic" data-zh="模型无关">Model-agnostic</span>
                    <span class="badge badge-secondary" data-en="1K+ downloads / week 1" data-zh="首周 1K+ 下载">1K+ downloads / week 1</span>
                    <span class="badge badge-primary" data-en="Snapshot / Undo Safety" data-zh="快照 / 撤销安全">Snapshot / Undo Safety</span>
                </p>
            </div>
        </div>
    </div>
</div>
