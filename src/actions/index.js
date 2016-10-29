import types from '../constants/actionTypes';
import config from '../config';

export function fetchLocation() {
  return (dispatch) => {
    dispatch({ type: types.FETCH_LOCATION });
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        dispatch({
          type: types.RECEIVE_LOCATION,
          coords,
        });

        fetch(`http://api.openweathermap.org/data/2.5/forecast?appid=${config.apiKey}&units=metric&lat=${coords.latitude}&lon=${coords.longitude}`)
          .then(response => response.json())
          .then((forecast) => {
            dispatch({
              type: types.RECEIVE_FORECAST,
              forecast,
            });
            return forecast;
          })
          .catch((error) => {
            console.error(error);
          });
      },
      error => console.log(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
}

export function selectDate(forecast) {
  return {
    type: types.SELECT_DATE,
    forecast,
  };
}
