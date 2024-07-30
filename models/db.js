import mongoose from 'mongoose';
import 'dotenv/config';


export const dbEC = mongoose.createConnection(String(process.env.DB_URL));
