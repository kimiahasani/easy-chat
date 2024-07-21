import { NextRequest } from 'next/server';
import { UserM } from '@/models/schemas/userSchema';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

process.loadEnvFile();

export const searchUsernameInDB = async (req) => {
   const dataFromFront = await req.json();

   // check Jwt
   // jwt.verify(dataFromFront.token, process.env.ACCESS_SEC, (err: Error, duc: any) => {
   //    if (err) {
   //       // If not verified do sth
   //    } else {
   //       // If verified do sth
   //    }
   // });

   try {
      // find users
      const users = await UserM.find({
         username: { $regex: dataFromFront.text, $options: 'i' },
      })
         .select('username profileImg name')
         .lean()
         .limit(5);

      if (!users || users.length === 0) throw new Error('User not found');

      const dataToFront = JSON.stringify(users);

      console.log('SendDataToFront: ', dataToFront);

      return new Response(dataToFront, {
         status: 200,
         headers: { 'my-header': 'asd ok' },
      });
   } catch (err) {
      return new Response(JSON.stringify({ message: 'fail' }), {
         status: 506,
         headers: { 'my-header': 'asd fail' },
      });
   }
};
