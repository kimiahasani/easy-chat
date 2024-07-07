

import { addUser } from '@/controller/users/addUsers';
import { NextRequest } from 'next/server';

export const Post = async(req:NextRequest) =>addUser(req);