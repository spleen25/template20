import React from 'react';
import * as PropTypes from 'prop-types';

import { makeStyles } from 'decorators';
import { Card, Grid, Typography } from 'components/controls';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    padding: theme.spacing(2)
  },
  img: {
    maxWidth: '50px',
    maxHeight: '50px'
  },
  text: {
    whiteSpace: 'nowrap'
  }
}));

const WeatherForecast = ({ forecastData }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="space-between">
      {forecastData.map((item) => (
        <Grid key={item.datetime} item xs>
          <Card className={classes.card}>
            <Typography className={classes.text}>{item.datetime}</Typography>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
              alt={123}
              className={classes.img}
            />
            <Typography variant="h6">{Math.floor(item.temp)}&#176;</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

WeatherForecast.propTypes = {
  forecastData: PropTypes.array.isRequired
};

export default WeatherForecast;
