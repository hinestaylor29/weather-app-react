import React, { useState } from 'react';

export default function UnitConversion(props){
    const[unit, setUnit]= useState("celsius");
    
    function convertFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertCelsius(event){
        event.preventDefault();
        setUnit("celsuis");
    }


    if (unit === "celsius"){
    return (
        <span>
            <span className="temp">{Math.round(props.celsius)}</span>{" "}
              °C{" "}
            {" "}
            |<a href="/" onClick={convertFahrenheit} >°F</a>
        </span>
    );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
        return (
        <span>
            <span className="temp">{Math.round(fahrenheit)}</span>{" "}
            <a href="/" onClick={convertCelsius}>
              °C{" "}
            </a>{" "}
            |°F
        </span>
        );
    }
}