import _ from 'lodash';

import types from '../constants/actionTypes';

const initialState = {
  forecasts: [],
  selectedForecast: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_FORECAST: {
      const groupByDate = forecast => forecast.dt_txt.split(' ').shift();
      const forecasts = _(action.forecast.list)
        .groupBy(groupByDate)
        .map((forecast, date) => ({ date, forecast }))
        .value();

      return {
        ...state,
        selectedForecast: _.first(forecasts),
        forecasts,
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
