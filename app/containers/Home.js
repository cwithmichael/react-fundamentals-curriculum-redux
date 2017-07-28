import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header'
import CityForm from '../components/CityForm';
import '../styles/Home.css';
import { fetchCurrentWeather, fetchForecastWeather } from '../actions';
import { connect } from 'react-redux';

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
      <div>
        <Header {...props}/>
        <div id="home" className="container-fluid">
          <div className="row">
            <div style={divStyle} className="col-md-4 col-md-offset-4">
              <CityForm parentName='home' style={divStyle} {...props} />
            </div>
          </div>
        </div>
      </div>
    )
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching ? state.isFetching : false,
    weather : state.weather ? state.weather : {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentWeather: cityName => {
      dispatch(fetchCurrentWeather(cityName));
    },
    fetchForecastWeather: cityName => {
      dispatch(fetchForecastWeather(cityName));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
