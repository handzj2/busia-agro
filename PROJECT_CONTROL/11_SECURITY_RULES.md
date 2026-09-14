SECURITY RULES
==============

V1 (Static Site)
----------------

- No secrets in client-side code.
- Environment variables that are public (e.g. Formspree ID) must use the `NEXT_PUBLIC_` prefix deliberately.
- Do not commit real credentials or private keys.
- Contact form submissions go to Formspree (or equivalent); do not store messages on the server in V1.
- External embeds (Google Maps) should use the official embed approach.


V2+ (When admin & database arrive)
----------------------------------

- All admin routes must require authentication.
- Use least-privilege database roles.
- Validate and sanitize all user input.
- Protect against common web vulnerabilities (XSS, CSRF, injection).
- Media uploads must be validated (type, size) and stored safely.
- Secrets stay in environment variables / secret manager — never in the repository.


GENERAL
-------

- Report any security concern immediately rather than implementing a workaround that weakens protection.
