import { InputHTMLAttributes } from "react";
import { BaseComponent } from "../../../interfaces/BaseComponent.interface";
import { mcl } from "../../../misc/myClassNames";
import styles from "./Input.module.scss";

export interface InputProps extends BaseComponent, InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   errors?: any;
   touched?: any;
}

const Input = ({ className, label, errors, touched, ...props }: InputProps) => {
   const InputStyles = mcl(styles.input, className);

   return label ? (
      <>
         <label className={styles.label}>{label}</label>
         <div className={styles.item}>
            <input {...props} className={InputStyles} />
            {touched && errors && touched && errors && <div className={styles.error}>{errors}</div>}
         </div>
      </>
   ) : (
      <input className={InputStyles} {...props} />
   );
};

export default Input;
