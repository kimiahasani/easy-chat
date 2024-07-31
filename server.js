import { createServer } from 'node:http'; // http or https
import next from 'next';
import { Server } from 'socket.io';
import { prepareChatName } from './controller/chat/prepareChatName.js';
import { saveMessage } from './controller/messages/saveMessage.js';
import { chatHistory } from './controller/chat/chatHistory.js';
import { getAllPartners } from './controller/chat/getAllPartners.js';
import { delMessage } from './controller/messages/delMessage.js';
import { updateMessage } from './controller/messages/updateMessage.js';
import { seenMessage } from './controller/messages/seenMessage.js';
import { askToAi } from './controller/ai/aslAi.js';

const hostname = 'localhost'; // set localhost like : bymyweb.com
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
   const httpServer = createServer(handler);

   const io = new Server(httpServer, {
      cors: {
         //https://easy-chat-g1hu.onrender.com
         origin: 'https://easy-chat.onrender.com',
         methods: ['GET', 'POST', '*'],
         credentials: true,
      },
   });
   let onlineUsers = {};

   io.on('connection', (socket) => {
      socket.on('save me as online user', (userId) => {
         onlineUsers[`${userId}`] = socket.id;
      });

      socket.on('join pv room', async ({ cId, cName, userId, partnerId }) => {
         // add user to online member
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
         const { fileName, fileUrl, fileType } = await saveMessage(payMsg);

         const updateMsg = { ...payMsg, file: { fileName, fileUrl, fileType } };
         console.log('updateMsg : ', updateMsg);
         // broadcast let us to send event to all room member except sender client
         socket.broadcast.to(chatName).emit('message to room', updateMsg);
         // console.log('onlineUsers: ', onlineUsers);
         // message to update partner list for partner
         // we need emit sender info partner
         const partner = onlineUsers[`${payMsg.partnerId}`];
         if (partner) {
            const dataToSend = {
               text: payMsg.text,
               _id: payMsg.senderId,
               name: payMsg.name,
               username: payMsg.username,
               profileImg: payMsg.profileImg,
               sentAt: payMsg.sentAt,
            };
            // console.log('payMsg  :', payMsg);
            socket.to(partner).emit('to update partner list', dataToSend);
         }
         // socket.emit('message confirmation', 'sentAt');
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

      socket.on('edit message', async ({ sentAt, text, chatName }) => {
         // edit in DB
         const updateSuccess = await updateMessage({ sentAt, text });
         if (!updateSuccess) return;
         // send data to chatroom to update
         io.to(chatName).emit('edit success notification', { sentTime: sentAt, text });
      });

      socket.on('delete message', async ({ sentAt, chatId, chatName }) => {
         // delete in DB
         const delMsg = await delMessage({ sentAt, chatId });
         if (!delMsg) return;

         io.to(chatName).emit('del success notification', sentAt);
         // socket.emit('del success notification', sentAt); // Notify the sender as well
      });

      socket.on('seen message', async ({ sentAt, chatId }) => {
         const seenMsg = await seenMessage({ sentAt, chatId });
         if (!seenMsg) return;
         const userSender = onlineUsers[`${seenMsg.senderId}`];
         if (!userSender) return;

         socket.to(userSender).emit('seen message notification', { sentTime: sentAt });
      });

      socket.on('send prompt to ai', async ({ myPrompt, userId }) => {
         const dataFromAi = await askToAi(myPrompt);
         if (!dataFromAi) return;

         const myself = onlineUsers[`${userId}`];
         if (!myself) return;
         console.log('date ok in back');
         io.to(myself).emit('res from Ai', { dataFromAi, sender: 'ai' });
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
