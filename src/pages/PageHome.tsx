import React from 'react'
import { Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { pageHomeSx } from '../sxStyles/pageHomeSx'
import { motion } from 'framer-motion'
import { containerVariants } from '../motionVariants/containerVariants'

const PageHome: React.FC = () => {
    return (
        <>
            <Box
                sx={{
                    textAlign: "center"
                }}
                component={motion.div}
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
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
                    className='getStarted-btn'
                    variant='contained'
                    color='success'
                    component={Link}
                    sx={pageHomeSx.btn}
                    to="/weather"
                >GET STARTED</Button>
            </Box>
        </>
    )
}

export default PageHome