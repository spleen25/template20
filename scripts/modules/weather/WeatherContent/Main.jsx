import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from 'decorators';
import { Grid, Paper, Typography } from 'components/controls';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  paperMain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(2)
  },
  image: {
    width: '150px',
    height: '150px'
  },
  paperItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 0 33%'
  },
  data: {
    marginLeft: theme.spacing(1),
    fontWeight: '400'
  }
}));

const WeatherDataMain = ({
  humidity,
  wind,
  probability,
  pressure,
  temp,
  description,
  sunset,
  sunrise,
  icon
}) => {
  const classes = useStyles();

  const sunsetFormatted = new Date(sunset * 1000)
    .toLocaleTimeString()
    .slice(0, 5);
  const sunriseFormatted = new Date(sunrise * 1000)
    .toLocaleTimeString()
    .slice(0, 5);

  const pressureFormatted = Math.floor(pressure / 1.333);

  const iconUrl = `https://www.weatherbit.io/static/img/icons/${icon}.png`;

  return (
    <Grid container spacing={3} justify="space-between">
      <Grid item xs={12} md={4} lg={4}>
        <Paper elevation={3} className={classes.paper}>
          <img src={iconUrl} alt={iconUrl} className={classes.image} />
          <div>
            <Typography component="h3" variant="h1">
              {Math.floor(temp)}&#176;
            </Typography>
            <Typography variant="body1">{description}</Typography>
          </div>
        </Paper>
      </Grid>
      <Grid container item xs={12} md={8} lg={8}>
        <Paper elevation={3} className={classes.paperMain}>
          <div className={classes.paperItem}>
            <Typography variant="h6" noWrap>
              Precipitation:
            </Typography>
            <Typography variant="h6" className={classes.data}>
              {probability}%
            </Typography>
          </div>
          <div className={classes.paperItem}>
            <Typography variant="h6" noWrap>
              Wind:
            </Typography>
            <Typography variant="h6" className={classes.data}>
              {Math.floor(wind)} м/с
            </Typography>
          </div>
          <div className={classes.paperItem}>
            <Typography variant="h6" noWrap>
              Sunrise:
            </Typography>
            <Typography variant="h6" className={classes.data}>
              {sunriseFormatted}
            </Typography>
          </div>
          <div className={classes.paperItem}>
            <Typography variant="h6" noWrap>
              Pressure:
            </Typography>
            <Typography variant="h6" className={classes.data}>
              {pressureFormatted} мм
            </Typography>
          </div>
          <div className={classes.paperItem}>
            <Typography variant="h6" noWrap>
              Humidity:
            </Typography>
            <Typography variant="h6" className={classes.data}>
              {humidity}%
            </Typography>
          </div>
          <div className={classes.paperItem}>
            <Typography variant="h6" noWrap>
              Sunset:
            </Typography>
            <Typography variant="h6" className={classes.data}>
              {sunsetFormatted}
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

WeatherDataMain.propTypes = {
  humidity: PropTypes.number,
  wind: PropTypes.number,
  probability: PropTypes.number,
  pressure: PropTypes.number,
  temp: PropTypes.number,
  sunrise: PropTypes.number,
  sunset: PropTypes.number,
  description: PropTypes.string,
  icon: PropTypes.string
};

export default WeatherDataMain;
