import mongoose from 'mongoose';

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
      messageId: [
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
export const ChatM = mongoose.model('Chat', chatSchema);
