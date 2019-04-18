import { ERROR, FETCH_CONDITIONS, FETCH_CONDITIONS_SUCCESS } from '../Actions';

const initialState = {
  conditions: [],
  fetching: false,
};

export const conditionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONDITIONS:
      return { ...state, fetching: true };
    case FETCH_CONDITIONS_SUCCESS:
      return {
        ...state,
        conditions: action.payload,
        fetching: false
      };
    case ERROR:
      return {
        ...initialState,
        conditions: state.conditions,
        error: action.payload
      };
    default:
      return state;
  }
};
