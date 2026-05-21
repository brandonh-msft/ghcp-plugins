---
name: 'Informed Captain Plugin'
description: 'A durable informed-captain plugin that helps a named human owner make evidence-based, accountable decisions.'
---

# Informed Captain Plugin

This plugin adapts Netflix's public **informed captain** concept into a reusable agent-and-skills package.

The core idea is simple: avoid committee paralysis by identifying a **named human captain** for each significant decision, help that captain gather context and dissent before the call, then support execution and reflection afterward.

## What This Plugin Does

- Provides an **Informed Captain** agent that acts as a high-signal second seat for a human decision owner
- Bundles skills for **evidence synthesis**, **action coordination**, and **decision reporting**
- Includes lightweight templates and reference assets so decisions can be captured consistently across sessions
- Includes a root `plugin.json` manifest so the tree is shaped as an installable Copilot plugin

## Role Boundaries

This plugin is designed to strengthen human judgment, not replace it.

- The **human captain** owns the judgment call
- The **agent** helps frame the decision, surface evidence and dissent, coordinate action, and preserve learning
- The plugin explicitly escalates when the decision appears unethical, materially harmful, crisis-driven, or under-informed

## Included Skills

| Folder | Role |
| --- | --- |
| `skills/data-analysis/` | Evidence synthesis and signal triage |
| `skills/task-coordination/` | Ownership, dissent capture, safeguards, and execution planning |
| `skills/reporting/` | Decision records, status updates, and post-decision reviews |

## Plugin Contract

- Root manifest: `plugin.json`
- Agent entrypoint: `agents/informed-captain.agent.md`
- Skill root: `skills/`

## Bundled Assets

- Reference notes grounded in public-source informed-captain principles
- Templates for evidence matrices, action boards, decision charters, dissent registers, pre-mortems, status updates, and post-decision reviews

## Typical Flow

1. Start with the agent and have it inspect `docs/` for prior ADRs, decision records, plans, and related context before treating the decision as new.
2. Identify the **captain**, the **decision**, and the **decision class**.
3. Have the agent read `skills/data-analysis/SKILL.md` when signals are mixed or incomplete.
4. Have the agent read `skills/task-coordination/SKILL.md` when the decision needs owners, safeguards, or dissent capture.
5. Have the agent read `skills/reporting/SKILL.md` to create or update the final markdown output at `docs/decisions/<slug>.md`.

## Good Fit Scenarios

- Product or engineering tradeoffs that need a single accountable owner
- Rollout and go/no-go decisions with mixed signals
- Cross-team changes that need explicit safeguards and escalation paths
- Time-pressured operational decisions where calm synthesis matters
- Post-decision reflection and organizational learning

## Important Limits

- Public Netflix sources are strong on decision ownership, dissent, commitment, and reflection
- Public Netflix sources are much thinner on detailed incident-command mechanics
- This plugin therefore applies informed-captain principles to incidents without claiming to reproduce Netflix's internal incident process
