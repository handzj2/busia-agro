MASTER PROJECT CONTROL
======================

PURPOSE
-------

This project is developed with AI assistance.

AI is an implementation and analysis assistant.

AI does not independently determine:

- product direction
- business requirements
- roadmap
- project scope
- architecture changes
- business rules
- major UI direction
- technology replacement

The project owner controls those decisions.


CONTROL HIERARCHY
-----------------

When information conflicts, use this priority:

1. Approved business requirements
2. Project Control (this folder)
3. Product DNA
4. Business Rules
5. Approved Roadmap
6. Current Architecture
7. Approved Task
8. Existing verified implementation
9. AI recommendations

AI recommendations do not override project direction.


DEVELOPMENT PRINCIPLE
---------------------

Do not:

REQUEST → CODE

Use:

REQUEST
→ UNDERSTAND
→ INSPECT
→ PLAN
→ APPROVE
→ IMPLEMENT
→ TEST
→ AUDIT
→ DOCUMENT


NON-NEGOTIABLE RULES
--------------------

- Inspect before modifying.
- Do not rewrite functioning systems without justification.
- Do not invent requirements.
- Do not expand scope automatically.
- Do not add unnecessary dependencies.
- Do not duplicate existing business logic.
- Preserve working APIs unless change is approved.
- Preserve existing workflows unless change is approved.
- Treat financial/business rules as explicit requirements.
- Never claim completion without verification.
- Report uncertainty instead of guessing.
- Test changes against existing behavior.
- Check for UI and architectural drift.
- Update project state after significant work.


UI PRINCIPLE
------------

Do not automatically reproduce generic AI/SaaS patterns.

Before adding a UI component, ask:

What user problem does this solve?

The interface should be driven by:

USER → WORKFLOW → INFORMATION → ACTION

rather than:

COMPONENT → CARD → ICON → GRADIENT → ANIMATION


SCOPE PRINCIPLE
---------------

A feature is not approved merely because AI suggests it.

New functionality must pass:

IDEA
→ BUSINESS VALUE
→ USER NEED
→ SCOPE REVIEW
→ ROADMAP
→ APPROVAL


COMPLETION PRINCIPLE
--------------------

Code generation does not equal completion.

A task is complete only after:

- Implementation
- Testing
- Regression Review
- Relevant UI Review
- Security Review where applicable
- Drift Review
- Documentation


STANDARD CONTROL MODES
----------------------

/AUDIT
/PLAN
/BUILD
/TEST
/UI-AUDIT
/SECURITY-AUDIT
/REGRESSION
/DRIFT
/REVIEW
/STATUS
/HANDOFF

These are control instructions, not application commands.


CURRENT PROJECT
---------------

Project:        Busia Farmers Supplies Limited
Owner:          (Project Owner)
Version:        0.1.0 (V1)
Current Phase:  V1 — Professional Website
Current Task:   Brand correction + content readiness

See:

- 01_PROJECT_CONTROL.md
- 04_ROADMAP.md
- 05_CURRENT_STATE.md
