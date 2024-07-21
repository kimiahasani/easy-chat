import { ChatM } from '../../models/schemas/chatSchema.js';

export const prepareChatName = async (userId, partnerId) => {
   // search in DB to find this chat:
   let chatName, chatId;

   try {
      const findChat = await ChatM.findOne({ participants: { $all: [userId, partnerId] } });
      if (!findChat) throw new Error('this chat not found');

      chatName = findChat.participants[0].toString() + findChat.participants[1].toString();
      chatId = findChat._id;
   } catch (err) {
      const newChat = await ChatM.create({
         participants: [userId, partnerId],
         messagesIds: [],
      });
      chatName = userId + partnerId;
      chatId = newChat._id;
   }

   return { chatName, chatId };
};
