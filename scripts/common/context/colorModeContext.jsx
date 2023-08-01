import React, { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, createTheme } from 'components/providers';
import { themeDefault } from 'theme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState(
    String(window.localStorage.getItem('colorMode') || 'dark')
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        ...themeDefault,
        palette: { ...themeDefault.palette, mode }
      }),
    [mode]
  );

  useEffect(() => {
    window.localStorage.setItem('colorMode', mode);
  }, [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

ColorModeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ColorModeContext;
