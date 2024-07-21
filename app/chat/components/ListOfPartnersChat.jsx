'use client';

import {
   actAddManyPartnersToList,
   selectAllPartnerList,
} from '@/rtk/slices/partnersListSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { useSelector } from 'react-redux';

export default function ListOfPartnersChat() {
   const allPartners = useSelector(selectAllPartnerList);

   socket.on('res list partners', (argArr) => {
      console.log('res from front : ', argArr);
      patcher(actAddManyPartnersToList(argArr));
   });

   if (allPartners.length === 0) return;

   return (
      <>
         <h1>new is here</h1>
         {allPartners.map((el, idx) => (
            <section key={idx}>
               {console.log(el)}
               <h5>{el.username}</h5>
               <p>{el.text.substring(0, 30)}...</p>
            </section>
         ))}
      </>
   );
}
