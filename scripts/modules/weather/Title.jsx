import React from 'react';
import * as PropTypes from 'prop-types';

import { makeStyles } from 'decorators';

import { Typography } from 'components/controls';

const useStyles = makeStyles(theme => ({
  title: {
    color: 'indigo'
  }
}));

const WeatherTitle = ({ name }) => {
  const classes = useStyles();

  return (
    <Typography component="h1" variant="h3" className={classes.title}>
      {name}
    </Typography>
  );
};

WeatherTitle.propTypes = {
  name: PropTypes.string.isRequired
};

export default WeatherTitle;
