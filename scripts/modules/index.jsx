import React, { useState } from 'react';
import { render } from 'react-dom';

import Layout from 'components/layout';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route, Redirect } from 'components/router';
import { CssBaseline } from '@material-ui/core';

import AboutPage from './about';
import WeatherPage from './weather';
import Page2 from './expense';
import TodoList from './todoList';

import '../../styles/index.less';

const routes = [
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/weather',
    component: WeatherPage
  },
  {
    path: '/page2',
    component: Page2
  },
  {
    path: '/todo',
    component: TodoList
  }
];

const AppModules = () => {
  const [theme, setTheme] = useState({
    palette: {
      type: 'light'
    }
  });

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };

  const muiTheme = createMuiTheme(theme);

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline>
          <Layout onToggleDark={toggleDarkTheme}>
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} {...route} />
              ))}
              <Route path="*" render={() => <Redirect to="/about" />} />
            </Switch>
          </Layout>
        </CssBaseline>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

render(<AppModules />, document.getElementById('root'));
