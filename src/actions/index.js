import types from '../constants/actionTypes';

export function fetchLocation(coordinates) {
  return (dispatch) => {
    dispatch({ type: types.FETCH_LOCATION });
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => dispatch({
        type: types.RECEIVE_LOCATION,
        coords,
      }),
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  };
}