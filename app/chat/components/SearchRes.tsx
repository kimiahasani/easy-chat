'use client';

import { actCurrentRoomPartnerInfo } from '@/rtk/slices/currentRoomSlice';
import { actSearchLeaved } from '@/rtk/slices/searchSlice';
import { patcher } from '@/rtk/store';
import { RootState } from '@/types/rtkType';
import { useSelector } from 'react-redux';

export default function SearchRes() {
   const resList = useSelector((st: RootState) => st.search.people);
   if (resList.length === 0) return null;

   const selectPartner = (partner: {
      _id: string;
      username: string;
      name: string;
      profileImg: string;
   }) => {
      // set partner to chat
      patcher(actCurrentRoomPartnerInfo(partner));

      // remove search res
      patcher(actSearchLeaved());
   };

   return (
      <section>
         {resList.map((el, idx) => (
            <button key={idx} onClick={() => selectPartner(el)}>
               {el.username}
            </button>
         ))}
      </section>
   );
}
