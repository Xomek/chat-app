import { FC } from "react";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { ReactElement } from "react";
import { mcl } from "../../misc/myClassNames";
import styles from "./Registration.module.scss";

import { Title } from "../../components/common";
import { RegistrationForm } from "../../components";

export interface RegistrationProps extends BaseComponent {}

const Registration: FC<RegistrationProps> = ({ className }): ReactElement => {
   const RegistrationStyles = mcl("page", styles.registration, className);

   return (
      <div className={RegistrationStyles}>
         <Title>Регистрация</Title>
         <RegistrationForm />
      </div>
   );
};

export default Registration;
