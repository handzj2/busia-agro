TESTING RULES
=============

V1 (Current)
------------

- Manual verification of all pages on mobile and desktop widths.
- Confirm all internal links and navigation work.
- Confirm WhatsApp and phone links open correctly.
- Confirm contact form behavior (with and without Formspree ID).
- Visual regression check against Product DNA after any UI change.
- Content check: no remaining "PLACEHOLDER" text on public pages intended for launch.


FUTURE (V2+)
------------

- Unit tests for business logic and data mappers.
- Integration tests for API / server actions.
- Authentication and authorization tests.
- Regression suite for public pages after content schema changes.


GENERAL
-------

- Never claim completion without verification.
- Prefer testing against real or realistic content rather than empty states only.
- After any change that touches shared components, check the pages that consume them.
