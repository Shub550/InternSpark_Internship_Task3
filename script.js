const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");

const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

const weatherThemes = [
    "weather-clear",
    "weather-cloudy",
    "weather-overcast",
    "weather-rain",
    "weather-storm",
    "weather-snow",
    "weather-fog"
];

// Search button click
searchBtn.addEventListener("click", getWeather);

// Search when Enter is pressed
cityInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

// Main function
async function getWeather() {
    const city = cityInput.value.trim();

    // Check if input is empty
    if (city === "") {
        message.textContent = "Please enter a city name.";
        return;
    }

    try {
        // Show loading message
        message.textContent = "Loading weather data...";
        searchBtn.disabled = true;

        // Step 1: Get city coordinates using geocoding API
        const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        const geoResponse = await fetch(geoURL);

        if (!geoResponse.ok) {
            throw new Error("Unable to search for city.");
        }

        const geoData = await geoResponse.json();

        // Check if city exists
        if (!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found. Please enter a valid city.");
        }

        const location = geoData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;

        // Step 2: Fetch weather data
        const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;

        const weatherResponse = await fetch(weatherURL);

        if (!weatherResponse.ok) {
            throw new Error("Unable to fetch weather data.");
        }

        const weatherData = await weatherResponse.json();

        const current = weatherData.current;

        // Step 3: Display weather data
        cityName.textContent = `${location.name}, ${location.country}`;
        temperature.textContent = `${current.temperature_2m}°C`;
        humidity.textContent = `${current.relative_humidity_2m}%`;
        windSpeed.textContent = `${current.wind_speed_10m} km/h`;

        // Get weather description, icon, and background theme
        const weather = getWeatherDescription(current.weather_code);

        description.textContent = weather.description;
        weatherIcon.textContent = weather.icon;
        applyWeatherTheme(weather.theme);

        // Clear message
        message.textContent = "";

    } catch (error) {
        message.textContent = error.message;
    } finally {
        searchBtn.disabled = false;
    }
}

function applyWeatherTheme(theme) {
    document.body.classList.remove(...weatherThemes);
    document.body.classList.add(theme);
}

// Convert weather codes into descriptions and icons
function getWeatherDescription(code) {
    if (code === 0) {
        return {
            description: "Clear sky",
            icon: "☀️",
            theme: "weather-clear"
        };
    }

    if (code === 1 || code === 2) {
        return {
            description: "Mostly clear",
            icon: "🌤️",
            theme: "weather-cloudy"
        };
    }

    if (code === 3) {
        return {
            description: "Overcast",
            icon: "☁️",
            theme: "weather-overcast"
        };
    }

    if (code >= 45 && code <= 48) {
        return {
            description: "Fog",
            icon: "🌫️",
            theme: "weather-fog"
        };
    }

    if (code >= 51 && code <= 67) {
        return {
            description: "Drizzle or rain",
            icon: "🌧️",
            theme: "weather-rain"
        };
    }

    if (code >= 71 && code <= 77) {
        return {
            description: "Snow",
            icon: "❄️",
            theme: "weather-snow"
        };
    }

    if (code >= 80 && code <= 82) {
        return {
            description: "Rain showers",
            icon: "🌦️",
            theme: "weather-rain"
        };
    }

    if (code >= 95) {
        return {
            description: "Thunderstorm",
            icon: "⛈️",
            theme: "weather-storm"
        };
    }

    return {
        description: "Unknown weather",
        icon: "🌡️",
        theme: "weather-cloudy"
    };
}