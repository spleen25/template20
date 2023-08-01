import axios from 'axios';

// const secret = process.env.REACT_APP_WEATHER_API_KEY;

const getWeather = (query, secret) => {
  return axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=${secret}&days=8`
  );
};

export { getWeather };
