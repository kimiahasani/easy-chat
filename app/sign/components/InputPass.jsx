'use client';

import { actInputPass } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';
import { LabelInputClasses, inputClasses } from '@/styles/commonClasses';

export default function InputPass() {
   const getPass = (e) => {
      const val = e.target.value;
      patcher(actInputPass(val));
   };
   return (
      <div>
         <label className={LabelInputClasses}>password</label>
         <input
            type='password'
            placeholder='Password'
            className={inputClasses}
            onChange={getPass}
         />
      </div>
   );
}
