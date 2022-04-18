import { FC } from "react";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import styles from "./Home.module.scss";

import { Header } from "../../components";

interface HomeProps extends BaseComponent {}

const Home: FC<HomeProps> = ({ className }) => {
   const HomeStyles = mcl("page", styles.home, className);

   return (
      <>
         <Header />
         <div className={HomeStyles}></div>;
      </>
   );
};

export default Home;
