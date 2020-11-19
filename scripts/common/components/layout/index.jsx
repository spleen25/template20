import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

import { Container } from '@material-ui/core';

import { makeStyles } from 'decorators';

import Header from './Header';
import Drawer from './Drawer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const Layout = ({ paletteType, onToggleDark, children }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const onDrawerOpen = () => {
    setOpen(true);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Header
        open={open}
        paletteType={paletteType}
        onDrawerOpen={onDrawerOpen}
        onToggleDark={onToggleDark}
      />
      <Drawer open={open} onDrawerClose={onDrawerClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </main>
    </div>
  );
};

Layout.propTypes = {
  paletteType: PropTypes.string.isRequired,
  onToggleDark: PropTypes.func.isRequired,
  children: PropTypes.element
};

export { Layout as default };
