import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import styles from "./Aside.module.scss";

export interface AsideProps extends BaseComponent {}

const Aside = ({ className }: AsideProps) => {
   const AsideFormStyles = mcl(styles.aside, className);

   return <aside className={AsideFormStyles}></aside>;
};

export default Aside;
