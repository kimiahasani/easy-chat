'use client'
import { io, Socket } from 'socket.io-client'

// Create and export a socket instance
const URL = 'http://localhost:3000'; // adjust this to match your server URL
export const socket: Socket = io(URL);