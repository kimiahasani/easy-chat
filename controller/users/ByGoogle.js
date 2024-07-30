// import { NextRequest } from 'next/server';
// // import { UserM } from '@/models/schemas/userSchema';
// // import jwt from 'jsonwebtoken';
// // import bcrypt from 'bcrypt';
// // import gBack from '@/utils/gBack';

// import 'dotenv/config';

// export const byGoogle = async (req) => {
//    const dataFromFront = await req.json();
//    // const evn = {
//    //    data: { username: dataFromFront.username },
//    //    accSec: process.env.ACCESS_SEC,
//    //    accTim: process.env.ACCESS_TIME,
//    //    refSec: process.env.REFRESH_SEC,
//    //    refTim: process.env.ACCESS_TIME,
//    // };

//    try {
//       // find user
//       // const findUser = await gBack(dataFromFront.token);
//       // if (!findUser) throw new Error('User not found');
//       // check pass

//       const dataToFront = JSON.stringify({
//          email: findUser.email,
//       });

//       console.log('dataToFront: ', dataToFront);
//       return new Response(dataToFront, {
//          status: 200,
//          headers: { 'my-header': 'asd ok' },
//       });
//    } catch (err) {
//       return new Response(JSON.stringify({ message: 'fail' }), {
//          status: 506,
//          headers: { 'my-header': 'asd fail' },
//       });
//    }
// };

export const byGoogle = async (req) => new Response('fail google');
