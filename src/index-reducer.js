import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import client from './client/reducer'

const IndexReducer = combineReducers({
  form,
  client,
})

export default IndexReducer
