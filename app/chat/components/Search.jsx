'use client';

import { inputClasses } from '@/styles/commonClasses';
import { ChangeEvent, useState } from 'react';
import SearchRes from './SearchRes';
import { patcher } from '@/rtk/store';
import { useSearchUsersMutation } from '@/rtk/queries/serchUser/serchUser';
import { actDelSearchRes } from '@/rtk/slices/searchSlice';

export default function Search() {
   const [searchUsers, { isLoading, isError, error, isSuccess }] = useSearchUsersMutation();
   const [query, setQuery] = useState(null);

   let sendValToSearch;

   const searchResHandel = (e) => {
      if (query) query.abort();

      // clear privies list
      patcher(actDelSearchRes());

      // check input length
      const val = e.target.value.trim();
      if (val.length < 3) return;

      // send request
      searchUsers({ text: val });
      setQuery(searchUsers({ text: val }));
   };

   return (
      <div>
         <div className='flex items-center'>
            <input
               type='text'
               placeholder='Search Username'
               className={inputClasses}
               onChange={searchResHandel}
            />
            {isLoading && <span className='py-2'>Loading...</span>}
            {isError && <span className='py-2'>No user</span>}
         </div>
         <SearchRes />
      </div>
   );
}
