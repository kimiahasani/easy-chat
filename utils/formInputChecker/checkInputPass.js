'use client';

import { z } from 'zod';

const checkPassSchema = z
   .string()
   .min(5, 'Min password must be 5 character')
   .refine(
      (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/.test(password),
      'password must be include: Uppercase, Lowercase and Number'
   );

export const checkInputPass = (pass) => {
   let res;
   try {
      checkPassSchema.parse(pass);
      res = { message: 'password is valid', valid: true };
   } catch (err) {
      res = { message: err.errors[0].message, valid: false };
   }

   return res;
};
