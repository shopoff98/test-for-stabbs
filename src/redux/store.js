import { configureStore } from "@reduxjs/toolkit";
import chatReducers from "./chat/chat-reducers";

export const store = configureStore({
  reducer: {
    chat: chatReducers,
  },
});
