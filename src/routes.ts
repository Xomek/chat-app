import { REGISTRATION_ROUTE, LOGIN_ROUTE, HOME_ROUTE } from "./utils/consts";
import { IRoutes } from "./interfaces/routes.interface";

import { Home, Login, Registration } from "./pages";

export const publicRoutes: IRoutes[] = [
   {
      path: REGISTRATION_ROUTE,
      Component: Registration,
   },
   {
      path: LOGIN_ROUTE,
      Component: Login,
   },
];

export const privateRoutes: IRoutes[] = [
   {
      path: HOME_ROUTE,
      Component: Home,
   },
];
