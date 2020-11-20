import React from 'react';
import './App.css';
import Weather from "./Weather";
import Attribution from "./Attribution";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      </div>
     <Attribution />
    </div>
  );
}
