import { UserM } from '@/models/schemas/userSchema';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';

import 'dotenv/config';

export const addUser = async (req) => {
   const dataFromFront = await req.json();

   // Auto create sault and do hash
   const hashItem = bcrypt.hashSync(dataFromFront.pass, 10);
   dataFromFront.pass = hashItem;

   try {
      const newUser = new UserM(dataFromFront);

      // ADD JWT:
      const accessToken = jwt.sign({ username: dataFromFront.username }, String(process.env.ACCESS_SEC), {
         expiresIn: String(process.env.ACCESS_TIME),
      });
      const refreshToken = jwt.sign({ username: dataFromFront.username }, String(process.env.REFRESH_SEC), {
         expiresIn: String(process.env.REFRESH_TIME),
      });
      // save data
      newUser.refToken = refreshToken;
      await newUser.save();

      const dataToFront = JSON.stringify({
         userId: newUser._id,
         token: accessToken,
         refToken: refreshToken,
         message: 'ok',
      });

      cookies().set('accessToken', accessToken);
      cookies().set('refreshToken', refreshToken);

      return new Response(dataToFront, {
         status: 200,
         headers: { 'my-header': 'asd ok' },
      });
   } catch (err) {
      return new Response(JSON.stringify({ message: 'fail' }), {
         status: 500,
         headers: { 'my-header': 'asd fail' },
      });
   }
};
