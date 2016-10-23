import types from '../constants/actionTypes';
import config from '../config';

export function fetchLocation(coordinates) {
  return (dispatch) => {
    dispatch({ type: types.FETCH_LOCATION });
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        dispatch({
          type: types.RECEIVE_LOCATION,
          coords,
        });

        fetch(`http://api.openweathermap.org/data/2.5/forecast?appid=${config.apiKey}&units=metric&lat=${coords.latitude}&lon=${coords.longitude}`)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log('vastaus', responseJson)
            return responseJson;
          })
          .catch((error) => {
            console.error(error);
          });

      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  };
}