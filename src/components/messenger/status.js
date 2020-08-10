import React from 'react'
import { Avatar } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import '../styles/msg.scss'
// import bas from '../../images/Av.png'

class Status extends React.Component {
  render () {
    const MyAvatar = styled(Avatar)({
      backgroundColor: '#eee',
      color: 'white',
      fontSize: '1em',
      fontFamily: 'sans-serif',
      width: '3.5em',
      height: '3.5em',
      marginLeft: '0em',
      border: '2px solid #0ac5e6f1'
    })

    return (
      <div className='status-wrap'>
        <div className='status-text'>
          <h3>Status</h3>
        </div>
        <div className='all-statuses'>
          <div className='indivisual-status'>
            <MyAvatar src='#' />
            <h4>My Status</h4>
          </div>
          {/* <div className='indivisual-status'>
                        <MyAvatar src="#" ></MyAvatar>
                        <h4>user name</h4>
                    </div> */}
        </div>
      </div>
    )
  }
}

export default Status
