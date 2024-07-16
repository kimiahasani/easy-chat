'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/types/rtkType';
import Search from '../components/Search';

export default function ChatList() {
   const isSocketConnected = useSelector((st: RootState) => st.socketConnection.isConnected);

   return (
      <>
         {isSocketConnected && (
            <section>
               <Search />
               <p>all chat and unread</p>
               <p>list chats</p>
            </section>
         )}
      </>
   );
}
