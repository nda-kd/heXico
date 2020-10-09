import React, { useState } from 'react'
import Popover from '@material-ui/core/Popover'
import InsertEmoji from '@material-ui/icons/InsertEmoticonRounded'
import Picker from 'emoji-picker-react'

const Emoji = () => {
  const [AnchorEmoji, setAnchorEmoji] = useState(null)
  const [chosenEmoji, setChosenEmoji] = useState('')

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject)
    console.log('chosenEmoji::', emojiObject.emoji)
  }

  const handleClick = (event) => {
    setAnchorEmoji(event.currentTarget)
    console.log('emoji component is running ...', AnchorEmoji)
  }

  const handleClose = () => {
    setAnchorEmoji(null)
  }

  const open = Boolean(AnchorEmoji)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <InsertEmoji
        className='emoji-icon MuiIcon-fontSizeLarge'
        onClick={handleClick}

      />
      <Popover
        id={id}
        open={open}
        anchorEl={AnchorEmoji}
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
        <Picker onEmojiClick={onEmojiClick} />
        <div>chosen emoji: {chosenEmoji.emoji}</div>
      </Popover>
    </div>
  )
}

export default Emoji
