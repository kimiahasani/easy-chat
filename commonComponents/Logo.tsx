import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
   return (
      <Link href='./'>
         <section>
            <Image
               alt='easy chat logo'
               src='/images/logo.png'
               width={0}
               height={0}
               sizes='100%'
               style={{ width: '60%', height: 'auto' }}
               priority
            />
         </section>
      </Link>
   );
}
