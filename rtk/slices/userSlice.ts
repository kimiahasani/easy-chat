
import { UserType } from '@/types/rtkTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   email: '',
   pass: '',
   username: '',
   id: '',
   token: '',
   refToken: '',
   name:''
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
      actToken: (state, { payload }) => {
         state.token = payload;
      },
      actRefToken: (state, { payload }) => {
         state.refToken = payload;
      },
      actName : (state, { payload }) => {
         state.name = payload;
      },
   
      actAddUser: (state, { payload }) => {
         state.email = payload.email;
         state.pass = payload.pass;
         state.username = payload.username;
         state.token = payload.token;
         state.refToken = payload.refToken;
         state.id = payload.id;
      },
      actDeleteUser:(state, { payload }) => {
         state.email ="";
         state.pass = "";
         state.username ="";
         state.token = "";
         state.refToken = "";
         state.id = "";
      },
      
}});

export const {
   actUserEmail,
   actUserPass,
   actUserUsername,
   actAddUser,
   actToken,
   actRefToken,
   /* insert actions name here */
} = userSlice.actions;
