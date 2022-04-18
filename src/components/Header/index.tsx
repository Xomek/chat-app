import { FC } from "react";
import { getAuth, signOut } from "firebase/auth";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import { Button } from "../UI";
import styles from "./Header.module.scss";
import { useAppDispath } from "../../redux/hooks";
import { asyncLogoutUser } from "../../redux/actions/user";
import { useNavigate } from "react-router-dom";

export interface HeaderProps extends BaseComponent {}

const Header: FC<HeaderProps> = ({ className }: HeaderProps) => {
   const auth = getAuth();
   const navigate = useNavigate();
   const dispatch = useAppDispath();
   const HeaderFormStyles = mcl(styles.loginform, className);

   return (
      <header className={HeaderFormStyles}>
         <Button
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
