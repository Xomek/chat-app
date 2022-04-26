import { FC, useEffect } from "react";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import styles from "./Home.module.scss";
import Layout from "../Layout";
import { useAppDispath, useAppSelector } from "../../redux/hooks";
import { collection, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Messages } from "../../components";
import { setMessages } from "../../redux/actions/message";

interface HomeProps extends BaseComponent {}

const Home: FC<HomeProps> = ({ className }) => {
   const HomeStyles = mcl("page", styles.home, className);
   const messages = useAppSelector((state) => state.message.messages);
   const dispatch = useAppDispath();

   useEffect(() => {
      const messages = collection(db, "messages");

      onSnapshot(messages, async (querySnapshot) => {
         const messagesArr: any = [];
         querySnapshot.forEach((doc) => {
            messagesArr.push(doc.data());
         });

         const authors: any = await getDocs(messages).then((snapshot) => snapshot.docs.map((doc) => doc.data().author));

         const arr = await Promise.all(authors.map((data: any) => getDoc(data)));

         const authorsEmail = arr.map((user) => user.data().email);
         console.log(authorsEmail);

         const messagesWithUsersEmail = messagesArr.map((message: any, index: any) => {
            return { ...message, author: authorsEmail[index] };
         });
         dispatch(setMessages(messagesWithUsersEmail));
      });
   }, []);

   return (
      <>
         <Layout>
            <div className={HomeStyles}>
               <Messages messages={messages} />
            </div>
         </Layout>
      </>
   );
};

export default Home;
