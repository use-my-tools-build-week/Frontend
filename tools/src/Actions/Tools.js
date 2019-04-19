import AxiosAuth from '../AxiosAuth';
export const FETCH_TOOL = 'FETCH_TOOL';
export const FETCH_TOOL_SUCCESS = 'FETCH_TOOL_SUCCESS';
export const FETCH_TOOL_ERROR = 'FETCH_TOOL_ERROR';
export const FAVORITE_TOOL = 'FAVORITE_TOOL';

export const fetchToolSuccess = tool => ({
  type: FETCH_TOOL_SUCCESS,
  payload: tool
});

export const fetchTool = id => dispatch => {
  dispatch({ type: FETCH_TOOL });
  return AxiosAuth()
    .get(`https://umtbackend.herokuapp.com/api/tools/${id}`)
    .then(res => dispatch(fetchToolSuccess(res.data)))
    .catch(console.log);
};

export const favoriteTool = id => dispatch => {
  dispatch({ type: FAVORITE_TOOL });
  return AxiosAuth()
    .post(`https://umtbackend.herokuapp.com/api/favorites/`, {tool_id: id})
    .then(res => dispatch(fetchToolSuccess(res.data)))
    .catch(console.log);
};
