import React from 'react'
import { Box } from '@mui/material'

type LayoutProps = {
    children: React.ReactNode
}

const layoutSx = {
    container: {
        backgroundImage: "url(./pic1.jpg)",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    paper: {
        // backgroundImage: "url(./pic3.jpg)",
        // backgroundRepeat: " no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundColor: "rgba(255,255,255,0.7)",
        width: "320px",
        minHeight: "400px",
        padding: "25px 10px",
        borderRadius: "4px"
    }
}

const LayoutMain: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box sx={layoutSx.container}>
            <Box sx={layoutSx.paper}>
                {children}
            </Box>
        </Box>
    )
}

export default LayoutMain