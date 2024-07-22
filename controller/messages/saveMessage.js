import { ChatM } from '../../models/schemas/chatSchema.js';
import { MessageM } from '../../models/schemas/messageSchema.js';
import { saveFile } from '../../utils/saveFiles.js';

export const saveMessage = async (msg) => {
   console.log('Start save message...');
   const { chatId, senderId, file, text, sentAt } = msg;
   if (!file && !text) return false;

   let fileUrl = '',
      fileName = '';

   if (file) {
      const fileAddress = saveFile(file);
      fileUrl = fileAddress.fileUrl;
      fileName = fileAddress.fileName;
   }

   try {
      const newMsg = await MessageM.create({
         text,
         chatId,
         senderId,
         sentAt,
         fileUrl,
         fileName,
      });

      const chatUpdate = await ChatM.findByIdAndUpdate(
         chatId,
         { $push: { messagesIds: newMsg._id } },
         { new: true }
      );
   } catch (err) {
      fileName = '';
      fileUrl = '';
   }
   return { fileName, fileUrl };
};
