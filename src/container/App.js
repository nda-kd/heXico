import React from 'react'
import './App.css'

import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import RootReducer from '../Reducer/rootReducer'

import Messenger from '../components/messenger/MessengerContainer/messenger'
import Login from '../components/auth/Login/Login'
import Signup from '../components/auth/Signup/Signup'
import Profile from '../components/auth/Profile/Profile'

const store = createStore(RootReducer)

function App () {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/Signup' component={Signup} />
            <Route path='/messenger' component={Messenger} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
