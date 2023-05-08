import React, { useEffect, useState } from "react";
import "./weatherDisp.css";
import apiCall, { apiKey } from "../../Auth/auth";
import AutorenewIcon from '@mui/icons-material/Autorenew';

const WeatherDisp = ({weatherInfo}) => {
  const [location, setLocation] = useState('London');
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");
  // const [weatherInfo, setWeatherInfo] = useState({});
  const [tempConvSelect,setTempConvSelect]=useState(true);
  // useEffect(()=>{
  //   let fetchData=apiCall.get("/current.json", {
  //     params: {
  //       key: apiKey,
  //       q: location,
  //     },
  //   }).then((res)=>{
  //     setWeatherInfo(res.data);
  //   }).catch((err)=>{
  //     console.error(err);
  //   })
  // },[location])
  // function getLocation() {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  //   });
  //   fthWeatherByLocationCoords();
  // }

  // function fthWeatherByLocationCoords() {
  //   let fetchData = apiCall
  //     .get("/current.json", {
  //       params: {
  //         key: apiKey,
  //         q: latitude + "," + longitude,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       return res.data;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  //   setWeatherInfo(fetchData);
  //   console.log(fetchData);
  // }
  console.log(weatherInfo);
  return (
    <div className="has-text-white">
      {/* {weatherInfo?.current?.cloud} */}

      {
        weatherInfo?<div>
          <img src={weatherInfo?.current?.condition?.icon} alt='Weather Icon'></img>
          <h3 className="is-size-2 weather-type">{weatherInfo?.current?.condition?.text}</h3>
          <p className="is-size-4">{weatherInfo?.location?.name}</p>
          {
            tempConvSelect?
            <h1 className="is-size-1 temp-weather">{weatherInfo?.current?.temp_c} &#176;C<span><button className="button " onClick={()=>{setTempConvSelect(!tempConvSelect)}}><AutorenewIcon/></button></span></h1>
            :
            <h1 className="is-size-1 temp-weather">{weatherInfo?.current?.temp_f} F<span><button className="button " onClick={()=>{setTempConvSelect(!tempConvSelect)}}><AutorenewIcon/></button></span></h1>

          }
        </div>:null
      }
      {/* <button className="button " onClick={getLocation}>Location</button> */}
    </div>
  );
};

export default WeatherDisp;
