## Weather Forecast App

### Technical specification

0. Prerequisites
   • Use React.js and Nest.js as frontend and backend stacks
   • Free geolocation search API at https://nominatim.org/release-docs/develop/api/Search/. Example: https://nominatim.openstreetmap.org/search?city=newark&format=json&state=california
   • Free Weather forecast API at https://www.weather.gov/documentation/services-web-api. Example: https://api.weather.gov/points/37.5297,-122.0402; then use the “forecast” link from the returned json to find the current temperature value
1. Frontend
   a. Display submit form with an input box that allows to receive a comma separated US city names.
   b. After clicking the submit button, call the backend to retrieve their temperatures and display as a list in the frontend.
2. Backend
   a. Based on REST API(s) implemented using Nest.js
   b. Use Geolocation search API to get geolocation of each city.
   c. Use Weather forecast API to retrieve current temperature for each city.
   d. Return the aggregated result of all cities to the frontend.
