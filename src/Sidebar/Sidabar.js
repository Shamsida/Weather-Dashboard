import React, {useEffect, useState} from 'react';
import search from './search.png';
import {API_KEY} from '../Config/api';
import { BsCloudHaze1 } from "react-icons/bs";
import axios from '../axios'
import './Sidebar.css';

function Sidabar() {

  const [query, setQuery] = useState('')

  const [weather, setWeather] = useState({})
    useEffect(() =>{
      axios.get(`weather?q=${query}&units=metric&APPID=${API_KEY}`).then((response)=>{
        console.log(response.data.result[0])
        setWeather(response.data.result[0])
      })
    },[])

    const dateBuilder = (d) => {
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  
      let day = days[d.getDay()]
      let date = d.getDate()
      let month = months[d.getMonth()]
      let year = d.getFullYear()
  
  
      return `${day} ${date} ${month} ${year}`
    }

  return (
    <div className='sidebar'>
          <img src={search} alt="email" className="login-text-img" />
          <input type="text" placeholder="Search For Places..." className='log-input' 
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search} />
          <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
          <img src={weather.weather[0].icon} alt="email" className="icon-img" />
          <p className="temp"> {Math.round(weather.main.temp)}°C</p>
        <div className='container'>
        <div className="dash_card_container">
          <div className="dash_card_icon">
            <BsCloudHaze1 className="glass" />
          </div>
          <div className="dash_card_content">
            <p className="font-weight-semibold">{weather.weather[0].description}</p>
         </div>
        </div>
        </div>
    </div>
  )
}

export default Sidabar