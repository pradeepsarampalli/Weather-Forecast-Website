Weather Application

This is a dynamic weather web application that allows users to search for the weather details of various cities. It 
uses the OpenWeather API to fetch weather data and provides information like temperature, humidity, wind speed, sunrise, sunset, and more.

Features

Search for any city to get real-time weather updates.
Display current weather for popular cities with a single click.
Fetch weather data based on the user's current location.
User-friendly UI optimized for both desktop and mobile devices.

Displays key weather parameters like:
Temperature (current, minimum, and maximum)
Humidity
Wind Speed
Pressure
Sunrise and Sunset times
Visibility
Cloud percentage
Technologies Used

HTML: For structuring the web pages.
CSS: For styling and responsive design.
JavaScript: For API integration and dynamic content rendering.

APIs:
OpenWeather API for weather data.
Geocode API for geolocation data.

Project Structure

├── index.html           # Main HTML file
├── weather.css          # Stylesheet
├── weather.js           # JavaScript logic for API calls and interactivity
├── wesiteicon/          # Icons used for the website
├── searchsection-images # Images for search and location buttons
├── leftsection-images   # Images for left-section weather parameters
├── centersection-images # Images for center-section weather parameters
├── rightsection-images  # Images for right-section weather parameters
├── notfound-image       # Image for 'not found' error state

How to Use

Clone the repository:
git clone https://github.com/your-username/weather-app.git
Navigate to the project directory:
cd weather-app


Replace the placeholders your-geocode-api-here and your-openweather-api-here in weather.js with your respective API keys.
Search for a city or click on one of the pre-listed city buttons to get weather data.

Installation
No external dependencies are required. Simply open the index.html file in your browser after setting up API keys.



API Keys

Sign up for the OpenWeather API to get a key for fetching weather data.
Use the Geocode API for geolocation data.

Replace the placeholders in weather.js with your API keys:
let apiGeocode = "your-geocode-api-here";
let apiOpenWeather = "your-openweather-api-here";

Responsive Design

The application is designed to be fully responsive and works seamlessly on:
Desktop browsers
Mobile browsers

Known Issues

The application currently does not handle edge cases where the APIs fail to return data due to network issues.
Location-based weather fetching requires user permission to access location data.


Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request to improve the app.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any inquiries or issues, feel free to contact:

GitHub: pradeepsarampalli
