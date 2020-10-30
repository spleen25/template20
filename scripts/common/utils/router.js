import { find } from 'lodash';

const getRouteTitle = (pageTitle, pathName, routes) => {
  const activeRoute = find(routes, { path: pathName });

  return activeRoute && activeRoute.title
    ? `${activeRoute.title} - ${pageTitle}`
    : pageTitle;
};

export { getRouteTitle };
