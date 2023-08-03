import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import { makeStyles } from 'decorators';

import Header from './Header';
import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
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

const Layout = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const onDrawerChange = () => setOpen(!open);
  return (
    <div className={classes.root}>
      <Header open={open} onDrawerOpen={onDrawerChange} />
      <Drawer open={open} onDrawerClose={onDrawerChange} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default Layout;
