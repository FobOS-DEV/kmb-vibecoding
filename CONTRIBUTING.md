# CONTRIBUTING

## Branching
- Main branch: `main`
- New work: `feature/<short-name>`
- Fixes: `fix/<short-name>`
- Docs: `docs/<short-name>`

## Commit Convention
Use format:
`type: short description`

Allowed types:
- `feat` — new functionality
- `fix` — bug fix
- `docs` — documentation only
- `chore` — maintenance/setup/refactor without feature change

Examples:
- `feat: add tasks endpoint`
- `fix: handle empty input in validator`
- `docs: update README with setup steps`
- `chore: add eslint config`

## Pull Requests
Before opening PR:
1. `git status` is clean
2. Changes are focused (no unrelated files)
3. Description explains what and why
4. No secrets in files

## Rule of Thumb
Small PRs are better than big PRs.
One task = one commit (when possible).
