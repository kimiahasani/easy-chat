import { MessageM } from '../../models/schemas/messageSchema.js';

export const seenMessage = async ({ sentAt, chatId }) => {
   try {
      const message = await MessageM.findOneAndUpdate({ sentAt, chatId }, { isPartnerRead: true }, { new: true });
      console.log('update success', message);
      return message;
   } catch (err) {
      console.log('update fail', err);
      return null;
   }
};