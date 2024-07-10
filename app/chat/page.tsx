'use client'
import { RootState } from '@/types/rtkType';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';

const Chat: NextPage = () => {
  const userData = useSelector((st: RootState) => st.users);
  return (
    <>
         <header className=''>
            <h1 className='text-3xl font-bold text-center'>Welcome to the Chat Page</h1>
            <p>Hi {userData.username}</p>
         </header>
      </>
  );
};

export default Chat;