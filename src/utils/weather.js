import _ from 'lodash';
import moment from 'moment';

const ICONS = {
  nightClearSky: '01n',
  nightFewClouds: '02n',
  nightScatteredClouds: '03n',
  nightBrokenClouds: '04n',
  nightShowerRain: '09n',
  nightRain: '10n',
  nightThunderStorm: '11n',
  nightMist: '50n',
  dayClearSky: '01d',
  dayFewClouds: '02d',
  dayScatteredClouds: '03d',
  dayBrokenClouds: '04d',
  dayShowerRain: '09d',
  dayRain: '10d',
  dayThunderStorm: '11d',
  daySnow: '13d',
  nightSnow: '13n',
  dayMist: '50d',
};

export const rainLimit = 0.1;

const renderRainIfEnough = (forecast) => {
  if (_.get(forecast, 'rain.3h') > rainLimit) {
    return require('../images/Cloud-Rain.svg');
  }

  return require('../images/Cloud.svg');
};

const renderSnowIfEnough = (forecast) => {
  if (_.get(forecast, 'snow.3h') > rainLimit) {
    return require('../images/Cloud-Snow.svg');
  }

  return require('../images/Cloud.svg');
};

export function getIcon(forecast) {
  const weatherIconId = _.first(forecast.weather).icon;

  switch (weatherIconId) {
    case ICONS.dayClearSky:
      return require('../images/Sun.svg');
    case ICONS.nightClearSky:
      return require('../images/Moon.svg');
    case ICONS.dayFewClouds:
      return require('../images/Cloud-Sun.svg');
    case ICONS.nightFewClouds:
      return require('../images/Cloud-Moon.svg');
    case ICONS.dayScatteredClouds:
      return require('../images/Cloud-Sun.svg');
    case ICONS.nightScatteredClouds:
      return require('../images/Cloud-Moon.svg');
    case ICONS.dayBrokenClouds:
      return require('../images/Cloud.svg');
    case ICONS.nightBrokenClouds:
      return require('../images/Cloud.svg');
    case ICONS.dayRain:
      return renderRainIfEnough(forecast);
    case ICONS.nightRain:
      return renderRainIfEnough(forecast);
    case ICONS.daySnow:
      return renderSnowIfEnough(forecast);
    case ICONS.nightSnow:
      return renderSnowIfEnough(forecast);
    default:
      return null;
  }
}

export function getTemperature(temperature) {
  const roundedTemperature = Math.floor(temperature);

  if (roundedTemperature > 0) {
    return `+ ${roundedTemperature}`;
  } else if (roundedTemperature < 0) {
    return `- ${Math.abs(roundedTemperature)}`;
  }

  return roundedTemperature;
}

export function isToday(selectedForecast) {
  const firstForecast = _.first(selectedForecast.forecast);
  return moment(firstForecast.dt_txt).isSame(moment(), 'day');
}

