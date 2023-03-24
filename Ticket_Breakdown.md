# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Tickets:

- First of all, we need to fetch all the facilities `getFacilities` on our platform and then we need to fetch all the shifts by each facilities i.e. `getShiftsByFacility`. The metadata should have a data fields like `Agent id`, `Agent name`, `Facility name`, `Facility email`, `Shift timing`, `Total hours`, `Location`, `Shift date` etc.

  1. Acceptance criteria: On the facilities list view, `getFacilities` function should be called and it should fetch/render all the facilities. If there are no facilities, then show th valid informative message in the list view.
  2. Estimation: Assuming backend API is ready and UI is simple, 3-4 hours to finish the list view, informative message and a few test cases.

- We can show the **Generate report** button on the facilities table. Based on the `Agent id` that we saw in `getShiftsByFacility` function, we will sum up all the shifts for all the agents and create a valid pdf file. Once generated we will send the pdf automatically to the `Facility email`.

  1. Acceptance criteria: On the facilities list view, need to add a 'Generate report' button on the list view. When clicked `generateReport` function is called and PDF is generated in the valid form and sent to the facility automatically when finished(Show success banner). If there is any error then show the error banner.
  2. Estimation: Assuming backend API is ready and UI is simple, 6-8 hours to finish the (adding button, banner showing stuff, pdf generation logic/library, test cases).
  3. Need to check if there is an easy to use library available that can be used for pdf generation and use it.
