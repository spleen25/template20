import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { useColorMode } from 'hooks';
import { Link } from 'components/router';
import { styled, useTheme } from 'components/providers';
import {
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography
} from 'components/controls';
import {
  Brightness4Icon,
  Brightness7Icon,
  HomeIcon,
  InsertEmoticonIcon,
  MenuIcon
} from 'components/icons';
import { makeStyles } from 'decorators';

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  toolbar: {
    paddingRight: 24
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none!important'
  },
  title: {
    flexGrow: 1
  }
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Header = ({ open, onDrawerOpen }) => {
  const colorMode = useColorMode();

  const theme = useTheme();
  const classes = useStyles();

  return (
    <AppBar open={open} position="absolute" color="primary">
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
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'light' ? (
            <Brightness4Icon />
          ) : (
            <Brightness7Icon />
          )}
        </IconButton>
        <IconButton component={Link} to="/">
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  onDrawerOpen: PropTypes.func.isRequired
};

export default Header;
