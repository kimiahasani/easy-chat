'use client';

import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { patcher } from '@/rtk/store';
import { actAiAddRes, actAiLoading } from '../../../rtk/slices/aiChatSlice';
import { useEffect } from 'react';
import { socket } from '@/socket';
import { nowTime } from '@/utils/timeNow';
import { formatTime } from '@/utils/formatTime';
import { parseDateString } from '@/utils/parseDateString';

export default function BoxAiMessages() {
   const allMsg = useSelector((st) => st.aiChat.responses);
   const sentAt = nowTime(new Date());
   const messageTime = parseDateString(sentAt);

   const myClass = (checker) => (checker === 'ai' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800');

   useEffect(() => {
      const getOfAi = ({ dataFromAi, sender }) => {
         patcher(actAiAddRes({ text: dataFromAi, sender }));
         patcher(actAiLoading(false));
      };

      socket.on('res from Ai', getOfAi);

      return () => {
         socket.off('res from Ai', getOfAi);
      };
   }, [allMsg]);

   return (
      <section>
  {allMsg.length === 0 ? (
    <p className="mb-4 ">How can I help you today?</p>
  ) : (
    allMsg.map((el) => (
      <section key={nanoid()} className={`${myClass(el.sender)} border p-4 mb-2 rounded-md`}>
        <p className="mb-2">{el.text}</p>
        <h6 className="mb-4 text-right">{formatTime(messageTime)}</h6>
      </section>
    ))
  )}
</section>

   );
}
