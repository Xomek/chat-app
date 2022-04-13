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
} from "../../types";

export const asyncLoginUserCreator = (payload: Record<string, string>) => {
   return { type: ASYNC_LOGIN_USER, payload };
};

export const loginUserSuccessCreator = () => {
   return { type: LOGIN_USER_SUCCESS };
};

export const loginUserFailCreator = (payload: any) => {
   return { type: LOGIN_USER_FAIL, payload };
};

export const loginUserCreator = (payload: any) => {
   return { type: LOGIN_USER, payload };
};

export const asyncCreateUserCreator = (payload: Record<string, string>) => {
   return { type: ASYNC_CREATE_USER, payload };
};

export const createUserSuccessCreator = () => {
   return { type: CREATE_USER_SUCCESS };
};

export const createUserFailCreator = (payload: any) => {
   return { type: CREATE_USER_FAIL, payload };
};

export const createUserCreator = (payload: any) => {
   return { type: CREATE_USER, payload };
};

export const loadingUser = () => {
   return { type: LOADING_USER };
};

export const clearUserCreator = () => {
   return { type: CLEAR_USER };
};
