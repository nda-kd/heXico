import React from "react";
import "./App.css";

import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import RootReducer from "../Redux/Reducer/rootReducer";

import Login from "../components/auth/Login/Login";
import Signup from "../components/auth/Signup/Signup";

import ProtectedRoute from "./protectedRoute";

const store = createStore(RootReducer, applyMiddleware(thunk));

function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Signup" component={Signup} />
            <ProtectedRoute />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
