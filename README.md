# Weather Dashboard

A simple React.js application that displays current weather conditions and a 5-day forecast for a given city. This project uses mock data instead of a real API for demonstration purposes.

## Features

-   **City Search:** Look up weather information for different cities.
-   **Current Weather:** Displays temperature, humidity, wind speed, and weather condition.
-   **5-Day Forecast:** Shows a brief forecast for the next five days, including min/max temperatures and conditions.
-   **Mock Data:** Uses predefined mock data for a few cities (London, New York, Tokyo, Paris).

## Available Cities for Mock Data

To see weather data, search for one of the following cities:

-   `London`
-   `New York`
-   `Tokyo`
-   `Paris`

Searching for any other city will display an error message.

## Technologies Used

-   React.js
-   HTML5
-   CSS3

## Project Structure

```
weather-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CurrentWeather.js
│   │   ├── CurrentWeather.css
│   │   ├── Forecast.js
│   │   ├── Forecast.css
│   │   ├── SearchBar.js
│   │   └── SearchBar.css
│   ├── data/
│   │   └── mockWeatherData.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
├── README.md
└── yarn.lock (or package-lock.json)
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your system.

-   [Node.js](https://nodejs.org/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/weather-dashboard.git
    cd weather-dashboard
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the development server:

```bash
npm start
# or
yarn start
```

This will open the application in your browser at `http://localhost:3000`.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
