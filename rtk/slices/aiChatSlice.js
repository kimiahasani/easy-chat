import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   input: '',
   responses: [],
   isLoading: false,
};

export const aiChatSlice = createSlice({
   name: 'aiChatSlice',
   initialState,
   reducers: {
      // Add actions  here
      actAiSetInput: (state, { payload }) => {
         state.input = payload;
      },
      actAiLoading: (state, { payload }) => {
         state.isLoading = payload;
      },
      actAiAddRes: (state, { payload }) => {
         state.responses.push(payload);
      },
      actAiClearAllRes: (state) => {
         state.responses.splice(0, Infinity);
      },
   },
   // extraReducers : ...
});

export const {
   actAiSetInput,
   actAiLoading,
   actAiAddRes,
   actAiClearAllRes,
   /* insert actions name here */
} = aiChatSlice.actions;
