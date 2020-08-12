import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import loginImage from '../../images/Login-image.svg'
import '../styles/auth.scss';


class Login extends Component{

    render(){

        return(
            <div className='login-page-wrap'>
                <div className='login-signup-wrap'>
                    <div className='login-signup-part'>
                        <div >
                            <span>Create an account</span>
                            <Button variant="outlined" size='large' 
                            style={{border: '.15em solid #0ac5e6f1',
                            color: '#0ac5e6f1', marginLeft: '.5em'}}>
                                sign up
                            </Button>
                        </div>
                       <img src={loginImage} />
                    </div>
                </div>
                <div className='login-login-wrap'>
                    <div className='login-login-part'>
                        <div className='login-contents'>
                            <div className='login-title-wrap'>
                                <h1>Login</h1>
                                <p>Enter your username and password</p>
                            </div>
                            <div className='input-wrap'>
                                <div className='input-error'>
                                    <TextField variant='outlined' label='Email' />
                                </div>
                                <div className='input-error'>
                                    <TextField variant='outlined' type='password' label='Password'/>
                                </div>
                            </div>
                            <div className='login-submit'>
                                <span>
                                    <input type='checkbox' id='login' name='login'/>
                                    <label for="login">Remember me</label>
                                </span>
                                <Button variant="contained"  size='large' 
                                style={{backgroundColor: '#0ac5e6f1'}}>
                                    Login
                                </Button>
                            </div>
                            <a href='http://localhost:3000/Signup#'>Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login