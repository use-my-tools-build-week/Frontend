import { ERROR, FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS } from '../Actions';

const initialState = {
  categories: [],
  fetching: false,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, fetching: true };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        fetching: false
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

