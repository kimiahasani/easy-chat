import { SearchType } from "@/types/rtkType";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usernames:[]
} as SearchType;

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        //each time the user search put the value inside this act
        actUsernamesRes: (state, {payload}) => {
            //splice said how many you want to delete and second argument is when you delete something what do you want to replace
            state.usernames.splice(0, Infinity)

            //our username is object when we said ...payload is open that object an push to usernames
            state.usernames.push(...payload.usernames) 
         },
         //when we search after search clean the search box
      actUsernamesClearRes: (state) => {
         state.usernames.splice(0, Infinity);
      },
    },
    // extraReducers : ...
});

export const { actUsernamesRes, actUsernamesClearRes } = searchSlice.actions;