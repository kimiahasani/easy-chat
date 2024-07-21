'use client';

import { actInputEmail } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';
import { LabelInputClasses, inputClasses } from '@/styles/commonClasses';
import { ChangeEvent } from 'react';

export default function InputEmail() {
   const getEmail = (e) => {
      const val = e.target.value;
      patcher(actInputEmail(val));
   };

   return (
      <div>
         <label className={LabelInputClasses}>Email</label>
         <input
            type='email'
            placeholder='Email'
            className={inputClasses}
            onChange={getEmail}
         />
      </div>
   );
}
