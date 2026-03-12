# primitives-test

A minimal TypeScript/Express app for testing Copilot custom agent triggers.

## Agents

- **Triage agent** — Triages new issues (trigger: `issues.opened`)
- **CI Repair Agent** — Fixes failed CI runs (trigger: `workflow_run.failed`)
- **Joker** — Posts daily jokes (trigger: `interval.daily`)

## Workflows

- **Build** — TypeScript compilation on push/PR
- **Check Code Comments** — Flags forbidden comments (BROKEN/FIXME/HACK)
- **Create Test PR** — Dispatch workflow to create PRs with intentional CI failures
