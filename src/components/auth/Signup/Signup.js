import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import signupImage from '../../../assets/Signup-image.svg'
import validate from '../../../validation/validation'
import './signup.scss'

class Signup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: {
        email: '',
        password: '',
        repeatedPassword: '',
        userName: '',
        number: ''
      },
      errors: {
        email: '',
        password: '',
        repeatedPassword: ''
      }
    }
  }

  handleClick (e) {
    console.log('checkedhandle::', this.state.errors)
    const { email, password } = this.state.errors
    if (password.length === 0 && email.length === 0) {
      this.setState({
        ...this.state,
        fields: {
          email: '',
          password: '',
          repeatedPassword: '',
          userName: '',
          number: ''
        }
      })
      console.log(':::clicked')
    }
  }

  handleValidation (event) {
    const { name, value } = event.target

    this.setState({
      ...this.state,
      errors: {
        ...this.state.errors,
        [name]: validate(name, value)
      }

    })

    console.log('checked::', this.state.errors)
  }

  confirmPasswordValidation (event) {
    const { password } = this.state.fields
    console.log('match pass::', event.target.value)

    if (password !== event.target.value) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          repeatedPassword: 'passwords are not matched'
        }
      })
    } else {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          repeatedPassword: ''
        }
      })
    }
  }

  handleChange (event) {
    const { name, value } = event.target
    this.setState({
      ...this.state,
      fields: {
        ...this.state.fields,
        [name]: value
      }
    })
    console.log('handleChange-login::', this.state)
  }

  render () {
    return (
      <div className='signup-page-wrap'>
        <div className='signup-signup-wrap'>
          <div className='signup-signup-part'>
            <div className='signup-contents'>
              <div className='signup-title-wrap'>
                <h1>Sign up</h1>
                <p>Create an account in heXico to chat with friends</p>
              </div>
              <div className='signup-input-wrap'>
                <div className='two-input-wrap'>
                  <TextField
                    variant='outlined'
                    label='User Name'
                    name='userName'
                    value={this.state.fields.userName}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    variant='outlined'
                    label='Number'
                    name='number'
                    value={this.state.fields.number}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className='two-input-wrap'>
                  <TextField
                    variant='outlined' label='Password*'
                    name='password' type='password'
                    value={this.state.fields.password}
                    onChange={(e) => this.handleChange(e)}
                    onBlur={(e) => this.handleValidation(e)}
                  />
                  <TextField
                    variant='outlined'
                    label='Confirm password*'
                    type='password'
                    name='repeatedPassword'
                    value={this.state.fields.repeatedPassword}
                    onChange={(e) => this.handleChange(e)}
                    onBlur={(e) => this.confirmPasswordValidation(e)}
                  />
                </div>
                <div className='password-errors-wrap'>
                  <p>{this.state.errors.password}</p>
                  <p>{this.state.errors.repeatedPassword}</p>
                </div>
                <div className='email-input'>
                  <TextField
                    variant='outlined'
                    label='Email*'
                    name='email'
                    value={this.state.fields.email}
                    onChange={(e) => this.handleChange(e)}
                    onBlur={(e) => this.handleValidation(e)}
                  />
                </div>
                <p className='email-p'>{this.state.errors.email}</p>
              </div>
              <div className='signup-submit'>
                <p>By clicking Sign up, you agree to abide by <Link to='www.'>heXico's Terms and Conditions.</Link> </p>
                <Button
                  variant='contained' size='large'
                  style={{ backgroundColor: '#0ac5e6f1' }}
                  onClick={(e) => this.handleClick(e)}
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
                onClick={() => this.props.history.push('/')}
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

export default Signup
