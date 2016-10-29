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
  dayMist: '50d',
};

export function getIcon(weather) {
  switch (weather.icon) {
    case ICONS.nightRain:
      return require('../images/Cloud-Rain-Moon.svg');
    case ICONS.dayRain:
      return require('../images/Cloud-Rain.svg');
    case ICONS.nightFewClouds:
      return require('../images/Cloud-Moon.svg');
    case ICONS.dayFewClouds:
      return require('../images/Cloud-Sun.svg');
    case ICONS.nightBrokenClouds:
      return require('../images/Cloud.svg');
    case ICONS.dayBrokenClouds:
      return require('../images/Cloud.svg');
    case ICONS.dayScatteredClouds:
      return require('../images/Cloud.svg');
    case ICONS.nightScatteredClouds:
      return require('../images/Cloud.svg');
    case ICONS.dayClearSky:
      return require('../images/Sun.svg');
    case ICONS.nightClearSky:
      return require('../images/Moon.svg');
    default:
      return null;
  }
}

