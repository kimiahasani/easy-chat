import { ChatM } from '../../models/schemas/chatSchema.js';
import { MessageM } from '../../models/schemas/messageSchema.js';

export const saveMessage = async (msg) => {
   const { chatId, senderId, file, text, sentAt } = msg;
   if (!file && !text) return false;

   let fileUrl = '',
      fileFormat = '';
   if (file) {
      // save file and get url of that
      // fill fileUrl
      // fill fileFormat
   }
   try {
      const newMsg = await MessageM.create({
         text,
         chatId,
         senderId,
         sentAt,
         fileUrl,
         fileFormat,
      });

      const chatUpdate = await ChatM.findByIdAndUpdate(
         chatId,
         { $push: { messagesIds: newMsg._id } },
         { new: true }
      );
   } catch (err) {
      return false;
   }
};
