'use client';

import { io } from 'socket.io-client';

export const socket = io('https://easy-chat-g1hu.onrender.com', {
   reconnection: true,
   reconnectionAttempts: Infinity,
   reconnectionDelay: 1000,
   timeout: 10000,
});
