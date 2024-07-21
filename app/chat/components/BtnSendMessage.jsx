import {
   actChatCreated,
   actInputMessage,
   actSetCurrentChatName_Id,
} from '@/rtk/slices/currentChatSlice';
import { actAddOneMessage } from '@/rtk/slices/messagesSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { nowTime } from '@/utils/timeNow';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function BtnSendMessage() {
   const userId = useSelector((st) => st.users._id);

   const {
      chatId,
      chatName,
      inputMessage: text,
      partnerInfo,
      chatCreated,
   } = useSelector((st) => st.currentChat);

   socket.on('chat info', (arg) => {
      patcher(actSetCurrentChatName_Id(arg));
   });

   const partnerId = partnerInfo._id;
   // const file = '';

   const sendMsgFu = () => {
      if (!chatCreated) {
         socket.emit('join pv room', { cId: chatId, cName: chatName, userId, partnerId });
         patcher(actChatCreated(true));
      }

      const sentAt = nowTime(new Date());

      const payMsg = {
         _id: Math.random().toString(32),
         text,
         chatId,
         senderId: userId,
         sentAt,
         visited: false,
      };

      try {
         socket.emit('new message', { chatName, payMsg });
         patcher(actAddOneMessage(payMsg));
         patcher(actInputMessage(''));
      } catch (err) {
         console.log('Error to send message');
      }
   };
   return (
      <>
         <button onClick={sendMsgFu}>Send</button>
      </>
   );
}
