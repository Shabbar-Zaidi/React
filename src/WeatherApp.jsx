import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import React, { useState } from "react";


export default function WeatherApp() {
  const [ weatherInfo, setWeatherInfo ] = useState({
    city: "Lahore",
    temp: 23,
    tempMin: 20,
    tempMax: 25,
    humidity: 50,
    feelsLike: 25,
    weather: "Cloudy",
  });
  let updateInfo = (result) => {    // This function is passed as props to SearchBox.jsx
    setWeatherInfo(result);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App by Shabbar Zaidi</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
