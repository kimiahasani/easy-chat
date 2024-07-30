'use client';

import useSocketIo from '@/hooks/useSocket';
import { useSelector } from 'react-redux';

const Chat = () => {
   useSocketIo();
   const username = useSelector((st) => st.users.username);

   return (
      <>
         <header className='bg-gray-100 p-4'>
            <h1 className='text-3xl font-bold text-center p-7'>
               Welcome to the Chat Page {username}
            </h1>
         </header>
      </>
   );
};

export default Chat;
