import { FETCHING, SUCCESS, GET_DATA_ERROR, GET_DATA_SUCCESS, GET_DATA_FETCH } from "../Actions/Actions";

const initialState = {
    Tools: [],
    fetching: false,
    error: null,
    DataStart: false
}

const reducer = (state = initialState, action) => {
    console.log(state)
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
        default:
            return state;
        }
}

export default reducer;