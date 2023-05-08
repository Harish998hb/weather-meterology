import React, { useEffect, useState } from 'react'
import WeatherDisp from '../WeatherDisplay/WeatherDisp' 
import WeatherParams from '../WeatherParams/WeatherParams'
import './home.css'
import apiCall, { apiKey } from '../../Auth/auth';


function Home() {
  const [location,setLocation]=useState('London');
  const [weatherInfo,setWeatherInfo]=useState({})

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
  return (
    <div>
      <section className="home py-6">
        <div className="default-container">
          <div className="columns">
            <div className="column is-3-tablet is-12-mobile ">
            <WeatherDisp weatherInfo={weatherInfo}/>
            </div>
            <div className="column is-6-tablet is-12-mobile ">ahsdb</div>
            <div weatherInfo={weatherInfo} className="column is-3-tablet is-12-mobile "><WeatherParams/></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home