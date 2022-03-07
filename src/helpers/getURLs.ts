import { Coords } from "../types/weatherData"
const OPEN_WEATHER_MAP_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
const WEATHERBIT_API_KEY = process.env.REACT_APP_WEATHERBIT_API_KEY
export const getURL = (reqValue: string, coordinates: Coords): string => {
  console.log(OPEN_WEATHER_MAP_API_KEY,
    WEATHERBIT_API_KEY)
  let URL = ''
  const lat = coordinates?.latitude
  const lon = coordinates?.longitude
  if (reqValue === 'Open Weather Map API') {
    URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,daily&appid=${OPEN_WEATHER_MAP_API_KEY}`
  } else if (reqValue === 'Weatherbit API') {
    URL = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${WEATHERBIT_API_KEY}`
  }
  return URL
}