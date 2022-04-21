import { FC, useEffect } from "react";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import styles from "./Home.module.scss";

import { Users } from "../../components";
import Layout from "../Layout";
import { useAppDispath, useAppSelector } from "../../redux/hooks";
import { getAllMessagesCreator } from "../../redux/actions/message";

interface HomeProps extends BaseComponent {}

const Home: FC<HomeProps> = ({ className }) => {
   const HomeStyles = mcl("page", styles.home, className);
   const messages = useAppSelector((state) => state.message.messages);
   const dispatch = useAppDispath();

   useEffect(() => {
      dispatch(getAllMessagesCreator());
      console.log(messages);
   }, []);

   return (
      <>
         <Layout>
            <div className={HomeStyles}>
               <Users users={[]} />
               {messages && messages.map((message: any) => <div>{message.text}</div>)}
            </div>
         </Layout>
      </>
   );
};

export default Home;
