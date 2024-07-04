import Image from 'next/image';

export default function Logo() {
   return (
      <section className='bg-orange-600 py-14 grid justify-center align-middle min-h-96'>
         <Image alt='easy chat logo' src='/images/logo.png' width={176} height={125} />
      </section>
   );
}
