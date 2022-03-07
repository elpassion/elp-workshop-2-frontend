import React from 'react'
import { Box, Button } from '@mui/material'
import { Coords, WeatherData } from '../types/weatherData'
import { Link, useLocation } from 'react-router-dom'
import { useAsyncFn } from 'react-use'
import { getURL } from '../helpers/getURLs'
import { dataDestructure } from '../helpers/dataDestructure'
import DialogComponent from '../components/DialogComponent'
import { pageWeatherResultsSx } from '../sxStyles/pageWeatherResultsSx'

type PageWeatherResultsPropTypes = {
    //   data: WeatherData
    //   coordinates: Coords
    //   tryAgainHandleClick: () => void
    // handleChange: (event: ChangeSynthEvent, newValue: string) => void,
    // tabValue: string,
    // handleClick: (event: MouseSynthEvent) => void,
}
type LocationState = {
    coordinates: Coords,
    tabValueParent: string,
}
const PageWeatherResults: React.FC<PageWeatherResultsPropTypes> = (
    // { data, coordinates, tryAgainHandleClick }
) => {
    const location = useLocation()
    const { coordinates, tabValueParent } = location.state as LocationState

    const [tabValue, setTabValue] = React.useState(tabValueParent)

    const [{ value, loading, error }, fetchWeather] = useAsyncFn(async () => {
        const URL = getURL(tabValue, coordinates)
        const response = await fetch(URL)
        const result = await response.json()
        return result
    }, [tabValue, coordinates])
console.log(value)
    const weatherData = dataDestructure(value, tabValue)
    const { status, lat, lon, timezone, temp, pressure, humidity } = weatherData

    React.useEffect(() => {
        if (tabValue === 'Weatherbit API' && value?.current) {
            fetchWeather()
        } else if (tabValue === 'Open Weather Map API' && value?.data) {
            fetchWeather()
        }
        if (coordinates?.latitude && coordinates?.longitude) {
            fetchWeather()
        }
        // 'value' excluded due to infinite render loop.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tabValue, coordinates])

    return (
        <Box sx={{
            backgroundColor: "rgba(255,255,255,0.4)",
            borderRadius: "10px",
            border: "2px solid rgba(255,255,255,0.4)",
            width: "80%",
            height: "70%",
            alignSelf: "end",
            marginBottom: "30px",
            // display: "flex"
        }}>
            <Box sx={pageWeatherResultsSx.dialogWrapper}>
                <DialogComponent
                    tabValue={tabValue}
                    setTabValue={setTabValue}
                    coordinates={coordinates}
                />
            </Box>
            <Box sx={pageWeatherResultsSx.weatherDataWrapper}>
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
            </Box>
            {coordinates && (<Button variant='contained' color='info' component={Link} to={'/weather'}>Try another location</Button>)}
        </Box >
    )
}

export default PageWeatherResults