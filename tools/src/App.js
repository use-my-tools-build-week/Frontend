import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import {Route} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import AddToolPage from './components/AddTool/AddToolPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/welcome"  component={Welcome} /> 
        {/* <AddToolPage /> */}
      </div>
    );
  }
}

export default App;
