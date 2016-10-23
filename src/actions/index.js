import types from '../constants/actionTypes';

export function fetchLocation(coordinates) {
  return {
    type: types.FETCH_LOCATION,
    coordinates,
  }; 
}