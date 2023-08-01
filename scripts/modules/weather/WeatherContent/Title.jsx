import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from 'decorators';
import { Typography } from 'components/controls';

const useStyles = makeStyles((theme) => ({
  location: {
    marginRight: 'auto',
    marginBottom: theme.spacing(3)
  },
  date: {
    paddingTop: theme.spacing(1)
  }
}));

const WeatherDataTitle = ({ city, country, timezone, date }) => {
  const classes = useStyles();
  const dateCorrect = new Date(date * 1000).toDateString();

  return (
    <div className={classes.location}>
      <Typography component="h2" variant="h4">
        {city} ({country}), {timezone}
      </Typography>
      <Typography variant="h5" className={classes.date}>
        {dateCorrect}
      </Typography>
    </div>
  );
};

WeatherDataTitle.propTypes = {
  date: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired
};

export default WeatherDataTitle;
