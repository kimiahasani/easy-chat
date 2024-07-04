'use client'
import { useState } from 'react';
import { patcher } from '@/rtk/store';
import { actVisitLogin } from '@/rtk/slices/signSlice';
import Header from '@/app/components/header';
import InputUsername from './InputUsername';
import InputPass from './InputPass';
import BtnSignUp from './BtnSignUp';
import BtnSignGoogle from './BtnSignGoogle';

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
                            <InputUsername/>
                    </section>

                    <section>
                        <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                            Password
                        </label>
                        <InputPass/>
                    </section>

                    <section className='space-y-2'>
                        <button
                            type='submit'
                            className='w-full bg-blue-600 text-white py-2 rounded mb-2 hover:bg-blue-700'
                        >
                            Log In
                        </button>
                        <BtnSignUp/>
                        <BtnSignGoogle/>
                    </section>
                </form>
            </section>
        </section>
    );
}
