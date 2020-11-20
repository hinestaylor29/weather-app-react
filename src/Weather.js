import React, { useState } from "react";
import "./Weather.css";
import axios from 'axios';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind:response.data.wind.speed,
      city: response.data.name,
      humitidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
      date: "Wednesday 10:00",
    }); 
  }

  if (weatherData.ready) {
    return (
  <div>
    <div className="row">
        <form className="location-search col-12 form-group">
          <input
            className="search-bar col-6"
            type="text"
            placeholder="Try 'New York'..."
            autoFocus="on"
            autoComplete="off"
          />
          <input className="search-button col-2" type="submit" value="Search" />
          <input
            className="current-button col-2"
            type="submit"
            value="Current"
          />
        </form>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="float-right">
          <img src={weatherData.iconUrl} id="icon" />
          </div>
        </div>

        <div className="col-6">
          <h1> {Math.round(temperature)} C </h1>
          <h1> {weatherData.city} </h1>

          <h4 className="text-capitalize">{weatherData.description}</h4>

          <h4> {weatherData.city} </h4>

          <span className="units">
            <a href="/" className="active">
              °C{" "}
            </a>{" "}
            |<a href="/">°F</a>
          </span>
          <p className="metadata"> {weatherData.humidity}%</p>
          <p className="metadata"> {weatherData.wind}km/h</p>
        </div>
      </div>
    </div>
      );
  } else {
  let apiKey = "85ad33b3f2d949047f19cf1a73113630";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}

}