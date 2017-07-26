import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CityForm from './CityForm';
import '../styles/Home.css';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <CityForm {...this.props} />
      </div>
    )
  }
}

