import { FC } from "react";
import { BaseComponent } from "../../../interfaces/BaseComponent.interface";
import { mcl } from "../../../misc/myClassNames";
import styles from "./Title.module.scss";

export interface TitleProps extends BaseComponent {}

const Title: FC<TitleProps> = ({ className, children, ...props }) => {
   const TitleStyles = mcl(styles.title, className);

   return (
      <div className={TitleStyles} {...props}>
         {children}
      </div>
   );
};

export default Title;
