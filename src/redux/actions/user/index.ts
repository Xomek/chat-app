import { SET_USER, CLEAR_USER, LOGIN_USER, CREATE_USER } from "../../types";

export const asyncLoginUserCreator = (payload: Record<string, string>) => {
   return { type: LOGIN_USER, payload };
};

export const asyncCreateUserCreator = (payload: Record<string, string>) => {
   return { type: CREATE_USER, payload };
};

export const setUserActionCreator = (payload: any) => {
   return { type: SET_USER, payload };
};

export const clearUserActionCreator = () => {
   return { type: CLEAR_USER };
};
