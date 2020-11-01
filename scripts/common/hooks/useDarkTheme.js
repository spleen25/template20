import { useEffect, useState } from 'react';
import themeDefault from '../theme';

const useDarkTheme = () => {
  const [theme, setTheme] = useState(themeDefault);

  const {
    palette: { type }
  } = theme;

  const toggleDarkTheme = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light'
      }
    };
    setTheme(updatedTheme);
  };

  useEffect(() => {
    window.localStorage.setItem('paletteType', type);
  }, [type]);

  return [theme, toggleDarkTheme];
};

export default useDarkTheme;
