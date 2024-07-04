
import { SignType } from '@/types/rtkTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   visitLogin: false,
   inputEmail: '',
   inputConfirmEmail: '',
   inputPass: '',
   inputConfirmPass: '',
   inputUsername: '',
} as SignType;

export const signSlice = createSlice({
   name: 'uniquNameForSlice',
   initialState,
   reducers: {
      actVisitLogin: (state) => {
         state.visitLogin = !state.visitLogin;
      },
      actInputEmail: (state, { payload }) => {
         state.inputEmail = payload;
      },
      actInputConfirmEmail: (state, { payload }) => {
         state.inputConfirmEmail = payload;
      },
      actInputPass: (state, { payload }) => {
         state.inputPass = payload;
      },
      actInputConfirmPass: (state, { payload }) => {
         state.inputConfirmPass = payload;
      },
      actInputUsername: (state, { payload }) => {
         state.inputUsername = payload;
      },
      // Add actions  here
   },
   // extraReducers : ...
});

export const {
   /* insert actions name here */
   actVisitLogin,
   actInputEmail,
   actInputConfirmEmail,
   actInputPass,
   actInputConfirmPass,
   actInputUsername,
} = signSlice.actions;
