import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState(""); // ville saisie par utilisateur 
  const [weatherData, setWeatherData] = useState(null); // les données de l'api 

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      console.log(response)
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getIconUrl = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}.png`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrer le nom de la ville"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">Obtenir la météo</button>
      </form>
      {weatherData && (
        <div>
          <div className="container_city">
            <img
              src={getIconUrl(weatherData.weather[0].icon)}
              alt={weatherData.weather[0].description}
            />
            <h2>{weatherData.name}</h2>
            <p>{weatherData.main.temp}°C</p>
          </div>
            
        </div>
      )}
    </div>
  );
};

export default Weather;