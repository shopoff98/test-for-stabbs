import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  text: {
    id: 0,
    message: "",
  },
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, { payload }) => {
      state.text.id = payload.id;
      state.text.message = payload.message;
      state.messages = [...state.messages, state.text];
    },
    deleteMessage: (state, { payload }) => {
      state.messages = state.messages.filter((el) => el.id !== payload);
    },
  },
});

export const { addMessage, deleteMessage } = chatSlice.actions;
export default chatSlice.reducer;
