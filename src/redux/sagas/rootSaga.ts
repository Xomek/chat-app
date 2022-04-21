import { all } from "redux-saga/effects";
import { messageSaga } from "./messages";
import { userSaga } from "./user";

export default function* rootSaga() {
   yield all([userSaga(), messageSaga()]);
}
