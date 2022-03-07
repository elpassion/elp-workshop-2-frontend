import React from "react"
// import { useForm } from 'react-hook-form'
// import { useAsyncFn } from "react-use"
// import CustomInput from "./components/CustomInput"
import LayoutMain from "./components/LayoutMain"
// import WeatherDetails from "./components/WeatherDetails"
// import { dataDestructure } from "./helpers/dataDestructure"
// import { coordsValidate } from "./helpers/formValidations"
// import { getURL } from "./helpers/getURLs"
// import { ChangeSynthEvent, MouseSynthEvent } from "./types/eventTypes"
// import { Coords } from "./types/weatherData"
// import { Box, Button, Typography } from "@mui/material"
// import { weatherAppSx } from "./sxStyles/weatherAppSx"
// import DialogComponent from "./components/DialogComponent"
import { Route, Routes } from "react-router-dom"
import PageHome from "./pages/PageHome"
import PageWeather from "./pages/PageWeather"

const App: React.FC = () => {
  return (
    <>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/weather" element={<PageWeather />} />
        </Routes>
      </LayoutMain>
    </>
  )
}

export default App