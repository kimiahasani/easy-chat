'use client';
import { useState } from 'react';

export default function Menu() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className='top-4 right-4'>
         <div className='relative inline-block text-left'>
            <button
               onClick={toggleMenu}
               aria-label='Options'
               className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
               >
                  <path
                     fillRule='evenodd'
                     d='M2.5 5a1.5 1.5 0 100-3h15a1.5 1.5 0 100 3h-15zm0 7a1.5 1.5 0 100-3h15a1.5 1.5 0 100 3h-15zm0 7a1.5 1.5 0 100-3h15a1.5 1.5 0 100 3h-15z'
                     clipRule='evenodd'
                  />
               </svg>
            </button>

            {isOpen && (
               <div className='absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='py-1'>
                     <button className='group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500'
                           viewBox='0 0 20 20'
                           fill='currentColor'
                        >
                           <path d='M10 1C4.48 1 0 5.48 0 11c0 4.41 3.16 8.15 7.4 8.84-.11-.57-.2-1.45.04-2.08.21-.56 1.38-3.57 1.38-3.57s-.35-.71-.35-1.76c0-1.65.96-2.88 2.16-2.88.96 0 1.43.72 1.43 1.59 0 .97-.62 2.42-.95 3.77-.27 1.15.57 2.09 1.68 2.09 2.02 0 3.57-2.13 3.57-5.2 0-2.72-1.96-4.63-4.77-4.63-3.26 0-5.18 2.45-5.18 4.98 0 .99.37 2.06.83 2.64.09.11.1.2.07.31-.08.34-.28 1.07-.32 1.22-.05.21-.17.26-.39.16-1.45-.6-2.36-2.48-2.36-4 0-3.25 2.37-6.23 6.84-6.23 3.6 0 6.4 2.57 6.4 6.01 0 3.57-2.24 6.44-5.36 6.44-1.05 0-2.04-.55-2.38-1.17 0 0-.57 2.17-.71 2.67-.21.78-.63 1.56-1 2.17.91.27 1.87.42 2.87.42 5.52 0 10-4.48 10-10S15.52 1 10 1z' />
                        </svg>
                        About Us
                        <span className='ml-auto text-xs text-gray-500'></span>
                     </button>
                     <button className='group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500'
                           viewBox='0 0 24 24'
                           fill='currentColor'
                        >
                           <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
                        </svg>
                        Profile
                     </button>
                     <button className='group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500'
                           viewBox='0 0 24 24'
                           fill='currentColor'
                        >
                           <path d='M20 4h-3.17L15 3H9L7.17 4H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h16v14zM9.12 8.29c-.39-.39-1.02-.39-1.41 0l-2.83 2.83c-.39.39-.39 1.02 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41L9.12 8.29zm2.83 6.83l-2.83-2.83 2.83-2.83 2.83 2.83-2.83 2.83zm6.83-6.83c-.39-.39-1.02-.39-1.41 0l-2.83 2.83c-.39.39-.39 1.02 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41L18.78 8.29zm0 6.83l-2.83-2.83 2.83-2.83 2.83 2.83-2.83 2.83z' />
                        </svg>
                        Settings
                     </button>
                     <button className='group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500'
                           viewBox='0 0 20 20'
                           fill='currentColor'
                        >
                           <path
                              fillRule='evenodd'
                              d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11H9v4h2V7zm0 6H9v2h2v-2z'
                              clipRule='evenodd'
                           />
                        </svg>
                        Contact Us
                     </button>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}
