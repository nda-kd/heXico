import React, { Component } from 'react'
// import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import signupImage from '../../images/Signup-image.svg'
import '../styles/auth.scss';

class Signup extends Component{

    render(){

        return(
            <div className='signup-page-wrap'>
                <div className='signup-signup-wrap'>
                    <div className='signup-signup-part'>
                        <div className='signup-contents'>
                            <div class='signup-title-wrap'>
                                <h1>Create Account</h1>
                                <p>Creat an account in heXico to chat with friends</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='signup-login-wrap'>
                    <div className='signup-login-part'>
                        <div >
                            <span>Create an account</span>
                            <Button variant="outlined" size='large' 
                            style={{border: '.15em solid #0ac5e6f1',
                            color: '#0ac5e6f1', marginLeft: '.5em'}}>
                                sign up
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