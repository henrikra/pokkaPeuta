import _ from 'lodash';

import types from '../constants/actionTypes';

const initialState = {
  forecastGroupedByDate: [],
  selectedForecast: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_FORECAST: {
      const forecastGroupedByDate = _(action.forecast.list)
        .groupBy(forecast => forecast.dt_txt.split(' ').shift())
        .map((forecast, date) => ({ date, forecast }))
        .value();

      return {
        ...state,
        selectedForecast: _.first(forecastGroupedByDate),
        forecastGroupedByDate,
        city: action.forecast.city,
      };
    }
    case types.SELECT_DATE: {
      return { ...state, selectedForecast: action.forecast };
    }
    default:
      return state;
  }
};
