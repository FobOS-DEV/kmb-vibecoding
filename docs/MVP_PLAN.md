# MVP Plan (v0.2.0)

## Goal
Сделать полезный CLI-инструмент для генерации slug с удобным UX и качеством “готово к использованию”.

## Scope
1. Улучшить CLI:
- поддержка stdin
- флаги `--help`, `--version`, `--strict`
2. Улучшить slugify:
- edge-cases
- стабильная обработка кириллицы
3. Качество:
- unit + cli tests
- CI checks (test + lint)

## Out of Scope
- публикация в npm
- GUI
- многозадачные режимы

## Success Criteria
- Все тесты проходят
- CI зелёный
- README содержит примеры использования
