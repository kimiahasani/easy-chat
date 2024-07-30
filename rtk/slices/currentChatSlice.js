import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   chatId: '',
   chatName: '',
   inputMessage: '',
   chatCreated: false,
   loading: false,
   file: { fileName: '', fileUrl: '', fileType: '' },
   partnerInfo: {
      _id: '',
      name: '',
      username: '',
      profileImg: '',
   },
};

export const currentChatSlice = createSlice({
   name: 'currentChatSlice',
   initialState,
   reducers: {
      actCurrentFileUpdate: (state, { payload }) => {
         state.file.fileName = payload.fileName;
         state.file.fileType = payload.fileType;
         state.file.fileUrl = payload.fileUrl;
      },
      actCurrentChatHistoryUpdate: (state, { payload }) => {
         state.chatName = payload.chatName;
         state.chatId = payload.chatId;
         state.loading = false;
      },
      actCurrentChatUpdate: (state, { payload }) => {
         state.chatName = '';
         state.inputMessage = '';
         state.chatId = '';
         state.loading = true;
         state.chatCreated = false;
         state.partnerInfo._id = payload._id;
         state.partnerInfo.name = payload.name;
         state.partnerInfo.username = payload.username;
         state.partnerInfo.profileImg = payload.profileImg;
      },
      actChatCreated: (state, { payload }) => {
         state.chatCreated = payload;
      },
      actCurrentChatLoading: (state, { payload }) => {
         state.loading = payload;
      },
      actInputMessage: (state, { payload }) => {
         state.inputMessage = payload;
      },
      actSetCurrentChatName: (state, { payload }) => {
         state.chatName = payload;
      },
      actSetCurrentChatId: (state, { payload }) => {
         state.chatId = payload;
      },
      actSetCurrentChatName_Id: (state, { payload }) => {
         state.chatName = payload.chatName;
         state.chatId = payload.chatId;
      },

      actCurrentChatPartnerInfo: (state, { payload }) => {
         state.partnerInfo._id = payload._id;
         state.partnerInfo.name = payload.name;
         state.partnerInfo.username = payload.username;
         state.partnerInfo.profileImg = payload.profileImg;
      },
      actLeaveCurrentRoom: (state) => {
         state.chatName = '';
         state.partnerInfo._id = '';
         state.partnerInfo.name = '';
         state.partnerInfo.username = '';
         state.partnerInfo.profileImg = '';
      },
   },
});

export const {
   /* insert actions name here */
   actCurrentFileUpdate,
   actCurrentChatHistoryUpdate,
   actCurrentChatUpdate,
   actChatCreated,
   actCurrentChatLoading,
   actInputMessage,
   actSetCurrentChatName,
   actSetCurrentChatId,
   actSetCurrentChatName_Id,
   actCurrentChatPartnerInfo,
   actLeaveCurrentRoom,
} = currentChatSlice.actions;
