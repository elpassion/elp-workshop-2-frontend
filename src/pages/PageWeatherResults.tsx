import React from 'react'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { Coords } from '../types/weatherData'
import { Link, useLocation } from 'react-router-dom'
import { useAsyncFn } from 'react-use'
import { getURL } from '../helpers/getURLs'
import { dataDestructure } from '../helpers/dataDestructure'
import DialogComponent from '../components/DialogComponent'
import { pageWeatherResultsSx } from '../sxStyles/pageWeatherResultsSx'

type LocationState = {
    coordinates: Coords,
    tabValueParent: string,
}
const PageWeatherResults: React.FC = () => {
    const location = useLocation()
    const { coordinates, tabValueParent } = location.state as LocationState

    const [tabValue, setTabValue] = React.useState(tabValueParent)

    const [{ value, loading, error }, fetchWeather] = useAsyncFn(async () => {
        const URL = getURL(tabValue, coordinates)
        const response = await fetch(URL)
        const result = await response.json()
        return result
    }, [tabValue, coordinates])

    const weatherData = dataDestructure(value, tabValue)
    const { status, lat, lon, timezone, temp, pressure, humidity, weather } = weatherData

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
        <Box sx={pageWeatherResultsSx.container}>
            <Stack
                flexDirection="row"
                justifyContent="space-evenly"
                sx={pageWeatherResultsSx.lonLat}>
                <Typography variant="body1" fontWeight="bold">Longitude: {lon}</Typography>
                <Typography variant="body1" fontWeight="bold">Latitude: {lat}</Typography>
            </Stack>

            <Box className='scroll-container' sx={pageWeatherResultsSx.scrollContainer}>
                <Box sx={pageWeatherResultsSx.weatherDataWrapper}>
                    {
                        status && (
                            <Box>
                                <Stack>
                                    <Stack flexDirection="row" justifyContent="space-between">
                                        <Box>
                                            <Typography variant="h3" sx={pageWeatherResultsSx.timezone}>{timezone}</Typography>
                                            <Typography variant="h6">Monday 29 August</Typography>
                                        </Box>
                                        <Box sx={[pageWeatherResultsSx.dialogWrapper.main, pageWeatherResultsSx.dialogWrapper.displayOff]}>
                                            <DialogComponent
                                                tabValue={tabValue}
                                                setTabValue={setTabValue}
                                                coordinates={coordinates}
                                            />
                                        </Box>
                                    </Stack>


                                </Stack>
                                <Stack flexDirection="column">
                                    <Stack flexDirection={{ sm: "column", md: "row" }} alignItems="center" sx={{ padding: "10px 0" }}>
                                        <Stack flexDirection="row" sx={{ margin: "20px 0" }}>
                                            <img className='weatherIcon' src="/cloudy.png" alt="cloudy-day" />
                                            <Stack justifyContent="center" sx={{ margin: "0 20px 0 30px" }}>
                                                <Typography variant='h2' textAlign="center" sx={pageWeatherResultsSx.tempText}>{temp}&deg;</Typography>
                                                <Typography variant='body1' textAlign="center" sx={{
                                                    "&::first-letter": {
                                                        textTransform: "uppercase"
                                                    }
                                                }}>{weather?.[0]?.description}</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack flexDirection="row" justifyContent="space-evenly" alignItems="center" sx={pageWeatherResultsSx.blackBoard}>
                                            <Stack
                                                flexDirection="column"
                                                justifyContent="space-evenly"
                                            >
                                                <Box sx={pageWeatherResultsSx.detailsWrapper}>
                                                    <Typography variant="h5">7mph</Typography>
                                                    <Typography variant="h6">wind_spd</Typography>
                                                </Box>
                                                <Box sx={pageWeatherResultsSx.detailsWrapper}>
                                                    <Typography variant="h5">{temp}&deg;</Typography>
                                                    <Typography variant="h6">High</Typography>
                                                </Box>
                                            </Stack>
                                            <Stack
                                                flexDirection="column"
                                                justifyContent="space-evenly"
                                            >
                                                <Box sx={pageWeatherResultsSx.detailsWrapper}>
                                                    <Typography variant="h5">{pressure}</Typography>
                                                    <Typography variant="h6">pres</Typography>
                                                </Box>
                                                <Box sx={pageWeatherResultsSx.detailsWrapper}>
                                                    <Typography variant="h5">7mph</Typography>
                                                    <Typography variant="h6">wind_spd</Typography>
                                                </Box>
                                            </Stack>
                                            <Stack
                                                flexDirection="column"
                                                justifyContent="space-evenly"
                                            >
                                                <Box sx={pageWeatherResultsSx.detailsWrapper}>
                                                    <Typography variant="h5">05:27</Typography>
                                                    <Typography variant="h6">Sunrise</Typography>
                                                </Box>
                                                <Box sx={pageWeatherResultsSx.detailsWrapper}>
                                                    <Typography variant="h5">20:57</Typography>
                                                    <Typography variant="h6">Sunset</Typography>
                                                </Box>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Box sx={[pageWeatherResultsSx.dialogWrapper.main, pageWeatherResultsSx.dialogWrapper.displayOn]}>
                                        <DialogComponent
                                            tabValue={tabValue}
                                            setTabValue={setTabValue}
                                            coordinates={coordinates}
                                        />
                                    </Box>
                                    <Button
                                        variant='contained'
                                        color='info'
                                        component={Link}
                                        to={'/weather'}
                                        sx={{
                                            width: "fit-content", margin: "20px auto 0",
                                            fontSize: { xs: "0.7rem", md: "0.9rem" }
                                        }}
                                    >Try another location</Button>
                                </Stack>
                            </Box>
                        )
                    }
                </Box>
            </Box >
        </Box>
    )
}

export default PageWeatherResults