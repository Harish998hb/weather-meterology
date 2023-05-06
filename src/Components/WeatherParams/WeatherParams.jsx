import React, { useEffect, useState } from 'react'
import apiCall, { apiGetCall, apiKey } from '../../Auth/auth'; 
import './weatherParams.css'

const WeatherParams = () => {
    const [location,setLocation]=useState('London');
    const [latitude,setLatitude]=useState(0);
    const [longitude,setLongitude]=useState(0);


    const [weatherInfo,setWeatherInfo]=useState({})
    useEffect(()=>{
        // setWeatherInfo(apiGetCall('/current.json',location));
        let fetchData=apiCall.get('/current.json',{
            params:{
                key:apiKey,
                q:location,
            }
        }).then((res)=>{
            console.log(res.data);
            return res.data;
        }).catch((err)=>{
            console.error(err);
        })
        setWeatherInfo(fetchData);
    },[location])
    
    function fthWeatherByLocationCoords(){
        let fetchData=apiCall.get('/current.json',{
            params:{
                key:apiKey,
                q:latitude+','+longitude,
            }
        }).then((res)=>{
            console.log(res.data);
            return res.data;
        }).catch((err)=>{
            console.error(err);
        })
        console.log(fetchData);
    }

    // Function to get ther users Location
    function getLocation(){
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position)=>{
                console.log(position.coords.latitude);
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            })
          } else {
            console.log("Not Available");
          }
          fthWeatherByLocationCoords(latitude,longitude);
    }
    // getLocation();
    console.log(latitude,longitude);

  return (
    <div>
        {weatherInfo?.current?.cloud}
        <ul className="weatherParams">
            <li className="param">yugk</li>
            <li className="param"></li>
            <li className="param"></li>
            <li className="param"></li>
            <li className="param"></li>
        </ul>
    </div>
  )
}
export default WeatherParams