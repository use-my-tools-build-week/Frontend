import AxiosAuth from '../AxiosAuth';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';


export function FetchCategories() {
  return dispatch => {
    dispatch({ type: FETCH_CATEGORIES });
    return AxiosAuth()
      .get('https://umtbackend.herokuapp.com/api/categories')
      .then(res => {
        dispatch({
          type: FETCH_CATEGORIES_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
