import React from 'react';
import * as PropTypes from 'prop-types';

import { makeStyles } from 'decorators';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}));

const WeatherWrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
};

WeatherWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default WeatherWrapper;
