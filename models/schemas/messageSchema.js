import mongoose from 'mongoose';
import { dbEC } from '../db.js';

// Create the Message schema
const messageSchema = new mongoose.Schema(
   {
      chatId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'ChatM',
         require: true,
      },

      senderId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'UserM',
         require: true,
      },

      sentAt: {
         type: String,
         require: true,
      },

      isPartnerRead: {
         type: Boolean,
         default: false,
      },

      file: {
         fileUrl: String,

         fileType: String,

         fileName: String,
      },

      text: String,
   },
   {
      autoCreate: true,
   }
);

// Export the MessageM schema
export const MessageM = dbEC.model('Message', messageSchema);
