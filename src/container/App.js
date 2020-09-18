import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Messenger from '../components/messenger/messenger'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import Profile from '../components/auth/MyProfile'

function App () {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/heXico' component={Login} />
<<<<<<< HEAD
        <Route path='/heXico/Signup' component={Signup} />
        <Route path='/heXico/messenger' component={Messenger} />
        <Route path='/heXico/profile' component={Profile} />
=======
        <Route path='/Signup' component={Signup} />
        <Route path='/heXico/messenger' component={Messenger} />
        <Route path='/profile' component={Profile} />
>>>>>>> f812c8fdfcb8639f918b91e4fa9b48aae423afe2
      </Switch>
    </div>
  )
}

export default App
