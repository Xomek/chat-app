import { FC } from "react";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import styles from "./Header.module.scss";

export interface HeaderProps extends BaseComponent {}

const Header: FC<HeaderProps> = ({ className }: HeaderProps) => {
   const HeaderFormStyles = mcl(styles.loginform, className);

   return <header className={HeaderFormStyles}></header>;
};

export default Header;
