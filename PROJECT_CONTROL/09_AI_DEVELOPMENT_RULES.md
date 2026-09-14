AI DEVELOPMENT RULES
====================

GENERAL
-------

- Always start a significant session by reading the control documents.
- Inspect existing code before proposing changes.
- Prefer the smallest safe change that solves the stated need.
- Do not expand scope.
- Do not add dependencies without clear justification and approval.
- Report uncertainty instead of guessing.
- Never claim a task is complete until the completion criteria in the task are met.


AI CHALLENGE RULES
------------------

Before implementing a significant change, AI must challenge its first solution.

QUESTION 1
What would the generic AI solution probably look like?

QUESTION 2
Why might that solution be inappropriate here?

QUESTION 3
What does the actual user need?

QUESTION 4
Can the existing implementation be reused?

QUESTION 5
What is the smallest safe architectural change?

QUESTION 6
What could this change break?

QUESTION 7
Does this introduce a new pattern unnecessarily?

QUESTION 8
Does this add functionality that was not requested?

QUESTION 9
Does the UI follow the project's Product DNA?

QUESTION 10
Would the user actually benefit from this change?

AI must not intentionally make a design unusual simply to appear different.

The objective is:

PURPOSE OVER PATTERN.
DOMAIN OVER TEMPLATE.
USER NEED OVER AI HABIT.
