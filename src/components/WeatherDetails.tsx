import React from 'react'
import { Box, Button } from '@mui/material'
import { Coords, WeatherData } from '../types/weatherData'

type WeatherDetailsPropTypes = {
  data: WeatherData
  coordinates: Coords
  tryAgainHandleClick: () => void
  // handleChange: (event: ChangeSynthEvent, newValue: string) => void,
  // tabValue: string,
  // handleClick: (event: MouseSynthEvent) => void,
}

const WeatherDetails: React.FC<WeatherDetailsPropTypes> = ({ data, coordinates, tryAgainHandleClick }) => {
  const { status, lat, lon, timezone, temp, pressure, humidity } = data

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
      </Box>
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
      {/* <Button variant='contained'>Try another location dude</Button> */}
      {coordinates && (<Button variant='contained' color='info' onClick={tryAgainHandleClick}>Try another location</Button>)}
    </div>
  )
}

export default WeatherDetails