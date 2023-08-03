import axios from 'axios';

export const getWeather = (query) => {
  return axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=${process.env.REACT_APP_WEATHER_API_KEY}&days=8`
  );
};
