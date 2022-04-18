import { FC } from "react";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import styles from "./Home.module.scss";

import { Header } from "../../components";
import Layout from "../Layout";

interface HomeProps extends BaseComponent {}

const Home: FC<HomeProps> = ({ className }) => {
   const HomeStyles = mcl("page", styles.home, className);

   return (
      <>
         <Layout>
            <div className={HomeStyles}></div>
         </Layout>
      </>
   );
};

export default Home;
