'use client';

import { actInputConfirmEmail, actVisitLogin } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';

export default function BtnSignUp() {
   return (
      <>
     <button
        onClick={() => patcher(actVisitLogin())}
        type='button'
        className='w-full bg-blue-600 text-white py-2 rounded mb-2 hover:bg-blue-700'>
            Sign Up
    </button>
      </>
   );
}
