import { FC } from "react";
import { ForgotPasswordForm } from "../../components";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import styles from "./ForgotPassword.module.scss";

interface ForgotPasswordProps extends BaseComponent {}

const ForgotPassword: FC<ForgotPasswordProps> = ({ className }) => {
   const ForgotPasswordStyles = mcl("page", styles.forgotPassword, className);

   return (
      <div className={ForgotPasswordStyles}>
         <div className={styles.inner}>
            <ForgotPasswordForm />
         </div>
      </div>
   );
};

export default ForgotPassword;
