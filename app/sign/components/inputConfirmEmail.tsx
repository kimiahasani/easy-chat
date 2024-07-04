'use client';

import { actInputConfirmEmail } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';
import { ChangeEvent } from 'react';

export default function InputConfirmEmail() {
   const getConfirmEmail = (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      patcher(actInputConfirmEmail(val));
   };

   return (
      <>
         <input
            type='email'
            placeholder='Confirm email'
            className='w-full p-2 border border-gray-300 rounded'
            onChange={getConfirmEmail}
         />
      </>
   );
}
