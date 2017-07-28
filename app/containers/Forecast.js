import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ForecastDetails from '../components/ForecastDetails';
import { fetchCurrentWeather, fetchForecastWeather } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

class Forecast extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    console.log('mounted')
    let city = this.props.match.params.city;
    this.props.fetchForecastWeather(city);
  }

  render () {
    let city = this.props.match.params.city;
    let weatherList = this.props.weather.data.list;
    return (
      <div>
        <Header {...this.props} />
        {!weatherList ? 'Loading' :
        <div className="container-fluid" style={{textAlign:'center'}}>
          <h1> {city} </h1>
          {weatherList.map(
            (item) =>
              <div
                style={{padding:40, display:'inline-block'}}
                className="row-fluid" key={item.dt}>
              <figure>
                <Link
                  to={{
                    pathname:'/details/'+ city,
                    state: {
                      weather: this.props.weather,
                      day: moment(item.dt*1000).format('dddd'),
                    }
                  }}>
                  <img
                  height='180'
                  width='160'
                  src={
                    require('../images/weather-icons/'
                      +item.weather[0].icon+'.svg')
                  }/>
                </Link>
                <figcaption style={{fontSize:20}}>
                  {moment(item.dt*1000).format('dddd[,] MMM D')}
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
