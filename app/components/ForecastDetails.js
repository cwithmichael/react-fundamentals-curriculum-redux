import React from 'react';
import moment from 'moment';

const ForecastDetails = (props) => {
    let weather = props.location.state.weather;
    let day = props.location.state.day;

    function getDay(selectedDay) {
      const image = require('../images/weather-icons/'+selectedDay.weather[0].icon+'.svg');
      return (
        <figure>
        <img
        height='200'
        width='200'
        src={image}/>
      <figcaption style={{fontSize:20}}>
        <p>{moment(selectedDay.dt*1000).format('dddd[,] MMM D')}</p>
        <p>{selectedDay.weather[0].description}</p>
        <p>min temp: {selectedDay.temp.min}</p>
        <p>max temp: {selectedDay.temp.max}</p>
        <p>humidity: {selectedDay.humidity}</p>
      </figcaption>
      </figure>
      )
    }

    return (
      <div>
      {weather.isFetching ? 'LOADING' :
      <div className='container-fluid' style={{textAlign: 'center'}}>
        <h1>{weather.data.city.name}</h1>
          {getDay(weather.data.list.filter(
            (item) => moment(item.dt*1000).format('dddd') === day
          )[0])
          }
          </div>
      }
      </div>
    )
}

export default ForecastDetails;
