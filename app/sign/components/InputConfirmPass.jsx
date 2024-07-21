'use client';

import { actInputConfirmPass } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';
import { LabelInputClasses, inputClasses } from '@/styles/commonClasses';
import { ChangeEvent } from 'react';

export default function InputConfirmPass() {
   const getConfirmPass = (e) => {
      const val = e.target.value;
      patcher(actInputConfirmPass(val));
   };
   return (
      <div>
         <label className={LabelInputClasses}>Confirm password</label>
         <input
            type='password'
            placeholder='Confirm password'
            className={inputClasses}
            onChange={getConfirmPass}
         />
      </div>
   );
}
