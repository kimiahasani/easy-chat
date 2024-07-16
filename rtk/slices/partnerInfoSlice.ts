import { PartnerInfoType } from "@/types/rtkType";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id: '',
    username: '',
    profileImg:''
} as PartnerInfoType;

export const partnerInfoSlice = createSlice({
    name: 'partnerInfoSlice',
    initialState,
    reducers: {
      actAddPartner:(state,{payload})=>{
        state._id = payload._id;
        state.username = payload.username;
        state.profileImg = payload.profileImg;
      },
        actDelPartner:(state)=>{
            state._id = '';
            state.username = '';
            state.profileImg = '';
        }
    },
    // extraReducers : ...
});

export const {
    /* insert actions name here */
    actAddPartner,actDelPartner
} = partnerInfoSlice.actions;