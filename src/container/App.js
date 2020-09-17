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
        <Route exact path='/' component={Login} />
        <Route path='/Signup' component={Signup} />
        <Route path='/messenger' component={Messenger} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </div>
  )
}

export default App