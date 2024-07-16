import { MessageType } from '@/types/rtkType';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   textToSend: '',
} as MessageType;

export const messageSlice = createSlice({
   name: 'messageSlice',
   initialState,
   reducers: {
      actTextToSend: (state, { payload }) => {
         state.textToSend = payload;
      },
      actEmptyTextToSend: (state) => {
         state.textToSend = '';
      },
   },
   // extraReducers : ...
});

export const {
   /* insert actions name here */
   actTextToSend,
   actEmptyTextToSend,
} = messageSlice.actions;
