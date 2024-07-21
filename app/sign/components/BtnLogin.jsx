'use client';

import { useLoginUserMutation } from '@/rtk/queries/sign/sign';
import { BtnFillClasses } from '@/styles/commonClasses';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function BtnLogin() {
   //
   const signUpData = useSelector((st) => st.sign);
   const userData = useSelector((st) => st.users);
   //

   const router = useRouter();
   const [loginUser, { isError, isLoading, isSuccess }] = useLoginUserMutation();

   const classes = isSuccess
      ? BtnFillClasses.replace('bg-blue-600', 'bg-green-600')
      : BtnFillClasses;

   const sendDataTo = async () => {
      if (isLoading) return;

      console.log('triggered login');
      const bodyData = {
         username: signUpData.inputUsername,
         pass: signUpData.inputPass,
      };

      loginUser(bodyData).then(() => router.push('/chat'));
   };

   return (
      <>
         <button onClick={sendDataTo} className={classes}>
            Log In
         </button>
         {isError && <p className='text-red-700'>Error To sending Data</p>}
      </>
   );
}
