'use client';

import { actInputUsername } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';
import { LabelInputClasses, inputClasses } from '@/styles/commonClasses';
import { ChangeEvent } from 'react';

export default function InputUsername() {
   const getUsername = (e) => {
      const val = e.target.value;
      patcher(actInputUsername(val));
   };

   return (
      <div>
         <label className={LabelInputClasses}>Username</label>
         <input
            type='text'
            placeholder='Username'
            className={inputClasses}
            onChange={getUsername}
         />
      </div>
   );
}
