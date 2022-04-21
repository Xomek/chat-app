import { useEffect } from "react";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { IUser } from "../../interfaces/user.interface";
import { mcl } from "../../misc/myClassNames";
import Avatar from "../Avatar";
import styles from "./Users.module.scss";

export interface UsersProps extends BaseComponent {
   users: IUser[];
}
const Users = ({ users, className }: UsersProps) => {
   const UsersStyles = mcl(styles.users, className);

   return (
      <div className={UsersStyles}>
         {users.map((user) => (
            <div className={styles.message} key={user.uid}>
               <Avatar className={styles.avatar} />
               <div className={styles.email}>{user.email}</div>
            </div>
         ))}
      </div>
   );
};

export default Users;
