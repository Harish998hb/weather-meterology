import React from 'react'
import WeatherDisp from '../WeatherDisplay/WeatherDisp' 
import WeatherParams from '../WeatherParams/WeatherParams'
import './home.css'


function Home() {
  return (
    <div>
      <section className="home py-6">
        <div className="default-container">
          <div className="columns">
            <div className="column is-3-tablet is-12-mobile ">
            <WeatherDisp/>
            </div>
            <div className="column is-6-tablet is-12-mobile ">ahsdb</div>
            <div className="column is-3-tablet is-12-mobile "><WeatherParams/></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home