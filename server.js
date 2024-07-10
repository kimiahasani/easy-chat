import { createServer } from 'node:http';
import next from 'next';
import { Server } from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
   const httpServer = createServer(handler);
   const io = new Server(httpServer);

   io.on('connection', (socket) => {
      console.log('A user connected');

      // کاربر به اتاق خود ملحق می‌شود
      socket.on('join room', (userId) => {
         socket.join(userId);
         console.log(`User ${userId} joined their room`);
      });

      // ارسال پیام خصوصی
      socket.on('private message', ({ content, to }) => {
         io.to(to).emit('private message', {
            content,
            from: socket.id,
         });
      });

      socket.on('disconnect', () => {
         console.log('A user disconnected');
      });
   });

   httpServer
      .once('error', (err) => {
         console.error(err);
         process.exit(1);
      })
      .listen(port, () => {
         console.log(`> Ready on http://${hostname}:${port}`);
      });
});
