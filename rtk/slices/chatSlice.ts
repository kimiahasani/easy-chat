import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  username: string;
  message: string;
}

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setMessages } = chatSlice.actions;
export default chatSlice.reducer;
