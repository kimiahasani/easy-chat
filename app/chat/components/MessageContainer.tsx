'use client';

import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function MessageContainer({
   list,
}: {
   list: { txt: string; sender: string; time: string }[] | null;
}) {
   // const messageList = useSelector()
   useEffect(() => {}, []);

   socket.on('new message', (message) => {
      // patcher();
   });

   const classFu = (person: string) => {
      const classes =
         person === 'me'
            ? 'flex w-[400] max-w-[30vw] bg-blue-400'
            : 'flex w-[400] max-w-[30vw] bg-salt-200';
      return classes;
   };

   return (
      <section>
         {list ? (
            list.map((el, idx) => (
               <p key={idx} className={classFu(el.sender)}>
                  {el.txt}
               </p>
            ))
         ) : (
            <h3>Say Hi </h3>
         )}
      </section>
   );
}
