import types from '../constants/actionTypes';

const initialState = {
  longitude: null,
  latitude: null,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LOCATION:
      return { ...state, isLoading: true };
    case types.RECEIVE_FORECAST:
      return { ...state, isLoading: false };
    case types.RECEIVE_LOCATION:
      return {
        ...state,
        longitude: action.coords.longitude,
        latitude: action.coords.latitude,
      };
    default:
      return state;
  }
};
