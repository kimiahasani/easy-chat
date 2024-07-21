'use client';

import { actCurrentChatHistoryUpdate } from '@/rtk/slices/currentChatSlice';
import {
   actAddManyMessage,
   actAddOneMessage,
   selectAllMessagesCR,
} from '@/rtk/slices/messagesSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function BoxMsg() {
   const userData = useSelector((st) => st.users);
   const userId = userData._id;
   // console.log('userData is : ', userData);

   socket.on('res current message history', ({ chatName, chatId, allMessages }) => {
      // console.log('Front - res current message history recive: ', allMessages);
      // set loading false, set chat name, set chatId
      patcher(actCurrentChatHistoryUpdate({ loading: false, chatName, chatId }));

      // save in redux
      if (allMessages.length === 0) return;
      patcher(actAddManyMessage(allMessages));
   });

   const allMessage = useSelector(selectAllMessagesCR);

   socket.on('message confirmation', (arg) => {
      // console.log('Front- message confirmation for: ', arg);
      if (arg.uId !== userId) return;

      // console.log('message successfully sent to chatroom');
   });

   socket.on('message to room', (msg) => {
      // console.log('Front- message to room : ', msg);
      patcher(actAddOneMessage(msg));
   });

   return (
      <section>
         {allMessage.map((el, idx) => (
            <p key={idx}>
               {el.text}
               <span>{el.sendAt}</span>
            </p>
         ))}
      </section>
   );
}
