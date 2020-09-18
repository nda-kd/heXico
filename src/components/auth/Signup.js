import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import signupImage from '../../images/Signup-image.svg'
import '../styles/auth.scss'

class Signup extends Component {
  render () {
    return (
      <div className='signup-page-wrap'>
        <div className='signup-signup-wrap'>
          <div className='signup-signup-part'>
            <div className='signup-contents'>
              <div class='signup-title-wrap'>
                <h1>Sign up</h1>
                <p>Create an account in heXico to chat with friends</p>
              </div>
              <div class='signup-input-wrap'>
                <div className='two-input-wrap'>
                  <TextField variant='outlined' label='User Name' />
                  <TextField variant='outlined' label='Number' />
                </div>
                <div className='two-input-wrap'>
                  <TextField variant='outlined' label='Password' />
                  <TextField variant='outlined' label='Confirm password' />
                </div>
                <TextField className='email-input' variant='outlined' label='Email' />
              </div>
              <div className='signup-submit'>
                <p>By clicking Sign up, you agree to abide by <Link to='www.'>heXico's Terms and Conditions.</Link> </p>
                <Button
                  variant='contained' size='large'
                  style={{ backgroundColor: '#0ac5e6f1' }}
                >
                    sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='signup-login-wrap'>
          <div className='signup-login-part'>
            <div>
              <span>Already a member? </span>
              <Button
                onClick = {()=>this.props.history.push('/heXico')}
                variant='outlined' size='large'
                style={{
                  border: '.15em solid #0ac5e6f1',
                  color: '#0ac5e6f1',
                  marginLeft: '.5em'
                }}
              >
                    Login
              </Button>
            </div>
            <img alt='' src={signupImage} />
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;
