'use client';

import { actCurrentChatHistoryUpdate } from '@/rtk/slices/currentChatSlice';
import {
   actAddManyMessage,
   actAddOneMessage,
   actDelOneMessages,
   actUpdateOneMessages,
   selectAllMessagesCR,
} from '@/rtk/slices/messagesSlice';
import { actDelOneItemInList, actUpdateOneItemInList } from '@/rtk/slices/partnersListSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { useSelector } from 'react-redux';
import EachMessage from './EachMessage';
import { use, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';

export default function BoxMsg() {
   const userData = useSelector((st) => st.users);
   const { partnerInfo } = useSelector((st) => st.currentChat);
   const userId = userData._id;
   // console.log('userData is : ', userData);

   socket.on('res current message history', ({ chatName, chatId, allMessages }) => {
      // console.log('Front - res current message history recive: ', allMessages);
      // set loading false, set chat name, set chatId
      patcher(actCurrentChatHistoryUpdate({ loading: false, chatName, chatId }));

      // save in redux
      if (allMessages.length === 0) return;
      console.log('allMessages: ', allMessages);
      patcher(actAddManyMessage(allMessages));
   });

   const allMessage = useSelector(selectAllMessagesCR);

   const oneToEnd = allMessage.length > 1 ? allMessage.at(-2) : null;


   socket.on('message to room', (msg) => {
      console.log('Front- message to room : ', msg);
      patcher(actAddOneMessage(msg));
   });

   // use useEffect to privent multi add this event to storage of web
   useEffect(() => {
      const asd = ({ sentTime, text }) => {
         // update message
         patcher(actUpdateOneMessages({ id: sentTime, changes: { text } }));
         // if this message is last, update one item in list
         console.log('sentAt to front: ', sentTime);
         console.log('sentAt in last message: ', allMessage.at(-1)?.sentAt);
         const lastMsgTime = allMessage.at(-1)?.sentAt;
         if (lastMsgTime === sentTime) {
            patcher(actUpdateOneItemInList({ id: partnerInfo._id, changes: { text } }));
         }
      };
      socket.on('edit success notification', asd);
      // remove event to clear storage
      return () => {
         socket.off('edit success notification', asd);
      };
   }, [allMessage]);

   socket.on('del success notification', (sentTime) => {
      console.log('del item in front');
      // update list
      if (allMessage?.length > 1 && allMessage?.at(-1)?.sentAt === sentTime) {
         console.log('partnerInfo: ', partnerInfo?._id);
         console.log('allMessage.at(-2) : ', allMessage.at(-2)?.text);
         patcher(
            actUpdateOneItemInList({
               id: partnerInfo?._id,
               changes: { text: allMessage.at(-2)?.text },
            })
         );
         patcher(actDelOneMessages(sentTime));
      } else if (allMessage?.length > 1 && allMessage?.at(-1)?.sentAt !== sentTime) {
         patcher(actDelOneMessages(sentTime));
      } else {
         patcher(actDelOneMessages(sentTime));
         patcher(actDelOneItemInList(sentTime));
      }
   });

   return (
      <section className="flex flex-col gap-4 p-4 overflow-y-auto">
         {allMessage.map((el) => (
            <section key={nanoid()}>
               <EachMessage item={el} key={nanoid()} />
            </section>
         ))}
      </section>
   );
}
