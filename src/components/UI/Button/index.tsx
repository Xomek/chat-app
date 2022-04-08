import { FC } from "react";
import { BaseComponent } from "../../../interfaces/BaseComponent.interface";
import { mcl } from "../../../misc/myClassNames";
import styles from "./Button.module.scss";

export interface ButtonProps extends BaseComponent {}

const Button: FC<ButtonProps> = ({ className, children }) => {
   const ButtonStyles = mcl(styles.button, className);

   return <button className={ButtonStyles}>{children}</button>;
};

export default Button;
