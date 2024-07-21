'use client';

import { useSelector } from 'react-redux';
import Search from '../components/Search';
import { socket } from '@/socket';
import ListOfPartnersChat from '../components/ListOfPartnersChat';
import { useEffect } from 'react';

export default function ChatListPage() {
   const isSocketConnected = useSelector((st) => st.socketConnection.isConnected);
   const userId = useSelector((st) => st.users._id);

   useEffect(() => {
      socket.emit('get list partners', { userId });
   }, []);

   return (
      <>
         {isSocketConnected && (
            <section>
               <Search />
               <ListOfPartnersChat />
            </section>
         )}
      </>
   );
}
