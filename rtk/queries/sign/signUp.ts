
import { BASE_URL } from '@/envClient';
import { actUserSinUpUP } from '@/rtk/slices/userSlice';
import { patcher } from '@/rtk/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const signUpUPApi = createApi({
   reducerPath: 'signUpUPApi',
   // refetchOnFocus : true,
   refetchOnReconnect: true,
   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
   endpoints: (builder) => ({
      signUp: builder.mutation({
         query: (arg) => ({
            url: 'api/sign/logingWithPass',
            method: 'POST',
            body: arg,
         }),
         transformResponse(res, meta, arg) {
            patcher(actUserSinUpUP(arg));
            return null;
         },
      }),
   }),
});

export const {
   /* add hooks to use hooks in Component  */
   useSignUpMutation,
} = signUpUPApi;
