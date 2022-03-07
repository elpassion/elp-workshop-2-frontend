import React from "react"
import LayoutMain from "./components/LayoutMain"
import { Route, Routes, useLocation } from "react-router-dom"
import PageHome from "./pages/PageHome"
import PageWeather from "./pages/PageWeather"
import PageWeatherResults from "./pages/PageWeatherResults"
import { AnimatePresence } from "framer-motion"

const App: React.FC = () => {
  const location = useLocation()
  return (
    <>
      <LayoutMain>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<PageHome />} />
            <Route path="/weather" element={<PageWeather />} />
            <Route path="/weather/results" element={<PageWeatherResults />} />
          </Routes>
        </AnimatePresence>
      </LayoutMain>
    </>
  )
}

export default App