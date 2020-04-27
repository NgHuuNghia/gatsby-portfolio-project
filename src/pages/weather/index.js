import React, { useEffect, useState } from "react"
import cityAtNight from "../../images/weather/city-at-night.jpg"
import cityAtAfternoon from "../../images/weather/city-at-afternoon.jpg"
import cityAtMorning from "../../images/weather/city-at-morning.jpg"
import moment from "moment"
import { Link } from "gatsby"
import { WiDayFog } from "react-icons/wi"
import "./index.scss"

const WeatherApp = () => {
  const [ipData, setIpData] = useState(null)
  const [dataWeather, setDataWeather] = useState(null)
  const [measure, setMeasure] = useState("C")

  useEffect(() => {
    fetch("https://ipinfo.io/?token=e376cd6623162d")
      .then(response => response.json())
      .then(response => {
        setIpData(response)
      })
  }, [])

  useEffect(() => {
    if (ipData) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${
          ipData.loc.split(",")[0]
        }&lon=${
          ipData.loc.split(",")[1]
        }&appid=5e8a9d38d641cd585d1013d9bf6983d9`
      )
        .then(response => response.json())
        .then(response => {
          response.daily.pop()
          setDataWeather(response)
        })
    }
  }, [ipData])

  const convertTemperatureForMeasure = (measure, temp) => {
    // K to C
    if (measure === "C") {
      return Math.round(temp - 273.15)
    }
    // K to F
    else if (measure === "F") {
      return Math.round((temp * 9) / 5 - 459.67)
    }
    return null
  }

  return (
    <div className="weather-app-main">
      <div className="header">
        <div className="intro-app">
          <div className="logo">
            <WiDayFog />
          </div>
          <div className="title">Weather App</div>
          <div className="subtitle">
            Simple Weather App using
            <a href="https://openweathermap.org/"> Openweathermap API</a>
          </div>
          <div className="product">
            <span>
              Made with by
              <Link to="/"> Nguyễn Hữu Nghĩa</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        {dataWeather ? (
          <div
            className="card"
            style={{
              backgroundImage: `url(${
                new Date().getHours() >= 5 && new Date().getHours() <= 12
                  ? cityAtMorning
                  : new Date().getHours() > 12 && new Date().getHours() < 18
                  ? cityAtAfternoon
                  : cityAtNight
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="time">
              <div className="o-clock">
                {moment.unix(dataWeather.current.dt).format("hh:mm A")}
              </div>
              <div className="date">
                {moment
                  .unix(dataWeather.current.dt)
                  .format("dddd, DD MMMM YYYY")}
              </div>
              <div className="next-time">
                <span>NEXT</span>
                <div className="next-time-item">
                  <span>
                    {moment.unix(dataWeather.hourly[1].dt).format("hh:mm A")}
                  </span>
                  <span>{dataWeather.hourly[1].weather[0].description}</span>
                </div>
                <div className="next-time-item">
                  <span>
                    {moment.unix(dataWeather.hourly[2].dt).format("hh:mm A")}
                  </span>
                  <span>{dataWeather.hourly[2].weather[0].description}</span>
                </div>
              </div>
            </div>
            <div className="current-weather">
              <div className="menu-temp">
                <span
                  className="C"
                  style={{ color: measure === "C" ? "yellow" : "white" }}
                  onClick={() => {
                    setMeasure("C")
                  }}
                >
                  °C
                </span>
                <span
                  className="F"
                  style={{ color: measure === "F" ? "yellow" : "white" }}
                  onClick={() => {
                    setMeasure("F")
                  }}
                >
                  °F
                </span>
              </div>
              <div className="icon-weather">
                <img
                  src={`https://openweathermap.org/img/wn/${dataWeather.current.weather[0].icon}@2x.png`}
                  alt={dataWeather.current.weather[0].description}
                />
              </div>
              <div className="description">
                {dataWeather.current.weather[0].description}
              </div>
              <div className="city">{ipData.region}</div>

              <div className="temperature">
                {convertTemperatureForMeasure(
                  measure,
                  dataWeather.current.temp
                )}
                °
              </div>
            </div>
            <div className="calendar">
              {dataWeather.daily.map((item, index) => {
                return (
                  <div key={index} className="mini-card">
                    <div className="day-of-the-week">
                      {moment.unix(item.dt).format("ddd") ===
                      moment.unix(dataWeather.current.dt).format("ddd")
                        ? "today"
                        : moment.unix(item.dt).format("ddd")}
                    </div>
                    <div className="weather-icon">
                      <img
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                        alt={item.weather[0].description}
                      />
                    </div>
                    <div className="temperature">
                      {convertTemperatureForMeasure(measure, item.temp.day)}°
                      {/* day,eve,max,min,morn,night */}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div className="card">
            <div className="loading">
              <div>
                Please, waiting for retrieving your location and the local
                weather...
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default WeatherApp
