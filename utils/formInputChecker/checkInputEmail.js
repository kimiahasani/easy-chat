'use client';

import { z } from 'zod';

const checkEmailSchema = z.string().email('Email address not valid');

export const checkInputEmail = (email) => {
   let res;
   try {
      checkEmailSchema.parse(email);
      res = { message: 'Email is valid', valid: true };
   } catch (err) {
      res = { message: err.errors[0].message, valid: false };
   }
   return res;
};
