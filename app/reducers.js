import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  REQUEST_FORECAST_WEATHER,
  RECEIVE_WEATHER
} from './actions';

function weather(
  state = {
    isFetching: false,
    data: {}
  }, action) {
  switch (action.type) {
    case REQUEST_FORECAST_WEATHER:
      return Object.assign({}, state, {isFetching: true, data: {}});
    case RECEIVE_WEATHER:
      return Object.assign({}, state, {isFetching: false, data: action.data});
    default:
      return state;
  }
}


const rootReducer = combineReducers({weather, routing: routerReducer});

export default rootReducer;
