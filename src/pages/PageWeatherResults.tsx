import React from 'react'
import { Backdrop, Box, Button, CircularProgress, Stack, Typography } from '@mui/material'
import { Coords } from '../types/weatherData'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAsyncFn } from 'react-use'
import { getURL } from '../helpers/getURLs'
import { dataDestructure } from '../helpers/dataDestructure'
import DialogComponent from '../components/DialogComponent'
import { pageWeatherResultsSx } from '../sxStyles/pageWeatherResultsSx'
import { AnimatePresence, motion } from 'framer-motion'
import { containerDataVariants, containerVariants } from '../motionVariants/containerVariants'

type LocationState = {
    coordinates: Coords,
    tabValueParent: string,
}
const PageWeatherResults: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { coordinates, tabValueParent } = location.state as LocationState || {}

    const [tabValue, setTabValue] = React.useState(tabValueParent)

    const [{ value, loading, error }, fetchWeather] = useAsyncFn(async () => {
        const URL = getURL(tabValue, coordinates)
        const response = await fetch(URL)
        const result = await response.json()
        return result
    }, [tabValue, coordinates])
    const weatherData = dataDestructure(value, tabValue)
    const { status, lat, lon, timezone, temp, pressure, humidity, sunrise, sunset, description, windSpeed } = weatherData

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
    console.log("errrrrr", error?.message, value)
    return (
        <>
            {
                loading && (
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={loading}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                )
            }

            <Button
                variant="contained"
                color="success"
                startIcon={<ArrowBackIcon />}
                sx={{ position: "absolute", top: "20px", left: "20px" }}
                onClick={() => navigate(-1)}
                component={motion.div}
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
            >Go Previous Page</Button>

            <Box
                sx={pageWeatherResultsSx.container}
                component={motion.div}
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <Stack
                    flexDirection="row"
                    justifyContent="space-evenly"
                    sx={pageWeatherResultsSx.lonLat}>
                    <Typography variant="body1" fontWeight="bold">Longitude: {lon}</Typography>
                    <Typography variant="body1" fontWeight="bold">Latitude: {lat}</Typography>
                </Stack>
                <AnimatePresence>
                    <Box className='scroll-container' sx={pageWeatherResultsSx.scrollContainer}>
                        <Box sx={pageWeatherResultsSx.weatherDataWrapper}>
                            {
                                (error || value?.message || value?.error) && (
                                    <Stack
                                        alignItems="center"
                                        sx={pageWeatherResultsSx.resultError}
                                    >
                                        Error: {error?.message || value?.message || value?.error || JSON.stringify(error)}
                                    </Stack>
                                )
                            }
                            {
                                status && (
                                    <Box
                                        component={motion.div}
                                        variants={containerDataVariants}
                                        initial='hidden'
                                        animate='visible'
                                        exit='exit'
                                    >
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
                                                        }}>{description}</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack flexDirection="row" justifyContent="space-evenly" alignItems="center" sx={pageWeatherResultsSx.blackBoard}>
                                                    <Stack
                                                        flexDirection="column"
                                                        justifyContent="space-evenly"
                                                    >
                                                        <Box sx={pageWeatherResultsSx.detailsWrapper}>
                                                            <Typography variant="h5">{windSpeed} m/h</Typography>
                                                            <Typography variant="h6">wind</Typography>
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
                                                            <Typography variant="h5">{humidity}</Typography>
                                                            <Typography variant="h6">humidity</Typography>
                                                        </Box>
                                                    </Stack>
                                                    <Stack
                                                        flexDirection="column"
                                                        justifyContent="space-evenly"
                                                    >
                                                        <Box sx={pageWeatherResultsSx.detailsWrapper}>
                                                            <Typography variant="h5">{sunrise}</Typography>
                                                            <Typography variant="h6">Sunrise</Typography>
                                                        </Box>
                                                        <Box sx={pageWeatherResultsSx.detailsWrapper}>
                                                            <Typography variant="h5">{sunset}</Typography>
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
                                                className='previous-route'
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
                </AnimatePresence>
            </Box>
        </>
    )
}

export default PageWeatherResults