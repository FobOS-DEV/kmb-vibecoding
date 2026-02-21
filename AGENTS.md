# AGENTS.md

## Goal
Build features in small, reviewable steps with clear commits.

## Rules
1. One task = one commit.
2. Do not edit unrelated files.
3. Ask before adding dependencies.
4. Keep README/TASKS updated when behavior changes.
5. Write simple, readable code.
6. Prefer small PRs (<200 lines changed when possible).
7. Never commit secrets (.env, tokens, keys).

## Workflow
1. Read TASKS.md and pick one unchecked item.
2. Implement minimal working version.
3. Run local checks (if available).
4. Commit with conventional message.
5. Open PR with short summary and checklist.

## Done Criteria
- Task implemented
- No obvious regressions
- Diff is focused and understandable
