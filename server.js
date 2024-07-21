import { createServer } from 'node:http'; // http or https
import next from 'next';
import { Server } from 'socket.io';
import { prepareChatName } from './controller/chat/prepareChatName.js';
import { saveMessage } from './controller/messages/saveMessage.js';
import { chatHistory } from './controller/chat/chatHistory.js';
import { getAllPartners } from './controller/chat/getAllPartners.js';

const hostname = 'localhost'; // set localhost like : bymyweb.com
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
   const httpServer = createServer(handler);

   const io = new Server(httpServer);

   io.on('connection', (socket) => {
      socket.on('join pv room', async ({ cId, cName, userId, partnerId }) => {
         // get or create chat info
         if (!cId) {
            const { chatName, chatId } = await prepareChatName(userId, partnerId);
            // send chat info to client
            socket.emit('chat info', { chatName, chatId });
            // create pv chatroom
            socket.join(chatName);
         } else {
            socket.join(cName);
         }
      });

      socket.on('new message', async ({ chatName, payMsg }) => {
         // console.log('message: ', payMsg.text);
         // save message to DB
         const saveMsToDB = await saveMessage(payMsg);
         // broadcast let us to send event to all room member except sender client
         socket.broadcast.to(chatName).emit('message to room', payMsg);
         const { sentAt } = payMsg;
         socket.emit('message confirmation', sentAt);
      });

      socket.on('current message history', async ({ userId, partnerId }) => {
         const history = await chatHistory({ userId, partnerId });
         socket.emit('res current message history', history);
      });

      socket.on('get list partners', async (userId) => {
         // search in DB to find All chats
         const listPartners = await getAllPartners(userId);
         socket.emit('res list partners', listPartners);
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
