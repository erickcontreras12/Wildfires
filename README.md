# Information for Wildfire Coding Challenge project

## Set up and run

The set of instrucctions to set the project involves the next:

- For both projects (API and frontend-wildfires) need to run the `npm i` command to install all the required libraries
- For API project, you can run the project using `npm run debug` command, this runs the project using "nodemon" and helps the developer to reset the API every time a change is made
- For frontend-wildfires, built with React, a basic `npm start` will set eveything up and running.
- An **important** note is that the API is set to run on port 4001 on the local env, if you need to change the port you can:
  - Go to `.env` file in the API project and change the value there
  - Go to `/src/services/dataService.js` inside frontend-wildfires folder and change the value of the API_BASE_URL constant

Make sure this is done and double-checked before trying to test the project.

Other important note is that the project was built with nodejs v18.12.1 and React v18.2.0

## Characteristics

This are notes related to the main requirements provided in the information

1. Regarding the NASA EONET API and the requirement that states
   > The route should return a list of wildfires that ended in the month and year provided by the user

First, as the NASA API is made to response with data of multiple types of natural disasters and the requirements only mentioned wildfires the param provided by NASA was used to only get the disasters only the category of `Wildfire`. Even thought, the project allows the user to add more categories inside a "filter array" to check more categories if needed without the need of a big change on the code.

And for the requirement of only returning wildfires that ended in the month and year provided by the user, the API handles another param for the "state" of the disaster if the param is not provided by default the response only displays information for open/in progress disasters. So the parameter was used and the request only gets "closed" disasters.

2. In response to requiment that clarifies:
   > Create a single API route using node.js that will accept month and year query
   > parameters and returns all wildfire events that ended in that particular month. Format of
   > the month parameter shall be MMM and YYYY for year. For example, the endpoint query
   > for December 2022 should be {your route}?month=DEC&year=2021

As required only 1 endpoint was created on the API, once a request is done the funcionality is set to fetch information from the NASA API and after that filter based on the dates

3. For the note that says:
   > A month that did not have any wildfires ending should return a text saying “Oh
   > No!”

As following the information in point 1 and the note, the message is displayed as a modal on the UI once you select a month that doesn't return information of any closed/ended wildfire. This means for example that any date in the future will show the message and as well as a month that did have on going fires but not even a single one of them was controlled or extinguish during the time.

## Testing

Some helpful values that can help with the testing of the projects to validate requirements are:

- FEB 2019, has list of wildfires for 6 countries
- JUL 2023, doesn't have wildfires

### Author

Erick Contreras 
Email: eecontrerasg98@gmail.com
