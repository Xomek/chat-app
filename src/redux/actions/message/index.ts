import { ASYNC_MESSAGE_GET_ALL, SET_MESSAGES } from "../../types";

export const getAllMessagesCreator = () => {
   return { type: ASYNC_MESSAGE_GET_ALL };
};

export const setMessages = (messages: any) => {
   return { type: SET_MESSAGES, messages };
};
