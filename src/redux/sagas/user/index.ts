import { put, takeLatest, call } from "redux-saga/effects";
import { CREATE_USER, LOGIN_USER, LOGIN_USER_SUCCESS } from "../../types";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, User } from "firebase/auth";
import { setUserActionCreator } from "../../actions/user";

async function createUser(email: string, password: string) {
   const auth = getAuth();
   return createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
         return user;
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
      });
   console.log("Создал");
}

async function loginUser(email: string, password: string) {
   const auth = getAuth();
   return signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
         return user;
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
      });
}

export function* userWorkerCreate({ payload }: any) {
   try {
      const user: User = yield call(createUser, payload.email, payload.password);
      yield put(setUserActionCreator({ uid: user.uid, email: user.email }));
   } catch (error) {}
}

export function* userWorkerLogin({ payload }: any) {
   try {
      const user: User = yield call(loginUser, payload.email, payload.password);
      yield put(setUserActionCreator({ uid: user.uid, email: user.email }));
   } catch (error) {}
}

export function* userWatcher() {
   yield takeLatest(LOGIN_USER, userWorkerLogin);
   yield takeLatest(CREATE_USER, userWorkerCreate);
}

export function* userSaga() {
   yield userWatcher();
}
