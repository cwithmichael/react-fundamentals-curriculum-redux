import React, { Component } from 'react';
import { Provider } from 'react-redux';

export default class Root extends Component {
  render() {
    return (
      <Provider store={'store'}>
        <h1> Hello World </h1>
      </Provider>
    )
  }
}
