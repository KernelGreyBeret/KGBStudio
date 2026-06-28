# Contributing to KGB Studio

KGB Studio is currently a private/proprietary project.

## Contribution policy

At this stage, direct commits to `main` should not be allowed.

All changes should go through pull requests.

## Branch workflow

Use feature branches:

```text
feature/sprite-forge-module
feature/runtime-preview
fix/mobile-layout
docs/project-format
```

## Before opening a pull request

- Keep the app browser-native: HTML, CSS, JavaScript.
- Do not add heavy dependencies without approval.
- Do not commit secrets, API keys, credentials, private notes, or tokens.
- Keep generated/exported files out of source unless intentionally adding examples.
- Test on desktop and mobile when practical.

## Commit message examples

```text
Add Sprite Forge module adapter
Fix mobile nav overflow
Document project format
```

## Protected files

Be extra careful changing:

- `src/core/`
- `src/runtime/`
- `src/modules/`
- `manifest.webmanifest`
- `sw.js`
- `.github/CODEOWNERS`
