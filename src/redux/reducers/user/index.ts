import { IUser } from "../../../interfaces/user.interface";
import {
   AUTH_USER,
   CLEAR_USER,
   CREATE_USER,
   CREATE_USER_FAIL,
   CREATE_USER_SUCCESS,
   LOADING_USER,
   LOGIN_USER,
   LOGIN_USER_FAIL,
   LOGIN_USER_SUCCESS,
} from "../../types";

interface UserState {
   user: IUser;
   loading: boolean;
   error: "";
   isAuth: boolean;
   accessToken: string;
}

const initialState: UserState = {
   user: {
      uid: "",
      email: "",
   },
   loading: false,
   error: "",
   isAuth: false,
   accessToken: "",
};

const userReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case LOGIN_USER: {
         return {
            ...state,
            user: { uid: action.payload.uid, email: action.payload.email },
         };
      }
      case LOGIN_USER_SUCCESS: {
         return {
            ...state,
            loading: false,
            error: "",
         };
      }
      case LOGIN_USER_FAIL: {
         return {
            ...state,
            loading: false,
            error: action.payload.message,
         };
      }
      case CREATE_USER: {
         return {
            ...state,
            user: { uid: action.payload.uid, email: action.payload.email },
         };
      }
      case CREATE_USER_SUCCESS: {
         return {
            ...state,
            loading: false,
            error: "",
         };
      }
      case CREATE_USER_FAIL: {
         return {
            ...state,
            loading: false,
            error: action.payload.message,
         };
      }
      case LOADING_USER: {
         return {
            ...state,
            loading: true,
         };
      }
      case CLEAR_USER: {
         return {
            ...state,
            user: {
               uid: "",
               email: "",
            },
            accessToken: "",
         };
      }
      case AUTH_USER: {
         return {
            ...state,
            isAuth: action.payload,
         };
      }
      default:
         return state;
   }
};

export default userReducer;
