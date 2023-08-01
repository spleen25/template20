import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle, Typography } from '@mui/material';

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
