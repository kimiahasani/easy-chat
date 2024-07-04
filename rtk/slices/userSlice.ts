
import { UserType } from '@/types/rtkTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   email: '',
   pass: '',
   username: '',
} as UserType;

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
      actUserUsername: (state, { payload }) => {
         state.username = payload;
      },
      actUserSinUpUP: (state, { payload }) => {
         state.email = payload.email;
         state.pass = payload.pass;
         state.username = payload.username;
      },
   },
});

export const {
   actUserEmail,
   actUserPass,
   actUserUsername,
   actUserSinUpUP,
   /* insert actions name here */
} = userSlice.actions;
