import React, { Component } from 'react'
import '../styles/msg.scss'
import AttachmentIcon from '@material-ui/icons/Attachment'
import sendButton from '../../images/SEND.svg'
import Emoji from '../Additional/Emoji'

class SendMessage extends Component {
  render () {
    return (
      <div className='send-wrap'>
        <div className='emoji-wrap'>
          <Emoji />
        </div>
        <input className='text-input' type='text' placeholder='Type a message' />
        <div className='attach-wrap'>
          <label>
            <AttachmentIcon className='emoji-icon MuiIcon-fontSizeLarge' style={{ fontSize: 27 }} />
            <input type='file' />
          </label>
        </div>
        <img className='send-img' src={sendButton} alt='Send Button' />
      </div>
    )
  }
}

export default SendMessage
