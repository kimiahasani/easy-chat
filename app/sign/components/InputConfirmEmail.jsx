'use client';

import { actInputConfirmEmail } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';
import { LabelInputClasses, inputClasses } from '@/styles/commonClasses';
import { ChangeEvent } from 'react';

export default function InputConfirmEmail() {
   const getConfirmEmail = (e) => {
      const val = e.target.value;
      patcher(actInputConfirmEmail(val));
   };

   return (
      <div>
         <label className={LabelInputClasses}>Confirm email</label>
         <input
            type='email'
            placeholder='Confirm email'
            className={inputClasses}
            onChange={getConfirmEmail}
         />
      </div>
   );
}
