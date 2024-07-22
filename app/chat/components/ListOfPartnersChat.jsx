'use client';

import {
   actAddManyPartnersToList,
   actUpsertOneItemInList,
   selectAllPartnerList,
} from '@/rtk/slices/partnersListSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { useSelector } from 'react-redux';
import OneItemOfList from './OneItemOfList';

export default function ListOfPartnersChat() {
   const allPartners = useSelector(selectAllPartnerList);

   // const userId = useSelector((st) => st.users._id);

   socket.on('res list partners', (argArr) => {
      // console.log('res from front : ', argArr);
      patcher(actAddManyPartnersToList(argArr));
   });

   socket.on('to update partner list', (partnerData) => {
      // console.log('data to update list is : ', partnerData);
      patcher(actUpsertOneItemInList(partnerData));
   });

   if (allPartners.length === 0) return;

   return (
      <>
         <h1>new is here</h1>
         {allPartners.map((el, idx) => (
            <div key={idx}>
               <OneItemOfList item={el} />
            </div>
         ))}
      </>
   );
}
