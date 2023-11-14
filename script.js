$(document).ready(function() {
    // Initialize Leaflet map
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Example function to fetch and display weather data
    function fetchWeatherData() {
        // Use jQuery to make an AJAX request to a weather API
        // Update the chart with the fetched data
    }

    // Initialize Chart.js chart
    var ctx = document.getElementById('weather-chart').getContext('2d');
    var weatherChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [], // Fill with data
            datasets: [{
                label: 'Temperature',
                data: [], // Fill with data
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Call the function to fetch and display data
    fetchWeatherData();
});
