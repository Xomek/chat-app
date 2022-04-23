import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyCieS5h8XIGQStlP-ptzmnV5R82KkPK8MY",
   authDomain: "chat-a5e80.firebaseapp.com",
   projectId: "chat-a5e80",
   storageBucket: "chat-a5e80.appspot.com",
   messagingSenderId: "888721054600",
   appId: "1:888721054600:web:27f5c2ebffac759058f83d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
