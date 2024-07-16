'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/types/rtkType';

import InputSender from '../components/InputSender';
import BtnSendMessage from '../components/BtnSendMessage';
import PartnerHeader from '../components/PartnerHeader';
import BoxMsg from '../components/BoxMsg';

export default function PageChatContent() {
   const isSocketConnected = useSelector((st: RootState) => st.socketConnection.isConnected);
   if (!isSocketConnected) return null;

   return (
      <section>
         <PartnerHeader />
         <BoxMsg />
         <section className='flex items-center gap-4 p-4'>
            <InputSender />
            <BtnSendMessage />
         </section>
      </section>
   );
}
