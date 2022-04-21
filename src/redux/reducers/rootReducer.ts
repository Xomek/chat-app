import { combineReducers } from "redux";

import userReducer from "./user";
import messageReducer from "./message";

export const rootReducer = combineReducers({ user: userReducer, message: messageReducer });
