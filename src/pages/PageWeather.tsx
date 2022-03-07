import React from 'react'
import CustomInput from "../components/CustomInput"
import { coordsValidate } from "../helpers/formValidations"
import { Box, Button, Typography } from "@mui/material"
import DialogComponent from "../components/DialogComponent"
import { useForm } from 'react-hook-form'
import { Coords } from "../types/weatherData"
import { pageWeatherSx } from '../sxStyles/pageWeatherSx'
import { useNavigate } from 'react-router-dom'

const PageWeather = () => {
  const navigate = useNavigate()
  const [tabValue, setTabValue] = React.useState('')

  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const onSubmit = (data: Coords) => {
    navigate("/weather/results", {
      state: {
        coordinates: {
          longitude: data?.longitude,
          latitude: data?.latitude
        },
        tabValueParent: tabValue
      }
    })
  }
  const watchFields = watch(["longitude", "latitude"])

  return (
    <Box sx={pageWeatherSx.container}>
      <Typography variant="h4" textAlign='center' sx={pageWeatherSx.heading}>
        Search weather by coordinates:
      </Typography>
      <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={pageWeatherSx.formContainer.wrapper}>
        <Box sx={pageWeatherSx.formContainer.inputWrapper}>
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

        <Box sx={{
          marginTop: { xs: "10px", md: "30px" },
          marginBottom: "30px",
        }}>

          <DialogComponent
            tabValue={tabValue}
            setTabValue={setTabValue}
          />
        </Box>
        <Button
          disabled={!(tabValue && watchFields[0] && watchFields[1])}
          type="submit"
          variant="contained"
          color="success"
          className="confirm-btn"
          sx={pageWeatherSx.btn}
        >Search Weather Details</Button>
      </Box>
    </Box>
  )
}

export default PageWeather