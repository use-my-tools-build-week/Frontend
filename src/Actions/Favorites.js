import AxiosAuth from '../AxiosAuth';
export const FETCH_FAVORITES = 'FETCH_FAVORITES';
export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const TOGGLE_FAVORITE_SUCCESS = 'TOGGLE_FAVORITE';

export function FetchFavorites() {
  return dispatch => {
    dispatch({ type: FETCH_FAVORITES });
    return AxiosAuth()
      .get('https://umtbackend-dev.herokuapp.com/api/favorites')
      .then(res => {
        dispatch({
          type: FETCH_FAVORITES_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function toggleFavorite(tool_id) {
  return dispatch => {
    dispatch({ type: TOGGLE_FAVORITE });
    return AxiosAuth()
      .post('https://umtbackend-dev.herokuapp.com/api/favorites', { tool_id })
      .then(res => {
        dispatch({
          type: TOGGLE_FAVORITE_SUCCESS,
          payload: res.data.id
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
