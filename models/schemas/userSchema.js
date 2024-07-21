import mongoose from 'mongoose';
import { dbEC } from '../db.js';

const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         default: '',
      },

      username: {
         type: String,
         unique: true,
         require: true,
      },

      pass: {
         type: String,
         require: true,
      },

      email: {
         type: String,
         require: true,
         unique: true,
      },

      isOnline: Boolean,

      isReadLastMessage: {
         type: Boolean,
         default: false,
      },

      profileImg: {
         type: String,
         default: '',
      },

      // chats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChatM' }],

      refToken: String,
   },
   {
      // all option for Schema is here
      autoCreate: true,
   }
);

export const UserM = dbEC.model('users', userSchema);
