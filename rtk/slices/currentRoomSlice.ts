import { CurrentRoomType } from '@/types/rtkType';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   roomName: '',
   partnerInfo: {
      _id: '',
      name: '',
      profileImg: '',
      username: '',
   },
   inputMessage: '',
} as CurrentRoomType;

export const currentRoomSlice = createSlice({
   name: 'currentRoomSlice',
   initialState,
   reducers: {
      actInputMessage: (state, { payload }) => {
         state.inputMessage = payload;
      },
      actSetCurrentRoom: (state, { payload }) => {
         state.roomName = payload;
      },
      actCurrentRoomPartnerInfo: (state, { payload }) => {
         state.partnerInfo._id = payload._id;
         state.partnerInfo.name = payload.name;
         state.partnerInfo.username = payload.username;
         state.partnerInfo.profileImg = payload.profileImg;
      },
      actLeaveCurrentRoom: (state) => {
         state.roomName = '';
         state.partnerInfo._id = '';
         state.partnerInfo.name = '';
         state.partnerInfo.username = '';
         state.partnerInfo.profileImg = '';
      },
   },
});

export const {
   /* insert actions name here */
   actInputMessage,
   actSetCurrentRoom,
   actCurrentRoomPartnerInfo,
   actLeaveCurrentRoom,
} = currentRoomSlice.actions;
