import { FC } from "react";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { ReactElement } from "react";
import { mcl } from "../../misc/myClassNames";

import styles from "./Registration.module.scss";

export interface RegistrationProps extends BaseComponent {}

const Registration: FC<RegistrationProps> = ({ className }): ReactElement => {
   const RegistrationStyles = mcl("page", styles.registration, className);

   return <div className={RegistrationStyles}></div>;
};

export default Registration;
