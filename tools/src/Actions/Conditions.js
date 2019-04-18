import AxiosAuth from '../AxiosAuth';
export const FETCH_CONDITIONS = 'FETCH_CONDITIONS';
export const FETCH_CONDITIONS_SUCCESS = 'FETCH_CONDITIONS_SUCCESS';

export function FetchConditions() {
  return dispatch => {
    dispatch({ type: FETCH_CONDITIONS });
    return AxiosAuth()
      .get('https://umtbackend.herokuapp.com/api/conditions')
      .then(res => {
        dispatch({
          type: FETCH_CONDITIONS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

