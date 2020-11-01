import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from 'decorators';

import { Link } from 'react-router-dom';
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography
} from 'components/controls';
import {
  Brightness4Icon,
  Brightness7Icon,
  HomeIcon,
  InsertEmoticonIcon,
  MenuIcon
} from 'components/icons';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  }
}));

const Header = ({ open, paletteType, onDrawerOpen, onToggleDark }) => {
  const classes = useStyles();

  return (
    <MuiAppBar
      position="absolute"
      color="primary"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <InsertEmoticonIcon />
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          TEMPLATE 20
        </Typography>
        <IconButton onClick={onToggleDark}>
          {paletteType === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <IconButton component={Link} to="/">
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  paletteType: PropTypes.string.isRequired,
  onDrawerOpen: PropTypes.func.isRequired,
  onToggleDark: PropTypes.func.isRequired
};

export default Header;
