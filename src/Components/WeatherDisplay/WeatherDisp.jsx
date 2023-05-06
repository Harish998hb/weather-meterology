import React, { useEffect, useState } from "react";
import "./weatherDisp.css";
import apiCall, { apiKey } from "../../Auth/auth";

const WeatherDisp = () => {
  const [location, setLocation] = useState('London');
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({});

  useEffect(()=>{
    let fetchData=apiCall.get("/current.json", {
      params: {
        key: apiKey,
        q: location,
      },
    }).then((res)=>{
      setWeatherInfo(res.data);
    }).catch((err)=>{
      console.error(err);
    })
  },[location])
  function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    fthWeatherByLocationCoords();
  }

  function fthWeatherByLocationCoords() {
    let fetchData = apiCall
      .get("/current.json", {
        params: {
          key: apiKey,
          q: latitude + "," + longitude,
        },
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      });
    setWeatherInfo(fetchData);
    console.log(fetchData);
  }
  return (
    <div className="has-text-white">
      {/* {weatherInfo?.current?.cloud} */}

      {
        weatherInfo?<div>
          <img src={weatherInfo?.current?.condition?.icon} alt='Weather Icon'></img>
          <h3 className="is-size-2">{weatherInfo?.current?.condition?.text}</h3>
          <p>{weatherInfo?.location?.name}</p>
        </div>:null
      }
      <button onClick={getLocation}>Location</button>
    </div>
  );
};

export default WeatherDisp;
