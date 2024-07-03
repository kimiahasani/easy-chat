'use client';
import Header from '@/app/components/header';
import { actVisitLogin } from '@/rtk/slices/signSlice';
import { patcher } from '@/rtk/store';

export default function SignUpForm() {
   return (
      <>
         <section className='min-h-screen bg-orange-50 flex items-center justify-center'>
           <Header/>
            <section className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
               <h2 className='text-3xl font-bold text-center mb-6 text-purple-600'>
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

               <form>
                  <section className='space-y-4'>
                     <input
                        type='email'
                        placeholder='Email'
                        className='w-full p-2 border border-gray-300 rounded'
                     />
                     <input
                        type='email'
                        placeholder='Confirm email'
                        className='w-full p-2 border border-gray-300 rounded'
                     />
                     <input
                        type='password'
                        placeholder='Choose a password'
                        className='w-full p-2 border border-gray-300 rounded'
                     />
                     <input
                        type='password'
                        placeholder='Confirm password'
                        className='w-full p-2 border border-gray-300 rounded'
                     />
                  </section>

                  <button
                     type='submit'
                     className='w-full bg-blue-600 text-white py-2 rounded mt-6 hover:bg-blue-700'
                  >
                     Sign Up
                  </button>
               </form>

               <section className='mt-6'>
                  <p className='text-center text-gray-600 mb-2'>or</p>
                  <button className='w-full bg-blue-600 text-white py-2 rounded mb-2 hover:bg-blue-700'>
                     Continue with Google
                  </button>
               </section>
            </section>
         </section>
      </>
   );
}
