import { FC, ReactElement } from "react";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import styles from "./Login.module.scss";

import { LoginForm } from "../../components";

export interface LoginProps extends BaseComponent {}

const Login: FC<LoginProps> = ({ className }): ReactElement => {
   const LoginStyles = mcl("page", styles.registration, className);

   return (
      <div className={LoginStyles}>
         <div className="container">
            <div className={styles.inner}>
               <LoginForm />
            </div>
         </div>
      </div>
   );
};

export default Login;
