import { actSearchRes } from '@/rtk/slices/searchSlice';
import { patcher } from '@/rtk/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchUserRTKApi = createApi({
   reducerPath: 'searchUserRTKApi',
   // refetchOnFocus : true,
   // refetchOnReconnect : true,
   // keepUnusedDataFor : 3,
   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   endpoints: (builder) => ({
      searchUsers: builder.mutation({
         query: (arg) => ({ url: 'api/user/search', method: 'POST', body: arg }),
         // optional method
         transformResponse: (res) => {
            patcher(actSearchRes(res));
            // console.log('res from search : ', res);
            return null;
         },
      }),
   }),
});

export const {
   /* add hooks to use hooks in Component  */
   useSearchUsersMutation,
} = searchUserRTKApi;
