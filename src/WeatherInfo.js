import React from 'react';
import FormattedDate from './FormattedDate';
import UnitConversion from "./UnitConversion";


export default function WeatherInfo(props){
    return(
    <div className="row">
        <div className="col-6">
          <div>
          <img src={props.data.iconUrl} alt="weather icon" id="icon" />
          </div>
        </div>

        <div className="col-6">
          <UnitConversion celsius={props.data.temperature} />
          <h1> {props.data.city} </h1>

          <h4 className="text-capitalize">{props.data.description}</h4>

          <h4> <FormattedDate date={props.data.date}/> </h4>
          <p className="metadata"> {props.data.humidity} %</p>
          <p className="metadata"> {props.data.wind} km/h</p>
        </div>
      </div>
);
}