'use client';

import useEnterKeyToSendMsg from '@/hooks/useEnterKeyToSendMsg';
import {
   actChatCreated,
   actCurrentFileUpdate,
   actInputMessage,
   actSetCurrentChatName_Id,
} from '@/rtk/slices/currentChatSlice';
import { actAddOneMessage } from '@/rtk/slices/messagesSlice';
import { actUpsertOneItemInList } from '@/rtk/slices/partnersListSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { nowTime } from '@/utils/timeNow';
import { fullFileInfo } from '@/utils/toBufferFront';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function BtnSendMessage() {
   const [thisFile, setThisFile] = useState('');
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

   const attachFile = async (e) => {
      const file = e?.target?.files[0];
      if (!file) return '';

      const { name: fileName, fileType, buffer, dataUrl, size } = await fullFileInfo(file);
      if (size > 950) return;

      patcher(actCurrentFileUpdate({ fileName, fileType, fileUrl: dataUrl }));
      setThisFile({ fileName, fileType, fileUrl: dataUrl, buffer });
   };

   const sendMsgFu = async () => {
      if (!chatCreated) {
         socket.emit('join pv room', { cId: chatId, cName: chatName, userId, partnerId });
         patcher(actChatCreated(true));
      }

      const sentAt = nowTime(new Date());

      const payMsg = {
         senderId: userId,
         name,
         file: {
            fileName: thisFile?.fileName,
            fileType: thisFile?.fileType,
            buffer: thisFile?.buffer,
         },
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

         payMsg.file = {
            buffer: '',
            fileType: thisFile?.fileType,
            fileUrl: thisFile?.fileUrl,
         };

         // update redux
         // add to message box for sender
         patcher(actAddOneMessage(payMsg));
         // remove from preview
         patcher(actCurrentFileUpdate({ fileName: '', fileUrl: '', fileType: '' }));
         // clear input
         patcher(actInputMessage(''));
         // update list of partner (left side)
         patcher(actUpsertOneItemInList(anItemInList));
         // clear current file:
         setThisFile('');
      } catch (err) {
         console.log('Error to send message');
      }
   };

   // partnerId && useEnterKeyToSendMsg(sendMsgFu);

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
