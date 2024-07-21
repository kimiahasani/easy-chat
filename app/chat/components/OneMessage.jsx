'use client';
import { socket } from '@/socket';

export default function OneMessage({ item }) {
   const { text, sendAt, _id, chatId } = item;

   const editMessage = () => {
      socket.emit('edit message', { _id, chatId });
   };

   const delMessage = () => {
      socket.emit('delete message', { _id, chatId });
   };

   return (
      <section>
         <p>{text}</p>
         <div className='flex justify-between'>
            <h6>{sendAt}</h6>
            <button onClick={editMessage}>edit</button>
            <button onClick={delMessage}>delete</button>
         </div>
      </section>
   );
}
