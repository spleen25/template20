import { useEffect } from 'react';
import { isFunction } from 'lodash';

const useTitle = (titleOrFn, ...deps) => {
  useEffect(() => {
    document.title = `${
      isFunction(titleOrFn) ? titleOrFn() : titleOrFn
    } / TEMPLATE 20`;
  }, [...deps]);
};

export default useTitle;
