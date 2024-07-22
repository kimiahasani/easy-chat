'use client';

import useEnterKeyToSendMsg from '@/hooks/useEnterKeyToSendMsg';
import {
   actChatCreated,
   actInputMessage,
   actSetCurrentChatName_Id,
} from '@/rtk/slices/currentChatSlice';
import { actAddOneMessage } from '@/rtk/slices/messagesSlice';
import { actUpsertOneItemInList } from '@/rtk/slices/partnersListSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { nowTime } from '@/utils/timeNow';
import { fileToBufferInFront } from '@/utils/toBufferFront';
import { useSelector } from 'react-redux';

export default function BtnSendMessage() {
   let myFile = '';
   const { name, username, profileImg, _id: userId } = useSelector((st) => st.users);

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

   const attachFile = async (e) => {
      const file = e?.target?.files[0];
      if (!file) return '';
      // convert file to buffer
      const fileType = file.type?.split('/')?.[0];
      console.log('file: ', file);
      const buffer = await fileToBufferInFront(file);

      // setFileBuff({ fileName: file.name, fileType, buffer });
      myFile = { fileName: file.name, fileType, buffer };
   };

   const sendMsgFu = async () => {
      if (!chatCreated) {
         socket.emit('join pv room', { cId: chatId, cName: chatName, userId, partnerId });
         patcher(actChatCreated(true));
      }

      const sentAt = nowTime(new Date());

      const payMsg = {
         // remove id and set "sentAt" as id for redux adp
         // _id: Math.random().toString(32),
         senderId: userId,
         name,
         file: myFile,
         username,
         profileImg,
         partnerId,
         chatId,
         sentAt,
         text,
         isPartnerRead: false,
      };

      const anItemInList = {
         text,
         _id: partnerId,
         name: partnerInfo.name,
         username: partnerInfo.username,
         profileImg: partnerInfo.profileImg,
         sentAt,
      };
      try {
         socket.emit('new message', { chatName, payMsg });
         payMsg.file = '';
         patcher(actAddOneMessage(payMsg));
         patcher(actInputMessage(''));
         patcher(actUpsertOneItemInList(anItemInList));
      } catch (err) {
         console.log('Error to send message');
      }
      myFile = '';
   };

   partnerId && useEnterKeyToSendMsg(sendMsgFu);

   return (
      <>
         <button onClick={sendMsgFu}>Send</button>
         <div>
            <label htmlFor='attach'>choose file</label>
            <input
               onClick={(e) => (e.target.value = '')}
               onChange={attachFile}
               id='attach'
               type='file'
               className='hidden'
            />
         </div>
      </>
   );
}
