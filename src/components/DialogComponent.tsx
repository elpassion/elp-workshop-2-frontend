import * as React from 'react'
import Button from '@mui/material/Button'
import { Box, Divider, Typography } from '@mui/material'
import { DialogComponentPropTypes } from '../types/muiDialogTypes'
import DialogModal from './DialogModal'
import { dialogComponentSx } from '../sxStyles/dialogComponentSx'

const DialogComponent: React.FC<DialogComponentPropTypes> = (props) => {
  const { tabValue, setTabValue, coordinates } = props
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value: string) => {
    setOpen(false)
    setTabValue(value)
  }

  return (
    <Box sx={dialogComponentSx.wrapper}>
      <Button className="dialog-btn" variant="contained" onClick={handleClickOpen} sx={dialogComponentSx.btn}>
        {!coordinates ?
          (tabValue ? `Chosen API: ${tabValue}` : 'Choose API') :
          (
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant='body1'>{tabValue}</Typography>
              <Divider sx={{margin: "5px 0 10px"}} />
              <Typography variant='caption'>Try other API</Typography>
            </Box>
          )
        }
      </Button>
      <DialogModal
        selectedValue={tabValue}
        open={open}
        onClose={handleClose}
      />
    </Box>
  )
}

export default DialogComponent