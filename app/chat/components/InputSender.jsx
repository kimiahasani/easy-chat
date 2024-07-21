'use client';

import { actInputMessage } from '@/rtk/slices/currentChatSlice';
import { patcher } from '@/rtk/store';
import { inputClasses } from '@/styles/commonClasses';
import { useSelector } from 'react-redux';

export default function InputSender() {
   const inputSenderContent = useSelector((st) => st.currentChat.inputMessage);

   const setInputValue = (e) => {
      patcher(actInputMessage(e.target.value));
   };

   return (
      <section className=' py-5 px-3 border-3 rounded-md bg-slate-50 flex items-center gap-2'>
         <input
            type='text'
            placeholder='Insert Message'
            className={inputClasses}
            onChange={setInputValue}
            value={inputSenderContent}
         />
      </section>
   );
}
