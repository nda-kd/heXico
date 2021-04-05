import React, { Component } from 'react'
import './profile.scss'
import { Avatar } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import CancelIcon from '@material-ui/icons/Cancel'
import CallEndSharpIcon from '@material-ui/icons/CallEndSharp'
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp'
import EmailSharpIcon from '@material-ui/icons/EmailSharp'
import InfoSharpIcon from '@material-ui/icons/InfoSharp'
import Badge from '@material-ui/core/Badge'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { getAvatar, profileInfo } from '../../../Redux/action/actions'

class Profile extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedFile: null,
      imageUrl: this.props.adminAvatar,
      edit: false,
      admin: {
        username: this.props.admin.username,
        email: this.props.admin.email,
        password: this.props.admin.password,
        number: this.props.admin.number,
        description: this.props.admin.description,
        status: this.props.admin.status 
      }
    }
  }

  fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
 
    let reader = new FileReader();
     
    reader.onloadend = () => {
      this.setState({
         imageUrl: reader.result
      });
    }
 
    reader.readAsDataURL(event.target.files[0])
    console.log("imageUrl",this.state.imageUrl)
  }

  onChangeHandle = (e)=>{
    const {name, value} = e.target
    this.setState({
      admin: {...this.state.admin, [name]: value}
    })
  }

  saveClickHandle = () =>{
    this.props.dispatch(getAvatar(this.state.imageUrl))
    this.props.dispatch(profileInfo(this.state.admin))
    this.props.history.push("./messenger")
  }

  editUsernameHandle = (e)=>{
    this.setState({admin: { ...this.state.admin, username: e.target.value }})
    this.setState({edit: false})
  }

  editKeyPress = (e)=>{
    if(e.key === 'Enter'){
      this.editUsernameHandle(e)
      
    }
    
  }

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
                overlap='circle'
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                badgeContent={
                  <div>
                    <input
                      accept='image/*' id='icon-button-file' type='file' onChange={this.fileChangedHandler}
                    />
                    <label htmlFor='icon-button-file'>
                      <IconButton color='primary' aria-label='upload picture' component='span'>
                        <PhotoCamera style={{ fontSize: '1.5em', color: 'gold' }} />
                      </IconButton>
                    </label>
                  </div>
                }
              >
                <MyAvatar alt='My Avatar' src={this.state.imageUrl}>A</MyAvatar>
              </Badge>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: "1.3em" }}>
              <PersonIcon 
                style={{ 
                fontSize: '2em', 
                marginTop: '1.22em', 
                marginRight: '.3em', 
                color: '#0ac5e6f1' }} 
              />
              {!this.state.edit ? 
              <h1>{this.state.admin.username ? this.state.admin.username : "Admin"}</h1>
              : <input 
              className='edit-input' 
              placeholder={this.state.admin.username}
              onKeyPress={this.editKeyPress}
              onBlur={this.editUsernameHandle}
               />
             }
              <EditRoundedIcon onClick={()=> this.setState({edit: true})} 
                style={{ 
                fontSize: '1.4em', 
                marginTop: '1.99em', 
                marginLeft: '.3em', 
                backgroundColor: '#0ac5e6f1',
                borderRadius: '.2em',
                color: 'white',
                cursor: 'pointer'
              }} 
              />
            </div>
          </div>

        </div>
        <div className='right-wrap'>
          <div className='right'>

            <div className='info-changes'>
              <div className='forms'>
                <div className='profile-input-wrap'>
                  <Grid container spacing={2} alignItems='flex-end'>
                    <Grid item>
                      <EmailSharpIcon />
                    </Grid>
                    <Grid item>
                      <TextField id='input-with-icon-grid1' label='Email' name="email" onChange={this.onChangeHandle} />
                    </Grid>
                  </Grid>
                </div>
                <div className='profile-input-wrap'>
                  <Grid container spacing={2} alignItems='flex-end'>
                    <Grid item>
                      <CallEndSharpIcon />
                    </Grid>
                    <Grid item>
                      <TextField id='input-with-icon-grid2' label='Number' name="number" onChange={this.onChangeHandle} />
                    </Grid>
                  </Grid>
                </div>
                <div className='profile-input-wrap'>
                  <Grid container spacing={2} alignItems='flex-end'>
                    <Grid item>
                      <VpnKeySharpIcon />
                    </Grid>
                    <Grid item>
                      <TextField type='password' id='input-with-icon-grid3' label='Password' name="password" onChange={this.onChangeHandle} />
                    </Grid>
                  </Grid>
                </div>
                <div className='profile-input-wrap'>
                  <Grid container spacing={2} alignItems='flex-end'>
                    <Grid item>
                      <InfoSharpIcon />
                    </Grid>
                    <Grid item>
                      <TextField id='input-with-icon-grid4' label='About' name="description" onChange={this.onChangeHandle} />
                    </Grid>
                  </Grid>
                </div>
              </div>
              <div className='buttons-wrap'>
                <Button
                  variant='contained'
                  color='primary'
                  size='large'
                  startIcon={<SaveIcon />}
                  style={{ fontSize: '.8em', backgroundColor: '#0ac5e6f1' }}
                  onClick={this.saveClickHandle}
                >
                Save
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  size='large'
                  startIcon={<CancelIcon />}
                  style={{ fontSize: '.8em', backgroundColor: '#0ac5e6f1' }}
                  onClick={() => this.props.history.push('./Messenger')}
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

const mapStateToProps = state =>({
  adminAvatar: state.adminAvatar,
  admin: state.admin
})

const mapDispatchToProps = dispatch =>({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
