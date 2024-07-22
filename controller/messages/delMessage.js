import { ChatM } from '../../models/schemas/chatSchema.js';
import { MessageM } from '../../models/schemas/messageSchema.js';

export const delMessage = async ({ sentAt, chatId }) => {
   console.log('start del message');
   try {
      const msgRemoved = await MessageM.findOneAndDelete({ sentAt });
      console.log('msgRemoved : ', msgRemoved._id, msgRemoved.chatId);
      const remMsgFromChat = await ChatM.findByIdAndUpdate(
         msgRemoved.chatId,
         {
            $pull: { messagesIds: msgRemoved._id },
         },
         { new: true }
      );

      console.log('delet success');
      return true;
   } catch (err) {
      console.log('del fail');
      return false;
   }
};
