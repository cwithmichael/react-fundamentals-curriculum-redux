import fetch from 'isomorphic-fetch';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

function requestWeather(cityName) {
  return {
    type: REQUEST_WEATHER,
    cityName
  }
}

function receiveWeather(cityName, json) {
  return {
    type: RECEIVE_WEATHER,
    cityName: cityName,
    weather: json,
    receivedAt: Date.now()
  }
}

function fetchWeatherData(cityName) {
  return dispatch => {
    dispatch(requestWeather(cityName));
    return fetch('http://api.openweathermap.org/data/2.5/weather?q='
      + cityName 
      + '&type=accurate&APPID=dfd46adac679a5d07f1ba7e2f6e7841e')
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(cityName, json)))
  }
}

export function fetchWeather(cityName) {
  return (dispatch, getState) => {
    return dispatch(fetchWeatherData(cityName));
  }
}
