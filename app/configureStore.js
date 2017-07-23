import { createStore } from 'redux';
import rootReducer from './reducers';

exprot default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState
  )
}
