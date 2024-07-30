'use client';

import { z } from 'zod';

const checkUsernameSchema = z
   .string()
   .min(4, 'Min password must be 4 character')
   .regex(/^[a-zA-Z]+$/, 'username must be write in English alphabet');

export const checkInputUsername = (username) => {
   let res;
   try {
      checkUsernameSchema.parse(username);
      res = { message: 'username is valid', valid: true };
   } catch (err) {
      res = { message: err.errors[0].message, valid: false };
   }
   return res;
};
