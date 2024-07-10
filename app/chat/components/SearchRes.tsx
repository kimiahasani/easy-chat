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
    <div className="bg-white p-4">
        {searchData.map((el) => (
            <div key={el._id} className="py-2 px-4 border border-gray-300 rounded mb-2 last:mb-0">
                <p className="text-gray-700">{el.username!}</p>
            </div>
        ))}
    </div>
)}       
      </>
   );
}
