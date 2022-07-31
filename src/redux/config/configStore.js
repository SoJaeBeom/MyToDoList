import { createStore } from 'redux'
import { combineReducers } from 'redux'
import todos from '../modules/todos'
import details from '../modules/details'

const rootReducer = combineReducers({
  todos,
  details,
})
const store = createStore(rootReducer)

export default store
