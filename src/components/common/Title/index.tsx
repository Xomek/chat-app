import { FC } from "react";
import { BaseComponent } from "../../../interfaces/BaseComponent.interface";
import { mcl } from "../../../misc/myClassNames";
import styles from "./Title.module.scss";

export interface TitleProps extends BaseComponent {
   formMode?: boolean;
}

const Title: FC<TitleProps> = ({ className, children, formMode, ...props }) => {
   const TitleStyles = mcl(styles.title, className, { [styles.formMode]: formMode });

   return (
      <div className={TitleStyles} {...props}>
         {children}
      </div>
   );
};

export default Title;
