
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';


export function ActionLogin(logins) {
    console.log(logins)
    return dispatch => {
        dispatch({type: FETCHING});
    return axios.post('https://umtbackend.herokuapp.com/api/login', logins)
        .then(res => {
            console.log(res)
            localStorage.setItem('Token', res.data.payload)
            dispatch({
                type: SUCCESS,
                payload: res.data.payload
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
    return axios.post('https://umtbackend.herokuapp.com/api/register', signups)
        .then(res => {
            console.log(res)
            localStorage.setItem('Token', res.data.payload)
            dispatch({
                type: SUCCESS,
                payload: res.data.payload
            })
        })
        
        .catch(err => {
            console.log(err);
        })
        
    }
}