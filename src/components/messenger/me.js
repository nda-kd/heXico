import React from 'react'
import { Avatar } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import '../styles/msg.scss'
import settingIcon from '../../images/setting.png'

class Me extends React.Component {
  render () {
    const MyAvatar = styled(Avatar)({
      backgroundColor: '#0ac5e6f1',
      color: 'white',
      fontSize: '2em',
      fontFamily: 'sans-serif',
      width: '4.8vw',
      height: '9.8vh',
      margin: '0.5em 0em 0em 1em'
    })

    return (
      <div className='me'>
        <div>
          <MyAvatar alt='My Avatar'>Un</MyAvatar>
          <div className='myIntroduce'>
            <h2>User name</h2>
            <label>
              <p>About me </p>
            </label>

          </div>
        </div>
        <img src={settingIcon} alt='Setting Icon' />
      </div>
    )
  }
}
export default Me
