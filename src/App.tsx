import React from "react"
import { useForm } from 'react-hook-form'
import { useAsyncFn } from "react-use"
import CustomInput from "./components/CustomInput"
import LayoutMain from "./components/LayoutMain"
import WeatherDetails from "./components/WeatherDetails"
import { dataDestructure } from "./helpers/dataDestructure"
import { coordsValidate } from "./helpers/formValidations"
import { getURL } from "./helpers/getURLs"
// import { ChangeSynthEvent, MouseSynthEvent } from "./types/eventTypes"
import { Coords } from "./types/weatherData"
import { Box, Button, Typography } from "@mui/material"
import { weatherAppSx } from "./sxStyles/weatherAppSx"
import DialogComponent from "./components/DialogComponent"

const App: React.FC = () => {
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

  // const tryAgainHandleClick = () => {
  //   setCoordinates(null)
  //   reset()
  // }
  const weatherData = dataDestructure(value, tabValue)
  return (
    <LayoutMain>
      <Typography variant="h4" component='h1' textAlign='center'>
        Weather Forecast
      </Typography>

      {!coordinates && (
        <DialogComponent
          tabValue={tabValue}
          setTabValue={setTabValue}
        />
      )}

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

          <Button disabled={!(tabValue && watchFields[0] && watchFields[1])} type="submit" variant="contained" color="success" className="confirm-btn">Find Weather Details</Button>
        </Box>
      )}

      <div>
        {(error || value?.message || value?.error) && (
          <div>Error: {error || value.message || value.error}</div>
        )}
        {loading && (<div>Loading mate</div>)}
        {coordinates && (<WeatherDetails data={weatherData} />)}
      </div>
    </LayoutMain>
  )
}

export default App