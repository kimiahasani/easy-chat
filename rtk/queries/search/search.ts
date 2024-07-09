import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { patcher } from '@/rtk/store';
import { actUsernamesRes } from '@/rtk/slices/searchSlice';

export const searchRtkApi = createApi({
   reducerPath: 'searchRtkApi',
   // refetchOnFocus : true, refetchOnReconnect : true, keepUnusedDataFor : 3,
   baseQuery: fetchBaseQuery({
      baseUrl: '/',
      headers: {
         'access-token': ' allStore()',
      },
   }),
   endpoints: (builder) => ({
      textToSearch: builder.mutation({
         query: (arg) => ({ url: 'api/user/search', method: 'POST', body: arg }),
         // optional method
         transformResponse: (res) => {
            
            patcher(actUsernamesRes(res));
            return null;
         },
      }),
   }),
});

export const {
   /* add hooks to use hooks in Component  */
   useTextToSearchMutation,
} = searchRtkApi;
