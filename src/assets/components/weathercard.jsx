import React, { useState, useEffect } from 'react';



function WeatherApp(){


const WeatherCard = ({ city, temperature, condition, icon }) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <div className="weather-info">
        <img src={icon} alt={condition} className="weather-icon" />
        <div className="weather-details">
          <span className="temperature">{temperature}°C</span>
          <span className="condition">{condition}</span>
        </div>
      </div>
    </div>
  );
};

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // List of cities to display
  const cities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney',"Kampala",
        "London",
        'Berlin',
  'Beijing',
  'Moscow',
  'Los Angeles',
  'Hong Kong',
  'Bangkok',
  'Rome',
  'Chicago',
  'Seoul'];

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = '640695a6ce024ba0972150012252805'; // Replace with your actual API key
        const promises = cities.map(city =>
          fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
            .then(response => {
              if (!response.ok) {
                throw new Error(`Failed to fetch data for ${city}`);
              }
              return response.json();
            })
        );

        const results = await Promise.all(promises);
        const formattedData = results.map((result, index) => ({
          city: cities[index],
          temperature: result.current.temp_c,
          condition: result.current.condition.text,
          icon: result.current.condition.icon
        }));

        setWeatherData(formattedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div className="loading">Loading weather data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="weather-app">
      <h1>Weather Dashboard</h1>
      <div className="weather-cards-container">
        {weatherData.map((weather, index) => (
          <WeatherCard
            key={index}
            city={weather.city}
            temperature={weather.temperature}
            condition={weather.condition}
            icon={weather.icon}
          />
        ))}
      </div>
    </div>
  );
};
}
export default WeatherApp;