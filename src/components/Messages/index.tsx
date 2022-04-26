import { getDoc, getDocs, doc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import Avatar from "../Avatar";
import styles from "./Messages.module.scss";

export interface UsersProps extends BaseComponent {
   messages: [];
}
const Messages = ({ messages, className }: UsersProps) => {
   const MessagesStyles = mcl(styles.messages, className);

   return (
      <div className={MessagesStyles}>
         {messages.map((message: any) => {
            return (
               <div className={styles.message} key={message.text}>
                  <Avatar className={styles.avatar} />
                  <div className={styles.text}>{message.text}</div>
                  <div className={styles.email}>{message.author}</div>
               </div>
            );
         })}
      </div>
   );
};

export default Messages;
