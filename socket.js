'use client';

import { io } from 'socket.io-client';
// 'https://easy-chat.onrender.com'
export const socket = io(['http://localhost:3000/', 'https://easy-chat.onrender.com', '*'], {
   reconnection: true,
   reconnectionAttempts: Infinity,
   reconnectionDelay: 1000,
   timeout: 10000,
});
