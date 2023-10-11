import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const locationData = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=da9a7ad69d36c5baeabfccfe7cec1f30`
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });

    setLocation("");
  };

  return (
    <div className="App">
      <div className="input-data">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        ></input>
        <button onClick={locationData}>Go</button>
      </div>
      <div className="location">
        <p>{data.name}</p>
      </div>
      {data.main && data.weather ? (
        <div>
          <div className="temp">
            <h1>{data.main.temp}°C</h1>
          </div>
          <div className="description">
            <p>{data.weather[0].main}</p>
          </div>
          <div className="feels">
            <p>{data.main.feels_like}</p>
          </div>
          <p>Feels like</p>
          <div className="humidity">
            <p>{data.main.humidity}%</p>
          </div>
          <div className="wind">
            <p>{data.wind.speed}MPH</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
