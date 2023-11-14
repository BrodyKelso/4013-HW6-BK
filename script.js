$(document).ready(function() {
    // Define the URL for the Open-Meteo API
    const weatherApiUrl = 'https://api.open-meteo.com/v1/forecast';

    // Function to fetch and display current weather
    function fetchCurrentWeather() {
        $.ajax({
            url: weatherApiUrl,
            data: {
                // Add required parameters for Open-Meteo API request
                latitude: '35.2226', // Latitude for Norman, OK
                longitude: '-97.4395', // Longitude for Norman, OK
                current: true,
            },
            success: function(response) {
                // Update the current weather section with the response data
                $('#temp').text(response.current_weather.temperature);
                $('#wind-speed').text(response.current_weather.windspeed);
                $('#humidity').text(response.current_weather.humidity);
                // Add more data updates as required
            },
            error: function() {
                alert('Error fetching current weather data');
            }
        });
    }

    // Function to fetch and display weather forecast
    function fetchWeatherForecast() {
        $.ajax({
            url: weatherApiUrl,
            data: {
                // Add required parameters for Open-Meteo API request
                latitude: '35.2226',
                longitude: '-97.4395',
                daily: ['temperature_2m_max', 'temperature_2m_min'],
                timezone: 'America/Chicago', // Timezone for Norman, OK
            },
            success: function(response) {
                // Process and display forecast data
                // Example: Update a Chart.js chart with forecast data
            },
            error: function() {
                alert('Error fetching weather forecast data');
            }
        });
    }

    // Call the functions to fetch and display data
    fetchCurrentWeather();
    fetchWeatherForecast();

    // Initialize Leaflet map centered on Norman, OK
    var map = L.map('map').setView([35.2226, -97.4395], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
});
