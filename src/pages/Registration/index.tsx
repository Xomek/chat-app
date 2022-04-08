import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";

import styles from "./Registration.module.scss";

export interface RegistrationProps extends BaseComponent {}

const Registration = ({ className }: RegistrationProps) => {
   const RegistrationStyles = mcl("page", styles.registration, className);

   return <div className={RegistrationStyles}></div>;
};

export default Registration;
