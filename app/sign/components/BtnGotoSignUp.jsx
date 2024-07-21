'use client';

import { btnOutlineClasses } from '@/styles/commonClasses';
import { actInputConfirmEmail, actVisitLogin } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';

export default function BtnGotoSignUp() {
   return (
      <>
         <button
            onClick={() => patcher(actVisitLogin())}
            type='button'
            className={btnOutlineClasses}
         >
            Sign Up
         </button>
      </>
   );
}
