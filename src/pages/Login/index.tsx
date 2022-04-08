import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";

import styles from "./Login.module.scss";

export interface LoginProps extends BaseComponent {}

const Login = ({ className }: LoginProps) => {
   const LoginStyles = mcl("page", styles.registration, className);

   return <div className={LoginStyles}></div>;
};

export default Login;
