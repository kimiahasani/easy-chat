'use client'
import { useState } from 'react';
import { patcher } from '@/rtk/store';
import { actVisitLogin } from '@/rtk/slices/signSlice';
import Header from '@/app/components/header';

export default function LogInForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Logging in with:', username, password);
        // Add your login logic here
    };

    return (
        <section className='min-h-screen flex items-center justify-center  bg-orange-50'>
            <Header/>
      
            <section className='bg-white border border-gray-300 p-8 rounded-md shadow-md w-96'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <section>
                        <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                            Username
                        </label>
                        <section className='mt-1'>
                            <input
                                id='username'
                                name='username'
                                type='text'
                                autoComplete='username'
                                required
                                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </section>
                    </section>

                    <section>
                        <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                            Password
                        </label>
                        <section className='mt-1'>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                autoComplete='current-password'
                                required
                                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </section>
                    </section>

                    <section className='space-y-2'>
                        <button
                            type='submit'
                            className='w-full bg-blue-600 text-white py-2 rounded mb-2 hover:bg-blue-700'
                        >
                            Log In
                        </button>
                        <button
                            onClick={() => patcher(actVisitLogin())}
                            type='button'
                            className='w-full bg-blue-600 text-white py-2 rounded mb-2 hover:bg-blue-700'
                        >
                            Sign Up
                        </button>
                        <section className='mt-6'>
                  <p className='text-center text-gray-600 mb-2'>or</p>
                  <button className='w-full bg-blue-600 text-white py-2 rounded mb-2 hover:bg-blue-700'>
                     Continue with Google
                  </button>
               </section>  
                    </section>
                </form>
            </section>
        </section>
    );
}
