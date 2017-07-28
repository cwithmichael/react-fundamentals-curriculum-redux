import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CityForm from '../components/CityForm';

var divStyle = {
  cityInput : {
    padding: 0,
    margin: 0,
    textAlign: 'left'
  },
  button: {
    margin: 0
  }
};

const Header = (props) => {
    return (
      <div id="header" className="container-fluid" style={{backgroundColor:'orange'}}>
        <div className="row-fluid">
          <div className="col-md-4">
            <h2 style={{paddingTop: 0, color: 'white'}}>Weather Forecast</h2>
          </div>
          <div className="col-md-offset-8">
            <CityForm parentName='header' style={divStyle} {...props}/>
          </div>
        </div>
      </div>
    )
}

export default Header;
