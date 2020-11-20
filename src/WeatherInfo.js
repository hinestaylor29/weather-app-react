import React from 'react';
import FormattedDate from './FormattedDate';


export default function WeatherInfo(props){
    return(
    <div className="row">
        <div className="col-4">
          <div className="float-right">
          <img src={props.data.iconUrl} alt="weather icon" id="icon" />
          </div>
        </div>

        <div className="col-6">
          <h1> {Math.round(props.data.temperature)} °C </h1>
          <h1> {props.data.city} </h1>

          <h4 className="text-capitalize">{props.data.description}</h4>

          <h4> <FormattedDate date={props.data.date}/> </h4>

          <span className="units">
            <a href="/" className="active">
              °C{" "}
            </a>{" "}
            |<a href="/">°F</a>
          </span>
          <p className="metadata"> {props.data.humidity} %</p>
          <p className="metadata"> {props.data.wind} km/h</p>
        </div>
      </div>
);
}