'use client';

import { actCurrentChatHistoryUpdate } from '@/rtk/slices/currentChatSlice';
import {
   actAddManyMessage,
   actAddOneMessage,
   actDelOneMessages,
   selectAllMessagesCR,
} from '@/rtk/slices/messagesSlice';
import { actDelOneItemInList, actUpdateOneItemInList } from '@/rtk/slices/partnersListSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { useSelector } from 'react-redux';
import EachMessage from './EachMessage';

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
      patcher(actAddManyMessage(allMessages));
   });

   const allMessage = useSelector(selectAllMessagesCR);

   const oneToEnd = allMessage.length > 1 ? allMessage.at(-2) : null;

   socket.on('message confirmation', (arg) => {
      // console.log('Front- message confirmation for: ', arg);
      if (arg.uId !== userId) return;

      // console.log('message successfully sent to chatroom');
   });

   socket.on('message to room', (msg) => {
      console.log('Front- message to room : ', msg);
      patcher(actAddOneMessage(msg));
      // console.log(msg.senderId, msg.text);
      // with id partner, ===> change text
      // const asd = {
      //    _id: msg.senderId,
      //    text: msg.text,
      //    sentAt: msg.sentAt,
      // };
      // patcher(actUpdateOneItemInList(asd));
   });

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
      } else if (allMessage?.at(-1)?.sentAt !== sentTime) {
         patcher(actDelOneMessages(sentTime));
      } else {
         patcher(actDelOneMessages(sentTime));
         patcher(actDelOneItemInList(sentTime));
      }
   });

   return (
      <section>
         {allMessage.map((el, idx) => (
            <section key={idx}>
               <EachMessage item={el} oneToEnd={oneToEnd} />
            </section>
         ))}
      </section>
   );
}
