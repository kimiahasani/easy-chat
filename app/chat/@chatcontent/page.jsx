'use client';

import { useSelector } from 'react-redux';

import InputSender from '../components/InputSender';
import BtnSendMessage from '../components/BtnSendMessage';
import PartnerHeader from '../components/PartnerHeader';
import BoxMsg from '../components/BoxMsg';

export default function PageChatContent() {
   const isGettingMessage = useSelector((st) => st.currentChat.loading);

   const isSocketConnected = useSelector((st) => st.socketConnection.isConnected);
   if (!isSocketConnected) return null;

   return (
      <section>
         <PartnerHeader />
         <BoxMsg />
         <section className='flex items-center gap-4 p-4'>
            <InputSender />
            {!isGettingMessage && <BtnSendMessage />}
         </section>
      </section>
   );
}
