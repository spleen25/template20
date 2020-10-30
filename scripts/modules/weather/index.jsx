import React, { useState } from 'react';

import axios from 'axios';

import { Collapse, ErrorAlert } from 'components/controls';

import WeatherWrapper from './Wrapper';
import WeatherTitle from './Title';
import SearchCity from './Search';
import WeatherData from './WeatherData/index';

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const fetchData = async e => {
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}&days=8`;

    try {
      const response = await axios.get(url);

      setError(null);
      setWeather({
        city: response.data.city_name,
        country: response.data.country_code,
        timezone: response.data.timezone,
        date: response.data.data[0].ts,
        datetime: response.data.data[0].datetime,
        icon: response.data.data[0].weather.icon,
        temp: response.data.data[0].temp,
        description: response.data.data[0].weather.description,
        probability: response.data.data[0].pop,
        wind: response.data.data[0].wind_spd,
        sunrise: response.data.data[0].sunrise_ts,
        pressure: response.data.data[0].pres,
        humidity: response.data.data[0].rh,
        sunset: response.data.data[0].sunset_ts,
        forecastData: response.data.data
      });
    } catch (err) {
      setError('Sorry, the specified city was not found..');
      setWeather(null);
    }
  };

  const onCityChange = e => {
    setCity(e.target.value);
  };

  return (
    <WeatherWrapper>
      <WeatherTitle name="Weather Forecast" />
      <SearchCity
        city={city}
        fetchData={fetchData}
        onCityChange={onCityChange}
      />
      <Collapse in={!!weather || !!error}>
        {weather && <WeatherData weather={weather} />}
        {error && <ErrorAlert message={error} />}
      </Collapse>
    </WeatherWrapper>
  );
};

export default WeatherPage;
