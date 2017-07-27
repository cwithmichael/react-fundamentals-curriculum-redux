import fetch from 'isomorphic-fetch';

export const REQUEST_CURRENT_WEATHER = 'REQUEST_CURRENT_WEATHER';
export const REQUEST_FORECAST_WEATHER = 'REQUEST_FORECAST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

function requestCurrentWeather(cityName) {
  return {
    type: REQUEST_CURRENT_WEATHER,
    cityName
  }
}

function requestForecastWeather(cityName) {
  return {
    type: REQUEST_FORECAST_WEATHER,
    cityName
  }
}

function receiveWeather(cityName, json) {
  return {
    type: RECEIVE_WEATHER,
    cityName: cityName,
    data: json,
    receivedAt: Date.now()
  }
}

function fetchCurrentWeatherData(cityName) {
  return dispatch => {
    dispatch(requestCurrentWeather(cityName));
    return fetch('http://api.openweathermap.org/data/2.5/weather?q='
      + cityName
      + '&type=accurate&APPID=dfd46adac679a5d07f1ba7e2f6e7841e')
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(cityName, json)))
  }
}

function fetchForecastWeatherData(cityName) {
  return dispatch => {
    dispatch(requestForecastWeather(cityName));
    return fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q='
      + cityName
      + '&units=imperial&type=accurate&APPID=dfd46adac679a5d07f1ba7e2f6e7841e'
      + '&cnt=5')
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(cityName, json)))
  }
}

export function fetchCurrentWeather(cityName) {
  return (dispatch, getState) => {
    return dispatch(fetchCurrentWeatherData(cityName));
  }
}

export function fetchForecastWeather(cityName) {
  return (dispatch, getState) => {
    return dispatch(fetchForecastWeatherData(cityName));
  }
}
