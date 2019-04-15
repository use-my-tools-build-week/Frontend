import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import {Route} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} /> */}
        <Welcome /> 
      </div>
    );
  }
}

export default App;
