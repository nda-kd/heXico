import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNewMessage } from '../../action/chatAction'
import '../styles/msg.scss'
import AttachmentIcon from '@material-ui/icons/Attachment'
import sendButton from '../../images/SEND.svg'
import Emoji from '../Additional/Emoji'

class SendMessage extends Component {
  constructor () {
    super()
    this.state = {
      newMessage: ''
    }
  }

  changeHandle (e) {
      this.setState({ newMessage: e.target.value })
      console.log(e)
    
  }

  sendMessage () {
    this.props.dispatch(sendNewMessage(this.state.newMessage))
    this.setState({ newMessage: '' })
  }

  sendMsg (e) {
    if (e.key === 'Enter') {
      this.sendMessage()
    }
  }

  render () {
    return (
      <div className='send-wrap'>
        <div className='emoji-wrap'>
          <Emoji />
        </div>
        <input
          className='text-input' type='text' placeholder='Type a message'
          value={this.state.newMessage}
          onChange={(e) => this.changeHandle(e)}
          onKeyPress={(e) => this.sendMsg(e)}
        />
        <div className='attach-wrap'>
          <label>
            <AttachmentIcon className='emoji-icon MuiIcon-fontSizeLarge' style={{ fontSize: 27 }} />
            <input type='file' />
          </label>
        </div>
        <img className='send-img' src={sendButton} alt='Send Button' onClick={() => this.sendMessage()} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(SendMessage)
