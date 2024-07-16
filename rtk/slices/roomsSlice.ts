import { RoomsType } from '@/types/rtkType';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   currentRoomName: '',
   participants: [],
   messageIds: [],
} as RoomsType;

export const roomsSlice = createSlice({
   name: 'roomsSlice',
   initialState,
   reducers: {
      actParticipants: (state, { payload }) => {
         // need operate
         // state.participants = payload;
      },
      actMessageId: (state, { payload }) => {
         // need operate
         // state.messageId = payload;
      },
      actCurrentRoomSet: (state, { payload }) => {
         state.currentRoomName = payload;
      },
   },
   // extraReducers : ...
});

export const {
   /* insert actions name here */
   actCurrentRoomSet,
   actParticipants,
   actMessageId,
} = roomsSlice.actions;
