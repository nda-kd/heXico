import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/msg.scss'

class ChatPage extends Component {
  render () {
    return (
      <div className='chat-box'>
        {this.props.messageList.map((message, index) => {
          return (
            <div className='my-chat-wrap' key={index}>
              <div className='myChat'>
                <p>{message.text}</p>
              </div>
            </div>)
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messageList: state.messageList
})

export default connect(mapStateToProps)(ChatPage)
