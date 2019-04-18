import { FETCHING, SUCCESS, GET_DATA_ERROR,
 GET_DATA_SUCCESS, GET_DATA_FETCH, ADD_TOOL,
 ADD_TOOL_ERROR,ADD_TOOL_SUCCESS, DELETE_ERROR,
  DELETE_SUCCESS, UPDATE_USER_SUCCESS,
  FETCH_TOOL_SUCCESS
} from "../Actions";

const initialState = {
    Tools: [],
    fetching: false,
    error: null,
    DataStart: false,
    addingTool: false,
    fetchMyTools: false,
    Mytools: []
}

const updateTool = (state, action) => {
  if (!state.category) {
    return state;
  }
  const { tools } = state.Tools;
  const newTool = action.payload;

  const foundTool = tools.findIndex(t => t.id === newTool.id);
  const updatedTools = [...tools];
  if (foundTool > -1) {
    updatedTools[foundTool] = newTool;
    return {...state, Tools: updatedTools};
  }

  return state;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
       case FETCHING:
            return {
                ...state,
                error: null,
                fetching: true
            }
        case SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                categories: action.payload.categories,
                conditions: action.payload.conditions
            }
        case GET_DATA_FETCH:
            return {
                ...state,
                error: '',
                DataStart: true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                DataStart: false,
                Tools: action.payload
            };
        case GET_DATA_ERROR:
            return {
                ...state,
                error: action.payload,
                DataStart: false
            };
        case ADD_TOOL:
            return {
                ...state,
                addingTool: true,
            }
        case ADD_TOOL_SUCCESS:
            return {
                ...state,
                Tools: action.payload,
                addingTool: false
            }
        case ADD_TOOL_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                Tools: action.payload
            }
        case DELETE_ERROR:
        return {
                ...state,
                error: action.payload
            }
        case GET_MY_TOOLS:
            return {
                ...state,
                fetchMyTools: true
            }
        case GET_MY_TOOLS_SUCCESS:
            return {
                ...state,
                fetchMyTools: false,
                Mytools: action.payload
            }

        //     }
        case FETCH_TOOL_SUCCESS:
          return updateTool(state, action.payload);
        default:
            return state;
        }
}

export default reducer;
