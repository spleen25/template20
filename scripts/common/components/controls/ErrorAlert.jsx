import React from 'react';
import * as PropTypes from 'prop-types';

import { Alert, AlertTitle } from '@material-ui/lab';

const ErrorAlert = ({ message }) => {
  return (
    <Alert variant="filled" severity="error">
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  );
};

ErrorAlert.propTypes = {
  message: PropTypes.string
};

export default ErrorAlert;
