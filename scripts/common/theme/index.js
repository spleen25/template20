import { deepPurple, pink } from '@material-ui/core/colors';

const themeDefault = {
  palette: {
    primary: pink,
    secondary: deepPurple,
    type: String(window.localStorage.getItem('paletteType') || 'dark')
  }
};

export default themeDefault;
