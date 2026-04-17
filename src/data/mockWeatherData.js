const mockWeatherData = {
  "London": {
    current: {
      city: "London",
      temperature: 15,
      humidity: 70,
      windSpeed: 10,
      condition: "Partly Cloudy",
      icon: "☁️"
    },
    forecast: [
      { date: "Mon", tempMin: 12, tempMax: 16, condition: "Cloudy", icon: "☁️" },
      { date: "Tue", tempMin: 10, tempMax: 14, condition: "Rainy", icon: "🌧️" },
      { date: "Wed", tempMin: 13, tempMax: 17, condition: "Sunny", icon: "☀️" },
      { date: "Thu", tempMin: 11, tempMax: 15, condition: "Partly Cloudy", icon: "⛅" },
      { date: "Fri", tempMin: 14, tempMax: 18, condition: "Clear", icon: "☀️" }
    ]
  },
  "New York": {
    current: {
      city: "New York",
      temperature: 22,
      humidity: 60,
      windSpeed: 15,
      condition: "Clear",
      icon: "☀️"
    },
    forecast: [
      { date: "Mon", tempMin: 20, tempMax: 25, condition: "Clear", icon: "☀️" },
      { date: "Tue", tempMin: 21, tempMax: 26, condition: "Sunny", icon: "☀️" },
      { date: "Wed", tempMin: 18, tempMax: 22, condition: "Thunderstorms", icon: "⛈️" },
      { date: "Thu", tempMin: 19, tempMax: 23, condition: "Partly Cloudy", icon: "⛅" },
      { date: "Fri", tempMin: 20, tempMax: 24, condition: "Clear", icon: "☀️" }
    ]
  },
  "Tokyo": {
    current: {
      city: "Tokyo",
      temperature: 28,
      humidity: 80,
      windSpeed: 8,
      condition: "Rainy",
      icon: "🌧️"
    },
    forecast: [
      { date: "Mon", tempMin: 25, tempMax: 29, condition: "Rainy", icon: "🌧️" },
      { date: "Tue", tempMin: 26, tempMax: 30, condition: "Cloudy", icon: "☁️" },
      { date: "Wed", tempMin: 27, tempMax: 31, condition: "Sunny", icon: "☀️" },
      { date: "Thu", tempMin: 24, tempMax: 28, condition: "Rainy", icon: "🌧️" },
      { date: "Fri", tempMin: 25, tempMax: 29, condition: "Partly Cloudy", icon: "⛅" }
    ]
  },
  "Paris": {
    current: {
      city: "Paris",
      temperature: 18,
      humidity: 65,
      windSpeed: 12,
      condition: "Cloudy",
      icon: "☁️"
    },
    forecast: [
      { date: "Mon", tempMin: 16, tempMax: 20, condition: "Cloudy", icon: "☁️" },
      { date: "Tue", tempMin: 15, tempMax: 19, condition: "Rainy", icon: "🌧️" },
      { date: "Wed", tempMin: 17, tempMax: 21, condition: "Sunny", icon: "☀️" },
      { date: "Thu", tempMin: 14, tempMax: 18, condition: "Partly Cloudy", icon: "⛅" },
      { date: "Fri", tempMin: 16, tempMax: 20, condition: "Clear", icon: "☀️" }
    ]
  }
};

export const getWeatherData = (city) => {
  const normalizedCity = city.toLowerCase();
  for (const key in mockWeatherData) {
    if (key.toLowerCase() === normalizedCity) {
      return mockWeatherData[key];
    }
  }
  return null; // City not found
};
