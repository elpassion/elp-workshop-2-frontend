import React from 'react'
import { WeatherData } from '../types/WeatherData'

type WeatherProps = {
    data: WeatherData
}

const WeatherDetails: React.FC<WeatherProps> = ({ data }) => {
    const { status, lat, lon, timezone, temp, pressure, humidity } = data

    return (
        <div>
            hello youtube
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
        </div>
    )
}

export default WeatherDetails