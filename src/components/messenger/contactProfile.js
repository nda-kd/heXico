import React, { Component } from 'react'
import '../styles/msg.scss'
import { Avatar } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import CallSharpIcon from '@material-ui/icons/CallSharp';
import VideocamIcon from '@material-ui/icons/Videocam';


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
         </div>
         <div className='contacts-profile-call-info'>
            <div>
              <p>Last Login:</p>
              <p className='p-color'>dgdg</p>
            </div>
            <hr />
            <div>
              <p>Emaile:</p>
              <p className='p-color'>dfgdfggdgdfgdfgdfg</p>
            </div>
            <hr />
            <div>
            <p>Location:</p>
            <p className='p-color'>sdgdg</p>
            </div>
          </div>
          <div className='calls-wrap'>
            <CallSharpIcon 
            style=
            {{fontSize: '50', color: '#eee',
             backgroundColor: '#fff',
              borderRadius: '50%',
              width: '50',
              height: '50',
              padding: '5',
              border: '1px solid #0ac5e6f1'
              }} 
              />
            <VideocamIcon 
            style=
            {{fontSize: '50', color: '#eee',
             backgroundColor: '#fff',
              borderRadius: '50%',
              width: '50',
              height: '50',
              padding: '5',
              border: '1px solid #0ac5e6f1'
              }}
             />
          </div>
      </div>
    )
  }
}

export default ContactProfile
