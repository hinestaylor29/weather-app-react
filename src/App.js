import React from 'react';
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity= "New York"/>
      </div>
     <footer className="footer">
            <a href="https://github.com/hinestaylor29/weather-app-react"> Open-source code </a> by Taylor Hines 🤠
        </footer>
    </div>
  );
}
