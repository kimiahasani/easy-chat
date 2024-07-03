
import { SignType } from '@/types/rtkTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   visitLogin: false,
} as SignType;

export const signSlice = createSlice({
   name: 'uniquNameForSlice',
   initialState,
   reducers: {
      actVisitLogin: (state) => {
         state.visitLogin = !state.visitLogin;
      },
      // Add actions  here
   },
   // extraReducers : ...
});

export const {
   /* insert actions name here */
   actVisitLogin,
} = signSlice.actions;
