import React from 'react';
import * as PropTypes from 'prop-types';

import clsx from 'clsx';

import { makeStyles } from 'decorators';

import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
