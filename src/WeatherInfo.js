import React from 'react';
import FormattedDate from './FormattedDate';
import UnitConversion from "./UnitConversion";
import "./WeatherInfo.css";


export default function WeatherInfo(props){
    return(
    <div className="row weather-info">
        <div className="col-6">
          <div>
          <img src={props.data.iconUrl} alt="weather icon" id="icon" />
          </div>
        </div>

        <div className="col-6">
          <UnitConversion celsius={props.data.temperature} />
          <h2> {props.data.city} </h2>

          <h5 className="text-capitalize">{props.data.description}</h5>

          <h6> <FormattedDate date={props.data.date}/> </h6>
          <p className="metadata"> Humidity: {props.data.humidity} %</p>
          <p className="metadata"> Windspeed: {props.data.wind} km/h</p>
        </div>
      </div>
);
}