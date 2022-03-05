import React from "react"
import { useForm } from 'react-hook-form'
import { useAsyncFn } from "react-use"
import CustomInput from "./components/CustomInput"
import LayoutMain from "./components/LayoutMain"
import WeatherDetails from "./components/WeatherDetails"
import { dataDestructure } from "./helpers/dataDestructure"
import { coordsValidate } from "./helpers/formValidations"
import { getURL } from "./helpers/getURLs"
import { Coords, SynthEvent } from "./types/WeatherData"
import { Box, Button } from "@mui/material"
import { weatherAppSx } from "./sxStyles/weatherAppSx"

const App: React.FC = () => {
  const [tabValue, setTabValue] = React.useState('Open Weather Map API')
  const [coordinates, setCoordinates] = React.useState<Coords>(null)

  const [{ value, loading, error }, fetchWeather] = useAsyncFn(async () => {
    const URL = getURL(tabValue, coordinates)
    const response = await fetch(URL)
    const result = await response.json()
    return result
  }, [tabValue, coordinates])

  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const onSubmit = (data: Coords) => {
    setCoordinates({
      longitude: data?.longitude,
      latitude: data?.latitude
    })
  }
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

  const handleClick = (event: SynthEvent) => {
    setTabValue((event.target as HTMLParagraphElement).innerText)
  }
  const TryAgainHandleCLick = () => {
    setCoordinates(null)
    reset()
  }
  const weatherData = dataDestructure(value, tabValue)
  return (
    <LayoutMain>
      <h1>{tabValue}</h1>
      <div>
        <p className="tab-1" onClick={handleClick}>Open Weather Map API</p>
        <p className="tab-2" onClick={handleClick}>Weatherbit API</p>
        {coordinates && (<button onClick={TryAgainHandleCLick}>Try another location dude</button>)}
      </div>

      {!coordinates && (
        <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={weatherAppSx.formContainer.wrapper}>
          <Box sx={weatherAppSx.formContainer.inputWrapper}>
            <CustomInput
              id="longitude"
              type={"number"}
              registerProps={{ ...register("longitude", coordsValidate) }}
              placeholder={"longitude"}
              error={errors["longitude"]}
            />
            <CustomInput
              id="latitude"
              type={"number"}
              registerProps={{ ...register("latitude", coordsValidate) }}
              placeholder={"latitude"}
              error={errors["latitude"]}
            />
          </Box>

          <Button type="submit" variant="contained" color="success" className="confirm-btn">Find Weather Details</Button>
        </Box>
      )
      }
      <div>
        {
          (error || value?.message || value?.error) && (
            <div>Error: {error || value.message || value.error}</div>
          )
        }
        {
          loading && (
            <div>Loading mate</div>
          )
        }
        {
          coordinates && (
            <WeatherDetails data={weatherData} />
          )
        }
      </div>
    </LayoutMain>
  )
}

export default App