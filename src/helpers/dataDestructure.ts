import { WeatherData } from "../types/WeatherData"

export const dataDestructure = (value: any): WeatherData | null => {
    if (value?.data) {
      const {
        lat,
        lon,
        app_temp,
        pres,
        rh,
        sunrise,
        sunset,
        timezone
      } = value.data[0]
      return {
        lat,
        lon,
        timezone,
        temp: app_temp,
        pressure: pres,
        humidity: rh,
        sunrise,
        sunset
      }
    } else if (value) {
      const {
        lat,
        lon,
        timezone,
        current: {
          humidity,
          temp,
          sunrise,
          sunset,
          pressure
        }
      } = value
      return {
        lat,
        lon,
        timezone,
        temp,
        pressure,
        humidity,
        sunrise,
        sunset
      }
    }
    return null
  }