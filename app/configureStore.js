import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

let browserHistory = createBrowserHistory();

const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware
    )
)

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
