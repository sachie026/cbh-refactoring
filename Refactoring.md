# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- No need to set 'candidate = TRIVIAL_PARTITION_KEY' manually inside else part, we can just move it to return statement and return it conditionally at the end.
- Changed the variable TRIVIAL_PARTITION_KEY to meaningful name.
- Function input variable name changed to partition, because we are passing the useful partition(not any random event) and then doing the further operation on the key.
- Candidate variable name was a confusing one and so I have replaced it with "partitionKeyOutput".
- Added a few jest tests that covers almost all the use cases for the function.
