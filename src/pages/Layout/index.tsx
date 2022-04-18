import { FC } from "react";
import styles from "./Layout.module.scss";
import { Aside, Header } from "../../components";

const Layout: FC = ({ children }) => {
   return (
      <div className={styles.layout}>
         <Aside />
         <main className={styles.main}>
            <Header />
            {children}
         </main>
      </div>
   );
};

export default Layout;
