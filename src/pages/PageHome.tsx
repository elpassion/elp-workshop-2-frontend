import React from 'react'
import { Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { pageHomeSx } from '../sxStyles/pageHomeSx'

const PageHome: React.FC = () => {
    return (
        <Box sx={{
            textAlign: "center"
        }}>
            <Typography
                variant="h4"
                component='h1'
                textAlign='center'
                sx={pageHomeSx.heading}
            >
                Weather Forecast
            </Typography>
            <Typography
                variant="h4"
                component='h4'
                textAlign='center'
                sx={pageHomeSx.subHeading}
            >
                Try out our weather App using coordinates and choosing different API sources!
            </Typography>
            <Button
                variant='contained'
                color='success'
                component={Link}
                sx={pageHomeSx.btn}
                to="/weather"
            >GET STARTED</Button>
        </Box>
    )
}

export default PageHome