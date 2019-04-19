import { combineReducers } from 'redux';
import Reducer from './Reducer';
import { conditionsReducer } from './conditions';
import { categoriesReducer } from './categories';
import { categoryReducer } from './category';

export default combineReducers({
  Reducer,
  categories: categoriesReducer,
  conditions: conditionsReducer,
  category: categoryReducer
});
