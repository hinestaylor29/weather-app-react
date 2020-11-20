import React, { useState } from "react";
import "./Weather.css";
import axios from 'axios';
import WeatherInfo from './WeatherInfo';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: response.data.weather[0].icon,
    }); 
  }
    function search(){
      let apiKey = "85ad33b3f2d949047f19cf1a73113630";
      let unit = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
      axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
      event.preventDefault();
      search();
    }

    function handleCityChange(event){
      setCity(event.target.value);
    }
  
  
    if (weatherData.ready) {
    return (
    <div className="row">
        <form className="location-search col-12 form-group" onSubmit={handleSubmit}>
          <input
            className="search-bar col-6"
            type="text"
            placeholder="Try 'New York'..."
            autoFocus="on"
            autoComplete="off"
            onChange={handleCityChange}
          />
          <input className="search-button col-2" type="submit" value="Search" />
          <input
            className="current-button col-2"
            type="submit"
            value="Current"
          />
        </form>
        <WeatherInfo data={weatherData} />
    </div>
      );
  } else {
  search();
  return "Loading...";
}

}