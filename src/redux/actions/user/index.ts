import { firebaseError } from "../../../interfaces/firebaseError.interface";
import { IUser } from "../../../interfaces/user.interface";
import { userCredentials } from "../../../interfaces/userCredentials.interface";
import {
   CLEAR_USER,
   CREATE_USER,
   LOGIN_USER_FAIL,
   LOGIN_USER_SUCCESS,
   ASYNC_LOGIN_USER,
   LOGIN_USER,
   ASYNC_CREATE_USER,
   CREATE_USER_SUCCESS,
   CREATE_USER_FAIL,
   LOADING_USER,
   ASYNC_RESET_PASSWORD,
   AUTH_USER,
   ASYNC_LOGOUT_USER,
} from "../../types";

export const asyncLoginUserCreator = (payload: userCredentials) => {
   return { type: ASYNC_LOGIN_USER, payload };
};

export const loginUserSuccessCreator = () => {
   return { type: LOGIN_USER_SUCCESS };
};

export const loginUserFailCreator = (payload: firebaseError) => {
   return { type: LOGIN_USER_FAIL, payload };
};

export const loginUserCreator = (payload: IUser) => {
   return { type: LOGIN_USER, payload };
};

export const asyncCreateUserCreator = (payload: userCredentials) => {
   return { type: ASYNC_CREATE_USER, payload };
};

export const createUserSuccessCreator = () => {
   return { type: CREATE_USER_SUCCESS };
};

export const createUserFailCreator = (payload: firebaseError) => {
   return { type: CREATE_USER_FAIL, payload };
};

export const createUserCreator = (payload: IUser) => {
   return { type: CREATE_USER, payload };
};

export const asyncResetUserPassword = (payload: any) => {
   return { type: ASYNC_RESET_PASSWORD, payload };
};

export const asyncLogoutUser = () => {
   return { type: ASYNC_LOGOUT_USER };
};

export const loadingUser = () => {
   return { type: LOADING_USER };
};

export const clearUserCreator = () => {
   return { type: CLEAR_USER };
};

export const authUser = (payload: boolean) => {
   return { type: AUTH_USER, payload };
};
