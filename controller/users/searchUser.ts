import { NextRequest } from 'next/server';
import { UserM } from '@/models/schemas/userSchema';

process.loadEnvFile();

export const searchUsernameInDB = async (req: NextRequest) => {
   const dataFromFront = await req.json();


   try {
      // find users use regex has a username and options i means doesn't matter upper or lower
      const users = await UserM.find({
         username: { $regex: dataFromFront.text, $options: 'i' },
      })
      //we need username
         .select('username')
         .lean();
      //it's return array if not user throw erro
      if (!users || users.length === 0) throw new Error('User not found');

      const dataToFront = JSON.stringify({
         usernames: users,
      });

      console.log('dataToFront: ', dataToFront);

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
