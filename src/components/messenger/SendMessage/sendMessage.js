import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNewMessage } from '../../../action/actions'
import './send.message.scss'

import AttachmentIcon from '@material-ui/icons/Attachment'
import sendButton from '../../../assets/SEND.svg'
import Emoji from '../../Additional/Emoji'

class SendMessage extends Component {

  constructor(){
    super()

    this.state = {
      newMessage: '',
      chosenEmoji: ''
    }
  }

  handleChange = (event) => {
    console.log('newMessage setState::',  this.state.newMessage)
    this.setState({newMessage : event.target.value})
  }

  sendMessage = () => {
    if(this.state.newMessage.length === 0 || this.state.newMessage === ' '){
      return;
    }
    this.props.dispatch(sendNewMessage(this.state.newMessage))
    this.setState({newMessage: ''})
    console.log('newMessage setState click::',  this.state.newMessage)
  }

  sendKey = (event) => {
    if(event.key === 'Enter')
      this.sendMessage()
      console.log('onKey::', event.key)
  }

  

  render () {
    return (
      <div className='send-wrap'>
        <div className='emoji-wrap'>
          <Emoji/>
        </div>
        <input 
        value={this.state.newMessage}
        className='text-input' 
        type='text' 
        placeholder='Type a message'
        onChange={this.handleChange}
        onKeyPress={this.sendKey}
         />
        <div className='attach-wrap'>
          <label>
            <AttachmentIcon className='emoji-icon MuiIcon-fontSizeLarge' style={{ fontSize: 27 }} />
            <input type='file' />
          </label>
        </div>
        <img 
        className='send-img' 
        src={sendButton} 
        alt='Send Button' 
        onClick={this.sendMessage}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(SendMessage)
