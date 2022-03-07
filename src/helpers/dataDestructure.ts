import moment from "moment"
import { WeatherData } from "../types/weatherData"

export const dataDestructure = (value: any, tabValue: string): WeatherData => {
  if (tabValue === 'Weatherbit API' && value?.data) {
    const {
      lat,
      lon,
      app_temp,
      pres,
      rh,
      timezone,
      sunrise,
      sunset,
      wind_spd,
      weather: {
        description
      }
    } = value.data[0]
    return {
      status: true,
      lat,
      lon,
      timezone,
      temp: app_temp > 100 ? (app_temp - 273.15).toFixed(1) : app_temp,
      pressure: pres.toFixed(1),
      humidity: rh.toFixed(1),
      sunrise,
      sunset,
      windSpeed: wind_spd.toFixed(1),
      description
    }
  } else if (tabValue === 'Open Weather Map API' && value?.current) {
    const {
      lat,
      lon,
      timezone,
      current: {
        weather: {
          description
        },
        wind_speed,
        humidity,
        temp,
        pressure,
        sunrise,
        sunset
      }
    } = value
    return {
      status: true,
      lat,
      lon,
      timezone,
      temp: temp > 100 ? (temp - 273.15).toFixed(1) : temp,
      pressure: pressure.toFixed(1),
      humidity: humidity.toFixed(1),
      sunrise: moment(sunrise).format('LT'),
      sunset: moment(sunset).format('LT'),
      windSpeed: wind_speed.toFixed(1),
      description
    }
  }
  return { status: false }
}