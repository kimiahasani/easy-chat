import { byGoogle } from '@/controller/users/ByGoogle';
import { addUser } from '@/controller/users/addUser';
import { loginUser } from '@/controller/users/loginUser';
import { searchUsernameInDB } from '@/controller/users/searchUser';
import { NextRequest } from 'next/server';

export const POST = async (req, params) => {
   const myParam = params.params.duty[0];

   if (myParam === 'add') return addUser(req);

   if (myParam === 'login') return loginUser(req);

   if (myParam === 'google') return byGoogle(req);

   if (myParam === 'search') return searchUsernameInDB(req);

   return new Response('Error to find page', { status: 404 });
};

export const DELETE = async (req, params) => {
   console.log('delete params: ', params);

   return new Response('sdfsdf', {
      status: 400,
   });
};
