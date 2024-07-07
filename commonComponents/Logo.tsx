import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
   return (
      <Link href='./'>
         <section>
            <Image alt='easy chat logo' src='/images/logo.png' width={88} height={62} />
         </section>
      </Link>
   );
}
