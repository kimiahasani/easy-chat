'use client';

import useSocketIo from '@/hooks/useSocket';
import { NextPage } from 'next';

const Chat: NextPage = () => {
   useSocketIo();

   return (
      <>
         <header className=''>
            <h1 className='text-3xl font-bold'>Welcome to the Chat Page</h1>
         </header>
      </>
   );
};

export default Chat;
