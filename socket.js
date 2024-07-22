'use client';

import { io } from 'socket.io-client';

export const socket = io('http://localhost:3000', {
   reconnection: true,
   reconnectionAttempts: Infinity,
   reconnectionDelay: 1000,
   timeout: 10000,
});
