import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';

import { useDataFetcher } from 'hooks';
import {
  CircularProgress,
  Collapse,
  ErrorAlert,
  ModuleTitle,
  ModuleWrapper,
  Typography
} from 'components/controls';
import { getWeather } from 'sources/weather';

import SearchCity from './Search';
import WeatherContent from './WeatherContent';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherPage = () => {
  const [city, setCity] = useState('');
  const { execute, data, loading, error } = useDataFetcher(
    false,
    getWeather,
    city,
    API_KEY
  );

  useEffect(() => {
    if (city) {
      execute();
    }
  }, [city]);

  const debouncedSetCity = debounce(setCity, 1000);

  const isEmptyData = data === '';
  const isShowContent = !!data || !!error;
  const isDefault = !isShowContent && !isEmptyData;
  const isLoading = loading || !!error || !data;

  return (
    <ModuleWrapper>
      <ModuleTitle name="Weather Forecast" />
      <SearchCity city={city} setCity={debouncedSetCity} execute={execute} />
      <Collapse in={isDefault}>
        <Typography variant="body1" gutterBottom>
          Enter the name of the city
        </Typography>
      </Collapse>
      <Collapse in={isShowContent}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <WeatherContent weatherData={data} />
        )}
        {error && <ErrorAlert message={error} />}
      </Collapse>
      <Collapse in={isEmptyData}>
        <Typography variant="body1" gutterBottom>
          Oops, Try again
        </Typography>
      </Collapse>
    </ModuleWrapper>
  );
};

export default WeatherPage;
