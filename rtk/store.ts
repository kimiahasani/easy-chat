import { configureStore } from '@reduxjs/toolkit';
import { signSlice } from './slices/signSlice';

import { userSlice } from './slices/userSlise';
import { signRtkApi } from './queries/sign/sign';

export const store = configureStore({
   reducer: {
      sign: signSlice.reducer,
      users: userSlice.reducer,
      // users : userSlice.reducer
      // ...
      // [nameOfApiOne.reducerPath]: nameOfApiOne.reducer, //for RTK-Query
      [signRtkApi.reducerPath]: signRtkApi.reducer,
      // ...
   },

   middleware: (gDM) => gDM().concat(signRtkApi.middleware), //for RTK-Query:  gDM().concat(nameOfApiOne.middleware, nameOfApiTwo.middleware),
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const patcher = store.dispatch;
//for RTK-Query:
// setupListeners(patcher);
