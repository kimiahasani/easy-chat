import { contentMessageType } from "@/types/rtkType";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contentMessage:[]
} as contentMessageType;

export const messageContentSlice = createSlice({
    name: 'messageContentSlice',
    initialState,
    reducers: {
        actAddMessage:(state, {payload})=>{
            const {roomName, ...msgData}= payload
            state.contentMessage.map((el)=>{
                if(el.roomName === roomName){
                    el.messages.push(msgData)
                }
            })
        },
        actDelMessage:(state, {payload})=>{
            const {roomName, messageTime}= payload
            state.contentMessage.map((el)=>{
                if(el.roomName === roomName){
                    el.messages.map((item, idx)=>{
                        if(item.time === messageTime){
                            //1 because i want delete one
                            el.messages.splice(idx, 1)
                            return
                        }
                    })
                    return 
                }
            })
        },
        actUpdateMessage:(state, {payload})=>{
            const {roomName,...msgData}= payload
            state.contentMessage.map((el)=>{
                if(el.roomName === roomName){
                    el.messages.map((item, idx)=>{
                        if(item.time === msgData.time){
                            //1 because i want delete one and replace with msgData to update
                            el.messages.splice(idx, 1, msgData)
                            return
                        }
                    })
                    return
                }
            })
        },
    },
    
    // extraReducers : ...
});

export const {
    /* insert actions name here */
    actAddMessage,
    actDelMessage,
    actUpdateMessage
} = messageContentSlice.actions;