import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles';
import '../styles/msg.scss'
import settingIcon from '../../images/setting.png'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceSharpIcon from '@material-ui/icons/FaceSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';



class Me extends React.Component {

  constructor(){
    super()

    this.state = {
      anchorEl: null
    }
  }

  handleClick = (event) => {
    this.setState({anchorEl: event.currentTarget})

  };

  handleClose = () => {
    this.setState({anchorEl: null})
  };

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

    const StyledMenu = withStyles({
      paper: {
        border: '1px solid #d3d4d5',
        width: '9.5em',
      },

    })((props) => (
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        {...props}
      />
    ));
    
    const StyledMenuItem = withStyles((theme) => ({
      root: {
        '&:hover': {
          backgroundColor: '#0ac5e6f1',
          '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.white,
          },
        },
      },
    }))(MenuItem);
    

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
        <div>
          <img 
          aria-controls="simple-menu" 
          aria-haspopup="true" 
          onClick={this.handleClick}
          src={settingIcon} alt='Setting Icon' 
          />
          <StyledMenu
          id="customized-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
          >
          <Link to='/Profile'>
          <StyledMenuItem>
              <ListItemIcon>
                <FaceSharpIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </StyledMenuItem>
          </Link>
            <StyledMenuItem>
              <ListItemIcon>
                <ExitToAppSharpIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </StyledMenuItem>
          </StyledMenu>
        </div>
      </div>
    )
  }
}
export default Me;
