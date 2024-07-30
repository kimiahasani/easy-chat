'use client';

import { useLoginUserMutation } from '@/rtk/queries/sign/sign';
import { BtnFillClasses } from '@/styles/commonClasses';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { loginValidition } from '@/utils/formInputChecker/loginValidition';

export default function BtnLogin() {
   //
   const { inputUsername, inputPass, errorMsg } = useSelector((st) => st.sign);
   //

   const router = useRouter();
   const [loginUser, { isError, isLoading, isSuccess }] = useLoginUserMutation();

   const classes = isSuccess
      ? BtnFillClasses.replace('bg-blue-600', 'bg-green-600')
      : BtnFillClasses;

   const sendDataTo = async () => {
      if (isLoading) return;

      const isValidInputs = loginValidition(inputUsername, inputPass);
      if (!isValidInputs) return;

      // console.log('triggered login');
      const bodyData = {
         username: inputUsername,
         pass: inputPass,
      };

      loginUser(bodyData)
         .unwrap()
         .then((res) => res && router.push('/chat'));
   };

   return (
      <>
         <button onClick={sendDataTo} className={classes}>
            Log In
         </button>
         {isError && <p className='text-red-700'>Error To sending Data</p>}
         {errorMsg && <p className='text-red-700'>{errorMsg}</p>}
      </>
   );
}
