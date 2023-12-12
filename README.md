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

### Project structure

```
src                                 # Frontend React.js part
└───@types                          # @types refers to TypeScript type definitions for external libraries. It helps provide type information for the libraries used in the project, enabling better type checking and editor support.
└───CommunicationLayer              # The Communication layer is handling communication with external services or APIs.
└───Constants                       # The Constants layer is used to define constant values, such as configuration settings, API endpoints, error messages, and other static data that is used across the application.
└───DataLayer                       # The DataLayer typically handles interactions with the application's data sources, such as making API calls, interacting with databases, and managing the application's data. It helps separate data-related logic from other parts of the application.
└───FeatureFlags                    # The FeatureFlags layer is used to manage feature flags or feature toggles, which allow certain features of the application to be dynamically enabled or disabled without changing the code.
└───Interfaces                      # The Interfaces layer includes TypeScript or Flow type definitions for data structures and APIs, helping to enforce type safety and provide clear interfaces for the application's data.
└───Navigation                      # The Navigation layer handles routing and navigation within the application, including defining the application's routes and managing the navigation state.
└───Shared                          # The Shared layer contains shared components, utilities, and other code that is used across different parts of the application.
└───ViewLayer                       # The ViewLayerincludes the presentation components of the application, such as the UI components, screens, and other elements that are directly visible to the user.


nestjs_modules                      # Server/ backend Nest.js part
    └───shared                      # TS functions to use across this module
    └───types                       # Types applied
    │   weather.controller.ts       # Controller is responsible for handling incoming requests, processing them, and returning the appropriate response to the client
    │   weather.module.ts           # Module is used to organize the application into cohesive blocks of functionality.
    │   weather.service.ts          # Services is responsible for encapsulating the application's business logic and data manipulation

```
