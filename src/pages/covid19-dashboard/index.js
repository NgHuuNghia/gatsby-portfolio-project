import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Select from "react-select"
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md"
import moment from "moment"
import { numberWithCommas } from "../../utils"
import "./index.scss"

const CovidDashboard = () => {
  const [country, setCountry] = useState({ label: "VietNam", value: "VN" })
  const [globalData, setGlobalData] = useState(null)
  const [countries, setCountries] = useState(null)
  const [countryInfo, setCountryInfo] = useState(null)

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then(data => {
        setGlobalData(data)
      })
  }, [])

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then(response => response.json())
        .then(data => {
          const countries = data.map(country => ({
            label: country.country,
            value: country.countryInfo.iso2,
          }))
          setCountries(countries)
        })
    }

    getCountriesData()
  }, [])

  const handleChange = data => {
    setCountry(data)
  }
  useEffect(() => {
    if (country) {
      const { value } = country
      const url = `https://disease.sh/v3/covid-19/countries/${value}`
      const getCountryData = async () => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setCountryInfo(data)
          })
      }
      getCountryData()
    }
  }, [country])
  console.log(countryInfo)
  return (
    globalData &&
    countries &&
    countryInfo && (
      <>
        <Helmet title="Nguyễn Hữu Nghĩa | Covid 2019" defer={false} />
        <div className="covid-dashboard-main">
          <div className="header">
            <span>nCovid dashboard</span>
          </div>
          <div className="container">
            <div className="word-stats">
              <div className="word-stats__title">
                <span className="word-stats__title__top">World stats</span>
                <span className="word-stats__title__bottom">
                  updated: {moment(globalData.updated).fromNow()}
                </span>
              </div>
              <div className="word-stats__confirmed">
                <span className="word-stats__confirmed__top word-stats__confirmed__top--green">
                  {numberWithCommas(globalData.cases)}
                </span>
                <span className="word-stats__confirmed__bottom">
                  Total Confirmed
                </span>
              </div>
              <div className="word-stats__confirmed word-stats__deceased">
                <span className="word-stats__confirmed__top word-stats__confirmed__top--red">
                  {numberWithCommas(globalData.deaths)}
                </span>
                <span className="word-stats__confirmed__bottom">
                  Total Deceased
                </span>
              </div>
              <div className="word-stats__confirmed word-stats__active">
                <span className="word-stats__confirmed__top word-stats__confirmed__top--yellow">
                  {numberWithCommas(globalData.active)}
                </span>
                <span className="word-stats__confirmed__bottom">
                  Total Active
                </span>
              </div>
              <div className="word-stats__confirmed word-stats__recovered">
                <span className="word-stats__confirmed__top word-stats__confirmed__top--blue">
                  {numberWithCommas(globalData.recovered)}
                </span>
                <span className="word-stats__confirmed__bottom">
                  Total Recovered
                </span>
              </div>
            </div>
            <div className="country-stats">
              <div className="country-stats__header">
                <div className="country-stats__header__title">
                  {`${countryInfo.country} Covid-19 Stats`}
                </div>
                <div className="country-stats__header__select">
                  <Select
                    style={{
                      width: "200px",
                    }}
                    defaultValue={country}
                    onChange={handleChange}
                    options={countries}
                  />
                </div>
              </div>
              <div className="country-stats__current">
                <div className="country-stats__current__block">
                  <span className="country-stats__current__block__title">
                    Confirmed
                  </span>
                  <span className="country-stats__current__block__number country-stats__current__block__number--green">
                    {numberWithCommas(countryInfo.cases)}
                  </span>
                  <span className="country-stats__current__block__today">
                    {countryInfo.todayCases >= 0 ? (
                      <span className="increased">
                        {countryInfo.todayCases} <MdArrowDropUp size={30} />
                      </span>
                    ) : (
                      <span className="decreased">
                        {countryInfo.todayCases} <MdArrowDropDown size={30} />
                      </span>
                    )}
                  </span>
                </div>
                <div className="country-stats__current__block">
                  <span className="country-stats__current__block__title">
                    Active
                  </span>
                  <span className="country-stats__current__block__number country-stats__current__block__number--yellow">
                    {numberWithCommas(countryInfo.active)}
                  </span>
                  <span className="country-stats__current__block__today">
                    {countryInfo.todayRecovered - countryInfo.todayCases >=
                    0 ? (
                      <span className="decreased">
                        {countryInfo.todayRecovered +
                          countryInfo.todayDeaths -
                          countryInfo.todayCases}
                        <MdArrowDropDown size={30} />
                      </span>
                    ) : (
                      <span className="increased">
                        {(countryInfo.todayRecovered +
                          countryInfo.todayDeaths -
                          countryInfo.todayCases) *
                          -1}
                        <MdArrowDropUp size={30} />
                      </span>
                    )}
                  </span>
                </div>
                <div className="country-stats__current__block">
                  <span className="country-stats__current__block__title">
                    Deceased
                  </span>
                  <span className="country-stats__current__block__number country-stats__current__block__number--red">
                    {numberWithCommas(countryInfo.deaths)}
                  </span>
                  <span className="country-stats__current__block__today">
                    {countryInfo.todayDeaths >= 0 ? (
                      <span className="increased">
                        {countryInfo.todayDeaths} <MdArrowDropUp size={30} />
                      </span>
                    ) : (
                      <span className="decreased">
                        {countryInfo.todayDeaths} <MdArrowDropDown size={30} />
                      </span>
                    )}
                  </span>
                </div>
                <div className="country-stats__current__block">
                  <span className="country-stats__current__block__title">
                    Recovered
                  </span>
                  <span className="country-stats__current__block__number country-stats__current__block__number--blue">
                    {numberWithCommas(countryInfo.recovered)}
                  </span>
                  <span className="country-stats__current__block__today">
                    {countryInfo.todayRecovered >= 0 ? (
                      <span className="increased">
                        {countryInfo.todayRecovered} <MdArrowDropUp size={30} />
                      </span>
                    ) : (
                      <span className="decreased">
                        {countryInfo.todayRecovered}{" "}
                        <MdArrowDropDown size={30} />
                      </span>
                    )}
                  </span>
                </div>
                <div className="country-stats__current__block">
                  <span className="country-stats__current__block__title">
                    Tests
                  </span>
                  <span className="country-stats__current__block__number country-stats__current__block__number--amber">
                    {numberWithCommas(countryInfo.tests)}
                  </span>
                </div>
                <div className="country-stats__current__block">
                  <span className="country-stats__current__block__title">
                    Critical
                  </span>
                  <span className="country-stats__current__block__number country-stats__current__block__number--orange">
                    {numberWithCommas(countryInfo.critical)}
                  </span>
                </div>
              </div>
              <div className="country-stats__map"></div>
            </div>
          </div>
        </div>
      </>
    )
  )
}

export default CovidDashboard
