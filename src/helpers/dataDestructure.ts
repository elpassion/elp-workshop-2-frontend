import { WeatherData } from "../types/weatherData"

export const dataDestructure = (value: any, tabValue: string): WeatherData => {
  if (tabValue === 'Weatherbit API' && value?.data) {
    const {
      lat,
      lon,
      app_temp,
      pres,
      rh,
      timezone
    } = value.data[0]
    return {
      status: true,
      lat,
      lon,
      timezone,
      temp: app_temp > 100 ? (app_temp - 273.15).toFixed(1) : app_temp,
      pressure: pres,
      humidity: rh
    }
  } else if (tabValue === 'Open Weather Map API' && value?.current) {
    const {
      lat,
      lon,
      timezone,
      current: {
        humidity,
        temp,
        pressure
      }
    } = value
    return {
      status: true,
      lat,
      lon,
      timezone,
      temp: temp > 100 ? (temp - 273.15).toFixed(1) : temp,
      pressure,
      humidity
    }
  }
  return { status: false }
}