import { FC, FormHTMLAttributes } from "react";
import { BaseComponent } from "../../../interfaces/BaseComponent.interface";
import { mcl } from "../../../misc/myClassNames";
import styles from "./Form.module.scss";

export interface FormProps extends BaseComponent, FormHTMLAttributes<HTMLFormElement> {
   auth?: boolean;
}

const Form: FC<FormProps> = ({ className, children, auth, ...props }) => {
   const FormStyles = mcl(styles.form, className, { [styles.auth]: auth });

   return (
      <form className={FormStyles} {...props}>
         {children}
      </form>
   );
};

export default Form;
