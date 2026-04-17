import React from 'react';
import './Forecast.css';

function Forecast({ data }) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="forecast-section">
      <h3>5-Day Forecast</h3>
      <div className="forecast-cards-container">
        {data.map((day, index) => (
          <div key={index} className="forecast-card">
            <h4>{day.date}</h4>
            <div className="weather-icon">{day.icon}</div>
            <p>Min: {day.tempMin}°C</p>
            <p>Max: {day.tempMax}°C</p>
            <p>{day.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
