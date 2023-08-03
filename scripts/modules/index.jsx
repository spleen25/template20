import React, { Suspense, lazy } from 'react';
import { hydrate, render } from 'react-dom';
import { Helmet } from 'react-helmet';

import { ColorModeProvider } from 'context/colorModeContext';
import Layout from 'components/layout';
import { CssBaseline } from 'components/providers';
import { BrowserRouter, Route, Routes } from 'components/router';
import { CircularProgress } from 'components/controls';

const About = lazy(() => import('./about'));
const Weather = lazy(() => import('./weather'));
const Expense = lazy(() => import('./expense'));
const TodoList = lazy(() => import('./todoList'));
const MoscowDistrictsQuiz = lazy(() => import('./moscowDistrictsQuiz'));

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
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/expense" element={<Expense />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/moscow-districts-quiz" element={<MoscowDistrictsQuiz />} />
                <Route path="*" element={<About />} />
              </Route>
            </Routes>
          </Suspense>
        </CssBaseline>
      </ColorModeProvider>
    </BrowserRouter>
  </>
);

const rootNode = document.getElementById('root');

if (rootNode.hasChildNodes()) {
  hydrate(<App />, rootNode);
} else {
  render(<App />, rootNode);
}
