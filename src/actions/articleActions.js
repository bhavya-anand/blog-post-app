const getArticlesUrl = 'https://jsonplaceholder.typicode.com/posts/';

export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticlesBegin = () => ({
    type: FETCH_ARTICLES_BEGIN
});

export const fetchArticlesSuccess = articles => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: { articles }
});

export const fetchArticlesError = error => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: { error }
});

export function fetchArticles() {
    return dispatch => {
        dispatch(fetchArticlesBegin());
        return fetch(getArticlesUrl)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchArticlesSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchArticlesError(error)));
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