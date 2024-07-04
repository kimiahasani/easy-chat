'use client';

import { useSignUpMutation } from '@/rtk/queries/sign/signUp';
import { RootState } from '@/types/rtkTypes';
import { useSelector } from 'react-redux';

export default function BtnSignUpSubmit() {
   const signUpData = useSelector((st: RootState) => st.sign);
   const [signUp, { isError, isLoading, isSuccess }] = useSignUpMutation();
   const bg = isSuccess ? ' bg-green-600' : 'bg-blue-600';
   const classes = `w-full ${bg} text-white py-2 rounded mt-6 hover:bg-blue-700`;

   const sendDataTo = () => {
      const bodyData = {
         email: signUpData.inputEmail,
         username: signUpData.inputUsername,
         pass: signUpData.inputPass,
      };
      signUp(bodyData);
   };

   return (
      <>
         <button className={classes} onClick={() => !isLoading && sendDataTo}>
            {isLoading ? 'sending...' : 'Sign Up'}
         </button>
         {isError && <p>Error To sending Data</p>}
      </>
   );
}
