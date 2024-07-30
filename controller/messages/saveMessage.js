import { ChatM } from '../../models/schemas/chatSchema.js';
import { MessageM } from '../../models/schemas/messageSchema.js';
import { saveFile } from '../../utils/saveFiles.js';

export const saveMessage = async (msg) => {
   console.log('Start save message...');
   const { chatId, senderId, file, text, sentAt } = msg;
   if (!file && !text) return false;

   let fileUrl = '',
      fileType = '',
      fileName = '';

   if (file.fileName) {
      // console.log('please file: ', file);
      fileUrl = await saveFile(file);
      fileType = file.fileType;
      fileName = file.fileName;
   }

   try {
      const newMsg = await MessageM.create({
         text,
         chatId,
         senderId,
         sentAt,
         file: { fileUrl, fileType, fileName },
      });

      const chatUpdate = await ChatM.findByIdAndUpdate(
         chatId,
         { $push: { messagesIds: newMsg._id } },
         { new: true }
      );
   } catch (err) {
      fileName = '';
      fileUrl = '';
      fileType = '';
   }
   return { fileName, fileUrl, fileType };
};
