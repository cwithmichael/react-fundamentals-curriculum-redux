import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import Home from '../components/Home'
import Header from '../components/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(cityName) {
    this.props.dispatch(fetchWeather(cityName));
  }

  render() {
    return (
      <div>
        <Header onSubmit={this.handleSubmit} />
        <Home onSubmit={this.handleSubmit} /> 
        {this.props.isFetching ? '' : JSON.stringify(this.props.weather)}
      </div>
    )
  } 
}

App.propTypes = {
  weather: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}


function mapStateToProps(state) {
  const { data } = state;
  const {
    isFetching,
    weather
  } = data || {
    isFetching: true,
    weather: {}
  }

  return {
    isFetching,
    weather
  }
};

export default connect(mapStateToProps)(App);
