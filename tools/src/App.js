import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import {Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <SignUp />
      </div>
    );
  }
}

export default App;
