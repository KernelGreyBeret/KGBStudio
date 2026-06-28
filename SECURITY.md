# Security Policy

## Private project warning

KGB Studio is intended to remain private until intentionally released.

Do not publish secrets, credentials, tokens, private project files, personal notes, or sensitive operational details.

## Reporting issues

Report security concerns directly to the repository owner.

## Security rules

- Do not commit API keys or credentials.
- Do not add remote scripts/CDNs unless intentionally approved.
- Prefer local/offline browser-native code.
- Avoid unnecessary dependencies.
- Treat export/build features carefully because they create downloadable files.
- Review service worker changes carefully because they affect offline caching.
