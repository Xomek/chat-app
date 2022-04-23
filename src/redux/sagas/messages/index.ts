import { collection, doc, getDoc, Firestore, getDocs, onSnapshot, DocumentData } from "firebase/firestore";
import { put, takeLatest } from "redux-saga/effects";
import { db } from "../../../firebase/firebase";
import { setMessages } from "../../actions/message";
import { ASYNC_MESSAGE_GET_ALL } from "../../types";

async function getMessages(db: Firestore) {
  
}

export function* messageWorkerGetAll() {
   try {
      const messages: DocumentData = yield getMessages(db);
      yield put(setMessages(messages));
   } catch (error) {
      console.log(error);
   }
}

export function* messageWatcher() {
   yield takeLatest(ASYNC_MESSAGE_GET_ALL, messageWorkerGetAll);
}

export function* messageSaga() {
   yield messageWatcher();
}
