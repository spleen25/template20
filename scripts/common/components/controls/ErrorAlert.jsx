import React from 'react';
import * as PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Typography } from '@material-ui/core';

const ErrorAlert = ({ message }) => {
  return (
    <Alert variant="filled" severity="error">
      <AlertTitle>Error</AlertTitle>
      <Typography variant="body1" gutterBottom>
        {message}
      </Typography>
    </Alert>
  );
};

ErrorAlert.propTypes = {
  message: PropTypes.string
};

export default ErrorAlert;
