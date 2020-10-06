import React from 'react'
import Contacts from '../Contacts/contacts'
import Staus from '../Status/status'
import ChatPage from '../Chat/chatPage'
import SendMesseage from '../SendMessage/sendMessage'
import ContactProfile from '../ContactProfile/contactProfile'
import './messenger.scss'

class Messenger extends React.Component {
  render () {
    return (
      <div className='Conversation-page-wrap'>
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
