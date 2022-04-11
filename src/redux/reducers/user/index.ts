import { IUser } from "../../../interfaces/user.interface";
import { CLEAR_USER, LOGIN_USER, SET_USER } from "../../types";

interface UserState {
   user: IUser;
   accessToken: string;
}

const initialState: UserState = {
   user: {
      uid: "",
      email: "",
   },
   accessToken: "",
};

const userReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case SET_USER: {
         return {
            ...state,
            user: { uid: action.payload.uid, email: action.payload.email },
            // accessToken: action.payload.accessToken,
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
      default:
         return state;
   }
};

export default userReducer;
