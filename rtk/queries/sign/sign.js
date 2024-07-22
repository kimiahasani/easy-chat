import { actUserAdd } from '@/rtk/slices/userSlise';
import { patcher } from '@/rtk/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const signRtkApi = createApi({
   reducerPath: 'signRtkApi',
   refetchOnReconnect: true,
   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   endpoints: (builder) => ({
      // dd
      addOneUser: builder.mutation({
         query: (arg) => ({
            url: 'api/user/add',
            method: 'POST',
            body: arg,
         }),
         transformResponse(res, meta, arg) {
            patcher(actUserAdd({ ...arg, ...res }));
            return null;
         },
      }),

      loginUser: builder.mutation({
         query: (arg) => ({
            url: 'api/user/login',
            method: 'POST',
            body: arg,
         }),
         transformResponse(res, meta, arg) {
            patcher(
               actUserAdd({ ...arg, _id: res._id, token: res.token, refToken: res.refToken })
            );
            return true;
         },
      }),

      deleteUser: builder.mutation({
         query: (arg) => ({
            url: 'api/user',
            method: 'POST',
            body: arg,
         }),
         transformResponse(res, meta, arg) {
            patcher(
               actUserAdd({ ...arg, id: res.id, token: res.token, refToken: res.refToken })
            );
            return null;
         },
      }),
   }),
});

export const {
   /* add hooks to use hooks in Component  */
   useAddOneUserMutation,
   useDeleteUserMutation,
   useLoginUserMutation,
} = signRtkApi;
