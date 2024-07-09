'use client';

import { useLoginUserMutation } from '@/rtk/queries/sign/sign';
import { BtnFillClasses } from '@/styles/commonClasses';
import { RootState } from '@/types/rtkType';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function BtnLogin() {
   const router = useRouter()
   const signUpData = useSelector((st: RootState) => st.sign);
   const userData = useSelector((st: RootState) => st.users);

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
      //after login success got to chat page
      loginUser(bodyData).then(()=>router.push("/chat"));
     
   };
   return (
      <>
         <button onClick={sendDataTo} className={classes}>
            Log In
         </button>
         {/* <p>{userData.email}</p> */}
         {isError && <p>Error To sending Data</p>}
         {isSuccess && <p>Thant You for logIn</p>}
      </>
   );
}
