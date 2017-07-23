import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchWeather
} from '../actions';
import Home from '../components/Home'
import Header from '../components/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.dispatch(fetchWeather(cityName));
  }

  render() {
    const { weather, isFetching } = this.props;
    return (
      <div>
        <Header onSubmit={this.handleSubmit} />
        <Home onSubmit={this.handleSubmit} /> 
      </div>
    )
  } 
}

App.propTypes = {
  cityName: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { cityName, weatherData} = state;
  const {
    isFetching,
    data: weather
  } = weatherData || {
      isFetching: true,
      data: {}
  }
  return {
    cityName,
    weather,
    isFetching
  }
}

export default connect(mapStateToProps)(App);
