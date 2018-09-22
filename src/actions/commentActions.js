const getCommentsUrl = 'https://jsonplaceholder.typicode.com/comments';

export const FETCH_COMMENTS_BEGIN = 'FETCH_COMMENTS_BEGIN';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchCommentsBegin = () => ({
  type: FETCH_COMMENTS_BEGIN
});

export const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: { comments }
});

export const fetchCommentsError = error => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: { error }
});

export function fetchComments() {
  return dispatch => {
    dispatch(fetchCommentsBegin());
    return fetch(getCommentsUrl)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchCommentsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchCommentsError(error)));
  };
}

// Handle HTTP errors
function handleErrors(response) {
  if (!response.ok) {
    console.log('error');
    throw Error(response.statusText);
  }
  return response;
}