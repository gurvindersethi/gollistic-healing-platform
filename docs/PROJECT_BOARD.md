# GitHub Projects — Board Workflow

We use **GitHub Projects** as the single source of truth for delivery. Every major feature is tracked as an issue and moves through a defined pipeline.

## Board

**Project:** [Gollistic Healing Platform](https://github.com/users/gurvindersethi/projects) *(link after setup)*

Linked to repo: `gurvindersethi/gollistic-healing-platform`

## Columns (Pipeline)

| Stage | Purpose |
|-------|---------|
| 📋 Backlog | Identified work, not yet scheduled |
| 📝 Planning | Requirements, scope, and acceptance criteria |
| 🎨 Designing | UX, visuals, content structure |
| 💻 Development | Implementation in progress |
| 🧪 Testing | QA, accessibility, responsive checks |
| 🚀 Ready to Deploy | Approved; waiting for release |
| ✅ Done | Shipped and verified |

Configure the board **Board** view to group by the **Pipeline** field (or **Status**, if using default columns).

## Feature issues

| Feature | Issue |
|---------|-------|
| Homepage | [#1](https://github.com/gurvindersethi/gollistic-healing-platform/issues/1) |
| About | [#2](https://github.com/gurvindersethi/gollistic-healing-platform/issues/2) |
| Booking | [#3](https://github.com/gurvindersethi/gollistic-healing-platform/issues/3) |
| Healing | [#4](https://github.com/gurvindersethi/gollistic-healing-platform/issues/4) |

New features → open a **Feature request** issue → add to the project → place in **📋 Backlog**.

## Workflow rules

1. **One issue per feature** (or epic); break sub-tasks into checklists or linked issues.
2. **Move the card** when work *starts* in a stage, not when it finishes.
3. **Comment on the issue** when moving to Planning or Designing — capture decisions (scope cuts, design choices, integrations).
4. **Link PRs** to issues (`Fixes #N` or `Relates to #N`) so history stays traceable.
5. **Done** means deployed (or merged to main with release notes) and acceptance criteria met.

## Setup (one-time)

The `gh` CLI needs the `project` scope:

```bash
gh auth refresh -h github.com -s project
```

Then run:

```bash
./.github/scripts/setup-project-board.sh
```

Or create manually in GitHub: **Projects → New project → Board** → add columns above → link this repository → add issues #1–#4.

## Related

- [Roadmap](./ROADMAP.md)
- [Project Blueprint](./PROJECT_BLUEPRINT.md)
- [Changelog](./CHANGELOG.md)
