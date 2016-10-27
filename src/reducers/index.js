import { combineReducers } from 'redux';

import geolocation from './geolocation';
import weatherReport from './weatherReport';

export default combineReducers({
  geolocation,
  weatherReport,
});