import { combineReducers } from 'redux';

import geolocation from './geolocation';
import forecast from './forecast';

export default combineReducers({
  geolocation,
  forecast,
});