import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './configureStore';

const router = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Route path='/' component={App}>
      </Route>
    </BrowserRouter>
  </Provider>
)

render(
  router,
  document.getElementById('root')
)
