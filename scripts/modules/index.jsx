import React from 'react';
import { render } from 'react-dom';

import { useDarkTheme } from 'hooks';
import Layout from 'components/layout';
import { MuiThemeProvider, createMuiTheme } from 'components/providers';
import { BrowserRouter, Redirect, Route, Switch } from 'components/router';
import { CssBaseline } from 'decorators';

import AboutPage from './about';
import WeatherPage from './weather';
import ExpensePage from './expense';
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
    path: '/expense',
    component: ExpensePage
  },
  {
    path: '/todo',
    component: TodoList
  }
];

const AppModules = () => {
  const [theme, toggleDarkTheme] = useDarkTheme();

  const themeConfig = createMuiTheme(theme);

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={themeConfig}>
        <CssBaseline>
          <Layout
            paletteType={themeConfig.palette.type}
            onToggleDark={toggleDarkTheme}
          >
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
