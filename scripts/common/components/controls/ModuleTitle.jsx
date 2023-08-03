import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Typography } from '@mui/material';

import { makeStyles } from 'decorators';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4)
  }
}));

const ModuleTitle = ({ name, classesOverride }) => {
  const classes = useStyles();
  return (
    <Typography
      component="h1"
      variant="h3"
      color="primary"
      className={clsx(classes.root, classesOverride)}
    >
      {name}
    </Typography>
  );
};

ModuleTitle.propTypes = {
  name: PropTypes.string.isRequired,
  classesOverride: PropTypes.object
};

export default ModuleTitle;
