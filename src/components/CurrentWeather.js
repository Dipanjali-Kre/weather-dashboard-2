import React from 'react';
import './CurrentWeather.css';

function CurrentWeather({ data }) {
  if (!data) {
    return null;
  }

  const { city, temperature, humidity, windSpeed, condition, icon } = data;

  return (
    <div className="current-weather-card">
      <h2>{city}</h2>
      <div className="weather-icon">{icon}</div>
      <p className="temperature">{temperature}°C</p>
      <p>Condition: {condition}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} km/h</p>
    </div>
  );
}

export default CurrentWeather;
