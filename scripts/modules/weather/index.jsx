import React, { useState } from 'react';

import { useDataFetcher, useTitle } from 'hooks';

import {
  Collapse,
  CircularProgress,
  ErrorAlert,
  ModuleTitle,
  ModuleWrapper
} from 'components/controls';

import { getWeather } from 'sources/weather';

import SearchCity from './Search';
import WeatherData from './WeatherData/index';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherPage = () => {
  useTitle('Weather Forecast');

  const [city, setCity] = useState('');
  const { execute, data, loading, error } = useDataFetcher(
    false,
    getWeather,
    city,
    API_KEY
  );

  let qqq = {};
  if (data) {
    qqq = {
      city: data.city_name,
      country: data.country_code,
      timezone: data.timezone,
      date: data.data[0].ts,
      datetime: data.data[0].datetime,
      icon: data.data[0].weather.icon,
      temp: data.data[0].temp,
      description: data.data[0].weather.description,
      probability: data.data[0].pop,
      wind: data.data[0].wind_spd,
      sunrise: data.data[0].sunrise_ts,
      pressure: data.data[0].pres,
      humidity: data.data[0].rh,
      sunset: data.data[0].sunset_ts,
      forecastData: data.data
    };
  }

  const onCityChange = e => {
    setCity(e.target.value);
  };

  return (
    <ModuleWrapper>
      <ModuleTitle name="Weather Forecast" />
      <SearchCity city={city} execute={execute} onCityChange={onCityChange} />
      <Collapse in={!!data || !!error}>
        {loading ? <CircularProgress /> : <WeatherData weather={qqq} />}
        {error && <ErrorAlert message={error} />}
      </Collapse>
    </ModuleWrapper>
  );
};

export default WeatherPage;
