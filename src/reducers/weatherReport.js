import _ from 'lodash';

import types from '../constants/actionTypes';

const goodTimes = [
  '06:00:00',
  '12:00:00',
  '18:00:00',
  '00:00:00',
];

const initialState = {
  forecast: [],
  forecastGroupedByDate: [],
  selectedForecast: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_FORECAST:
      console.log(action);
      const forecastGroupedByDate = _(action.forecast.list)
        .groupBy(forecast => forecast.dt_txt.split(' ').shift())
        .map((forecast, date) => ({ date, forecast }))
        .value();

      const forecast = _(action.forecast.list)
        .groupBy((forecast) =>
          forecast.dt_txt.split(' ').shift()
        )
        .map((forecast, date) => {
          const dayQuarters = (every3Hour) => _.includes(goodTimes, every3Hour.dt_txt.split(' ').pop());
          return { date, forecast: forecast.filter(dayQuarters) };
        })
        .filter((oneDayWeather) => oneDayWeather.forecast.length)
        .value();

      return { ...state, forecast, selectedForecast: _.first(forecastGroupedByDate), forecastGroupedByDate, city: action.forecast.city };
    case types.SELECT_DATE:
      return { ...state, selectedForecast: action.forecast };
    default:
      return state;
  }
}