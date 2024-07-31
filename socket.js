'use client';

import { io } from 'socket.io-client';

export const socket = io('https://easy-chat-v1-0-1.onrender.com', {
   reconnection: true,
   reconnectionAttempts: Infinity,
   reconnectionDelay: 1000,
   timeout: 10000,
});
