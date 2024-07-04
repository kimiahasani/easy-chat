'use client';
import Header from '@/app/components/header';

import SignInWelcome from './SignInWelcome';
import InputUsername from './InputUsername';
import InputEmail from './InputEmail';
import InputConfirmEmail from './inputConfirmEmail';
import InputPass from './InputPass';
import InputConfirmPass from './InputConfirmpass';
import BtnSignUpSubmit from './BtnSignUpSubmit';
import BtnSignGoogle from './BtnSignGoogle';

export default function SignUpForm() {
   return (
      <>
         <section className='min-h-screen bg-orange-50 flex items-center justify-center'>
           <Header/>
            <section className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
              <SignInWelcome/>
               <form>
                  <section className='space-y-4'>
                    <InputUsername/>
                    <InputEmail/>
                    <InputConfirmEmail/>
                    <InputPass/>
                    <InputConfirmPass/>
                  </section>
                  <BtnSignUpSubmit/>
               </form>
               <section className='mt-6'>
               <BtnSignGoogle/>
               </section>
            </section>
         </section>
      </>
   );
}
