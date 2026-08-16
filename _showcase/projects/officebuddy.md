---
show: true
width: 12
group: projects
date: 2026-08-16 00:01:00 +0800
---

<div class="p-4">
    <h2 data-en="OfficeBuddy: Vision-in-the-Loop Open-Source Office Agent (53★ on GitHub)" data-zh="OfficeBuddy：Vision-in-the-Loop 开源办公 Agent（GitHub 53★ 开源项目）">OfficeBuddy: Vision-in-the-Loop Open-Source Office Agent (53★ on GitHub)</h2>
    <hr />

    <div class="row">
        <div class="col-md-8">
            <p data-en="An open-source project on <strong>GitHub</strong> (<a href='https://github.com/richardChenzhihui/OfficeBuddy' target='_blank'>richardChenzhihui/OfficeBuddy</a>, <strong>53★ · 6 forks</strong>): an agent that edits Word/Excel files from natural language and then <em>proves</em> each edit — the real Microsoft Office application re-renders the document, and an independent multimodal verifier audits the rendered pages before the loop moves on. Vision in the loop, not blind file writes." data-zh="一个 <strong>GitHub 开源项目</strong>（<a href='https://github.com/richardChenzhihui/OfficeBuddy' target='_blank'>richardChenzhihui/OfficeBuddy</a>，<strong>53★ · 6 forks</strong>）：用自然语言编辑 Word/Excel，并对每步编辑进行<em>验证</em>——由真实 Microsoft Office 应用重新渲染文档，交给独立的多模态验证器审查渲染页面后，闭环才继续。视觉在环（Vision-in-the-Loop），而非盲目写入文件。">
                An open-source project on <strong>GitHub</strong> (<a href='https://github.com/richardChenzhihui/OfficeBuddy' target='_blank'>richardChenzhihui/OfficeBuddy</a>, <strong>53★ · 6 forks</strong>): an agent that edits Word/Excel files from natural language and then <em>proves</em> each edit — the real Microsoft Office application re-renders the document, and an independent multimodal verifier audits the rendered pages before the loop moves on. Vision in the loop, not blind file writes.
            </p>

            <h4 data-en="Why it maps to agentic post-training" data-zh="为什么与 Agentic 后训练同构">Why it maps to agentic post-training</h4>
            <ul>
                <li data-en="The harness is a <strong>verifier-in-the-loop system</strong>: plan &rarr; act &rarr; render &rarr; independent structured verdict &rarr; targeted repair — the same shape as reward design and eval loops in agent RL post-training" data-zh="框架本质是<strong>验证器闭环系统</strong>：计划 &rarr; 执行 &rarr; 渲染 &rarr; 独立结构化裁决 &rarr; 定向修复——与 Agent RL 后训练中的奖励设计和评测闭环同构">
                    The harness is a <strong>verifier-in-the-loop system</strong>: plan &rarr; act &rarr; render &rarr; independent structured verdict &rarr; targeted repair — the same shape as reward design and eval loops in agent RL post-training
                </li>
                <li data-en="<strong>Failure-mode engineering</strong>: normalized error signatures, forced strategy switch after repeated same-class failures, hard per-step / per-task budgets" data-zh="<strong>失效模式工程</strong>：错误签名归一化、同类失败两次强制换策略、每步/每任务硬预算上限">
                    <strong>Failure-mode engineering</strong>: normalized error signatures, forced strategy switch after repeated same-class failures, hard per-step / per-task budgets
                </li>
                <li data-en="<strong>Safety by construction</strong>: works on isolated copies only, byte-level snapshots with undo before any write, document content treated as data (prompt-injection defense)" data-zh="<strong>设计即安全</strong>：只在隔离副本上操作、任何写入前有字节级快照可撤销、文档内容视为数据而非指令（提示注入防御）">
                    <strong>Safety by construction</strong>: works on isolated copies only, byte-level snapshots with undo before any write, document content treated as data (prompt-injection defense)
                </li>
            </ul>

            <h4 data-en="Engineering highlights" data-zh="工程亮点">Engineering highlights</h4>
            <ul>
                <li data-en="<strong>Rendered-screenshot verification</strong>: AppleScript drives Word/Excel to export PDF &rarr; page images &rarr; pixel-level diff with red-box annotations marks exactly what changed &rarr; a <em>stateless</em> visual verifier returns a structured verdict (no access to edit history, so it cannot rationalize failures)" data-zh="<strong>渲染截图验证</strong>：AppleScript 驱动 Word/Excel 导出 PDF &rarr; 转页面图 &rarr; 像素级 diff 红框标注变更区域 &rarr; <em>无状态</em>视觉验证器给出结构化裁决（看不到编辑历史，无法为失败自圆其说）">
                    <strong>Rendered-screenshot verification</strong>: AppleScript drives Word/Excel to export PDF &rarr; page images &rarr; pixel-level diff with red-box annotations marks exactly what changed &rarr; a <em>stateless</em> visual verifier returns a structured verdict (no access to edit history, so it cannot rationalize failures)
                </li>
                <li data-en="<strong>Verified-baseline ratchet</strong>: diffs are taken against the last <em>passed</em> render, so regressions cannot silently become the new normal" data-zh="<strong>已验证基线棘轮</strong>：diff 始终对照上一次<em>通过</em>的渲染，回归无法悄悄变成新常态">
                    <strong>Verified-baseline ratchet</strong>: diffs are taken against the last <em>passed</em> render, so regressions cannot silently become the new normal
                </li>
                <li data-en="<strong>Error-escalation ladder</strong>: retry &rarr; switch strategy &rarr; ask the user, under hard budget ceilings" data-zh="<strong>错误升级阶梯</strong>：重试 &rarr; 更换策略 &rarr; 求助用户，且受硬预算上限约束">
                    <strong>Error-escalation ladder</strong>: retry &rarr; switch strategy &rarr; ask the user, under hard budget ceilings
                </li>
                <li data-en="<strong>Model-agnostic core</strong>: hot-swappable backends (Kimi-K2, MiniMax-M3, OpenAI/OpenRouter-compatible endpoints)" data-zh="<strong>模型无关内核</strong>：可热切换后端（Kimi-K2、MiniMax-M3、OpenAI/OpenRouter 兼容端点）">
                    <strong>Model-agnostic core</strong>: hot-swappable backends (Kimi-K2, MiniMax-M3, OpenAI/OpenRouter-compatible endpoints)
                </li>
                <li data-en="<strong>Benchmarked</strong>: a 9-task Render-Truth Bench (108 runs) shows substantially higher defect-awareness than an OfficeCLI baseline" data-zh="<strong>有基准评测</strong>：9 任务 Render-Truth Bench（108 次运行）显示其缺陷感知能力显著高于 OfficeCLI 基线">
                    <strong>Benchmarked</strong>: a 9-task Render-Truth Bench (108 runs) shows substantially higher defect-awareness than an OfficeCLI baseline
                </li>
            </ul>

            <h4 data-en="Traction" data-zh="实际反响">Traction</h4>
            <ul>
                <li data-en="<strong>53★ and 6 forks on GitHub</strong> — an actively used open-source project with an active issue/feedback loop from real users" data-zh="GitHub 上 <strong>53★、6 forks</strong>——持续被真实使用的开源项目，来自真实用户的 issue/反馈持续迭代">
                    <strong>53★ and 6 forks on GitHub</strong> — an actively used open-source project with an active issue/feedback loop from real users
                </li>
            </ul>
        </div>

        <div class="col-md-4">
            <img src="/assets/images/projects/officebuddy.svg" alt="OfficeBuddy" class="img-fluid rounded shadow-sm mb-3">

            <div class="d-grid gap-2">
                <a href="https://github.com/richardChenzhihui/OfficeBuddy" target="_blank" class="btn btn-primary btn-sm">
                    <span data-en="GitHub Repository · 53★" data-zh="GitHub 仓库 · 53★">GitHub Repository · 53★</span>
                </a>
            </div>

            <div class="mt-3 p-2 bg-light rounded">
                <p class="small mb-1"><strong data-en="Highlights" data-zh="亮点">Highlights</strong></p>
                <p class="small mb-0">
                    <span class="badge badge-success" data-en="53★ open source · GitHub" data-zh="GitHub 53★ 开源项目">53★ open source · GitHub</span>
                    <span class="badge badge-info" data-en="Vision-in-the-Loop" data-zh="Vision-in-the-Loop">Vision-in-the-Loop</span>
                    <span class="badge badge-secondary" data-en="Stateless verifier" data-zh="无状态验证器">Stateless verifier</span>
                    <span class="badge badge-primary" data-en="Snapshot / Undo Safety" data-zh="快照 / 撤销安全">Snapshot / Undo Safety</span>
                </p>
            </div>
        </div>
    </div>
</div>
