'use client';

import { actVisitLogin } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';

export default function SignInWelcome() {
   return (
      <>
         <h2 className='text-3xl font-bold text-center mb-6  text-purple-600'>
            Sign Up to EasyChat
         </h2>
         <p className='text-center mb-6 text-gray-600'>
            Already have an account?
            <strong
               onClick={() => patcher(actVisitLogin())}
               className='text-blue-600 hover:underline'
            >
               Log In
            </strong>
         </p>
      </>
   );
}
