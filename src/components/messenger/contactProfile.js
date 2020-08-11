import React, { Component } from 'react'
import '../styles/msg.scss'
import { Avatar } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import CallSharpIcon from '@material-ui/icons/CallSharp'
import VideocamIcon from '@material-ui/icons/Videocam'
import InfoIcon from '@material-ui/icons/Info'

class ContactProfile extends Component {
  render () {
    const MyAvatar = styled(Avatar)({
      backgroundColor: '#0ac5e6f1',
      color: 'white',
      fontSize: '2em',
      fontFamily: 'sans-serif',
      width: '7vw',
      height: '14vh',
      margin: '0.3em 0em .3em 2.2em'
    })

    return (
      <div className='contact-profile-wrap'>
        <div className='contacts-profile'>
          <MyAvatar alt='My Avatar'>Un</MyAvatar>
          <h2>User name</h2>
          {/* <p className='center'>Location</p> */}
          <hr />
          <label>
            <p>about</p>
          </label>
          <div className='contact-profile-menu-wrap'>
            <CallSharpIcon style={{ fontSize: '35', color: '#0ac5e6f1' }} />
            <InfoIcon style={{ fontSize: '35', color: '#0ac5e6f1' }} />
            <VideocamIcon style={{ fontSize: '35', color: '#0ac5e6f1' }} />
          </div>
        </div>
      </div>
    )
  }
}

export default ContactProfile
