import { BtnFillClasses } from '@/styles/commonClasses.js';
import Link from 'next/link';
// import { BtnFillClasses } from '../../styles/commonClasses';

export default function BtnContinue() {
   return (
      <Link href='/sign' className={BtnFillClasses}>
         Continue
         <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5 ml-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
         >
            <path
               strokeLinecap='round'
               strokeLinejoin='round'
               strokeWidth='2'
               d='M9 5l7 7-7 7'
            />
         </svg>
      </Link>
   );
}
