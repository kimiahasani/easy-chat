'use client';

import { actInputMessage } from '@/rtk/slices/currentRoomSlice';
import { patcher } from '@/rtk/store';
import { inputClasses } from '@/styles/commonClasses';
import { RootState } from '@/types/rtkType';
import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

export default function InputSender() {
   const inputSenderContent = useSelector((st: RootState) => st.currentRoom.inputMessage);

   const setInputValue = (e: ChangeEvent<HTMLInputElement>) => {
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
