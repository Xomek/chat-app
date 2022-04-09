import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "./utils/consts";
import { IRoutes } from "./interfaces/routes.interface";

import { Login, Registration } from "./pages";

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

export const privateRoutes: IRoutes[] = [];
