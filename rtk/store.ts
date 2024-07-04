import { configureStore } from '@reduxjs/toolkit';
import { signSlice } from './slices/signSlice';
import { signUpUPApi } from './queries/sign/signUp';

export const store = configureStore({
   reducer: {
      sign: signSlice.reducer,
      // users : userSlice.reducer
      // ...
      // [nameOfApiOne.reducerPath]: nameOfApiOne.reducer, //for RTK-Query
      [signUpUPApi.reducerPath]: signUpUPApi.reducer,
      // ...
   },

   middleware: (gDM) => gDM(), //for RTK-Query:  gDM().concat(nameOfApiOne.middleware, nameOfApiTwo.middleware),
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const patcher = store.dispatch;
//for RTK-Query:
// setupListeners(patcher);
