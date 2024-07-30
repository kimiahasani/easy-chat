'use client';

import { socket } from '@/socket';
import { patcher } from '@/rtk/store';
import { useSelector } from 'react-redux';
import { actAiAddRes, actAiLoading, actAiSetInput } from '../../../rtk/slices/aiChatSlice';
import {  BtnContinueStyle } from '@/styles/commonClasses';

export default function BtnSentContextAi() {
   const aiChat = useSelector((st) => st.aiChat);
   const userId = useSelector((st) => st.users._id);

   const sendDataToBack = async () => {
      if (!aiChat.input) return;

      patcher(actAiLoading(true));
      socket.emit('send prompt to ai', { myPrompt: aiChat.input, userId });
      patcher(actAiAddRes({ text: aiChat.input, sender: 'me' }));
      patcher(actAiSetInput(''));
   };

   return (
      <>
         {aiChat.isLoading ? (
            <button>loading</button>
         ) : (
            <button onClick={sendDataToBack} className={BtnContinueStyle}>
               Ask
            </button>
         )}
      </>
   );
}
