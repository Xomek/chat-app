import { FC, ButtonHTMLAttributes } from "react";
import { BaseComponent } from "../../../interfaces/BaseComponent.interface";
import { mcl } from "../../../misc/myClassNames";
import styles from "./Button.module.scss";

export interface ButtonProps extends BaseComponent, ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
   const ButtonStyles = mcl(styles.button, className);

   return (
      <button className={ButtonStyles} {...props}>
         {children}
      </button>
   );
};

export default Button;
