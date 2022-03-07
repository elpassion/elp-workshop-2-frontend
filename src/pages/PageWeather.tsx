import React from 'react'
import CustomInput from "../components/CustomInput"
import WeatherDetails from "../components/WeatherDetails"
import { coordsValidate } from "../helpers/formValidations"
import { Box, Button, Typography } from "@mui/material"
import { weatherAppSx } from "../sxStyles/weatherAppSx"
import DialogComponent from "../components/DialogComponent"
import { useForm } from 'react-hook-form'
import { useAsyncFn } from "react-use"
import { dataDestructure } from "../helpers/dataDestructure"
import { getURL } from "../helpers/getURLs"
import { Coords } from "../types/weatherData"
const PageWeather = () => {
  const [tabValue, setTabValue] = React.useState('')
  const [coordinates, setCoordinates] = React.useState<Coords>(null)

  const [{ value, loading, error }, fetchWeather] = useAsyncFn(async () => {
    const URL = getURL(tabValue, coordinates)
    const response = await fetch(URL)
    const result = await response.json()
    return result
  }, [tabValue, coordinates])

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm()
  const onSubmit = (data: Coords) => {
    setCoordinates({
      longitude: data?.longitude,
      latitude: data?.latitude
    })
  }
  const watchFields = watch(["longitude", "latitude"])

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

  // const handleClick = (event: MouseSynthEvent) => {
  //   setTabValue((event.target as HTMLParagraphElement).innerText)
  // }

  // const handleChange = (event: ChangeSynthEvent, newValue: string) => {
  //   setTabValue(newValue)
  // }

  const tryAgainHandleClick = () => {
    setCoordinates(null)
    setTabValue('')
    reset()
  }
  const weatherData = dataDestructure(value, tabValue)
  return (
    <Box sx={{
      // backgroundColor: "rgba(255,255,0,0.25)",
      // backgroundColor: "rgba(0,0,0,0.3)",
      // border: "3px solid rgba(255,255,255,0.5)",
      borderRadius: "4px",
      padding: "50px 0",
      margin: "0 auto",
      width: "100%",
      maxWidth: "700px",
      minHeight: "350px",
      maxHeight: "400px",
      // bgcolor: "rgba(255,255,255)"
    }}>
      <Typography variant="h4" textAlign='center' sx={{ color: "whitesmoke" }}>
        Search weather by coordinates:
      </Typography>
      {!coordinates && (
        <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={weatherAppSx.formContainer.wrapper}>
          <Box sx={weatherAppSx.formContainer.inputWrapper}>
            {
              ["longitude", "latitude"].map(inputEl => (
                <CustomInput
                  id={inputEl}
                  type={"number"}
                  registerProps={{ ...register(inputEl, coordsValidate) }}
                  placeholder={inputEl}
                  error={errors[inputEl]}
                  key={inputEl}
                />
              ))
            }
          </Box>

          {/* {!coordinates && ( */}
          <DialogComponent
            tabValue={tabValue}
            setTabValue={setTabValue}
            coordinates={coordinates}
          />
          {/* )} */}
          <Button
            disabled={!(tabValue && watchFields[0] && watchFields[1])}
            type="submit"
            variant="contained"
            color="success"
            className="confirm-btn"
            sx={{
              "&.Mui-disabled": {
                backgroundColor: "#b2bec3",
                color: "gray"
              }
            }}
          >Find Weather Details</Button>
        </Box>
      )}

      <div>
        {(error || value?.message || value?.error) && (
          <div>Error: {error || value.message || value.error}</div>
        )}
        {loading && (<div>Loading mate</div>)}
        {coordinates && (
          <WeatherDetails
            data={weatherData}
            coordinates={coordinates}
            tryAgainHandleClick={tryAgainHandleClick}
          />)}
      </div>
    </Box>
  )
}

export default PageWeather