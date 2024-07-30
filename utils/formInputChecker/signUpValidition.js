'use client';

import { patcher } from '@/rtk/store';
import { actSignError } from '@/rtk/slices/signSlice';
import { checkInputUsername } from './checkInputUsername.js';
import { checkInputPass } from './checkInputPass';
import { checkInputEmail } from './checkInputEmail';

export const signUpValidition = (username, pass, confirmPass, email, confirmEmail) => {
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

   //email
   const emailChecker = checkInputEmail(email);
   if (!emailChecker.valid) {
      patcher(actSignError(emailChecker.message));
      return false;
   }

   // confirm pass
   if (pass !== confirmPass) {
      patcher(actSignError('Password and confirm password not equal'));
      return false;
   }

   // confirm email
   if (email !== confirmEmail) {
      patcher(actSignError('Email and confirm Email not equal'));
      return false;
   }

   return true;
};
