🌦️ Weather App | InternSpark Internship Task

A responsive web-based Weather App developed as part of the InternSpark Internship Program. The application allows users to search for any city and view its current weather information using public REST APIs.

The project demonstrates API integration, asynchronous JavaScript, DOM manipulation, and responsive web design.

📌 Project Overview

The Weather App retrieves live weather data from the Open-Meteo API based on the city entered by the user.

It displays important weather information such as:

- City name and country
- Current temperature
- Weather condition
- Humidity
- Wind speed

The application uses the JavaScript Fetch API to communicate with the weather service and dynamically update the user interface.

🎯 Project Objectives

- Understand how public REST APIs work.
- Integrate external APIs into a web application.
- Use JavaScript Fetch API to send HTTP requests.
- Retrieve geographic coordinates using a city name.
- Fetch and display live weather information.
- Handle loading states and API errors.
- Build a responsive and user-friendly interface.

🛠️ Technologies Used

Technology| Purpose
HTML5| Structure of the application
CSS3| Styling, layout, and responsive design
JavaScript| API integration and dynamic functionality
Fetch API| Sending HTTP requests
Open-Meteo API| Retrieving geocoding and weather data
JSON| Data exchange format

📂 Project Structure

Weather_App/
│
├── index.html     
├── style.css      
├── script.js       
│
└── report/        

🌐 APIs Used

This project uses the Open-Meteo API, which provides weather and geocoding data without requiring an API key.

1. Geocoding API

Endpoint:

https://geocoding-api.open-meteo.com/v1/search

Purpose:

- Converts a city name into geographic coordinates.
- Retrieves latitude and longitude.
- Provides location information such as city and country.

2. Weather Forecast API

Endpoint:

https://api.open-meteo.com/v1/forecast

Purpose:

- Retrieves current weather measurements using geographic coordinates.
- Provides temperature, humidity, wind speed, and weather codes.

Weather parameters used:

temperature_2m
relative_humidity_2m
weather_code
wind_speed_10m

✨ Features

- 🔍 Search weather by city name.
- 🌡️ Display current temperature in Celsius.
- 🌤️ Show weather conditions with matching emoji icons.
- 💧 Display relative humidity percentage.
- 💨 Display wind speed in km/h.
- 🌍 Show city and country information.
- ⏳ Loading message while fetching data.
- ⚠️ Error handling for invalid city names and failed requests.
- ⌨️ Search using the Enter key.
- 📱 Responsive design for different screen sizes.
- 🎨 Modern dark-gradient user interface.

⚙️ How It Works

1. The user enters a city name in the search field.
2. The application sends a request to the Geocoding API.
3. The API returns the city's latitude and longitude.
4. The application sends a second request to the Weather Forecast API.
5. The weather API returns current weather data in JSON format.
6. JavaScript processes the response and updates the webpage.
7. The user sees the weather information for the selected city.

🚀 Getting Started

Prerequisites

You need:

- A web browser such as Google Chrome or Microsoft Edge.
- Visual Studio Code (recommended).
- An internet connection.

Installation

1. Clone or download this repository.

2. Open the project folder in Visual Studio Code.

3. Make sure the following files are present:
   
    index.html
    style.css
    script.js

4. Open "index.html" in your browser.
   
   Alternatively, use the Live Server extension in VS Code to run the application.

5. Enter a city name and click the Search button.

6. View the current weather information.

📚 Learning Outcomes

Through this project, I learned:

- How APIs are used in real-world web applications.
- How to make asynchronous requests using "fetch()".
- How to work with "async/await" in JavaScript.
- How to process JSON responses from APIs.
- How to dynamically update webpage content using DOM manipulation.
- How to implement basic error handling using "try", "catch", and "finally".
- How to design responsive web interfaces using HTML and CSS.

👨‍💻 Author

Shubham

🏢 Internship

InternSpark – Internship Task