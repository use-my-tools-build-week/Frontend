import { combineReducers } from 'redux';
import Reducer from './Reducer';
import { conditionsReducer } from './conditions';
import { categoriesReducer } from './categories';

export default combineReducers({
  Reducer,
  categories: categoriesReducer,
  conditions: conditionsReducer
});
