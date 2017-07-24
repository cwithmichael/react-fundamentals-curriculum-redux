import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';
export default class Header extends Component {
  render () {
    return (
      <div id="header" className="container-fluid">
        <h1> My Big Header </h1>
      </div>
    )
  }
}
