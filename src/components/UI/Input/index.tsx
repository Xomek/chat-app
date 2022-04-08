import { BaseComponent } from "../../../interfaces/BaseComponent.interface";
import { mcl } from "../../../misc/myClassNames";
import styles from "./Input.module.scss";

export interface InputProps extends BaseComponent {}

const Input = ({ className }: InputProps) => {
   const InputStyles = mcl(styles.input, className);

   return <input className={InputStyles } />;
};

export default Input;
