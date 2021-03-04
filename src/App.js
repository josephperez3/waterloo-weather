import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [temp, setTemp] = useState([0]);
  const [weatherDesc, setWeatherDesc] = useState(["sunny"]);

  useEffect(() => {
    const getWeather = async () => {
      const weatherData = await fetchWeather();
      setWeather(weatherData);
    };

    getWeather();
  });

  const fetchWeather = async () => {
    const res = await fetch(
      "https://community-open-weather-map.p.rapidapi.com/weather?q=waterloo%2Cca&lat=0&lon=0&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "a057469186mshb36968c03eead5bp1a5299jsn3f5b78a031f7",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();

    console.log(data);
    console.log(data.main.temp);
    console.log(data.weather[0].description);

    return data;
  };

  const setWeather = (weatherData) => {
    setTemp((weatherData.main.temp - 273.15).toFixed(1));
    setWeatherDesc(weatherData.weather[0].description);
  };

  return (
    <>
      <p>Temperature: {temp}°C</p>
      <p>Weather: {weatherDesc}</p>
    </>
  );
}

export default App;
