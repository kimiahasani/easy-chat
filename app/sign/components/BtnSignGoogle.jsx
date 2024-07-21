'use client';

import { BASE_URL } from '@/envClient';
import { btnOutlineClasses } from '@/styles/commonClasses';
// import { initiateGoogleLogin } from '@/utils/googleAuth';
import { useEffect } from 'react';

export default function BtnSignGoogle() {
   const googleHandel = async () => {
      // const gData = await gFront(
      //    BASE_URL,
      //    '/api/user/google',
      //    '705100051931-0oi86o7kjk9hlnmh3ui43vmr7q89j1qd.apps.googleusercontent.com'
      // );

      console.log('Final data is: ', gData);
   };

   // useEffect(() => {
   //    const handleMessage = (event) => {
   //       console.log('event.data :', event.data);
   //       if (event.data.type === 'GOOGLE_LOGIN_SUCCESS') {
   //          console.log('Login successful:', event.data.data);
   //          // Handle successful login (e.g., update UI, redirect)
   //       } else if (event.data.type === 'GOOGLE_LOGIN_ERROR') {
   //          console.error('Login error:', event.data.error);
   //          // Handle login error
   //       }
   //    };

   //    window.addEventListener('message', handleMessage);
   //    return () => window.removeEventListener('message', handleMessage);
   // }, []);

   const handleGoogleLogin = () => {
      initiateGoogleLogin(
         '705100051931-0oi86o7kjk9hlnmh3ui43vmr7q89j1qd.apps.googleusercontent.com',
         BASE_URL
         // `${window.location.origin}/auth/google/callback`
      );
   };
   return (
      <section>
         <button onClick={googleHandel} className={btnOutlineClasses}>
            Continue with Google
         </button>
      </section>
   );
}
