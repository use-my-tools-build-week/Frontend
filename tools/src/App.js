import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import {Route} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import AddToolPage from './components/AddTool/AddToolPage';
import PrivateRoute from './PrivateRoute';



class App extends Component {

 

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={()=> <Login />} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute path="/welcome"  component={Welcome} /> 
        <Route path="/addtool" component={AddToolPage} />
      </div>
    );
  }
}

export default App;
