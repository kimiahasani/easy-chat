import { configureStore } from '@reduxjs/toolkit';
import { signSlice } from './slices/signSlice';

import { userSlice } from './slices/userSlise';
import { searchSlice } from './slices/searchSlice';

import { signRtkApi } from './queries/sign/sign';
import { searchUserRTKApi } from './queries/serchUser/serchUser';
import { currentRoomSlice } from './slices/currentRoomSlice';
import { socketCheckSlice } from './slices/socketCheckSlice';
import { adpChatMessageSliceSlice } from './slices/messagesSlice';
import { roomsSlice } from './slices/roomsSlice';

export const store = configureStore({
   reducer: {
      sign: signSlice.reducer,
      users: userSlice.reducer,
      search: searchSlice.reducer,
      currentRoom: currentRoomSlice.reducer,
      socketConnection: socketCheckSlice.reducer,
      chatMessages: adpChatMessageSliceSlice.reducer,
      rooms: roomsSlice.reducer,

      // users : userSlice.reducer
      // ...
      // [nameOfApiOne.reducerPath]: nameOfApiOne.reducer, //for RTK-Query
      // ...
      [signRtkApi.reducerPath]: signRtkApi.reducer,
      // [searchRtkApi.reducerPath]: searchRtkApi.reducer,
      [searchUserRTKApi.reducerPath]: searchUserRTKApi.reducer,
   },

   middleware: (gDM) => gDM().concat(signRtkApi.middleware, searchUserRTKApi.middleware), //for RTK-Query:  gDM().concat(nameOfApiOne.middleware, nameOfApiTwo.middleware),
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const patcher = store.dispatch;
export const allStore = store.getState;
//for RTK-Query:
// setupListeners(patcher);
