import types from '../constants/actionTypes';

const initialState = {
  longitude: null,
  latitude: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_LOCATION:
      return {
        ...state, 
        longitude: action.coords.longitude,
        latitude: action.coords.latitude,
      };
    default:
      return state;
  }
}