# Plugin Structure

This plugin packages an informed-captain agent plus durable supporting assets. The tree is intentionally organized around three recurring responsibilities: understand the evidence, coordinate the action, and preserve the decision.

```text
plugins/informed-captain/
├── plugin.json
├── agents/
│   └── informed-captain.agent.md
├── skills/
│   ├── data-analysis/
│   │   ├── references/
│   │   │   └── informed-captain-principles.md
│   │   ├── templates/
│   │   │   └── evidence-matrix.md
│   │   └── SKILL.md
│   ├── task-coordination/
│   │   ├── templates/
│   │   │   ├── decision-charter.md
│   │   │   ├── action-board.md
│   │   │   ├── dissent-register.md
│   │   │   └── pre-mortem.md
│   │   └── SKILL.md
│   └── reporting/
│       ├── templates/
│       │   ├── decision-record.md
│       │   ├── incident-update.md
│       │   └── post-decision-review.md
│       └── SKILL.md
└── README.md
```

## Purpose of Each Layer

- `plugin.json` declares the installable plugin contract for Copilot
- `agents/` defines the captain-facing operating model and guardrails
- `skills/` contains focused capabilities the agent can read and apply as needed
- `references/` preserves source-aligned principles so the role stays faithful over time
- `templates/` makes captain outputs durable and repeatable
