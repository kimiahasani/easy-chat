import { configureStore } from '@reduxjs/toolkit';
import { signSlice } from './slices/signSlice';
import { userSlice } from './slices/userSlise';
import { searchSlice } from './slices/searchSlice';
import { socketCheckSlice } from './slices/socketCheckSlice';

import { chatsSlice } from './slices/chatsSlice';
import { currentChatSlice } from './slices/currentChatSlice';
import { adpChatMessagesSlice } from './slices/messagesSlice';

import { signRtkApi } from './queries/sign/sign';
import { searchUserRTKApi } from './queries/serchUser/serchUser';
import { adpPartnersSlice } from './slices/partnersListSlice';

export const store = configureStore({
   reducer: {
      sign: signSlice.reducer,
      users: userSlice.reducer,
      search: searchSlice.reducer,
      socketConnection: socketCheckSlice.reducer,
      chats: chatsSlice.reducer,
      currentChat: currentChatSlice.reducer,
      chatMessages: adpChatMessagesSlice.reducer,
      partnersList: adpPartnersSlice.reducer,

      [signRtkApi.reducerPath]: signRtkApi.reducer,
      [searchUserRTKApi.reducerPath]: searchUserRTKApi.reducer,
   },

   middleware: (gDM) => gDM().concat(signRtkApi.middleware, searchUserRTKApi.middleware),
});

export const patcher = store.dispatch;
export const allStore = store.getState;
//for RTK-Query:
// setupListeners(patcher);
