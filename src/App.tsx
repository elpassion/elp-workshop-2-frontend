import React from "react"
import LayoutMain from "./components/LayoutMain"
import { Route, Routes } from "react-router-dom"
import PageHome from "./pages/PageHome"
import PageWeather from "./pages/PageWeather"
import PageWeatherResults from "./pages/PageWeatherResults"

const App: React.FC = () => {
  return (
    <>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/weather" element={<PageWeather />} />
          <Route path="/weather/results" element={<PageWeatherResults />} />
        </Routes>
      </LayoutMain>
    </>
  )
}

export default App