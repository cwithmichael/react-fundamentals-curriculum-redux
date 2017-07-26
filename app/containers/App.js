import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchCurrentWeather, fetchForecastWeather } from '../actions';
import Home from '../components/Home'
import Header from '../components/Header'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(cityName) {
    this.props.fetchCurrentWeather(cityName);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Route path='/' render={()=><Header {...this.props}/>}/>
        <Route exact path='/' render={()=><Home {...this.props}/>}/>
      </div>
    )
  } 
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


export default connect(mapStateToProps, mapDispatchToProps)(App);

