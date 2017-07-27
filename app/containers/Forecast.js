import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ForecastDetails from '../components/ForecastDetails';
import { fetchCurrentWeather, fetchForecastWeather } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

class Forecast extends React.Component {
  //<Link to={'/details?city='+city}>{city} </Link>
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
                style={{padding:40}}
                className="row-fluid" key={item.dt}>
              <figure>
                <Link to={'/details/'+ city}>
                  <img
                  height='200'
                  width='200'
                  src={'../images/weather-icons/'+item.weather[0].icon+'.svg'}/>
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
