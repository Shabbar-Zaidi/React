import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather"; // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}     // https://openweathermap.org/current#geocoding
  const API_KEY = "f817a8c6a266fa7caf4c352e576dfedb";


  let getWeatherInfo = async () => {
    try{
      // API call
    // let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    ); // units=metric for Celsius
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      temMin: jsonResponse.main.temp_min,
      temMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
    } catch(error){
      throw error;
    }
  };

  let handleChange = (event) => {
    // console.log(event.target.value);
    setCity(event.target.value);
  };

  let handleSubmit = async (e) => {
    try{
      e.preventDefault();
    console.log("City name:", city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    } catch(error){
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color: "red"}}>No such place in our APi database</p>}
      </form>
    </div>
  );
}
