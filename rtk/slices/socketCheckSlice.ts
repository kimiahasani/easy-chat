import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isConnected: false,
} as { isConnected: boolean };

export const socketCheckSlice = createSlice({
   name: 'socketCheckSlice',
   initialState,
   reducers: {
      actSocketConnected: (state) => {
         state.isConnected = true;
      },
      actSocketOff: (state) => {
         state.isConnected = false;
      },
   },
});

export const { actSocketConnected, actSocketOff } = socketCheckSlice.actions;
