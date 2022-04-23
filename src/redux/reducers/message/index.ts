import { SET_MESSAGES } from "../../types";

interface MessageState {
   messages: [];
}

const initialState: MessageState = {
   messages: [],
};

const messageReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case SET_MESSAGES: {
         return {
            ...state,
            messages: action.messages,
         };
      }
      default:
         return state;
   }
};

export default messageReducer;
