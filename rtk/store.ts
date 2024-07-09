import { configureStore } from '@reduxjs/toolkit';
import { signSlice } from './slices/signSlice';
import { signRtkApi } from './queries/sign/sign';
import { searchSlice } from './slices/searchSlice';
import { searchRtkApi } from './queries/search/search';
import { userSlice } from './slices/userSlice';

export const store = configureStore({
   reducer: {
      sign: signSlice.reducer,
      users: userSlice.reducer,
      search: searchSlice.reducer,
      // users : userSlice.reducer
      // ...
      // [nameOfApiOne.reducerPath]: nameOfApiOne.reducer, //for RTK-Query
      [searchRtkApi.reducerPath]: searchRtkApi.reducer,
      [signRtkApi.reducerPath]: signRtkApi.reducer,
      // ...
   },

   middleware: (gDM) => gDM().concat(signRtkApi.middleware, searchRtkApi.middleware), //for RTK-Query:  gDM().concat(nameOfApiOne.middleware, nameOfApiTwo.middleware),
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const patcher = store.dispatch;
export const allStore = store.getState;
//for RTK-Query:
// setupListeners(patcher);
