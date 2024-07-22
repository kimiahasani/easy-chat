import { MessageM } from '../../models/schemas/messageSchema.js';

export const updateMessage = async ({ sentAt, text }) => {
   try {
      await MessageM.findOneAndUpdate({ sentAt }, { text });
      console.log('update success');
      return true;
   } catch (err) {
      console.log('update fail');
      return false;
   }
};
