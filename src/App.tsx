import React from "react"
import { useAsyncFn } from "react-use"
import { dataDestructure } from "./helpers/dataDestructure"
import { Change, Coords, SynthEvent } from "./types/WeatherData"
const OPEN_WEATHER_MAP_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
const WEATHERBIT_API_KEY = process.env.REACT_APP_WEATHERBIT_API_KEY


const getURL = (reqValue: string, coordinates: Coords): string => {
  let URL = ''
  const lat = coordinates.lat
  const lon = coordinates.lon

  if (reqValue === 'Open Weather Map API') {
    URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,daily&appid=${OPEN_WEATHER_MAP_API_KEY}`
  } else if (reqValue === 'Weatherbit API') {
    URL = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${WEATHERBIT_API_KEY}`
  }
  return URL
}

const App: React.FC = () => {
  const [tabValue, setTabValue] = React.useState('Open Weather Map API')
  const [coordinates, setCoordinates] = React.useState({ lon: null, lat: null })
  const [{ value, loading, error }, fetchWeather] = useAsyncFn(async () => {
    const URL = getURL(tabValue, coordinates)

    const response = await fetch(URL)
    const result = await response.json()
    return result
  }, [tabValue, coordinates])

  React.useEffect(() => {
    if (tabValue === 'Weatherbit API' && value?.current) {
      fetchWeather()
    } else if (tabValue === 'Open Weather Map API' && value?.data) {
      fetchWeather()
    }
    // 'value' excluded due to infinite render loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabValue])

  const handleClick = (event: SynthEvent) => {
    setTabValue((event.target as HTMLParagraphElement).innerText)
  }
  const handleChange = (event: Change) => {
    const value = event.target.value
    setCoordinates({
      ...coordinates,
      [event.target.name]: value
    })
  }

  const { status, lat, lon, timezone, temp, pressure, humidity } = dataDestructure(value, tabValue)

  return (
    <>
      <h1>{tabValue}</h1>
      <div>
        <p className="tab-1" onClick={handleClick}>Open Weather Map API</p>
        <p className="tab-2" onClick={handleClick}>Weatherbit API</p>
      </div>
      <label htmlFor="latitude">Latitude</label>
      <input id="latitude" name="lat" type="number" onChange={handleChange} />
      <label htmlFor="longitude">Longitude</label>
      <input id="longitude" name="lon" type="number" onChange={handleChange} />
      <button className="confirm-btn" onClick={fetchWeather}>Find Weather Details</button>

      <div>

        {
          (error || value?.message || value?.error) && (
            <div>Error: {error || value.message || value.error}</div>
          )
        }
        {
          loading && (
            <div>Loading mate</div>
          )
        }
        {
          status && (
            <>
              <p>{timezone}</p>
              <p>Longitude: {lon}</p>
              <p>Latitude: {lat}</p>
              <p>Temperature: {temp}</p>
              <p>Pressure: {pressure}</p>
              <p>Humidity: {humidity}</p>
            </>
          )
        }
        <p style={{ wordWrap: 'break-word' }}>
          {JSON.stringify(coordinates)}
        </p>
        <p style={{ wordWrap: 'break-word' }}>
          {status && JSON.stringify(value)}
        </p>
      </div>

    </>
  )
}

export default App


