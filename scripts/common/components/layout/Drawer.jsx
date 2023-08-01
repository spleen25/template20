import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from 'decorators';
import {
  Divider,
  IconButton,
  List,
  Drawer as MuiDrawer
} from 'components/controls';
import { ChevronLeftIcon } from 'components/icons';

import { mainListItems, secondaryListItems } from './listItems';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
}));

const Drawer = ({ open, onDrawerClose }) => {
  const classes = useStyles();

  return (
    <MuiDrawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={onDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </MuiDrawer>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onDrawerClose: PropTypes.func.isRequired
};

export default Drawer;
