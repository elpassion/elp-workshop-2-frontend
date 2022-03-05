import { Box, Button, Switch, Typography } from '@mui/material'
import React from 'react'
import { WeatherData } from '../types/weatherData'

type WeatherProps = {
  data: WeatherData
}

const WeatherDetails: React.FC<WeatherProps> = ({ data }) => {
  const { status, lat, lon, timezone, temp, pressure, humidity } = data

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Typography>Open Weather Map API</Typography>
        {/* <Switch
          // disabled
          // defaultChecked
        /> */}
        <Typography>Weatherbit API</Typography>
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
      <Button variant='contained'>Try another location dude</Button>
      {/* {coordinates && (<Button onClick={tryAgainHandleCLick}>Try another location dude</Button>)} */}
    </div>
  )
}

export default WeatherDetails