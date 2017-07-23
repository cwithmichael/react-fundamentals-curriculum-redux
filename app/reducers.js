import { combineReducers } from 'redux';
import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER
} from './actions';

function weather(
  state = {
    isFetching: false,
    weather: {}
  }, action) { 
  switch (action.type) {
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        weather: action.weather
      });
    default:
      return state;
  }
} 

function weatherByCity(state = {}, action) {
  switch (action.type) {
    case RECEIVE_WEATHER:
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        data: weather(state[action.weather], action)
      });
    default:
      return state;
  }
}

const rootReducer = weatherByCity;

export default rootReducer;
  
