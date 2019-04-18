import { ERROR, FETCH_CATEGORY, FETCH_CATEGORY_SUCCESS } from '../Actions';

const initialState = {
  category: null,
  fetching: false,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return { ...state, fetching: true };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
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


