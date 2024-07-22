'use client';

import { actCurrentChatUpdate } from '@/rtk/slices/currentChatSlice';
import { actDelAllMessages } from '@/rtk/slices/messagesSlice';
import { actSearchLeaved } from '@/rtk/slices/searchSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { useSelector } from 'react-redux';

export default function SearchRes() {
   const userId = useSelector((st) => st.users._id);

   const resList = useSelector((st) => st.search.people);
   if (resList.length === 0) return null;

   const selectPartner = (partner) => {
      console.log('in result : ', partner);
      // update currentChat data
      patcher(actCurrentChatUpdate(partner));
      // remove search res
      patcher(actSearchLeaved());
      // remove Messages in boxMessage
      patcher(actDelAllMessages());

      // search in DB to find current chat message
      const partnerId = partner._id;
      socket.emit('current message history', { userId, partnerId });
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
