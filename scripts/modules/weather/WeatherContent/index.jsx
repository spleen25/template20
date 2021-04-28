import React from 'react';
import * as PropTypes from 'prop-types';

import WeatherDataTitle from './Title';
import WeatherDataMain from './Main';
import WeatherForecast from './Forecast';

const WeatherData = ({ weatherData }) => {
  const {
    city_name,
    country_code,
    timezone,
    data: [firstDayData]
  } = weatherData;

  const {
    ts,
    weather: { icon, description },
    temp,
    pop,
    wind_spd,
    sunrise_ts,
    pres,
    rh,
    sunset_ts
  } = firstDayData;

  return (
    <>
      <WeatherDataTitle
        city={city_name}
        country={country_code}
        timezone={timezone}
        date={ts}
      />
      <WeatherDataMain
        humidity={rh}
        wind={wind_spd}
        probability={pop}
        pressure={pres}
        temp={temp}
        description={description}
        sunset={sunset_ts}
        sunrise={sunrise_ts}
        icon={icon}
      />
      <WeatherForecast forecastData={weatherData.data} />
    </>
  );
};

WeatherData.propTypes = {
  weatherData: PropTypes.object
};

export default WeatherData;
