import mongoose from 'mongoose';

// Create the Chats schema
const chatSchema = new mongoose.Schema(
   {
      participants: [
         {
            partner: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'UserM',
               require: true,
            },
            startChat: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'UserM',
               require: true,
            },
         },
      ],
      messageIds: [
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
