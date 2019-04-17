
import AxiosAuth from '../AxiosAuth';
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const GET_DATA_FETCH = 'GET_DATA_FETCH';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const ADD_TOOL = 'ADD_TOOl';
export const ADD_TOOL_SUCCESS = 'ADD_TOOL_SUCCESS';
export const ADD_TOOL_ERROR = 'ADD_TOOL_ERROR';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_ERROR = 'DELETE_ERROR';

export function ActionLogin(logins) {
    console.log(logins)
    return dispatch => {
        dispatch({type: FETCHING});
    return AxiosAuth().post('https://umtbackend.herokuapp.com/api/login', logins)
        .then(res => {
            console.log(res)
            localStorage.setItem('Token', res.data.token)
            dispatch({
                type: SUCCESS,
                payload: res.data
            })
        })
        
        .catch(err => {
            console.log(err);
        })
        
    }
}

export function ActionSignUp(signups) {
    console.log(signups)
    return dispatch => {
        dispatch({type: FETCHING});
    return AxiosAuth().post('https://umtbackend.herokuapp.com/api/register', signups)
        .then(res => {
            console.log(res)
            localStorage.setItem('Token', res.data.token)
            dispatch({
                type: SUCCESS,
                payload: res.data
            })
        })
        
        .catch(err => {
            console.log(err);
        })
        
    }
}

export const FetchTools = () => dispatch => {
    dispatch({ type: GET_DATA_FETCH });
    axios.get('https://umtbackend.herokuapp.com/api/tools')
      .then(res => {
          console.log(res)
        dispatch({
          type: GET_DATA_SUCCESS,
          payload: res.data
        });
      })
      .catch(() => {
        dispatch({
          type: GET_DATA_ERROR,
          payload: err
        });
      });
  };

  export const AddTools = tool => dispatch => {
      console.log(tool)
    dispatch({type: ADD_TOOL})
    axios.post('https://umtbackend.herokuapp.com/api/tools', tool)
    .then(res => {
        dispatch({
            type: ADD_TOOL_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: ADD_TOOL_ERROR,
            payload: err
            
        })
    })
  }

  export const deleteTool = id => dispatch => {
      dispatch({type: FETCHING})
      axios.delete(`https://umtbackend.herokuapp.com/api/tools${id}`, id)
      .then(res => {
        dispatch({
          type: DELETE_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: DELETE_ERROR,
          payload: err
        })
      })
    }
  

  