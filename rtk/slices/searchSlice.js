import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   people: [],
   inputVal: '',
};

export const searchSlice = createSlice({
   name: 'searchSlice',
   initialState,
   reducers: {
      actSearchRes: (state, { payload }) => {
         state.people.splice(0, Infinity);
         state.people.push(...payload);
      },
      actDelSearchRes: (state) => {
         state.people.splice(0, Infinity);
      },
      actSearchInputVal: (state, { payload }) => {
         state.inputVal = payload;
      },
      actSearchLeaved: (state) => {
         state.inputVal = '';
         state.people.splice(0, Infinity);
      },
   },
});

export const { actSearchRes, actDelSearchRes, actSearchInputVal, actSearchLeaved } =
   searchSlice.actions;
