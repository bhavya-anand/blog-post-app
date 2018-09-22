import {
    FETCH_ARTICLES_BEGIN,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE
  } from '../actions/articleActions';

  const initialState = {
    items: [],
    loading: false,
    error: null
  };

  export default function articleReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ARTICLES_BEGIN:
        //loading state - spinner can be shown
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_ARTICLES_SUCCESS:                
        return {
          ...state,
          loading: false,
          items: action.payload.articles
        };
  
      case FETCH_ARTICLES_FAILURE:   
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:     
        return state;
    }
  }
