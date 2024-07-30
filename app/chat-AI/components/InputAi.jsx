'use client';
import { patcher } from '@/rtk/store';
import { actAiSetInput } from '../../../rtk/slices/aiChatSlice';
import { useSelector } from 'react-redux';
import { InputClassesForAI, } from '@/styles/commonClasses';

export default function InputAi() {
   const inputVal = useSelector((st) => st.aiChat.input);
   const handleChange = (e) => {
      patcher(actAiSetInput(e.target.value));
   };

   return (
      <>
         <input
            type='text'
            placeholder='Ask Easy Chat AI'
            value={inputVal}
            onChange={handleChange}
            className={InputClassesForAI}
         />
      </>
   );
}
