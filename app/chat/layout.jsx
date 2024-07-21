// 'use client';

import React from 'react';
// import { useSelector } from 'react-redux';

export default function LayoutChat({ children, chatcontent, chatlist }) {
   return (
      <main>
         <section>{children}</section>
         <section className=' flex'>
            <section className=''>{chatlist}</section>
            <section className='hidden md:block'>{chatcontent}</section>
         </section>
      </main>
   );
}
