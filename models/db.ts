import mongoose from 'mongoose';
process.loadEnvFile();


export const dbEC = mongoose.createConnection(String(process.env.DB_URL));

