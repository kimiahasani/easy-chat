'use client';

import { actInputPass } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';
import { ChangeEvent } from 'react';

export default function InputPass() {
   const getPass = (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      patcher(actInputPass(val));
   };
   return (
      <>
         <input
            type='password'
            placeholder='Choose a password'
            className='w-full p-2 border border-gray-300 rounded'
            onChange={getPass}
         />
      </>
   );
}
