import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { getWeatherData } from './data/mockWeatherData';
import './App.css';

function App() {
  const [city, setCity] = useState('London');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = (cityName) => {
    setError('');
    const data = getWeatherData(cityName);
    if (data) {
      setCurrentWeather(data.current);
      setForecast(data.forecast);
    } else {
      setError(`Weather data for "${cityName}" not found. Try London, New York, Tokyo, or Paris.`);
      setCurrentWeather(null);
      setForecast([]);
    }
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() !== '') {
      setCity(searchTerm);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        {error && <p className="error-message">{error}</p>}
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast.length > 0 && <Forecast data={forecast} />}
      </main>
    </div>
  );
}

export default App;
