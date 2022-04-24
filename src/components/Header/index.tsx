import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import { Button } from "../UI";
import styles from "./Header.module.scss";
import { useAppDispath, useAppSelector } from "../../redux/hooks";
import { asyncLogoutUser } from "../../redux/actions/user";
import { useNavigate } from "react-router-dom";
import { Title } from "../common";
import { auth } from "../../firebase/firebase";

export interface HeaderProps extends BaseComponent {}

const Header = ({ className }: HeaderProps) => {
   const userEmail = auth.currentUser?.email;
   console.log(userEmail);
   const navigate = useNavigate();
   const dispatch = useAppDispath();
   const HeaderFormStyles = mcl(styles.header, className);

   return (
      <header className={HeaderFormStyles}>
         <Title className={styles.title}>{userEmail}</Title>
         <Button
            className={styles.button}
            onClick={() => {
               dispatch(asyncLogoutUser());
               navigate("/login");
            }}
         >
            Выйти
         </Button>
      </header>
   );
};

export default Header;
