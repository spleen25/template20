import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { Helmet } from 'react-helmet';

import { ColorModeProvider } from 'context/colorModeContext';
import Layout from 'components/layout';
import { CssBaseline } from 'components/providers';
import { BrowserRouter, Route, Routes } from 'components/router';
import { CircularProgress } from 'components/controls';

const AboutPage = lazy(() => import('./about'));
const WeatherPage = lazy(() => import('./weather'));
const ExpensePage = lazy(() => import('./expense'));
const TodoList = lazy(() => import('./todoList'));

const App = () => (
  <>
    <Helmet>
      <title>TEMPLATE 20</title>
    </Helmet>
    <BrowserRouter>
      <ColorModeProvider>
        <CssBaseline>
          <Suspense fallback={<CircularProgress />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<AboutPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/weather" element={<WeatherPage />} />
                <Route path="/expense" element={<ExpensePage />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="*" element={<AboutPage />} />
              </Route>
            </Routes>
          </Suspense>
        </CssBaseline>
      </ColorModeProvider>
    </BrowserRouter>
  </>
);

const rootNode = document.getElementById('root');
render(<App />, rootNode);
