import { NextRequest } from 'next/server';
import { UserM } from '@/models/schemas/userSchema';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

process.loadEnvFile();

export const loginUser = async (req) => {
   const dataFromFront = await req.json();

   const evn = {
      data: { username: dataFromFront.username },
      accSec: process.env.ACCESS_SEC,
      accTim: process.env.ACCESS_TIME,
      refSec: process.env.REFRESH_SEC,
      refTim: process.env.ACCESS_TIME,
   };

   try {
      // find user
      const findUser = await UserM.findOne({ username: dataFromFront.username });
      if (!findUser) throw new Error('User not found');
      // check pass
      const match = bcrypt.compareSync(dataFromFront.pass, findUser.pass);
      if (!match) throw new Error('Password not correct');

      // ADD JWT:
      const accessToken = jwt.sign(evn.data, evn.accSec, { expiresIn: evn.accTim });
      const refreshToken = jwt.sign(evn.data, evn.refSec, { expiresIn: evn.refTim });

      // save data
      findUser.refToken = refreshToken;
      await findUser.save();

      const dataToFront = JSON.stringify({
         _id: findUser._id,
         token: accessToken,
         refToken: refreshToken,
         message: 'ok',
      });

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
