'use client';

import { useState } from 'react';
import { useAddOneUserMutation } from '@/rtk/queries/sign/sign';
import { BtnFillClasses } from '@/styles/commonClasses';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { signUpValidition } from '@/utils/formInputChecker/signUpValidition';

export default function BtnSignUpSubmit() {
   const {
      inputEmail,
      inputConfirmEmail,
      inputPass,
      inputConfirmPass,
      inputUsername,
      errorMsg,
   } = useSelector((st) => st.sign);

   const router = useRouter();
   const [addOneUser, { isError, isLoading, isSuccess }] = useAddOneUserMutation();

   const classes = isSuccess
      ? BtnFillClasses.replace('bg-blue-600', 'bg-green-600')
      : BtnFillClasses;

   const sendDataTo = async () => {
      if (isLoading) return;

      const isValidInputs = signUpValidition(
         inputUsername,
         inputPass,
         inputConfirmPass,
         inputEmail,
         inputConfirmEmail
      );

      if (!isValidInputs) return;

      console.log('triggered');
      const bodyData = {
         email: inputEmail,
         username: inputUsername,
         pass: inputPass,
      };

      addOneUser(bodyData).then(() => router.push('/chat'));
   };

   return (
      <>
         <button className={classes} onClick={() => sendDataTo()}>
            {isLoading ? 'sending...' : 'Sign Up'}
         </button>
         {isError && <p className='text-red-700'>Error To sending Data</p>}
         {errorMsg && <p className='text-red-700'>{errorMsg}</p>}
      </>
   );
}
