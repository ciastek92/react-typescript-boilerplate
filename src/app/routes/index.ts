// @ts-ignore
import uniloc from 'uniloc';

export const mainRoute = 'mainRoute';
export const notFoundRoute = 'notFoundRoute';
export const forbiddenRoute = 'forbiddenRoute';

// api routes

interface Routes {
  [key: string]: string;
}

const getRoutes: Routes = {
  [mainRoute]: '/',
  [notFoundRoute]: '/*',
  [forbiddenRoute]: '/forbidden',

  // api routes
};

const postRoutes: Routes = {
};

export const routes = Object.assign({}, getRoutes, postRoutes);

const getUnilocRoutes = (routesList: Routes, methodType: string): object => {
  return Object.keys(routesList).reduce(
    (previous: any, current: string): object => {
      previous[current] = `${methodType} ${routesList[current]}`;
      return previous;
    },
    {}
  );
};

const unilocGetRoutes = getUnilocRoutes(getRoutes, 'GET');
const unilocPostRoutes = getUnilocRoutes(postRoutes, 'POST');

const unilocRoutes = Object.assign({}, unilocGetRoutes, unilocPostRoutes);

export const ROUTER = uniloc(unilocRoutes);
