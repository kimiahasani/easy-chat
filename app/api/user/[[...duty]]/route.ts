import { addUser } from '@/controller/users/addUser';
import { loginUser } from '@/controller/users/loginUser';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest, params: { params: { duty: string[] } }) => {
   const myParam = params.params.duty[0];

   if (myParam === 'add') return addUser(req);

   if (myParam === 'login') return loginUser(req);

   return new Response('Error to find page', { status: 404 });
};

export const DELETE = async (req: NextRequest, params: { params: { duty: string[] } }) => {
   console.log('delete params: ', params);

   return new Response('sdfsdf', {
      status: 400,
   });
};
