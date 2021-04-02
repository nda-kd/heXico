import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { login } from '../../../Redux/action/actions'
import loginImage from '../../../assets/Login-image.svg'
import validate from '../../../validation/validation'
import './login.scss'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      }
    }
  } 

  handleClick (e) {
    this.props.dispatch(login(this.state.fields.email,this.state.fields.password,this.props.history))
    console.log('checkedhandle::', this.state.errors)
    const { email, password } = this.state.errors
    if (password.length === 0 && email.length === 0) {
      this.setState({
        ...this.state,
        fields: {
          email: '',
          password: ''
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

  componentDidMount(){
    // const {email,password} = this.state
    // this.props.dispatch(login(email,password))
  }

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
                  <TextField
                    value={this.state.fields.email}
                    onChange={(e) => this.handleChange(e)}
                    onBlur={(e) => this.handleValidation(e)}
                    name='email'
                    type='email'
                    variant='outlined'
                    label='Email'
                    required
                  />
                  <p>{this.state.errors.email}</p>
                </div>
                <div className='input-error'>
                  <TextField
                    value={this.state.fields.password}
                    onChange={(e) => this.handleChange(e)}
                    onBlur={(e) => this.handleValidation(e)}
                    name='password'
                    variant='outlined'
                    type='password'
                    label='Password'
                    required
                  />
                  <p>{this.state.errors.password}</p>
                </div>
              </div>
              <div className='login-submit'>
                <span>
                  <input type='checkbox' id='login' name='login' />
                  <label htmlFor='login'>Remember me</label>
                </span>
                <Button
                  type='submit'
                  onClick={(e) => this.handleClick(e)}
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

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})


export default connect(mapDispatchToProps)(Login)
