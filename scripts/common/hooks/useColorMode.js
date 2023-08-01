import { useContext } from 'react';

import ColorModeContext from '../context/colorModeContext';

const useColorMode = () => {
  const colorMode = useContext(ColorModeContext);
  return colorMode;
};

export default useColorMode;
