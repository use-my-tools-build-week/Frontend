import { ERROR, FETCH_CATEGORY, FETCH_CATEGORY_SUCCESS } from '../Actions';
import { FETCH_TOOL_SUCCESS } from '../Actions/Tools';

const initialState = {
  category: null,
  fetching: false
};

const updateTool = (state, action) => {
  if (!state.category) {
    return state;
  }
  const newCategory = { ...state.category };
  const tools = newCategory.tools.results;
  const newTool = action.payload;

  const foundTool = tools.findIndex(t => t.id === newTool.id);
  const updatedTools = [...tools];
  if (foundTool > -1) {
    updatedTools[foundTool] = newTool;
    newCategory.tools.results = updatedTools;
    return { ...state, category: newCategory };
  }

  return state;
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
    case FETCH_TOOL_SUCCESS:
      return updateTool(state, action);
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
