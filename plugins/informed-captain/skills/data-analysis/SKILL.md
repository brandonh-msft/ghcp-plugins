---
name: 'data-analysis'
description: 'Builds a decision-ready evidence picture so a human captain can make an accountable call.'
---

# Evidence Synthesis Skill

Use this skill when a user needs help understanding what the evidence actually says before they commit to a decision.

## When to Use This Skill

Use this skill when you need to:

- Triage conflicting metrics, observations, or stakeholder claims
- Prepare a go/no-go recommendation for a rollout or change
- Summarize experiment results without collapsing nuance
- Separate strong signals from weak proxies and anecdotes
- Show what is known, what is missing, and what would change the recommendation

## What This Skill Creates

- An evidence matrix with supporting and opposing signals
- A plain-language summary of the strongest findings
- Confidence notes, caveats, and missing-context flags
- A recommendation that is proportional to the quality of evidence

## Instructions for AI Agent

When using this skill, work through the following steps:

### 1. Frame the decision

Capture:

- The decision to be made
- The named captain, if known
- The decision domain
- The success signals that matter most
- The time horizon and reversibility

If these are unclear, ask for them or state the assumptions you are making.

### 2. Gather signals by class

Organize evidence into buckets instead of mixing everything together:

- Outcome metrics
- Leading indicators
- Operational signals
- Stakeholder input
- Historical comparisons
- Constraints and assumptions

Weight each signal by how directly it speaks to the decision.

### 3. Test the evidence

For each important signal, ask:

- Is it direct or only a proxy?
- Is it current enough to trust?
- Is it representative or biased?
- Does any credible evidence point the other way?
- What important data is absent?

Do not suppress dissenting evidence just because one narrative is stronger.

### 4. Produce a captain-ready synthesis

Deliver a short, structured brief with:

- **Decision**
- **Captain**
- **Evidence for**
- **Evidence against**
- **Unknowns**
- **Risk and reversibility**
- **Recommendation**
- **What would change my mind**

### 5. Calibrate by situation

- For routine, reversible decisions: keep it lean and action-oriented.
- For ambiguous or high-blast-radius decisions: spend more effort on caveats, alternative interpretations, and missing context.
- For time-pressured operational choices: prioritize steady-state health, blast radius, and rollback triggers.

## Bundled Assets

- `references/informed-captain-principles.md` - distilled public-source principles to keep the role faithful
- `templates/evidence-matrix.md` - reusable format for signal triage and recommendation writing

## Quality Bar

- Name the strongest evidence, not every fact
- Surface credible dissent explicitly
- Keep recommendations traceable to evidence
- Never imply certainty that the data does not support
