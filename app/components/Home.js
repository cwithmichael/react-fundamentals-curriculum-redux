import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CityForm from './CityForm';
import '../styles/Home.css';

var divStyle = {
  paddingTop: '200px',
  textAlign: 'center',
  cityInput: {
    textAlign:'center',
  },
  button: {
  }
};

const Home = (props) => {
    return (
      <div id="home" className="container-fluid">
        <div className="row">
          <div style={divStyle} className="col-md-4 col-md-offset-4">
            <CityForm parentName='home' style={divStyle} {...props} />
          </div>
        </div>
      </div>
    )
}

export default Home;
