import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { call, put, takeLatest } from "redux-saga/effects";
import { ASYNC_MESSAGE_GET_ALL } from "../../types";
import { setMessages } from "../../actions/message";

async function getCities(db: any) {
   console.log(123);
   const citiesCol = collection(db, "messages");
   const citySnapshot = await getDocs(citiesCol);
   const cityList = citySnapshot.docs.map((doc) => doc.data());
   return cityList;
}

export function* messageWorkerGetAll() {
   try {
      const messages: DocumentData = yield call(getCities, db);
      yield put(setMessages(messages));
   } catch (error) {}
}

export function* messageWatcher() {
   yield takeLatest(ASYNC_MESSAGE_GET_ALL, messageWorkerGetAll);
}

export function* messageSaga() {
   yield messageWatcher();
}
