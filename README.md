# Firebase Transaction Bug: Silent Failure with Null Initial Value

This repository demonstrates a common issue encountered when using Firebase transactions where the initial value of the database entry is null.  The transaction might fail silently, leaving the application unaware of the problem. 

The `bug.js` file shows the problematic code.  `bugSolution.js` provides a corrected implementation.

## Problem
The transaction fails silently if the initial value of the referenced database node is null. The catch block of the .then() function doesn't catch the error, resulting in a failed transaction without any clear error message.