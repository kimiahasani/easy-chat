'use client';

import { actInputEmail } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';
import { ChangeEvent } from 'react';

export default function InputEmail() {
   const getEmail = (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      patcher(actInputEmail(val));
   };

   return (
      <>
         <input
            type='email'
            placeholder='Email'
            className='w-full p-2 border border-gray-300 rounded'
            onChange={getEmail}
         />
      </>
   );
}
