import { FC, ButtonHTMLAttributes } from "react";
import { BaseComponent } from "../../../interfaces/BaseComponent.interface";
import { mcl } from "../../../misc/myClassNames";
import styles from "./Button.module.scss";

export interface ButtonProps extends BaseComponent, ButtonHTMLAttributes<HTMLButtonElement> {
   border?: boolean;
   onClick: () => void;
}

const Button: FC<ButtonProps> = ({ className, children, onClick, border, ...props }) => {
   const ButtonStyles = mcl(styles.button, className, { [styles.border]: border });

   return (
      <button
         className={ButtonStyles}
         {...props}
         onClick={(e) => {
            e.preventDefault();
            onClick();
         }}
      >
         {children}
      </button>
   );
};

export default Button;
