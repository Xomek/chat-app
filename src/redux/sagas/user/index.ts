import { put, takeLatest, call } from "redux-saga/effects";
import { ASYNC_CREATE_USER, ASYNC_LOGIN_USER } from "../../types";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, User } from "firebase/auth";
import {
   createUserCreator,
   createUserFailCreator,
   createUserSuccessCreator,
   loadingUser,
   loginUserCreator,
   loginUserFailCreator,
   loginUserSuccessCreator,
} from "../../actions/user";

async function loginUser(email: string, password: string) {
   const auth = getAuth();
   return signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
         return user;
      })
      .catch((error) => {
         throw new Error(error);
      });
}

async function createUser(email: string, password: string) {
   const auth = getAuth();
   return createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
         return user;
      })
      .catch((error) => {
         throw new Error(error);
      });
}

export function* userWorkerLogin({ payload }: any) {
   try {
      yield put(loadingUser());
      const user: User = yield call(loginUser, payload.email, payload.password);
      yield put(loginUserSuccessCreator());
      yield put(loginUserCreator({ uid: user.uid, email: user.email }));
   } catch (error) {
      yield put(loginUserFailCreator(error));
   }
}

export function* userWorkerCreate({ payload }: any) {
   try {
      yield put(loadingUser());
      const user: User = yield call(createUser, payload.email, payload.password);
      yield put(createUserSuccessCreator());
      yield put(createUserCreator({ uid: user.uid, email: user.email }));
   } catch (error) {
      yield put(createUserFailCreator(error));
   }
}

export function* userWatcher() {
   yield takeLatest(ASYNC_LOGIN_USER, userWorkerLogin);
   yield takeLatest(ASYNC_CREATE_USER, userWorkerCreate);
}

export function* userSaga() {
   yield userWatcher();
}
