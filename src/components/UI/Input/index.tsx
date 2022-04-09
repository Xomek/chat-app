import { InputHTMLAttributes } from "react";
import { BaseComponent } from "../../../interfaces/BaseComponent.interface";
import { mcl } from "../../../misc/myClassNames";
import styles from "./Input.module.scss";

export interface InputProps extends BaseComponent, InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...props }: InputProps) => {
   const InputStyles = mcl(styles.input, className);

   return <input className={InputStyles} {...props} />;
};

export default Input;
