import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from 'decorators';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}));

const ModuleWrapper = ({ classesOverride, children }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.wrapper, classesOverride)}>{children}</div>
  );
};

ModuleWrapper.propTypes = {
  classesOverride: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default ModuleWrapper;
