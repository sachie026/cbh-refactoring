This project contains two challenges - a "Ticket Breakdown" challenge and a "Refactoring" challenge. The two challenges are unrelated, but you should complete both in the same folder and share the link in Coderbyte. Any written answers should be included in markdown files within this folder.

## [Ticket Breakdown](Ticket_Breakdown.md)

## [Refactoring](Refactoring.md)

- Changed the variable TRIVIAL_PARTITION_KEY to meaningful name.
- Function input variable name changed to partition, because we are passing the useful partition(not any random event) and then doing the further operation on the key.
- Candidate variable name was a confusing one and so I have replaced it with "partitionKeyOutput". W=

If you are a JS novice, here's how to get started:

1. [Install Node.js](https://nodejs.org/en/download/) (we use `^16`, the latest LTS)
2. Run `npm i` in this repo to install dependencies
3. Run `npm test` to run the automated tests
4. Run `npm start` to launch `index.js` for any manual testing
