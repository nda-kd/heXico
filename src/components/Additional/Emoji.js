import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import InsertEmoji from '@material-ui/icons/InsertEmoticonRounded'
import Picker from 'emoji-picker-react'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2)
  }
}))

const Emoji = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <InsertEmoji className='emoji-icon MuiIcon-fontSizeLarge' onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <Typography className={classes.typography}><Picker /></Typography>
      </Popover>
    </div>
  )
}

export default Emoji
