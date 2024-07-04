'use client';

import { actInputUsername } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';
import { ChangeEvent } from 'react';

export default function InputUsername() {
   const getUsername = (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      patcher(actInputUsername(val));
   };

   return (
      <>
         <input
            type='text'
            placeholder='Username'
            className='w-full p-2 border border-gray-300 rounded'
            onChange={getUsername}
         />
      </>
   );
}
