import { REGISTRATION_ROUTE, LOGIN_ROUTE, HOME_ROUTE, FORGOT_PASSWORD_ROUTE } from "./utils/consts";
import { IRoutes } from "./interfaces/routes.interface";

import { Home, Login, Registration,ForgotPassword } from "./pages";

export const publicRoutes: IRoutes[] = [
   {
      path: REGISTRATION_ROUTE,
      Component: Registration,
   },
   {
      path: LOGIN_ROUTE,
      Component: Login,
   },
   {
      path: FORGOT_PASSWORD_ROUTE,
      Component: ForgotPassword,
   },
];

export const privateRoutes: IRoutes[] = [
   {
      path: HOME_ROUTE,
      Component: Home,
   },
];
