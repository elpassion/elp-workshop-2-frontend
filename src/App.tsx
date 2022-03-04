import React from "react"
import { useAsyncFn } from "react-use"

type SynthEvent = React.SyntheticEvent<Element, Event>

const getURL = (reqValue: string): string => {
  let URL = ''
  if (reqValue === 'Open Weather Map API') {
    URL = 'https://api.openweathermap.org/data/2.5/weather?q=Gdynia,pl&appid=d45fdad17e3b225c88a4be40c4a6ee2b&units=metric'
  } else {
    URL = 'anotherHTTPRequest'
  }
  return URL
}

const App: React.FC = () => {
  const [tabValue, setTabValue] = React.useState('Open Weather Map API')
  const [{ value, loading, error }, fetchWeather] = useAsyncFn(async () => {
    const response = await fetch(getURL(tabValue))
    const result = await response.json()
    return result
  }, [tabValue])

  const handleClick = (event: SynthEvent) => {
    setTabValue((event.target as HTMLParagraphElement).innerText)
  }
  console.log("tabValue", tabValue, value)
  return (
    <>
      <div>
        <p className="tab-1" onClick={handleClick}>Open Weather Map API</p>
        <p className="tab-2" onClick={handleClick}>Rapid Weather API</p>
      </div>
      <label htmlFor="latitude">Latitude</label>
      <input id="latitude" type="number" />
      <label htmlFor="longitude">Longitude</label>
      <input id="longitude" type="number" />
      <button className="confirm-btn" onClick={fetchWeather}>Find Weather Details</button>
    </>
  )
}

export default App


