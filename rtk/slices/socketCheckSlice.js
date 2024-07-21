import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isConnected: false,
};

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
