import _ from 'lodash';

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

const renderRainIfEnough = (forecast) => {
  if (_.get(forecast, 'rain.3h') > 0.1) {
    return require('../images/Cloud-Rain.svg');
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
      return require('../images/Cloud.svg');
    case ICONS.nightScatteredClouds:
      return require('../images/Cloud.svg');
    case ICONS.dayBrokenClouds:
      return require('../images/Cloud.svg');
    case ICONS.nightBrokenClouds:
      return require('../images/Cloud.svg');
    case ICONS.dayRain:
      return renderRainIfEnough(forecast);
    case ICONS.nightRain:
      return renderRainIfEnough(forecast);
    case ICONS.daySnow:
      return require('../images/Cloud-Snow.svg');
    case ICONS.nightSnow:
      return require('../images/Cloud-Snow.svg');
    default:
      return null;
  }
}

