import { FC, useEffect } from "react";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import styles from "./Home.module.scss";

import Layout from "../Layout";
import { useAppDispath, useAppSelector } from "../../redux/hooks";
import { getAllMessagesCreator, setMessages } from "../../redux/actions/message";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";

interface HomeProps extends BaseComponent {}

const Home: FC<HomeProps> = ({ className }) => {
   const HomeStyles = mcl("page", styles.home, className);
   const messages = useAppSelector((state) => state.message.messages);
   const dispatch = useAppDispath();

   useEffect(() => {
      const messages = collection(db, "messages");

      onSnapshot(messages, (querySnapshot) => {
         const messagesArr: any = [];
         querySnapshot.forEach((doc) => {
            messagesArr.push(doc.data().text);
         });
         dispatch(setMessages(messagesArr));
      });
   }, []);

   return (
      <>
         <Layout>
            <div className={HomeStyles}>{messages && messages.map((message: any) => <div key={message}>{message}</div>)}</div>
         </Layout>
      </>
   );
};

export default Home;
