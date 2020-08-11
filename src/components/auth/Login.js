import React, { Component } from 'react'
// import TextField from '@material-ui/core/TextField'
import '../styles/auth.scss';

class Login extends Component{

    render(){

        return(
            <div className='login-page-wrap'>
                <div className='signup-wrap'>
                    <div className='signup-part'>
                       
                    </div>

                </div>
                <div className='login-wrap'>
                    <div className='login-part'>
                        <div className='login-contents'>
                            <div className='login-title-wrap'>
                                <h1>Login</h1>
                                <p>Enter your username and password</p>
                            </div>
                            {/* <div className='input-wrap'>
                                <div className='input-error'>
                                    <TextField variant='outlined' label='Email' />
                                    <p></p>
                                </div>
                                <div className='input-error'>
                                    <TextField variant='outlined' type='password' label='Password'/>
                                    <p></p>
                                </div>
                            </div> */}
                     </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login