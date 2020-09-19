import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Messenger from '../components/messenger/messenger'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import Profile from '../components/auth/MyProfile'
import conversation from '../reducer/rootReducer'

const store = createStore(conversation)

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/Signup' component={Signup} />
          <Route path='/messenger' component={Messenger} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </div>
    </Provider>
  )
}

export default App
