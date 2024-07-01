import mongoose from 'mongoose';
import { dbEC } from '../db';


// Create the User schema
const userSchema= new mongoose.Schema({
    name: String, 
    username:{
        type:String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, 
    chats:[{type: mongoose.Schema.Types.ObjectId, ref:'ChatM'}],
    refToken:String
},
{
    autoCreate:true
});

//we use this model to change DB according above schema
export const UserM = dbEC.model('users', userSchema);