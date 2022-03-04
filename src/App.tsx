import React from "react"
import { useAsyncFn } from "react-use"
import { dataDestructure } from "./helpers/dataDestructure"
import { SynthEvent } from "./types/WeatherData"

const getURL = (reqValue: string): string => {
  let URL = ''
  if (reqValue === 'Open Weather Map API') {
    URL = 'https://api.openweathermap.org/data/2.5/onecall?lat=35.7796&lon=-78.6382&exclude=hourly,minutely,daily&appid=d45fdad17e3b225c88a4be40c4a6ee2b'
  } else if (reqValue === 'Weatherbit API') {
    URL = 'https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=227ec9c3885844a6b61921d59b928645'
  }
  return URL
}

const App: React.FC = () => {
  const [tabValue, setTabValue] = React.useState('Open Weather Map API')
  const [{ value, loading, error }, fetchWeather] = useAsyncFn(async () => {
    const URL = getURL(tabValue)
    const response = await fetch(URL)
    const result = await response.json()
    return result
  }, [tabValue])

  const handleClick = (event: SynthEvent) => {
    setTabValue((event.target as HTMLParagraphElement).innerText)
  }

  const { lat, lon, timezone, temp, pressure, humidity, sunrise, sunset } = dataDestructure(value) || {}
  return (
    <>
      <div>
        <p className="tab-1" onClick={handleClick}>Open Weather Map API</p>
        <p className="tab-2" onClick={handleClick}>Weatherbit API</p>
      </div>
      <label htmlFor="latitude">Latitude</label>
      <input id="latitude" type="number" />
      <label htmlFor="longitude">Longitude</label>
      <input id="longitude" type="number" />
      <button className="confirm-btn" onClick={fetchWeather}>Find Weather Details</button>

      <div>

        {
          error && (
            <div>Error mate</div>
          )
        }
        {
          loading && (
            <div>Loading mate</div>
          )
        }
        {
          value && (
            <>
              <p>
                {timezone}
              </p>
              <p >
                Longitude: {lon}
              </p>
              <p>
                Latitude: {lat}
              </p>
              <p>
                Temperature: {temp}
              </p>
              <p>
                Pressure: {pressure}
              </p>
              <p>
                Humidity: {humidity}
              </p>
              <p>
                Sunrise: {sunrise}
              </p>
              <p>
                Sunset: {sunset}
              </p>
              {JSON.stringify(value)}
            </>
          )
        }
      </div>

    </>
  )
}

export default App


