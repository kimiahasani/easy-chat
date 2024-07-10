'use client';

import { socket } from "@/socket";
import { FormEvent, useEffect, useState } from "react";

export default function Home() {
   const [isConnected, setIsConnected] = useState(false);
   const [userId, setUserId] = useState('');
   const [recipientId, setRecipientId] = useState('');
   const [message, setMessage] = useState('');
   const [chatHistory, setChatHistory] = useState<Array<{ content: string; from: string }>>(
      []
   );

   useEffect(() => {
      function onConnect() {
         setIsConnected(true);
      }

      function onDisconnect() {
         setIsConnected(false);
      }

      function onPrivateMessage(message: { content: string; from: string }) {
         setChatHistory((prev) => [...prev, message]);
      }

      socket.on('connect', onConnect);
      socket.on('disconnect', onDisconnect);
      socket.on('private message', onPrivateMessage);

      return () => {
         socket.off('connect', onConnect);
         socket.off('disconnect', onDisconnect);
         socket.off('private message', onPrivateMessage);
      };
   }, []);

   const joinRoom = () => {
      if (userId) {
         socket.emit('join room', userId);
      }
   };

   const sendPrivateMessage = (e: FormEvent) => {
      e.preventDefault();
      if (message && recipientId) {
         socket.emit('private message', {
            content: message,
            to: recipientId,
         });
         setChatHistory((prev) => [...prev, { content: message, from: 'Me' }]);
         setMessage('');
      }
   };

   return (
      <div>
         <p>Status: {isConnected ? 'connected' : 'disconnected'}</p>
         <div>
            <input
               value={userId}
               onChange={(e) => setUserId(e.target.value)}
               placeholder='Your User ID'
            />
            <button onClick={joinRoom}>Join Room</button>
         </div>
         <div>
            <input
               value={recipientId}
               onChange={(e) => setRecipientId(e.target.value)}
               placeholder='Recipient User ID'
            />
         </div>
         <form onSubmit={sendPrivateMessage}>
            <input
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               placeholder='Type your message'
            />
            <button type='submit'>Send</button>
         </form>
         <div>
            {chatHistory.map((msg, index) => (
               <p key={index}>
                  {msg.from}: {msg.content}
               </p>
            ))}
         </div>
      </div>
   );
}
