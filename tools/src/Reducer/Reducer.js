import { FETCHING, SUCCESS } from "../Actions/Actions";

const initialState = {
    
    fetching: false,
    error: null
}

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
            }
        default:
            return state;
    }
}

export default reducer;