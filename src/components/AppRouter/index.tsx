import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { authUser } from "../../redux/actions/user";
import { useAppDispath, useAppSelector } from "../../redux/hooks";
import { privateRoutes, publicRoutes } from "../../routes";

const AppRouter = () => {
   const dispatch = useAppDispath();
   getAuth().onAuthStateChanged((user) => {
      if (user) {
         dispatch(authUser(true));
      } else {
         dispatch(authUser(false));
      }
   });
   const auth = useAppSelector((state) => state.user.isAuth);
   const navigate = useNavigate();
   
   useEffect(() => {
      if (auth) {
         navigate("/home");
      }
   }, [auth]);

   return (
      <Routes>
         {auth
            ? privateRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
            : publicRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)}
      </Routes>
   );
};

export default AppRouter;
