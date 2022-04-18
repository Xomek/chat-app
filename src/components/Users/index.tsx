import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import styles from "./Users.module.scss";

export interface UsersProps extends BaseComponent {}

const Users = ({ className }: UsersProps) => {
   const UsersStyles = mcl(styles.users, className);

   return <div className={UsersStyles}></div>;
};

export default Users;
