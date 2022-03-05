import React from "react"
import { useForm } from 'react-hook-form'
import { useAsyncFn } from "react-use"
import LayoutMain from "./components/LayoutMain"
import WeatherDetails from "./components/WeatherDetails"
import { dataDestructure } from "./helpers/dataDestructure"
import { coordsValidate } from "./helpers/formValidations"
import { getURL } from "./helpers/getURLs"
import { Coords, SynthEvent } from "./types/WeatherData"

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="longitude">Longitude</label>
            <input
              id="longitude"
              type="number"
              {...register("longitude", coordsValidate)}
            />
            <label htmlFor="latitude">Latitude</label>
            <input
              id="latitude"
              type="number"
              {...register("latitude", coordsValidate)}
            />

            <button type="submit" className="confirm-btn">Find Weather Details</button>
          </form>
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