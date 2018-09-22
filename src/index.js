import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import  articleReducer  from './reducers/articleReducer'
import App from './components/App'

const store = createStore(articleReducer, applyMiddleware(thunkMiddleware))

render(    
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)