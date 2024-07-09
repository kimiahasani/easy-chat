'use client';

import { useTextToSearchMutation } from '@/rtk/queries/search/search';
import { inputClasses } from '@/styles/commonClasses';
import { ChangeEvent } from 'react';
import { patcher } from '@/rtk/store';
import { actUsernamesClearRes } from '@/rtk/slices/searchSlice';
import SearchRes from './SearchRes';

export default function Search() {
   const [textToSearch, { isLoading, isError, error, isSuccess }] = useTextToSearchMutation();
   
   //sendValToSearch is type of null or typeof textToSearch
   let sendValToSearch: null | ReturnType<typeof textToSearch>;

   const searchResHandel = (e: ChangeEvent<HTMLInputElement>) => {
      if (sendValToSearch) sendValToSearch.abort();

      patcher(actUsernamesClearRes());

      const val = e.target.value;
      if (val.length < 4) return;

      sendValToSearch = textToSearch({ text: val });
   };

   return (
      <>
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
      </>
   );
}
