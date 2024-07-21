import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   name: 'e.g. John',
   username: 'e.g. john1010',
   email: 'e.g. gmail.com',
   pass: 'e.g. 123',
   _id: '',
   token: 'e.g. 999',
   refToken: 'e.g. 888',
   profileImg: 'e.g. /url',
   chats: [],
};

export const userSlice = createSlice({
   name: 'userSlice',
   initialState,
   reducers: {
      // Add actions  here
      actUserEmail: (state, { payload }) => {
         state.email = payload;
      },
      actUserPass: (state, { payload }) => {
         state.pass = payload;
      },
      actUserName: (state, { payload }) => {
         state.name = payload;
      },
      actUserUsername: (state, { payload }) => {
         state.username = payload;
      },
      actToken: (state, { payload }) => {
         state.token = payload;
      },
      actRefToken: (state, { payload }) => {
         state.refToken = payload;
      },
      actUserProfileImg: (state, { payload }) => {
         state.profileImg = payload;
      },
      actUserAddChat: (state, { payload }) => {
         state.chats.push(payload);
      },
      actUserDelChat: (state, { payload }) => {
         const index = state.chats.indexOf(payload);
         state.chats.splice(index, 1);
      },
      actUserAdd: (state, { payload }) => {
         state.email = payload.email;
         state.pass = payload.pass;
         state.username = payload.username;
         state.token = payload.token;
         state.refToken = payload.refToken;
         state._id = payload._id;
         state.profileImg = payload.profileImg || '';
         payload.chats && state.chats.push(...payload.chats);
      },
      actUserDel: (state) => {
         state.email = '';
         state.pass = '';
         state.username = '';
         state.token = '';
         state.refToken = '';
         state._id = '';
         state.profileImg = '';
         state.chats.splice(0, Infinity);
      },
   },
});

export const {
   actUserProfileImg,
   actUserAddChat,
   actUserDelChat,
   actUserName,
   actUserEmail,
   actUserPass,
   actUserUsername,
   actUserAdd,
   actUserDel,
   actToken,
   actRefToken,
} = userSlice.actions;
