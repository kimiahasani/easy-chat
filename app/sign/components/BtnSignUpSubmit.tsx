'use client';

import { useAddOneUserMutation } from '@/rtk/queries/sign/sign';
import { BtnFillClasses } from '@/styles/commonClasses';
import { RootState } from '@/types/rtkType';
import { useSelector } from 'react-redux';

export default function BtnSignUpSubmit() {
   const signUpData = useSelector((st: RootState) => st.sign);
   const userData = useSelector((st: RootState) => st.users);

   const [addOneUser, { isError, isLoading, isSuccess }] = useAddOneUserMutation();

   const classes = isSuccess
      ? BtnFillClasses.replace('bg-blue-600', 'bg-green-600')
      : BtnFillClasses;

   const sendDataTo = async () => {
      if (isLoading) return;

      console.log('triggered');
      const bodyData = {
         email: signUpData.inputEmail,
         username: signUpData.inputUsername,
         pass: signUpData.inputPass,
      };
      addOneUser(bodyData);
   };

   return (
      <>
         <button className={classes} onClick={sendDataTo}>
            {isLoading ? 'sending...' : 'Sign Up'}
         </button>
         <p>{userData.token}</p>
         {isError && <p>Error To sending Data</p>}
      </>
   );
}
