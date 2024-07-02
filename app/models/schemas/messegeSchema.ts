import mongoose from 'mongoose';

// Create the Message schema
const messageSchema = new mongoose.Schema({
    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatM',
        require: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserM',
        require: true
    },
    content: String,
    contentType : {type:String,
        require:true
    },
    url : String, 
    
},
{
    autoCreate: true
});

// Export the MessageM schema
export const MessageM = mongoose.model('Message', messageSchema);