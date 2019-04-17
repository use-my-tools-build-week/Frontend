import AxiosAuth from '../AxiosAuth';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';



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

export function FetchCategory(id) {
  return dispatch => {
    dispatch({ type: FETCH_CATEGORY });
    return AxiosAuth()
      .get(`https://umtbackend.herokuapp.com/api/category/${id}`)
      .then(res => {
        dispatch({
          type: FETCH_CATEGORY_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
