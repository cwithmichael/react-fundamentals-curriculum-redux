import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Header from '../components/Header';
import { fetchForecastWeather } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ForecastDetails = (props) => {
    let weather = props.location.state.weather;
    let day = props.location.state.day;

    function getDay(selectedDay) {
      return (
        <figure>
        <img
        height='200'
        width='200'
        src={selectedDay.day.condition.icon}/>
      <figcaption style={{fontSize:20}}>
        <p>{moment(selectedDay.date_epoch*1000).format('dddd[,] MMM D')}</p>
        <p>{selectedDay.day.condition.text}</p>
        <p>min temp: {selectedDay.day.mintemp_f}</p>
        <p>max temp: {selectedDay.day.maxtemp_f}</p>
        <p>humidity: {selectedDay.day.avghumidity}</p>
      </figcaption>
      </figure>
      )
    }

    return (
      <div>
      <Header {...props} />
      {weather.isFetching ? 'LOADING' :
      <div className='container-fluid' style={{textAlign: 'center'}}>
        <h1>{weather.data.location.name}</h1>
          {getDay(weather.data.forecast.forecastday.filter(
            (item) => moment(item.date_epoch*1000).format('dddd') === day
          )[0])
          }
          </div>
      }
      </div>
    )
}

ForecastDetails.propTypes = {
  location : PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching ? state.isFetching : false,
    weather : state.weather ? state.weather : {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchForecastWeather: cityName => {
      dispatch(fetchForecastWeather(cityName));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastDetails)
