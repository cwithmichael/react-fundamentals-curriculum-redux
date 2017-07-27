import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ForecastDetails from '../components/ForecastDetails';
import { fetchCurrentWeather, fetchForecastWeather } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Forecast extends React.Component {
  //<Link to={'/details?city='+city}>{city} </Link>
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    console.log('mounted')
    let city = this.props.match.params.city;
    this.props.fetchCurrentWeather(city);
  }

  render () {
    return (
      <div>
      <Header {...this.props} />
      <div>{JSON.stringify(this.props.weather)}</div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
