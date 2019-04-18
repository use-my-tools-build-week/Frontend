
import AxiosAuth from '../AxiosAuth';
import Axios from 'axios';
import { ERROR } from '.';

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
export const TOOL_CATEGORIES = 'TOOL_CATEGORIES';
export const TOOL_CATEGORIES_SUCCESS = 'TOOL_CATEGORIES_SUCCESS';
export const TOOL_CATEGORIES_ERROR = 'TOOL_CATEGORIES_ERROR';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const GET_MY_TOOLS = 'GET_MY_TOOLS';
export const GET_MY_TOOLS_SUCCESS = 'GET_MY_TOOLS_SUCCESS';


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

export const updateUser = updateUser => dispatch => {
    return AxiosAuth().put(`https://umtbackend.herokuapp.com/api/users/update_profile`, updateUser)
    .then(res => {
        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const FetchTools = () => dispatch => {
    dispatch({ type: GET_DATA_FETCH });
    AxiosAuth().get('https://umtbackend.herokuapp.com/api/tools')
      .then(res => {
          console.log(res)
        dispatch({
          type: GET_DATA_SUCCESS,
          payload: res.data.results
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_DATA_ERROR,
          payload: err
        });
      });
  };

  export const AddTools = tool => dispatch => {
      console.log(tool)
    dispatch({type: ADD_TOOL})
    return AxiosAuth().post('https://umtbackend.herokuapp.com/api/tools', tool)
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

  export const DeleteTool = id => dispatch => {
      dispatch({type: FETCHING})
      AxiosAuth().delete(`https://umtbackend.herokuapp.com/api/tools/${id}`, id)
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

    export const ToolCategories = () => dispatch => {
        dispatch({type: TOOL_CATEGORIES})
        AxiosAuth().get('https://umtbackend.herokuapp.com/api/categories')
        .then(res => {
           return {
                type: TOOL_CATEGORIES_SUCCESS,
                payload: res.data
            }
        })
        .catch(err => {
           return {
                type: TOOL_CATEGORIES_ERROR,
                payload: err
            }
        })
    }

    export const GetMyTools = () => dispatch => {
        dispatch({type: GET_MY_TOOLS})
        AxiosAuth().get('https://umtbackend.herokuapp.com/api/tools/my_tools')
        .then(res => {
            console.log(res)
           dispatch ({
                type: GET_MY_TOOLS_SUCCESS,
                payload: res.data.results
            })
        })
        .catch(err => {
            dispatch ({
                type: ERROR,
                payload: err
            })
        })
    }



