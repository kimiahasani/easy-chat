'use client';

import { patcher } from '@/rtk/store';
import { actSignError } from '@/rtk/slices/signSlice';
import { checkInputUsername } from './checkInputUsername.js';
import { checkInputPass } from './checkInputPass.js';

export const loginValidition = (username, pass) => {
   patcher(actSignError(''));
   // validation inputs
   // username:
   const usernameChecker = checkInputUsername(username);
   if (!usernameChecker.valid) {
      patcher(actSignError(usernameChecker.message));
      return false;
   }

   // pass;
   const passChecker = checkInputPass(pass);
   if (!passChecker.valid) {
      patcher(actSignError(passChecker.message));
      return false;
   }

   return true;
};
