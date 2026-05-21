---
name: 'task-coordination'
description: 'Turns a captain’s decision into owned actions, escalation paths, dissent capture, and follow-through.'
---

# Action Coordination Skill

Use this skill when the user has a decision or situation that now needs structure, owners, and execution discipline.

## When to Use This Skill

Use this skill when you need to:

- Assign owners and next actions after a decision
- Coordinate a change with multiple teams or dependencies
- Capture dissent before a commitment is made
- Define pause, rollback, or escalation triggers
- Run a lightweight pre-mortem before a risky move

## What This Skill Creates

- A captain charter that names the decision owner and scope
- An action board with owners, order, and checkpoints
- A dissent register so opposing views are heard before commitment
- A pre-mortem or risk review for higher-stakes work
- Clear escalation and rollback conditions

## Instructions for AI Agent

When using this skill, guide the work in this order:

### 1. Clarify ownership

State:

- Who the captain is
- What decision they own
- What is in scope and out of scope
- Who must be informed, consulted, or only notified

If no accountable owner exists, call that out as the first blocker.

### 2. Translate the decision into execution

Create action items with:

- Owner
- Desired outcome
- Sequence or dependency
- Deadline or checkpoint
- Evidence that the action succeeded
- Decision context the owner needs in order to act well without being micromanaged

Prefer the minimum plan that still protects the outcome.

### 3. Operationalize farming for dissent

Before the captain commits, ask:

- Which credible skeptics have not been heard?
- Which roles are most likely to see a risk this team is missing?
- What concern would most likely make us reverse course?
- What cross-team effect could the local team be missing?

Capture those points in a short dissent register rather than burying them in prose.

### 4. Define safeguards

Specify:

- Pause conditions
- Rollback conditions
- Escalation triggers
- Required updates if risk increases

Make safeguards stricter as reversibility decreases or blast radius grows.

### 5. Shift from debate to commitment

Once the captain decides, stop relitigating the choice unless new evidence appears. Focus the plan on successful execution and observability.

## Bundled Assets

- `templates/decision-charter.md` - names the captain, scope, and decision class
- `templates/action-board.md` - organizes owners, sequence, checkpoints, and success signals
- `templates/dissent-register.md` - captures opposing views before commitment
- `templates/pre-mortem.md` - pressure-tests risks before a risky move

## Quality Bar

- One captain, not a committee
- One clear sequence of action
- Explicit safeguards and escalation paths
- Dissent captured before commitment, not after failure
