import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer';



const store = createStore(
  reducer,
  applyMiddleware(thunk)
);



ReactDOM.render(
<Router>
 <Provider store={store}>
  <App />
 </Provider>
</Router>


, document.getElementById('root'));


