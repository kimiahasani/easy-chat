import { configureStore } from '@reduxjs/toolkit';
import { signSlice } from './slices/signSlice';

export const store = configureStore({
   reducer: {
      sign: signSlice.reducer,
      // users : userSlice.reducer
      // ...
      // [nameOfApiOne.reducerPath]: nameOfApiOne.reducer, //for RTK-Query
      // ...
   },

   middleware: (gDM) => gDM(), //for RTK-Query:  gDM().concat(nameOfApiOne.middleware, nameOfApiTwo.middleware),
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const patcher = store.dispatch;
//for RTK-Query:
// setupListeners(patcher);
