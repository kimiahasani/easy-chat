'use client';

import { actInputConfirmEmail, actVisitLogin } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';
import { btnOutlineClasses } from '@/styles/commonClasses';


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
