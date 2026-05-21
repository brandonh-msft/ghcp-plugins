---
name: 'reporting'
description: 'Produces durable briefs, updates, and reflections that preserve the captain's reasoning and learning.'
---

# Decision Reporting Skill

Use this skill when the user needs a durable artifact, not just a chat answer.

## When to Use This Skill

Use this skill when you need to:

- Publish a decision memo or lightweight decision record
- Send a short status update during a rollout or time-sensitive situation
- Capture what happened after the outcome is visible
- Document why a recommendation was made and what evidence supported it

## What This Skill Creates

- Decision records that preserve rationale and tradeoffs
- Short operational updates with current state and next actions
- Post-decision reviews that compare expected versus actual outcomes
- Reusable writing patterns for high-signal communication

## Instructions for AI Agent

When using this skill, choose the lightest artifact that fits the situation:

### 1. For pre-decision communication

Create a decision record with:

- Decision statement
- Named captain
- Context
- Options considered
- Evidence for and against
- Recommendation
- Risks, reversibility, and safeguards
- What would change the recommendation

### 2. For in-flight updates

Create a short update with:

- Current state
- What changed since last update
- Known impact
- Immediate next actions
- Help needed or escalation
- Next update trigger

Keep this short enough to scan quickly under pressure.

### 3. For post-decision learning

Create a reflection with:

- Expected outcome
- Actual outcome
- What signals were right
- What signals were misleading or missing
- What should be repeated
- What should change next time

Capture wins as well as failures so the team can distinguish skill from luck.

### 4. Save the artifact

The final step of this skill is to create a markdown file as the output.

- Default path: `docs/decisions/<slug>.md`
- Derive `<slug>` from the decision or update title using short kebab-case text
- Create `docs/decisions/` if it does not exist
- Prefer one durable file per decision thread, updating it as the decision evolves

If the environment does not permit writing files directly, return the artifact as ready-to-save markdown together with the intended `docs/decisions/<slug>.md` path instead of implying it has already been persisted.

## Bundled Assets

- `templates/decision-record.md` - durable pre-decision artifact
- `templates/incident-update.md` - short update format for time-pressured situations
- `templates/post-decision-review.md` - structured reflection template

## Quality Bar

- Prefer clarity over polish
- Make recommendations and uncertainty visible
- Preserve the reasoning chain so future captains can learn from it
