import * as React from 'react'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
// import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { DialogComponentPropTypes, DialogModalPropTypes } from '../types/muiDialogTypes'

const APIs = ['Open Weather Map API', 'Weatherbit API']

const DialogModal: React.FC<DialogModalPropTypes> = (props) => {
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = (value: any) => {
    onClose(value)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Choose Weather API</DialogTitle>
      <List sx={{ pt: 0 }}>
        {APIs.map((apiName) => (
          <ListItem
            button
            onClick={() => handleListItemClick(apiName)}
            key={apiName}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={apiName} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

const DialogComponent: React.FC<DialogComponentPropTypes> = (props) => {
  const { tabValue, setTabValue } = props
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value: string) => {
    setOpen(false)
    setTabValue(value)
  }

  return (
    <Box sx={{ marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Button variant="contained" onClick={handleClickOpen} sx={{ width: 0.8, bgcolor: "rgba(255,255,255,0.8)", color: "black", padding: "10px 5px", minHeight: "80px" }}>
        {tabValue ? `Chosen API: ${tabValue}` : 'Choose API'}
      </Button>
      <DialogModal
        selectedValue={tabValue}
        open={open}
        onClose={handleClose}
      />
      {/* {
        tabValue && (
          <Typography variant="subtitle1" component="div" sx={{ marginTop: "15px", fontWeight: "bold", fontSize: "14px" }}>
            Selected API: {tabValue}
          </Typography>
        )
      } */}
    </Box>
  )
}

export default DialogComponent