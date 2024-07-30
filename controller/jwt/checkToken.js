import jwt from 'jsonwebtoken';

import 'dotenv/config';

// check access token:
export function checkAccessToken(accessToken, accessSecret) {
   return jwt.verify(accessToken, accessSecret, (err, duc) => {
      if (err) {
         // console.log('token ok');
         return false;
      } else {
         // console.log('token ok');
         return true;
      }
   });
}
