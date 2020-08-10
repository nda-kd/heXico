import React from 'react'
import Contacts from './contacts'
import Staus from './status'
import ChatPage from './chatPage'
import SendMesseage from './sendMessage'
import ContactProfile from './contactProfile'
import '../styles/msg.scss'

class Messenger extends React.Component {
  render () {
    return (
      <div className='Conv-pg-wrap'>
        <Contacts />
        <div className='chat-send-profile-status-wrap'>
          <Staus />
          <div className='chat-send-profile-wrap'>
            <div className='chat-send-wrap'>
              <ChatPage />
              <SendMesseage />
            </div>
            <ContactProfile />
          </div>
        </div>

      </div>
    )
  }
}
export default Messenger
