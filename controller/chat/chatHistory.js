import { ChatM } from '../../models/schemas/chatSchema.js';
import { MessageM } from '../../models/schemas/messageSchema.js';

export const chatHistory = async ({ userId, partnerId }) => {
   let chatId = '',
      chatName = '',
      allMessages = [];

   try {
      const findChat = await ChatM.findOne({ participants: { $all: [partnerId, userId] } });
      if (!findChat) throw new Error('this chat not found');

      chatName = findChat.participants[0].toString() + findChat.participants[1].toString();
      chatId = findChat._id;

      const msNum = findChat.messagesIds.length;
      if (msNum === 0) throw new Error('no message in chat');

      // get messages
      const messagesArr = await MessageM.find({ _id: { $in: [...findChat.messagesIds] } });
      allMessages.push(...messagesArr);

      return { chatName, chatId, allMessages };
   } catch (err) {
      return { chatName, chatId, allMessages };
   }
};
