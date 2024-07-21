import mongoose from 'mongoose';
import { dbEC } from '../db.js';

// Create the Chats schema
const chatSchema = new mongoose.Schema(
   {
      participants: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserM',
            require: true,
         },
      ],

      messagesIds: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MessageM',
         },
      ],
   },
   {
      autoCreate: true,
   }
);

// Export the ChatM schema
export const ChatM = dbEC.model('Chat', chatSchema);
