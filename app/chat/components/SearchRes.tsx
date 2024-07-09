'use client';

import { RootState } from '@/types/rtkType';
import { useSelector } from 'react-redux';

export default function SearchRes() {
    //get a data from state 
    //st.search.usernames is array we can use map 
   const searchData = useSelector((st: RootState) => st.search.usernames);

   return (
      <>
         {searchData.length > 0 && (
            <div>
               {searchData.map((el) => (
                  <p key={el._id} className='py-2 px-4'>
                     {el.username!}
                  </p>
               ))}
            </div>
         )}
      </>
   );
}
