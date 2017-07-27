import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import Forecast from'./containers/Forecast';
import ForecastDetails from './components/ForecastDetails';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './configureStore';

const router = (
  <Provider store={store}>
    <BrowserRouter history={history}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/forecast/:city' component={Forecast}/>
      <Route path='/details/:city' component={ForecastDetails}/>
    </Switch>
    </BrowserRouter>
  </Provider>
)

render(
  router,
  document.getElementById('root')
)
