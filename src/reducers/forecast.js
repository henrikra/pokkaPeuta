import types from '../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_FORECAST:
      console.log('new forecast', action);
      return {
        ...state, 
      };
    default:
      return state;
  }
}