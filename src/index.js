import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import App from './components/App'
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)