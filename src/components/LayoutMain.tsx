import React from 'react'
import { Box } from '@mui/material'
import { layoutSx } from '../sxStyles/layoutSx'

type LayoutProps = {
    children: React.ReactNode
}

const LayoutMain: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box sx={layoutSx.container}>
            <Box sx={layoutSx.backdrop}>
                {children}
            </Box>
        </Box>
    )
}

export default LayoutMain