import { ChatType } from '@/types/rtkType';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   participants: [] as Array<Object>,
   messageId: [] as Array<Object>,
} as ChatType;

export const chatSlice = createSlice({
   name: 'chatSlice',
   initialState,
   reducers: {
      actParticipants: (state, { payload }) => {
         state.participants = payload;
      },
      actMessageId: (state, { payload }) => {
         state.messageId = payload;
      },
      // Add actions  here
   },
   // extraReducers : ...
});

export const {
   /* insert actions name here */
   actParticipants,
   actMessageId,
} = chatSlice.actions;
