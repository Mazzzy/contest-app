import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import contestReducer from './contestReducer';
export default combineReducers({
  appState:appReducer,
  contestState:contestReducer,
  routing
  // More reducers if there are
  // can go here
})