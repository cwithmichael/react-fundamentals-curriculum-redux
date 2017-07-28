import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchCurrentWeather, fetchForecastWeather } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ForecastDetails from './ForecastDetails';
import Header from '../components/Header';
import moment from 'moment';

class Forecast extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchForecastWeather(this.props.match.params.city)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.city !== this.props.match.params.city) {
      this.props.fetchForecastWeather(this.props.match.params.city)
    }
  }
  render() {
    return (
        <div>
          <Header {...this.props}/>
          {!this.props.weather.data.forecast ? 'Loading' :
          <div className="container-fluid" style={{textAlign:'center'}}>
            <h1> {this.props.weather.data.location.name} </h1>
            {this.props.weather.data.forecast.forecastday.map(
              (item) =>
                <div
                  style={{padding:40, display:'inline-block'}}
                  className="row-fluid" key={item.date}>
                <figure>
                  <Link
                    to={{
                      pathname:'/details/'+ this.props.weather.data.location.name,
                      state: {
                        weather: this.props.weather,
                        day: moment(item.date_epoch*1000).format('dddd'),
                      }
                    }}>
                    <img
                    height='180'
                    width='160'
                    src={
                      item.day.condition.icon
                    }/>
                  </Link>
                  <figcaption style={{fontSize:20}}>
                    {moment(item.date_epoch*1000).format('dddd[,] MMM D')}
                  </figcaption>
                </figure>
                </div>
            )}
            </div>
          }
        </div>
      )
  }
}

Forecast.propTypes = {
  weather : PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(Forecast)
