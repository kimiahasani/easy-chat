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
      <section className="mt-2 space-y-2">
         {resList.map((el, idx) => (
            <button key={idx} onClick={() => selectPartner(el)} className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition duration-150 ease-in-out flex items-center space-x-3">
               <img
                  src={el.profileImg || `https://ui-avatars.com/api/?name=${el.username}`}
                  alt={el.username}
                  className="w-10 h-10 rounded-full"
               />
               <div>
               <p className="font-semibold text-gray-800">{el.username}</p>
               <p className="text-sm text-gray-500">{el.name}</p>
               </div>
            </button>
         ))}
      </section>
   );
}
