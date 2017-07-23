import fetch from 'isomorphic-fetch';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_POSTS';

function requestWeather(cityName) {
  return {
    type: REQUEST_WEATHER,
    cityName
  }
}

function receiveWeather(cityName, json) {
  return {
    type: RECEIVE_WEATHER,
    cityName,
    weather: json.data,
    receivedAt: Date.now()
  }
}

function fetchWeather(cityName) {
  return dispatch => {
    dispatch(requestWeather(cityName));
    return fetch('')
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(cityName, json)))
  }
}
