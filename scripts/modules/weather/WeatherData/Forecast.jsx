import React from 'react';
import * as PropTypes from 'prop-types';

import { makeStyles } from 'decorators';
import { Card, Typography } from 'components/controls';

const useStyles = makeStyles(theme => ({
  forecastContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2)
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-center',
    padding: theme.spacing(2)
  },
  img: {
    width: '50px',
    height: '50px'
  }
}));

const WeatherForecast = ({ forecastData }) => {
  const classes = useStyles();

  return (
    <div className={classes.forecastContainer}>
      {forecastData.map(item => (
        <Card key={item.datetime} className={classes.card}>
          <Typography>{item.datetime}</Typography>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
            alt={123}
            className={classes.img}
          />
          <Typography variant="h6"> {Math.floor(item.temp)}&#176; </Typography>
        </Card>
      ))}
    </div>
  );
};

WeatherForecast.propTypes = {
  forecastData: PropTypes.array.isRequired
};

export default WeatherForecast;
