import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import {Route} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import AddToolPage from './components/AddTool/AddToolPage';
import PrivateRoute from './PrivateRoute';
import Home from './components/Home/Home';
import AirTools from './components/CategoryPages/AirTools';
import Automotive from './components/CategoryPages/Automotive';
import HandTools from './components/CategoryPages/HandTools'
import LawnAndGarden from './components/CategoryPages/LawnAndGarden';
import Misc from './components/CategoryPages/Misc';
import PowerTools from './components/CategoryPages/PowerTools';
import AdditionalSignup from './components/AdditionalSIgnup/AdditionalSignup';



class App extends Component {

 

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={()=> <Login />} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute path="/welcome"  component={Welcome} /> 
        <Route path="/addtool" component={AddToolPage} />
        <Route path="/home" component={Home} />
        <Route path="/airtools" component={AirTools} />
        <Route path="/automotive" component={Automotive} />
        <Route path="/handtools" component={HandTools} />
        <Route path="/lawnandgarden" component={LawnAndGarden} />
        <Route path="/misc" component={Misc} />
        <Route path="/powertools" component={PowerTools} /> 
        <Route path="/additionalsignup" component={AdditionalSignup} />
      </div>
    );
  }
}

export default App;
