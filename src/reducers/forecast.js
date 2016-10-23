import _ from 'lodash';

import types from '../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_FORECAST:
      const forecastGroupedByDate = _.groupBy(action.forecast.list, (forecast) =>
        forecast.dt_txt.split(' ').shift()
      );
      
      return forecastGroupedByDate;
    default:
      return state;
  }
}