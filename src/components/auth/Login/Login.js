import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import loginImage from '../../../assets/Login-image.svg'
import './login.scss'

class Login extends Component {
  render () {
    return (
      <div className='login-page-wrap'>
        <div className='login-signup-wrap'>
          <div className='login-signup-part'>
            <div>
              <span>Create an account</span>
              <Button
                onClick={() => this.props.history.push('/Signup')}
                variant='outlined' size='large'
                style={{
                  border: '.15em solid #0ac5e6f1',
                  color: '#0ac5e6f1',
                  marginLeft: '.5em'
                }}
              >
                sign up
              </Button>
            </div>
            <img src={loginImage} alt='' />
          </div>
        </div>
        <div className='login-login-wrap'>
          <div className='login-login-part'>
            <div className='login-contents'>
              <div className='login-title-wrap'>
                <h1>Login</h1>
                <p>Enter your username and password</p>
              </div>
              <div className='login-input-wrap'>
                <div className='input-error'>
                  <TextField variant='outlined' label='Email' />
                </div>
                <div className='input-error'>
                  <TextField variant='outlined' type='password' label='Password' />
                </div>
              </div>
              <div className='login-submit'>
                <span>
                  <input type='checkbox' id='login' name='login' />
                  <label htmlFor='login' >Remember me</label>
                </span>
                <Button
                  variant='contained' size='large'
                  style={{ backgroundColor: '#0ac5e6f1' }}
                >
                    Login
                </Button>
              </div>
              <Link to='/'>Forgot your password?</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
