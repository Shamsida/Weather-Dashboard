import React, {useEffect, useState} from 'react';
import Sidabar from '../Sidebar/Sidabar';
import {API_KEY} from '../Config/api';
import { Map, GoogleApiWrapper, Marker } from "@googlemaps/react-wrapper";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import Stack from "react-bootstrap/Stack";
import axios from '../axios'
import './Dashboard.css';

const Dashboard = (props) => {

  const [weather, setWeather] = useState({})
    useEffect(() =>{
      axios.get(`weather?q=${props.query}&units=metric&APPID=${API_KEY}`).then((response)=>{
        console.log(response.data.result[0])
        setWeather(response.data.result[0])
      })
    },[])

    const mapStyles = {
      width: '100%',
      height: '100%',
    };

  return (
    <div className='dashboard'>
        <Sidabar />
        <div className='main_page'>
          <div className="main_content">
            <div className="side_app">
            <div className="page header d-x1-flex d-block">
                <Stack direction="horizontal" gap={2}>
                  <h4 className="page_title">Today's Highlights</h4> 
                </Stack>
                <br></br>
              </div>

              {/* Row*/}
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                          <div className="mt-0 text-left">
                            <span className="font-weight-semibold">
                                Pressure
                            </span>
                            <h3 className="mb-0 mt-4 text">{weather.main.pressure}</h3>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                          <div className="mt-0 text-left">
                            <span className="font-weight-semibold">
                              Wind Speed
                            </span>
                            <h3 className="mb-0 mt-4 text_primary">{weather.wind.speed}</h3>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                          <div className="mt-0 text-left">
                            <span className="font-weight-semibold">
                              Sunrise & Sunset
                            </span>
                            <div className="dash_card_container1">
                              <div className="dash_card_icon1">
                              <BsFillArrowUpCircleFill className="glass" />
                            </div>
                                <div className="dash_card_content1">
                                <p className="font-weight-semibold">{weather.sys.sunrise}</p>
                                </div>
                                </div>
                                  <div className="dash_card_container2">
                                   <div className="dash_card_icon1">
                                  < BsFillArrowDownCircleFill className="glass" />
                                  </div>
                                    <div className="dash_card_content1">
                                      <p className="font-weight-semibold">{weather.sys.sunset}</p>
                                </div>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                          <div className="mt-0 text-left">
                            <span className="font-weight-semibold">
                              Humidity
                            </span>
                            <h3 className="mb-0 mt-4 text_primary">{weather.main.humidity}</h3>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                          <div className="mt-0 text-left">
                            <span className="font-weight-semibold">
                              Visibility
                            </span>
                            <h3 className="mb-0 mt-4 text_secondary">{weather.visibility}</h3>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                          <div className="mt-0 text-left">
                            <span className="font-weight-semibold">
                              Feels Like
                            </span>
                            <h3 className="mb-0 mt-4 text_danger">{weather.main.feels_like}</h3>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Row*/}
                  <Map
                      google={this.props.google}
                      zoom={8}
                      style={mapStyles}
                      initialCenter={{ lat: weather.coord.lat , lng: weather.coord.lon}}
                    >
                      <Marker position={{ lat: weather.coord.lat, lng: weather.coord.lon}} /> 
                  </Map>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAuCBZnxSmFmlHqSnChqQxwjBS7kxuyY-g'
})(Dashboard);