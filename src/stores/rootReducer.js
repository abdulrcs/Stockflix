import { combineReducers } from 'redux'

import movies from './movies/reducers'

const rootReducer = combineReducers({
  movies,
})

export default rootReducer
