import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import { DialogModalPropTypes } from '../types/muiDialogTypes'

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
            sx={{
              textAlign: "center",
              backgroundColor: selectedValue === apiName ? "whitesmoke" : "initial"
            }}
          >
            <ListItemText primary={apiName} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default DialogModal