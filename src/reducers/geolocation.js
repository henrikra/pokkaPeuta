import types from '../constants/actionTypes';

const initialState = {
  longitude: null,
  latitude: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LOCATION:
      return {
        ...state, 
        longitude: action.coordinates.longitude,
        latitude: action.coordinates.latitude,
      };
    default:
      return state;
  }
}