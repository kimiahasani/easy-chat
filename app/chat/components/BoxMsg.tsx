'use client';

import { selectAllMessagesCR } from '@/rtk/slices/messagesSlice';
import { socket } from '@/socket';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function BoxMsg() {
   const allMessage = useSelector(selectAllMessagesCR);

   socket.on('message to room', (msg) => {
      // console.log('Message recive from Server to room: ', msg);
   });

   return (
      <section>
         {allMessage.map((el, idx) => (
            <p key={idx}>
               {el.text}
               <span>{el.time}</span>
            </p>
         ))}
      </section>
   );
}
