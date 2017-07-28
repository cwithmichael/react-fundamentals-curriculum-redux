import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ForecastDetails from './ForecastDetails';
import moment from 'moment';

const Forecast = (props) => {
  let city = props.routeProps.match.params.city;
  let weatherList = props.weather.data.list;

  function componentDidUpdate() {
    props.fetchForecastWeather(city);
  }

  return (
      <div>
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
                      weather: props.weather,
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

Forecast.propTypes = {
  routeProps : PropTypes.object.isRequired,
  weather : PropTypes.object.isRequired
}

export default Forecast;
