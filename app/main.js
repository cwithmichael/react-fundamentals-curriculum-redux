import React from 'react';
import { render } from 'react-dom';
import Forecast from './containers/Forecast';
import Home from './containers/Home';
import ForecastDetails from './containers/ForecastDetails';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './configureStore';

const router = (
  <Provider store={store}>
    <BrowserRouter history={history}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/forecast/:city' component={Forecast} />
      <Route path='/details/:city' component={ForecastDetails} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  </Provider>
)

render(
  router,
  document.getElementById('root')
)
