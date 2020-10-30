import React from 'react';
import * as PropTypes from 'prop-types';

import WeatherDataTitle from './Title';
import WeatherDataMain from './Main';
import WeatherForecast from './Forecast';

const WeatherData = ({ weather }) => {
  return (
    <>
      <WeatherDataTitle {...weather} />
      <WeatherDataMain {...weather} />
      <WeatherForecast forecastData={weather.forecastData} />
    </>
  );
};

WeatherData.propTypes = {
  weather: PropTypes.object.isRequired
};

export default WeatherData;
