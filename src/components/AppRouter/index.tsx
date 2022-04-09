import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";

const AppRouter = () => {
   const auth = false;

   return (
      <Routes>
         {auth
            ? privateRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
            : publicRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)}
      </Routes>
   );
};

export default AppRouter;
