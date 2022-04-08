import { FC } from "react";
import { BaseComponent } from "../../../interfaces/BaseComponent.interface";
import { mcl } from "../../../misc/myClassNames";
import styles from "./Form.module.scss";

export interface FormProps extends BaseComponent {}

const Form: FC<FormProps> = ({ className, children }) => {
   const FormStyles = mcl(styles.form, className);

   return <form className={FormStyles}>{children}</form>;
};

export default Form;
