'use client';

import { actInputConfirmPass } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';
import { ChangeEvent } from 'react';

export default function InputConfirmPass() {
   const getConfirmPass = (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      patcher(actInputConfirmPass(val));
   };
   return (
      <>
         <input
            type='password'
            placeholder='Confirm password'
            className='w-full p-2 border border-gray-300 rounded'
            onChange={getConfirmPass}
         />
      </>
   );
}
