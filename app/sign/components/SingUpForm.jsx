'use client';

import SignInWelcom from './SignInWelcom';
import InputEmail from './InputEmail';
import InputConfirmEmail from './InputConfirmEmail';
import InputPass from './InputPass';
import InputConfirmPass from './InputConfirmPass';
import BtnSignUpSubmit from './BtnSignUpSubmit';
import InputUsername from './InputUsername';

import { signFormClasses, signFormContainerClasses } from '@/styles/commonClasses';

export default function SingUpForm() {
   return (
      <section className={signFormContainerClasses}>
         <SignInWelcom />
         <section className={signFormClasses}>
            <InputUsername />
            <InputEmail />
            <InputConfirmEmail />
            <InputPass />
            <InputConfirmPass />
            <div>
               <BtnSignUpSubmit />
            </div>
         </section>
      </section>
   );
}
