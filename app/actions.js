import fetch from 'isomorphic-fetch';

export const REQUEST_FORECAST_WEATHER = 'REQUEST_FORECAST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

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

function fetchForecastWeatherData(cityName) {
  return dispatch => {
    dispatch(requestForecastWeather(cityName));
    return fetch('https://api.apixu.com/v1/forecast.json?'
      + 'key=04c60cac4a604ff3ac880823170807&q='
      + cityName
      + '&days=5')
      .then( function (response) {
        return response.json()
      })
      .then(json => dispatch(receiveWeather(cityName, json)))
      .catch(err => dispatch(receiveWeather(cityName, {error: err})))
  }
}

export function fetchForecastWeather(cityName) {
  return (dispatch, getState) => {
    return dispatch(fetchForecastWeatherData(cityName));
  }
}
