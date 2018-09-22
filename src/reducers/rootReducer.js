import { combineReducers } from 'redux'
import articleReducer from './articleReducer'
import commentReducer from './commentReducer'

const rootReducer = combineReducers({
  articleReducer,
  commentReducer
})

export default rootReducer