import React from 'react';
import Header from './Header';
import moment from 'moment';

class ForecastDetails extends React.Component {
  render() {
    let weather = this.props.location.state.weather;
    let day = this.props.location.state.day;
    function getDay(selectedDay) {
      console.log(selectedDay)
      return (
        <figure>
        <img
        height='200'
        width='200'
        src={'../images/weather-icons/'+selectedDay.weather[0].icon+'.svg'}/>
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
      <Header />

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
}

export default ForecastDetails;
