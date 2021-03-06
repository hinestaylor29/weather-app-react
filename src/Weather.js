import React, { useState } from "react";
import "./Weather.css";
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from "./WeatherForecast";

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
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
            className="search-bar col-9"
            type="text"
            placeholder="Try 'New York'..."
            autoFocus="on"
            autoComplete="off"
            onChange={handleCityChange}
          />
          <input className="search-button col-2" type="submit" value="Search" />
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData} city={weatherData.city}/>
    </div>
      );
  } else {
  search();
  return "Loading...";
}

}