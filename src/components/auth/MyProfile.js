import React, { Component } from 'react'
import { Avatar } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import '../styles/auth.scss'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import InputAdornment from '@material-ui/core/InputAdornment';
import CallEndSharpIcon from '@material-ui/icons/CallEndSharp';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import Badge from '@material-ui/core/Badge';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';

class Profile extends Component {
  render () {
    const MyAvatar = styled(Avatar)({
      backgroundColor: '#0ac5e6f1',
      color: 'white',
      fontSize: '2em',
      fontFamily: 'sans-serif',
      width: '8vw',
      height: '16vh',
      margin: '0em'
    })

    return (
      <div className='profile-wrap'>
        <div className='left-wrap'>
          <div className='left'>
            <div className='avatar-info-wrap'>
              <Badge
              overlap="circle"  
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
              }}
              badgeContent={
                <div>
                  <input accept="image/*" id="icon-button-file" type="file" 
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                      <PhotoCamera style={{fontSize:'1.5em', color: 'gold', }} />
                    </IconButton>
                  </label>
                </div>
              }
              >
                <MyAvatar alt='My Avatar'>Un</MyAvatar> 
              </Badge>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <PersonIcon style={{fontSize:'2em', marginTop:'1.1em', marginRight: '.5em' ,color: '#0ac5e6f1'}} />
              <h1>User name</h1>
            </div>
          </div>
          
        </div>
        <div className='right-wrap'>
          <div className='right' >

          <div className='info-changes'>
            <div className='forms'>
              <TextField id='outlined-basic' label='Email'
              InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <EmailSharpIcon />
                </InputAdornment>
              ),
              }}  
              />              
              <TextField id='outlined-basic' label='Number'  
                InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <CallEndSharpIcon />
                </InputAdornment>
              ),
              }}
              /> 
              <TextField id='outlined-basic' label='Password' 
                InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <VpnKeySharpIcon />
                </InputAdornment>
              ),
              }}
              />
              <TextField id='outlined-basic' label='about'
              InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <InfoSharpIcon />
                </InputAdornment>
              ),
              }}
               />
            </div>
            <div className='buttons-wrap'>
              <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              style={{fontSize:'.8em', backgroundColor: '#0ac5e6f1' }}
              >
                Save
              </Button>
              <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<CancelIcon />}
              style={{fontSize:'.8em', backgroundColor: '#0ac5e6f1' }}
              >
                Cancel
              </Button>
            </div>
          </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Profile
